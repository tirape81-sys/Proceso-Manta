// ==============================================================================
// LÓGICA DE CONEXIÓN CON SUPABASE REST API
// ==============================================================================

const STORAGE_URL_KEY = 'test_supabase_url';
const STORAGE_KEY_KEY = 'test_supabase_key';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Establecer fecha de hoy en el formulario
    document.getElementById('form-fecha').value = new Date().toISOString().split('T')[0];

    // 2. Cargar credenciales guardadas si existen
    const savedUrl = localStorage.getItem(STORAGE_URL_KEY);
    const savedKey = localStorage.getItem(STORAGE_KEY_KEY);

    if (savedUrl && savedKey) {
        document.getElementById('cfg-url').value = savedUrl;
        document.getElementById('cfg-key').value = savedKey;
        updateConnectionBadge(true);
        fetchRecords();
    }
});

function getCredentials() {
    let url = document.getElementById('cfg-url').value.trim();
    let key = document.getElementById('cfg-key').value.trim();

    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    return { url, key };
}

function updateConnectionBadge(connected) {
    const badge = document.getElementById('conn-status');
    if (connected) {
        badge.innerHTML = '<i class="fa-solid fa-circle" style="color: #10B981; font-size: 0.6rem;"></i> Conectado';
        badge.style.color = '#059669';
    } else {
        badge.innerHTML = '<i class="fa-solid fa-circle" style="color: #ef4444; font-size: 0.6rem;"></i> Error de Conexión';
        badge.style.color = '#dc2626';
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('status-toast');
    toast.className = `notification ${type}`;
    toast.innerHTML = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 4000);
}

// Probar conexión y guardar credenciales
async function testConnection() {
    const { url, key } = getCredentials();

    if (!url || !key) {
        showToast('Por favor ingresa tanto el Project URL como la Anon Key de Supabase.', 'error');
        return;
    }

    localStorage.setItem(STORAGE_URL_KEY, url);
    localStorage.setItem(STORAGE_KEY_KEY, key);

    showToast('Guardando credenciales y conectando con Supabase...', 'success');
    await fetchRecords();
}

// Cargar registros desde Supabase con cronómetro de velocidad
async function fetchRecords() {
    const { url, key } = getCredentials();
    if (!url || !key) return;

    const filterCentro = document.getElementById('filter-centro').value;
    const tbody = document.getElementById('records-tbody');

    // Construir URL REST de Supabase
    let endpoint = `${url}/rest/v1/antimicotico_centros?select=*&order=fecha.desc`;
    if (filterCentro !== 'TODOS') {
        endpoint += `&centro=eq.${filterCentro}`;
    }

    const t0 = performance.now();

    try {
        const res = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'apikey': key,
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json'
            }
        });

        const t1 = performance.now();
        const duration = Math.round(t1 - t0);

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Código ${res.status}: ${errText}`);
        }

        const data = await res.json();
        updateConnectionBadge(true);

        // Mostrar indicador de velocidad en milisegundos
        const speedIndicator = document.getElementById('speed-indicator');
        const speedMs = document.getElementById('speed-ms');
        speedMs.innerText = duration;
        speedIndicator.style.display = 'inline-flex';

        if (data.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">
                        No se encontraron registros para el filtro seleccionado (${filterCentro}).
                    </td>
                </tr>
            `;
            return;
        }

        // Renderizar filas
        tbody.innerHTML = data.map(r => {
            const pillClass = r.centro === 'MANTA' ? 'pill-manta' : 'pill-balzar';
            return `
                <tr>
                    <td><span class="center-pill ${pillClass}">${r.centro}</span></td>
                    <td><b>${r.fecha}</b></td>
                    <td>${Number(r.consumo_real || 0).toFixed(1)} kg</td>
                    <td>${Number(r.total_tm || 0).toFixed(1)} TM</td>
                    <td>${r.bodega || '-'}</td>
                    <td>${r.realizado_por || '-'}</td>
                    <td style="color: var(--text-muted);">${r.observacion || '-'}</td>
                </tr>
            `;
        }).join('');

    } catch (err) {
        console.error("Error al consultar Supabase:", err);
        updateConnectionBadge(false);
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: #dc2626; padding: 24px;">
                    <i class="fa-solid fa-triangle-exclamation"></i> Error al conectar con Supabase: ${err.message}
                </td>
            </tr>
        `;
        showToast('Error de conexión con Supabase. Revisa las credenciales o que hayas ejecutado el script SQL.', 'error');
    }
}

// Guardar nuevo registro en Supabase
async function saveRecord() {
    const { url, key } = getCredentials();
    if (!url || !key) {
        showToast('Debes configurar el URL y la Key de Supabase primero.', 'error');
        return;
    }

    const centro = document.getElementById('form-centro').value;
    const fecha = document.getElementById('form-fecha').value;
    const consumo = parseFloat(document.getElementById('form-consumo').value) || 0;
    const totalTm = parseFloat(document.getElementById('form-total-tm').value) || 0;
    const operador = document.getElementById('form-operador').value.trim();
    const obs = document.getElementById('form-obs').value.trim();

    if (!fecha) {
        showToast('Selecciona una fecha válida.', 'error');
        return;
    }

    const payload = {
        centro: centro,
        fecha: fecha,
        consumo_real: consumo,
        total_tm: totalTm,
        bodega: 'BODEGA 4',
        realizado_por: operador,
        observacion: obs
    };

    const endpoint = `${url}/rest/v1/antimicotico_centros`;
    const t0 = performance.now();

    try {
        // Enviar vía POST con Prefer: resolution=merge-duplicates para upsert automático si la fecha ya existe
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'apikey': key,
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json',
                'Prefer': 'resolution=merge-duplicates'
            },
            body: JSON.stringify(payload)
        });

        const t1 = performance.now();
        const duration = Math.round(t1 - t0);

        if (!res.ok) {
            const errData = await res.text();
            throw new Error(`Error ${res.status}: ${errData}`);
        }

        showToast(`¡Registro guardado con éxito en Supabase en solo ${duration} ms!`, 'success');
        await fetchRecords();

    } catch (err) {
        console.error("Error al guardar:", err);
        showToast(`Fallo al guardar: ${err.message}`, 'error');
    }
}

// Cargar datos de prueba directamente
function loadSampleData() {
    fetchRecords();
}
