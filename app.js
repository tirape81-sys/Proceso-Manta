const LOGO_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAW4AAACKCAMAAAC93lCdAAAAkFBMVEX8Hx/////8AAD8HBz8Jyf/9/f8UFD+wMD8CQn9paX+1tb+xcX8GBj9k5P8ExP/7e3/4uL9n5/+sLD9mJj+trb+q6v8R0f+ysr9hIT/+vr9i4v/5+f+0ND+ubn+2Nj9bW38ODj9Z2f8MDD9cXH9eHj9Xl78Vlb8LS3/5OT9Y2P8QED9j4/9fX38RUX8TU39dnayuBYmAAANqklEQVR4nO2d53rjKhCGEXLBtozce+9xnOT+7+4IVWZQdSTtPmf5fpyzsTCCV2iAYcDE0KpPNvnTJfiXtOEad31aUKJx16UJZ6Shcdej3oGaROOuR70ntQjRuGvR9O7B1rir12BBA9gad8VqTp+UkUgad3Vabq9Sw9a4q5Q9cVhzgqRxV6HdcBbDWuOuQPbkTCmzYlhr3CVrPXk1nGZtxrPWuMvTsts5slTUGnc5Wu5GrwPNRK1x/1r2fHh2SSfYao27JD16nZcz/MhPWuN+R8vHfLr6OBUGrXEXkr3rjT7P3wIzZTmstMZdXEt7N58MV/tZw8dsvctZ445V0x5059vRcHW5+ozLoPyP4142bXv9GOw28157O+qM+6vL/qN1IIzSEHF5jPPh3o1Wx9mh8T+R6YjziKcsxhy63LLMCgDnwm1Pr95bZJn/L1XN8x3cvTjfoVYJisG9vWvWVUnB3T3Q4qN3rZzCuC8adpWCuAeEZX9F630B3BPdtCuWjHtM/3Rp/veScH9q2pUrwq3bdg0KcU807RoU4B5o2nUowN3QY5I65OO+6PF2LfJwd7UpqUce7qc2JfXIxd3WjbsmubhPunHXJIF7rht3XRK4P/RqQl1ycDd1465NDm49fa9PDu6jtiW1ycHN/nQ0wD+kBnloW1KfGkTPcWpUgwy1d6o+NchC95T1qUH2qbh5bARjJdGh/4Ia5JrmMOGvjqrxYv/Mt9FKC6lBWmm4aS8mYtPVuv3iOpawqLJwt5NwC22OGngx/Qq3YTxuVJuUAvolbsPY6kC3Avo1bmP9xvbCf1a/x23YeoiSWyXg1iFB+VUGbqOjeedUKbiNgzbf+VQO7p5u3vlUBHc7cJocXhvEu1Fnb5lnf+QbeygLbLx8e4dmEdxhG7Y4ndkAd79EL66ZNlO1hLOm0RCes8RyczfNiQhvWi4qpuuIY+R+97Zppw213LTW/W7Sd/aevoWbiCoB3jtxSRRVPWLMDHdGc/w5i1yMYpM09zZR8xf1byH2LYPvWHTWGSzFDZe7ziy2ug6G48hLY9i9BZXNnMXUYoj7sP10Y3tfMZb2ZnrmNKH5OLlftg8v5bp9lpP59Ux/BO/iJvwLNG/nEuuPRtN+C5TUZLSxH3dGQpPI1SuaCLku3AvTznC8ep2P19v1eF4MtwPDWIgs+I9zcXiUedHZTr7n4KZ2GZwOm6BgneAtcEhdP8UNoYOf0Qu2jKL5LGKBUzICyZqLwIdhUXbsT51Kpi+0v42bUFDKb4tQj4W9iNwojPYfUZoAt2MQXj1ojJBEDnTq/nMZ8iJ0jNONsMeG7ps4jX1yb2uxgJS8WmjRhfIFT8u+Yq1M+qkk63olYPcA1DjVrL6Pmy3k2744od2gCIHFpCCJQf1CP7fxNYz06ZSZdgJeB+8x+fyBdrB9xyUxliIE0jqFWCXc7DBILoT9DTM3acxrYKwFb34N/07vxd7HbX3Ld3Ueaojb8Bf30SjSQ8NpJmzD2FAJtx8yip5dXJnoJDa3tcgtepsi3HSfXoyXnLlJd7GJnBKYjejPqnDL9zCMKZVwG1uq0jaG7oethJcXyIa4BS/rFJ90FVWPDhOyG1L5VQxx00tWOVZyxzFPSHTk8mOuDDfY3j0BuI2ZY8qxobvy7PbkqwlxC6aJ60rhsqn0RmNR2Q4EuFPShzqG8GLstq8BpVITqsyYHOR7Itxbaiond4jBy0d2DYXWCPeaJjVuyWFDk3vflwzEx21ayxwlCR4mfJehvuSqVoUbNg6Eu0kpHDK59jiZGdIE4TZO4C8ov1Ssn5zfnEp/+LiTl2FlBa9CmjdjKDe8qnDD6kHb7bQKuYKuRGeaMg4AEnuFAOB9ylfP/sAlpVNoqritVr6ieN631IaykS9WhRsOi/oM4j4ccaFaFnvlq6G3Ox/gXihPL9LWG/Gk9ntUMhwe7thRXYy8cOzYEWYgm0t/VITbgsbsh0PcLfzyL2macQWlP3s1lHMYP1PSJ+Cze5NR238p7uvocxe3aovt7Xix6G9xGb3NBuqrM2hPJj1/Die3hYpwo3GR884B3Btc7DnlR1zkdXs6Hc2Dmti3/mg7Gd98twPAvXbvtptMp1vVqrjdGW7+o5PvkFmJ/Nu4q2Rohmp/uOfbMUo/UMkFH8XyjC0vc+IWUu6mKsFtoa5rKfq2rpGiPsN9U/vgA7n684fu+CT5uJTOcex7tCx84dv5CocjzOUsdJUwPD1xcaMPN5FriaOGJPgxOKJfm4HzwKQn9HTKwz2PwgRbqArzeNyD+XYyac+766YzEkftbx/6JHg0P9lFXieM+xlV8Qav/HAl9ZfsqqNrcE3gNmFhbNn3gtKLrgFaqqbs9uTIKpWH2ylWtz3tDDuqf+nFVdzdoxzHaaEX8idh9j0Nh9EQ4FWqBv0Bl4QDEQIZwiHrDCQXuC34xG7AjcdBSV2HAjDdR0AUORfKxJ0o9/2EuPvI9cvAtGwDZ6hSfQKTBXHD9HBYKGoIu2HkKIQlE7jZSv4Eb+AA2Q+oMyOSU69xavAs6sDdUXFvsS8a+o/QXWXfqn9sEMR9hk5q0KKEzxMYB7wvFyZv4zkUehnEw3gMQjmZWbO01HBCVwPupduaIG5l9RJcxns5wTTibqm44XoWnHU4uKHLAFcZ+htc3KBeyj5ecDKvY12OcuorSg1H/DXgPjOFp7rBikoLDerSvfxGTtRxN3488rRF4IZAlRUV0PZd3GD0kXUmAASKGxJs+9XjHvlvv4xbDYUA1lUJBAJfVnEr9lLOTOAGVZ7hKgHz2laGGll7MaAxwkU3zVpxB1YaEFO3IoMqf+JCgUG5u6EC4MZxcem4leNZQPK2MmjNWq/PwM3qxB05QOUqjFTc8vu/UHDLN3LX+/LjHuLO7Csbd5mtW3aZVIzbvkbzkgzccutepbbureKiysQNbDfuzOCj/q3txg8H3rtK3PZKGlxn4UaE0FW5uW0K44YeJ/zuwPaXY2RC4Hn20EOAewYO1kzKw72G85j16AaCMbJwy3MHdVQu89sVxw3sJ745BJI97iZMEsceKvwwoberPNxtSg/HxXA6Gk2Hi5uFI4aycMvvLx4nQh/GoDBuaKrs1ImIOqtUcpc9Qjv87uBBF/R2leoRtPwINMbU7iULN/DQo8ErBysP7+AG03povE1gul3caFk402cCUhM45QKmu7LVHDVtOm5IdAqvwxbSfQM38O6ugdMELcW4HkFgzWF6E0zIPI8g8MigVS3kKvpLcKPlvpPcoFDER7s4buSR7kURZyaOB/Jyh6sUKf5u1yMDXfXj6OlYeAn8b8GNmogd/e6A4sAeFscNe0PnC0+na+HC9nEcWqU+TFGcvWsinf/skXdZGCa89tNruL8p5OR+wmt2fw9u2A6WL/enrkRngKOfXJ9HMdzK4pmxG16ut31fDW9wcVvK4mez1+n3Oz1lUdJN/Y0/3YzPt9t5rK6o/DW4rS9UsuZkdd7/jFUgqs8kB+60lfWnfNFfiY+P+FPUS1galosrX0zFbR7qw120hsVws9iIzQAIHM+KHNSF6njdPG8wDlICZZMX21JxW7caceeNpGmp/u5s3GZKJMoGLG0EUVS5Hr5/9rNqeyJ1QLebipvva8RN8sQah+tkBXGrK/eRLqBx+rjzRdAFWxhTbNUTVDwVN1vVidvMFdjjzyKK4kaTGUk2BXkFYX/sJyG9pEVw3+TmvQHhtem46bRO3MS6Z0edBjPCorgJOyfkeOZg7BPFd6cEcYKcleLIOlhgVJ6Oe14rbsJPWdH0HyGMoriT+jMHLxg3S7sX0rpXgU6+a4Ktd9IASOm47XpxE4slbQJw9ThF8euFcce7i7vYIyXtzcHbQ4GacGObGRuEK5wRoEtKw21aRom45cefhNsp9Tmxis2FtNsL4FYiQeKd5+reNDewH44S4c6zzwTzthzjLZJmzNN0gzRo3hhBvjfILRX3dtkMtMw4T5NupLTT5LScnmO7+fkPcJ+zoRFlt8O4H9G95L119Il88kdvkP0j5QV97fH7KrsvGlMB+vGAqb6oV1KpMMoqrPz9kUGOqStHFEZcpCp3Wk75ZbSTrPh63vlQNtyytOzka3IFLfrsBC/9enIN8uQpeTnXPoa9gV+c5qA3PLKEXcOc3kbBnGYwDcM+WUJhlELbBrn8icPSvF3oh1nr1pod3H+XduSPCAU+fd9az8wd06g0wqfl/z+5LCL3Q+v2LaJ3i54qIrwYpMzTA4re31P5p0WYIts3vpavJO+WWfRGRB9OX5eEK4voX4SqSe56PtG/dFGT3IEy0b/AVY+8JQpS6kk7WonyHFkEH1KhVYm4tx5Laj6361+VH01BYmK2tEoX9Z1kRN0aoFW6wj3WYlOLEv6rVbJCb6nArZt3xYpWk0jottWqStKpOd4OOf275RWKS2v+Hm499q5OFmli3HAVVKtEWWChL9hue9Wjk0pkcXB+RLi7+aB/AqcC8QZcCA9xN4nmXbpoCy30R3v3m3fNu1wpGydk3MbyS/eXZYrHHFUITqa46J/UKk0WPcYE6MGzQ7f6N+PKkUkbsdF56KjW5of+DbPfy6Q84ZxH5WTczUED/504vSfuLVFwG8a8lfMXObQUiYCsfUqQbwxuw1j375TqX+orKPHDJey8Td0xEItbEJ8sZrqJF1HjuppkHuH8Hztz5BHTsSC8AAAAAElFTkSuQmCC";

localStorage.removeItem('balzar_app_data');
// Global State
let appData = { aries: [], calidad: [], contramuestra: [], antimicotico: [], antimicotico_ingresos: [], seguimiento_fotografico: [] };
let excelSyncParsedData = null;
let currentSyncMode = 'recepciones';
let lastLoadedSyncWorkbook = null;
let flatpickrFotoInstance = null;
let appWorkbook = null; // Store workbook object globally
let activeTab = 'dashboard';
let charts = {};
let selectedSampleTickets = [];
let pendingTab = null; // Track which tab was clicked before file upload

// Web Login Security
window.checkLoginPassword = function() {
    const passInput = document.getElementById('login-pass');
    const pass = passInput ? passInput.value.trim() : '';
    if (pass === "Calidad2026") {
        try {
            sessionStorage.setItem('isCalidadAuthorized', 'true');
        } catch(e) {
            console.warn('SessionStorage no disponible:', e);
        }
        const overlay = document.getElementById('login-overlay');
        if (overlay) overlay.style.display = 'none';
    } else {
        const errorEl = document.getElementById('login-error');
        if (errorEl) errorEl.style.display = 'block';
        if (passInput) passInput.value = '';
    }
};

// Initialize Drag & Drop Events on Load
document.addEventListener('DOMContentLoaded', () => {
    // Verify security login session
    try {
        if (sessionStorage.getItem('isCalidadAuthorized') === 'true') {
            const overlay = document.getElementById('login-overlay');
            if (overlay) overlay.style.display = 'none';
        }
    } catch(e) {}
    setupDragAndDrop();
    loadCachedData();
    tryAutoLoadExcel();
});

// Load cached data from localStorage if available
function loadCachedData() {
    try {
        const cached = null; // localStorage disabled by user request
        if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed && parsed.aries && parsed.calidad && parsed.contramuestra) {
                appData.aries = parsed.aries;
                appData.calidad = parsed.calidad;
                appData.contramuestra = parsed.contramuestra;
                appData.antimicotico = parsed.antimicotico || [];
                appData.antimicotico_ingresos = parsed.antimicotico_ingresos || [];
                appWorkbook = { isGoogleSheet: true };
                
                // Initialize UI immediately with cached data
                initializeDashboard();
                initializeContramuestraControls();
                
                // Hide loading screen or make it look like sync is done
                const uploadScreen = document.getElementById('file-upload-screen');
                if (uploadScreen) uploadScreen.classList.add('hidden');
                
                const appContainer = document.getElementById('app-container');
                if (appContainer) appContainer.classList.add('visible');
                
                console.log("Datos cargados desde el caché local (localStorage) al inicio.");
                updateSyncStatus('online', 'Sincronizado (Local)');
            }
        }
    } catch (e) {
        console.warn("No se pudo leer el caché local:", e);
    }
}

function updateSyncStatus(status, text) {
    const pill = document.getElementById('sync-status-pill');
    if (!pill) return;
    
    pill.className = `sync-status-pill ${status}`;
    pill.innerHTML = `<i class="fa-solid fa-circle"></i> <span>${text}</span>`;
}

// Supabase Configuration
const SUPABASE_URL = 'https://jwjqatzyxifbtfhcvprx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3anFhdHp5eGlmYnRmaGN2cHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNDcwOTcsImV4cCI6MjEwNDkyMzA5N30.YDgEZU9hdJRuSFlEkZM6e5sKOpXd-3VNL4MvvB4skm8';

const SUPABASE_HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

// Cargar datos automáticamente desde Supabase (PostgreSQL Cloud)
async function tryAutoLoadExcel() {
    console.log(`Cargando datos desde Supabase: ${SUPABASE_URL}`);
    updateSyncStatus('syncing', 'Sincronizando...');
    const t0 = performance.now();
    
    try {
        // Carga simultánea y ultra rápida en paralelo
        const [resRecep, resCalid, resCm, resAnti, resIngr, resFoto] = await Promise.all([
            fetch(`${SUPABASE_URL}/rest/v1/recepciones?select=*&order=fechaentra.desc`, { headers: SUPABASE_HEADERS }),
            fetch(`${SUPABASE_URL}/rest/v1/calidad?select=*&order=fechaentra.desc`, { headers: SUPABASE_HEADERS }),
            fetch(`${SUPABASE_URL}/rest/v1/contramuestras?select=*&order=fecha.desc`, { headers: SUPABASE_HEADERS }),
            fetch(`${SUPABASE_URL}/rest/v1/antimicotico?select=*&order=fecha.desc`, { headers: SUPABASE_HEADERS }),
            fetch(`${SUPABASE_URL}/rest/v1/antimicotico_ingresos?select=*&order=fecha.desc`, { headers: SUPABASE_HEADERS }),
            fetch(`${SUPABASE_URL}/rest/v1/seguimiento_fotografico?select=*&order=fecha.desc`, { headers: SUPABASE_HEADERS }).catch(e => ({ ok: false }))
        ]);

        if (!resRecep.ok || !resCalid.ok || !resCm.ok) {
            throw new Error("Respuesta no satisfactoria de Supabase");
        }

        const [dataRecep, dataCalid, dataCm, dataAnti, dataIngr] = await Promise.all([
            resRecep.json(),
            resCalid.json(),
            resCm.json(),
            resAnti.json(),
            resIngr.json()
        ]);

        if (resFoto && resFoto.ok) {
            try {
                appData.seguimiento_fotografico = await resFoto.json();
            } catch(e) {
                appData.seguimiento_fotografico = [];
            }
        } else {
            appData.seguimiento_fotografico = [];
        }

        // 1. Mapear recepciones (Aries)
        appData.aries = dataRecep.map(r => {
            const obj = {};
            for (let k in r) {
                obj[k.toUpperCase()] = r[k];
                obj[k] = r[k];
            }
            return obj;
        });

        // 2. Mapear calidad
        appData.calidad = dataCalid.map(r => {
            const obj = {};
            for (let k in r) {
                obj[k.toUpperCase()] = r[k];
                obj[k] = r[k];
            }
            return obj;
        });

        // 3. Mapear contramuestras
        appData.contramuestra = dataCm.map(r => ({
            'FECHA': r.fecha,
            'PLACA': r.placa,
            'TICKET No.': r.ticket_no,
            'FECHA DE COMPRA': r.fecha_compra,
            'ARTICULO': r.articulo,
            'KILOS': r.kilos,
            'ARIES_% HUM 1': r.hum1_aries,
            'ARIES_%HUM2': r.hum2_aries,
            'ARIES_%HUM3': r.hum3_aries,
            'ARIES_%IMP': r.imp_aries,
            'ARIES_PODRIDOS': r.podridos_aries,
            'ARIES_PARTIDOS': r.partidos_aries,
            'ARIES_HONGOS': r.hongos_aries,
            'ARIES_INSECTOS': r.insectos_aries,
            'ARIES_CALOR': r.calor_aries,
            'CALID_%HUM1': r.hum1_asist,
            'CALID_%HUM2': r.hum2_asist,
            'CALID_%HUM3': r.hum3_asist,
            'CALID_%IMP': r.imp_asist,
            'CALID_PODRIDOS': r.podridos_asist,
            'CALID_PARTIDOS': r.partidos_asist,
            'CALID_HONGOS': r.hongos_asist,
            'CALID_INSECTOS': r.insectos_asist,
            'CALID_CALOR': r.calor_asist,
            'CALID_PRO. %HUMEDAD': r.prom_humedad_asist
        }));

        // 4. Mapear antimicotico
        appData.antimicotico = dataAnti.map(r => {
            const obj = {};
            for (let k in r) {
                obj[k.toUpperCase()] = r[k];
                obj[k] = r[k];
            }
            obj['#_DE_BODEGA'] = r.bodega;
            obj['BODEGA'] = r.bodega;
            obj['REALIZADO_POR'] = r.realizado_por;
            obj['OBSERVACION'] = r.observacion;
            return obj;
        });

        // 5. Mapear antimicotico ingresos
        appData.antimicotico_ingresos = dataIngr.map(r => {
            const obj = {};
            for (let k in r) {
                obj[k.toUpperCase()] = r[k];
                obj[k] = r[k];
            }
            return obj;
        });

        appWorkbook = { isSupabase: true };
        
        initializeDashboard();
        initializeContramuestraControls();
        initializeAntimicoticoControls();

        if (activeTab === 'historial') {
            const dateFilter = document.getElementById('history-date-filter') ? document.getElementById('history-date-filter').value : null;
            renderHistoryTable(dateFilter || null);
        } else if (activeTab === 'antimicotico') {
            renderAntimicoticoHistoryTable();
        } else if (activeTab === 'fotografico') {
            initializeFotograficoControls();
            renderFotograficoTrendChart();
            renderFotograficoTable();
        }
        updateFotograficoKPIs();

        const uploadScreen = document.getElementById('file-upload-screen');
        if (uploadScreen) uploadScreen.classList.add('hidden');

        if (pendingTab) {
            showAppView(pendingTab);
            pendingTab = null;
        }

        const t1 = performance.now();
        const duration = Math.round(t1 - t0);
        updateSyncStatus('online', `Supabase (${duration}ms)`);
        console.log(`Datos cargados desde Supabase en ${duration} ms.`);
        showToast(`Datos sincronizados con Supabase en ${duration} ms`, 'success');

    } catch (err) {
        console.error("Fallo al conectar con Supabase:", err);
        updateSyncStatus('offline', 'Error Conexión');
        showToast('Error al conectar con Supabase: ' + err.message, 'danger');
    }
}

function rowsToObjects(rows) {
    if (!rows || rows.length === 0) return [];
    const headers = rows[0];
    const list = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length === 0 || row[0] === null || row[0] === '') continue;
        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = row[idx] !== undefined ? row[idx] : null;
        });
        list.push(obj);
    }
    return list;
}

// Setup Drag & Drop for File Upload
function setupDragAndDrop() {
    const dropZone = document.getElementById('drop-zone');
    if (!dropZone) return;

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        }, false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            processExcelFile(files[0]);
        }
    }, false);
}

// File Selection Handler
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        processExcelFile(file);
    }
}

// Read Excel file as ArrayBuffer and parse with SheetJS
function processExcelFile(file) {
    if (!file.name.endsWith('.xlsx')) {
        showToast('Por favor cargue un archivo con extensión .xlsx (Excel)', 'danger');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array', cellDates: true, cellStyles: true, cellFormulas: true});
            
            appWorkbook = workbook;
            fetchDataFromWorkbook(workbook);
            
            // Hide upload screen
            document.getElementById('file-upload-screen').classList.add('hidden');
            
            // Go directly to the pending tab, or stay on landing screen
            if (pendingTab) {
                showAppView(pendingTab);
                pendingTab = null;
            } else {
                document.getElementById('landing-screen').classList.remove('hidden');
            }
            
            showToast('Archivo Excel procesado con éxito', 'success');
        } catch (err) {
            console.error("Error parsing excel:", err);
            showToast('Error al leer el archivo Excel: ' + err.message, 'danger');
        }
    };
    reader.readAsArrayBuffer(file);
}

// Extract data from SheetJS workbook and populate appData (supporting Google Sheet names & Local Excel names)
function fetchDataFromWorkbook(workbook) {
    // Support Google Sheet names ('Ingreso Manta', 'Ingreso Balzar', 'Calidad', 'Registro Contramuestra') or Local names ('Aries', 'Base de Calidad', 'Base Contramuestra')
    const ariesSheet = workbook.Sheets['Ingreso Manta'] || workbook.Sheets['Ingreso Balzar'] || workbook.Sheets['Aries'];
    const calidadSheet = workbook.Sheets['Calidad'] || workbook.Sheets['Base de Calidad'];
    const cmSheet = workbook.Sheets['Registro Contramuestra'] || workbook.Sheets['Base Contramuestra'];

    if (!ariesSheet || !calidadSheet || !cmSheet) {
        throw new Error("El archivo no contiene las hojas requeridas.");
    }

    // 1. Convert Aries & Calidad sheets
    appData.aries = XLSX.utils.sheet_to_json(ariesSheet, {defval: null});
    appData.calidad = XLSX.utils.sheet_to_json(calidadSheet, {defval: null});

    // 2. Parse Contramuestras worksheet with dynamic layout handling
    const cmRows = XLSX.utils.sheet_to_json(cmSheet, {header: 1, defval: null});
    appData.contramuestra = [];
    
    if (cmRows.length > 0) {
        // Detect if sheet has the clean single-header row of Google Sheets, or the double-header of Libro1
        const firstRow = cmRows[0];
        const isSingleHeader = firstRow && (String(firstRow[0]).trim() === 'FECHA' || String(firstRow[2]).trim() === 'TICKET No.');
        
        let headerRow, dataStartIdx;
        let columns = [];
        
        if (isSingleHeader) {
            headerRow = cmRows[0];
            dataStartIdx = 1;
            headerRow.forEach((colName, idx) => {
                const name = String(colName || '').trim();
                // Map Google Sheet columns to standardized properties
                if (name === 'FECHA') columns.push('FECHA');
                else if (name === 'PLACA') columns.push('PLACA');
                else if (name === 'TICKET No.') columns.push('TICKET No.');
                else if (name === 'FECHA DE COMPRA') columns.push('FECHA DE COMPRA');
                else if (name === 'ARTICULO') columns.push('ARTICULO');
                else if (name === 'KILOS') columns.push('KILOS');
                
                // Aries parameters
                else if (name === '% HUM 1 Aries') columns.push('ARIES_% HUM 1');
                else if (name === '%HUM2 Aries') columns.push('ARIES_%HUM2');
                else if (name === '%HUM3 Aries') columns.push('ARIES_%HUM3');
                else if (name === '%IMP Aries') columns.push('ARIES_%IMP');
                else if (name === 'PODRIDOS Aries') columns.push('ARIES_PODRIDOS');
                else if (name === 'PARTIDOS Aries') columns.push('ARIES_PARTIDOS');
                else if (name === 'HONGOS Aries') columns.push('ARIES_HONGOS');
                else if (name === 'INSECTOS Aries') columns.push('ARIES_INSECTOS');
                else if (name === 'CALOR Aries') columns.push('ARIES_CALOR');
                
                // Calidad parameters
                else if (name === '%HUM1 Asistente') columns.push('CALID_%HUM1');
                else if (name === '%HUM2 Asist') columns.push('CALID_%HUM2');
                else if (name === '%HUM3 Asist') columns.push('CALID_%HUM3');
                else if (name === '%IMP Asist') columns.push('CALID_%IMP');
                else if (name === 'PODRIDOS Asist') columns.push('CALID_PODRIDOS');
                else if (name === 'PARTIDOS  Asist') columns.push('CALID_PARTIDOS');
                else if (name === 'HONGOS Asit') columns.push('CALID_HONGOS');
                else if (name === 'INSECTOS Asit') columns.push('CALID_INSECTOS');
                else if (name === 'CALOR Asit') columns.push('CALID_CALOR');
                else if (name === 'PRO. %HUMEDAD Asistente') columns.push('CALID_PRO. %HUMEDAD');
                else columns.push(name);
            });
        } else {
            // Double header layout of original Libro1
            headerRow = cmRows[1];
            dataStartIdx = 2;
            headerRow.forEach((colName, idx) => {
                const name = String(colName || '').trim();
                if (idx < 6) {
                    columns.push(name);
                } else if (idx < 15) {
                    columns.push(`ARIES_${name}`);
                } else {
                    columns.push(`CALID_${name}`);
                }
            });
        }

        // Parse rows
        for (let i = dataStartIdx; i < cmRows.length; i++) {
            const row = cmRows[i];
            if (!row || row.length === 0 || row[0] === null) continue;
            
            const obj = {};
            columns.forEach((h, hIdx) => {
                obj[h] = row[hIdx] !== undefined ? row[hIdx] : null;
            });
            appData.contramuestra.push(obj);
        }
    }

    // 3. Convertir hojas de antimicotico si existen
    const antiSheet = workbook.Sheets['Antimicotico'];
    if (antiSheet) {
        appData.antimicotico = XLSX.utils.sheet_to_json(antiSheet, {defval: null});
    } else {
        appData.antimicotico = [];
    }

    const antiIngSheet = workbook.Sheets['Antimicotico_Ingresos'];
    if (antiIngSheet) {
        appData.antimicotico_ingresos = XLSX.utils.sheet_to_json(antiIngSheet, {defval: null});
    } else {
        appData.antimicotico_ingresos = [];
    }

    // 4. Initialize Dashboard metrics and charts
    initializeDashboard();
    initializeContramuestraControls();
}

// Show Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toast-icon');
    const msgSpan = document.getElementById('toast-message');

    toast.style.display = 'flex';
    msgSpan.innerText = message;
    
    if (type === 'success') {
        toast.style.borderLeft = '4px solid #4BAF4F';
        icon.className = 'fa-solid fa-circle-check';
        icon.style.color = '#4BAF4F';
    } else if (type === 'danger') {
        toast.style.borderLeft = '4px solid #E30613';
        icon.className = 'fa-solid fa-circle-exclamation';
        icon.style.color = '#E30613';
    } else {
        toast.style.borderLeft = '4px solid #F59E0B';
        icon.className = 'fa-solid fa-circle-info';
        icon.style.color = '#F59E0B';
    }

    // Hide toast after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
            toast.style.opacity = '1';
        }, 300);
    }, 4000);
}

// Navigation between screens
function showAppView(tab) {
    const landing = document.getElementById('landing-screen');
    const app = document.getElementById('app-container');
    
    if (landing) landing.classList.add('hidden');
    if (app) app.classList.add('visible');
    
    switchTab(tab);
}

function showLandingScreen() {
    const landing = document.getElementById('landing-screen');
    const app = document.getElementById('app-container');
    
    app.classList.remove('visible');
    landing.classList.remove('hidden');
}

function hideUploadScreen() {
    document.getElementById('file-upload-screen').classList.add('hidden');
    pendingTab = null;
}

function switchTab(tab) {
    activeTab = tab;
    
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(`${tab}-view`).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`nav-btn-${tab}`).classList.add('active');
    
    if (tab === 'dashboard') {
        setTimeout(() => {
            if (charts.volume) charts.volume.resize();
            if (charts.status) charts.status.resize();
        }, 100);
    } else if (tab === 'historial') {
        initializeHistoryCalendarControls();
        renderHistoryTable(null);
    } else if (tab === 'antimicotico') {
        initializeAntimicoticoControls();
        renderAntimicoticoHistoryTable();
    } else if (tab === 'fotografico') {
        initializeFotograficoControls();
        renderFotograficoTrendChart();
        renderFotograficoTable();
        setTimeout(() => {
            if (charts.fotoTrend) charts.fotoTrend.resize();
        }, 100);
    }
}

function initializeHistoryCalendarControls() {
    if (!appData.contramuestra || appData.contramuestra.length === 0) return;
    
    populateHistoryMonthFilter();
    
    // Obtener fechas únicas que tienen contramuestras registradas
    const uniqueRegDates = [...new Set(appData.contramuestra.map(row => formatDateReadable(row['FECHA'])))].filter(d => d && d !== '-');
    uniqueRegDates.sort((a, b) => new Date(b) - new Date(a));
    
    if (window.flatpickrHistoryInstance) {
        window.flatpickrHistoryInstance.destroy();
    }
    
    const filterInput = document.getElementById('history-date-filter');
    const clearBtn = document.getElementById('btn-clear-history-filter');
    
    if (!filterInput) return;
    
    if (uniqueRegDates.length === 0) {
        filterInput.placeholder = 'Sin registros';
        filterInput.disabled = true;
        return;
    }
    
    filterInput.disabled = false;
    filterInput.value = ''; // Vacío por defecto para mostrar las últimas 10
    
    window.flatpickrHistoryInstance = flatpickr("#history-date-filter", {
        enable: uniqueRegDates.map(d => new Date(d + 'T12:00:00')),
        dateFormat: "Y-m-d",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            renderHistoryTable(dateStr, null);
        },
        onOpen: function(selectedDates, dateStr, instance) {
            if (uniqueRegDates.length > 0 && selectedDates.length === 0) {
                // Forzar que el calendario se abra mostrando el mes del registro más reciente
                instance.jumpToDate(new Date(uniqueRegDates[0] + 'T12:00:00'));
            }
        }
    });
    
    if (clearBtn) {
        clearBtn.onclick = function() {
            filterInput.value = '';
            if (window.flatpickrHistoryInstance) {
                window.flatpickrHistoryInstance.clear();
            }
            const monthSelect = document.getElementById('history-month-filter');
            if (monthSelect) {
                renderHistoryTable(null, monthSelect.value);
            } else {
                renderHistoryTable(null, 'recent');
            }
        };
    }
}

function populateHistoryMonthFilter() {
    const select = document.getElementById('history-month-filter');
    if (!select) return;
    
    const prevSelection = select.value;
    const monthsSet = new Set();
    
    appData.contramuestra.forEach(row => {
        const dateStr = formatDateReadable(row['FECHA']);
        if (dateStr && dateStr !== '-') {
            const parts = dateStr.split('-');
            if (parts.length >= 2) {
                monthsSet.add(`${parts[0]}-${parts[1]}`);
            }
        }
    });
    
    const sortedMonths = Array.from(monthsSet).sort((a, b) => new Date(b + '-01') - new Date(a + '-01'));
    
    select.innerHTML = `
        <option value="recent">Últimos 10 registros</option>
        <option value="all">Todos los registros</option>
    `;
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    sortedMonths.forEach(ym => {
        const parts = ym.split('-');
        const year = parts[0];
        const monthNum = parseInt(parts[1], 10);
        const label = `${monthNames[monthNum - 1]} ${year}`;
        
        const opt = document.createElement('option');
        opt.value = ym;
        opt.innerText = label;
        select.appendChild(opt);
    });
    
    if (prevSelection && Array.from(select.options).some(o => o.value === prevSelection)) {
        select.value = prevSelection;
    } else {
        select.value = 'recent';
    }
}

function filterHistoryByMonth() {
    const monthSelect = document.getElementById('history-month-filter');
    const filterInput = document.getElementById('history-date-filter');
    
    if (filterInput && filterInput.value) {
        filterInput.value = '';
        if (window.flatpickrHistoryInstance) {
            window.flatpickrHistoryInstance.clear();
        }
    }
    
    if (monthSelect) {
        renderHistoryTable(null, monthSelect.value);
    }
}

function renderHistoryTable(dateFilter = null, monthFilter = null) {
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (!appData.contramuestra || appData.contramuestra.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 24px; color: var(--text-muted);">
                    No hay contramuestras registradas en el sistema.
                </td>
            </tr>
        `;
        return;
    }
    
    // Ordenar de más reciente a más antiguo por fecha de registro
    const sorted = [...appData.contramuestra].sort((a, b) => {
        const dateA = new Date(a['FECHA'] || 0);
        const dateB = new Date(b['FECHA'] || 0);
        return dateB - dateA;
    });
    
    // Filtrar por fecha o mes
    let displayed = [];
    if (dateFilter) {
        displayed = sorted.filter(row => formatDateReadable(row['FECHA']) === dateFilter);
    } else {
        const currentMonthFilter = monthFilter || (document.getElementById('history-month-filter') ? document.getElementById('history-month-filter').value : 'recent');
        if (currentMonthFilter === 'recent') {
            displayed = sorted.slice(0, 10);
        } else if (currentMonthFilter === 'all') {
            displayed = sorted;
        } else {
            displayed = sorted.filter(row => {
                const dateStr = formatDateReadable(row['FECHA']);
                return dateStr && dateStr.startsWith(currentMonthFilter);
            });
        }
    }
    
    if (displayed.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 24px; color: var(--text-muted);">
                    No se encontraron registros para la fecha seleccionada.
                </td>
            </tr>
        `;
        return;
    }
    
    displayed.forEach(row => {
        const tr = document.createElement('tr');
        
        const fechaReg = formatDateReadable(row['FECHA'] || '');
        const fechaCompra = formatDateReadable(row['FECHA DE COMPRA'] || '');
        const ticket = row['TICKET No.'] || '';
        
        // Formato para mostrar Aries / Calidad (Asistente de Procesos)
        const comp = (aries, calid, checkAlert = false) => {
            const aVal = aries !== undefined && aries !== null && aries !== "" ? Number(aries).toFixed(1) : '-';
            const cVal = calid !== undefined && calid !== null && calid !== "" ? Number(calid).toFixed(1) : '-';
            
            let alertHtml = '';
            if (checkAlert && aries !== undefined && aries !== null && aries !== "" && calid !== undefined && calid !== null && calid !== "") {
                const diff = Number(calid) - Number(aries);
                if (diff >= 0.5) {
                    alertHtml = `<i class="fa-solid fa-triangle-exclamation" style="color: #F59E0B; margin-left: 6px; font-size: 0.95rem;" title="Calidad supera a Aries por ${diff.toFixed(1)}%"></i>`;
                }
            }
            
            return `<span style="color:var(--text-muted);">${aVal}</span> / <span style="font-weight:600; color:var(--text-main);">${cVal}</span>${alertHtml}`;
        };
        
        tr.innerHTML = `
            <td>${fechaReg}</td>
            <td>${fechaCompra}</td>
            <td><a href="#" class="ticket-link" onclick="viewTicketDetails('${ticket}'); return false;">${ticket}</a></td>
            <td>${comp(row['ARIES_% HUM 1'], row['CALID_%HUM1'], true)}</td>
            <td>${comp(row['ARIES_%HUM2'], row['CALID_%HUM2'], true)}</td>
            <td>${comp(row['ARIES_%HUM3'], row['CALID_%HUM3'], true)}</td>
            <td><span class="badge badge-success"><i class="fa-solid fa-cloud-arrow-up"></i> Guardado</span></td>
            <td>
                <button class="nav-btn" style="padding: 6px 12px; font-size: 0.82rem; border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 4px; background: #fff;" onclick="viewTicketDetails('${ticket}')">
                    <i class="fa-solid fa-eye" style="color: var(--primary);"></i> Ver Detalles
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function viewTicketDetails(ticketNum) {
    const record = appData.contramuestra.find(row => String(row['TICKET No.'] || '').trim() === String(ticketNum).trim());
    if (!record) {
        showToast('No se encontró el registro detallado de la contramuestra.', 'danger');
        return;
    }
    
    document.getElementById('modal-ticket-num').innerText = ticketNum;
    document.getElementById('modal-date-reg').innerText = formatDateReadable(record['FECHA']);
    document.getElementById('modal-date-comp').innerText = formatDateReadable(record['FECHA DE COMPRA']);
    
    const tbody = document.getElementById('modal-detail-tbody');
    tbody.innerHTML = '';
    
    const params = [
        { label: 'Humedad 1 (%)', ariesKey: 'ARIES_% HUM 1', calidKey: 'CALID_%HUM1', precision: 1, isMoisture: true },
        { label: 'Humedad 2 (%)', ariesKey: 'ARIES_%HUM2', calidKey: 'CALID_%HUM2', precision: 1, isMoisture: true },
        { label: 'Humedad 3 (%)', ariesKey: 'ARIES_%HUM3', calidKey: 'CALID_%HUM3', precision: 1, isMoisture: true },
        { label: 'Impurezas (%)', ariesKey: 'ARIES_%IMP', calidKey: 'CALID_%IMP', precision: 2, isMoisture: false },
        { label: 'Podridos (%)', ariesKey: 'ARIES_PODRIDOS', calidKey: 'CALID_PODRIDOS', precision: 2, isMoisture: false },
        { label: 'Partidos (%)', ariesKey: 'ARIES_PARTIDOS', calidKey: 'CALID_PARTIDOS', precision: 2, isMoisture: false },
        { label: 'Hongos (%)', ariesKey: 'ARIES_HONGOS', calidKey: 'CALID_HONGOS', precision: 2, isMoisture: false },
        { label: 'Insectos (%)', ariesKey: 'ARIES_INSECTOS', calidKey: 'CALID_INSECTOS', precision: 2, isMoisture: false },
        { label: 'Calor (%)', ariesKey: 'ARIES_CALOR', calidKey: 'CALID_CALOR', precision: 2, isMoisture: false }
    ];
    
    params.forEach(p => {
        const aVal = record[p.ariesKey];
        const cVal = record[p.calidKey];
        
        const aNum = aVal !== undefined && aVal !== null && aVal !== '' ? Number(aVal) : null;
        const cNum = cVal !== undefined && cVal !== null && cVal !== '' ? Number(cVal) : null;
        
        const aText = aNum !== null ? aNum.toFixed(p.precision) : '-';
        const cText = cNum !== null ? cNum.toFixed(p.precision) : '-';
        
        let diffText = '-';
        let alertHtml = '';
        
        if (aNum !== null && cNum !== null) {
            const diff = cNum - aNum;
            diffText = diff >= 0 ? `+${diff.toFixed(p.precision)}` : diff.toFixed(p.precision);
            
            if (p.isMoisture && diff >= 0.5) {
                alertHtml = `<i class="fa-solid fa-triangle-exclamation" style="color: #F59E0B; margin-left: 8px; font-size: 0.95rem;" title="Alerta: Desviación de humedad de ${diff.toFixed(1)}% (Calidad - Aries)"></i>`;
            }
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600; color: var(--text-main);">${p.label}</td>
            <td style="color: var(--text-muted);">${aText}</td>
            <td style="font-weight: 600; color: var(--text-main);">${cText}</td>
            <td style="font-weight: 600; color: ${diffText.startsWith('+') ? 'var(--danger)' : 'var(--text-muted)'};">${diffText}${alertHtml}</td>
        `;
        tbody.appendChild(tr);
    });
    
    const modal = document.getElementById('ticket-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeTicketModal() {
    const modal = document.getElementById('ticket-modal');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function closeTicketModalOnOuterClick(event) {
    if (event.target.id === 'ticket-modal') {
        closeTicketModal();
    }
}

function filterHistoryTable() {
    const query = document.getElementById('search-history-input').value.toLowerCase();
    const rows = document.querySelectorAll('#history-table-body tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes('no hay contramuestras')) return; // ignorar estado vacío
        row.style.display = text.includes(query) ? '' : 'none';
    });
}

// Helper to format date string to Spanish readable format
function formatDateReadable(dateVal) {
    if (!dateVal) return '-';
    if (dateVal instanceof Date) {
        return dateVal.toISOString().split('T')[0];
    }
    // Handle ISO strings with 'T' (e.g. 2026-11-06T05:00:00.000Z) or standard date strings
    const dateStr = String(dateVal).split('T')[0].split(' ')[0];
    return dateStr;
}

function initializeDashboard() {
    if (!appData.aries || appData.aries.length === 0) return;
    populateDashboardMonthFilter();
    renderDashboardStats('all');
}

function populateDashboardMonthFilter() {
    const select = document.getElementById('dashboard-month-filter');
    if (!select) return;
    
    const currentSelection = select.value;
    const monthsSet = new Set();
    
    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr && dateStr !== '-') {
            const parts = dateStr.split('-');
            if (parts.length >= 2) {
                monthsSet.add(`${parts[0]}-${parts[1]}`);
            }
        }
    });
    
    const sortedMonths = Array.from(monthsSet).sort((a, b) => new Date(b + '-01') - new Date(a + '-01'));
    select.innerHTML = '<option value="all">Todos los Meses</option>';
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    sortedMonths.forEach(ym => {
        const parts = ym.split('-');
        const year = parts[0];
        const monthNum = parseInt(parts[1], 10);
        const label = `${monthNames[monthNum - 1]} ${year}`;
        
        const opt = document.createElement('option');
        opt.value = ym;
        opt.innerText = label;
        select.appendChild(opt);
    });
    
    if (currentSelection && Array.from(select.options).some(o => o.value === currentSelection)) {
        select.value = currentSelection;
    } else {
        select.value = 'all';
    }
}

function filterDashboardByMonth() {
    const select = document.getElementById('dashboard-month-filter');
    if (!select) return;
    renderDashboardStats(select.value);
}

function renderDashboardStats(selectedMonth) {
    let purchasedKilos = 0;
    let dispatchedKilos = 0;
    let purchaseCount = 0;
    let dispatchCount = 0;
    let rejectedCount = 0;

    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr === '-') return;
        if (selectedMonth !== 'all' && !dateStr.startsWith(selectedMonth)) return;

        const pesoArtic = Number(row.PESOARTIC);
        const kilos = Number(row.PESOKILOS || row.CANTKILOSR || 0);
        
        if (pesoArtic === 1) {
            purchasedKilos += kilos;
            purchaseCount++;
        } else {
            dispatchedKilos += kilos;
            dispatchCount++;
        }

        if (row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S') {
            rejectedCount++;
        }
    });

    // Contramuestras en el mes seleccionado
    let contramuestraCount = 0;
    if (appData.contramuestra) {
        appData.contramuestra.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            if (dateStr === '-') return;
            if (selectedMonth === 'all' || dateStr.startsWith(selectedMonth)) {
                contramuestraCount++;
            }
        });
    }

    // Adherencia Antimicótico en el mes seleccionado
    let antiComplDays = 0;
    let antiTotalDays = 0;
    if (appData.antimicotico) {
        appData.antimicotico.forEach(row => {
            const rDateStr = formatDateReadable(row.FECHA);
            if (rDateStr === '-') return;
            if (selectedMonth === 'all' || rDateStr.startsWith(selectedMonth)) {
                antiTotalDays++;
                
                const consTeo = parseFloat(row.CONS_TEO || 0);
                const consReal = parseFloat(row.CONS_REAL || 0);
                const diff = parseFloat(row.DIFERENCIA || 0);
                
                let complies = true;
                if (consTeo > 0) {
                    const diffPct = (diff / consTeo) * 100;
                    if (Math.abs(diffPct) > 10) complies = false;
                } else {
                    if (consReal > 0) complies = false;
                }
                if (complies) antiComplDays++;
            }
        });
    }
    const antiKpiRate = antiTotalDays > 0 ? (antiComplDays / antiTotalDays) * 100 : 100;

    const statPurchased = document.getElementById('stat-purchased');
    if (statPurchased) statPurchased.innerHTML = `${(purchasedKilos / 1000).toLocaleString('es-EC', {maximumFractionDigits: 1})} <span class="unit">Tn</span>`;

    const statDispatched = document.getElementById('stat-dispatched');
    if (statDispatched) statDispatched.innerHTML = `${(dispatchedKilos / 1000).toLocaleString('es-EC', {maximumFractionDigits: 1})} <span class="unit">Tn</span>`;

    const acceptedPurchases = purchaseCount - rejectedCount;
    const statReceived = document.getElementById('stat-received-tickets');
    const statReceivedTotal = document.getElementById('stat-received-tickets-total');
    if (statReceived) statReceived.innerText = acceptedPurchases;
    if (statReceivedTotal) statReceivedTotal.innerText = `Total: ${purchaseCount} boleto${purchaseCount !== 1 ? 's' : ''}`;

    const statRejected = document.getElementById('stat-rejected');
    if (statRejected) statRejected.innerText = rejectedCount;

    const statContramuestras = document.getElementById('stat-contramuestras');
    if (statContramuestras) statContramuestras.innerText = contramuestraCount;

    const samplingPct = acceptedPurchases > 0 ? (contramuestraCount / acceptedPurchases) * 100 : 0;
    
    const statCmPct = document.getElementById('stat-contramuestras-pct');
    if (statCmPct) {
        if (acceptedPurchases === 0) {
            statCmPct.innerText = '% Muestreo: 0.0%';
            statCmPct.style.color = 'var(--text-muted)';
        } else {
            statCmPct.innerText = `% Muestreo: ${samplingPct.toFixed(1)}%`;
            if (samplingPct >= 40) {
                statCmPct.style.color = '#10B981'; // Green (Complies with 40-60% or higher target)
            } else {
                statCmPct.style.color = 'var(--danger)'; // Red (Under-sampled)
            }
        }
    }

    const statAntiKpi = document.getElementById('stat-antimicotico-kpi');
    if (statAntiKpi) {
        statAntiKpi.innerText = antiTotalDays > 0 ? `${antiKpiRate.toFixed(1)}%` : '-%';
        if (antiTotalDays === 0) {
            statAntiKpi.style.color = 'var(--text-muted)';
        } else if (antiKpiRate >= 85) {
            statAntiKpi.style.color = '#10B981'; // verde
        } else if (antiKpiRate >= 70) {
            statAntiKpi.style.color = '#F59E0B'; // naranja
        } else {
            statAntiKpi.style.color = 'var(--danger)'; // rojo
        }
    }

    renderVolumeChart(selectedMonth);
    renderStatusChart(selectedMonth);
}

// RENDER CHARTS
function renderVolumeChart(selectedMonth) {
    if (charts.volume) charts.volume.destroy();

    const dailyData = {};
    
    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr === '-') return;
        if (selectedMonth !== 'all' && !dateStr.startsWith(selectedMonth)) return;
        
        if (!dailyData[dateStr]) {
            dailyData[dateStr] = { compra: 0, despacho: 0 };
        }
        
        const isPurchase = Number(row.PESOARTIC) === 1;
        const kilos = Number(row.PESOKILOS || 0) / 1000;
        
        if (isPurchase) {
            dailyData[dateStr].compra += kilos;
        } else {
            dailyData[dateStr].despacho += kilos;
        }
    });

    const dates = Object.keys(dailyData).sort((a, b) => new Date(a) - new Date(b));
    const purchaseVols = dates.map(d => dailyData[d].compra);
    const dispatchVols = dates.map(d => dailyData[d].despacho);

    const adherenceVols = dates.map(d => {
        if (!appData.antimicotico) return null;
        const antiRow = appData.antimicotico.find(row => formatDateReadable(row.FECHA) === d);
        if (!antiRow) return null;
        
        const consTeo = parseFloat(antiRow.CONS_TEO || 0);
        const consReal = parseFloat(antiRow.CONS_REAL || 0);
        if (consTeo > 0) {
            return parseFloat(((consReal / consTeo) * 100).toFixed(1));
        } else if (consReal > 0) {
            return 200; // Cap visual a 200%
        }
        return 100;
    });

    const ctx = document.getElementById('volumeChart').getContext('2d');
    charts.volume = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Compras (Tn)',
                    data: purchaseVols,
                    backgroundColor: 'rgba(75, 175, 79, 0.75)',
                    borderColor: '#4BAF4F',
                    borderWidth: 1,
                    borderRadius: 4,
                    yAxisID: 'y'
                },
                {
                    label: 'Despachos (Tn)',
                    data: dispatchVols,
                    backgroundColor: 'rgba(227, 6, 19, 0.75)',
                    borderColor: '#E30613',
                    borderWidth: 1,
                    borderRadius: 4,
                    yAxisID: 'y'
                },
                {
                    label: 'Adherencia Antimicótico (%)',
                    data: adherenceVols,
                    type: 'line',
                    borderColor: '#F59E0B',
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    tension: 0.3,
                    pointBackgroundColor: '#F59E0B',
                    pointRadius: 4,
                    yAxisID: 'yAdherence',
                    spanGaps: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#374151', font: { family: 'Outfit' } }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { color: '#4B5563' }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Volumen Maíz (Tn)',
                        color: '#4B5563',
                        font: { family: 'Outfit', weight: 'bold' }
                    },
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { color: '#4B5563' }
                },
                yAdherence: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Adherencia Antimicótico (%)',
                        color: '#F59E0B',
                        font: { family: 'Outfit', weight: 'bold' }
                    },
                    grid: { drawOnChartArea: false },
                    ticks: {
                        color: '#F59E0B',
                        callback: function(value) { return value + '%'; }
                    },
                    suggestedMin: 80,
                    suggestedMax: 120
                }
            }
        }
    });
}

function renderStatusChart(selectedMonth) {
    if (charts.status) charts.status.destroy();

    let aceptadosCount = 0;
    let rechazadosCount = 0;

    appData.calidad.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA || row.FECHA || row.FECHACREACION);
        if (selectedMonth !== 'all' && dateStr && dateStr !== '-' && !dateStr.startsWith(selectedMonth)) return;

        const conf = String(row.CONFIRMA || '').trim().toUpperCase();
        if (conf.startsWith('ACEPTAD')) {
            aceptadosCount++;
        } else if (conf.startsWith('RECHAZA')) {
            rechazadosCount++;
        }
    });

    const labels = ['Aceptados', 'Rechazados'];
    const counts = [aceptadosCount, rechazadosCount];
    const colors = ['#10B981', '#EF4444']; // Verde Aceptados, Rojo Rechazados

    const ctx = document.getElementById('statusChart').getContext('2d');
    charts.status = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: counts,
                backgroundColor: colors,
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        color: '#374151', 
                        font: { family: 'Outfit', weight: '600' } 
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = aceptadosCount + rechazadosCount;
                            const val = context.raw || 0;
                            const pct = total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                            return ` ${context.label}: ${val} (${pct}%)`;
                        }
                    }
                }
            }
        }
    });
}

// CONTRAMUESTRA REGISTRATION MODULE
function initializeContramuestraControls() {
    // Obtener todas las fechas que tienen al menos un boleto con datos de calidad
    const datesWithQuality = new Set();
    
    appData.aries.forEach(row => {
        const ticketNo = Number(row.TICKETPESO);
        const hasQuality = appData.calidad.some(c => Number(c.TICKETPESO) === ticketNo);
        if (hasQuality) {
            const dateStr = formatDateReadable(row.FECHAENTRA);
            if (dateStr && dateStr !== '-') {
                datesWithQuality.add(dateStr);
            }
        }
    });
    
    const enabledDates = Array.from(datesWithQuality).sort((a, b) => new Date(b) - new Date(a));

    if (window.flatpickrInstance) {
        window.flatpickrInstance.destroy();
    }
    
    const dateInput = document.getElementById('sampling-date');
    if (enabledDates.length === 0) {
        dateInput.placeholder = 'No hay fechas con calidad';
        dateInput.disabled = true;
        return;
    }
    
    dateInput.disabled = false;
    window.flatpickrInstance = flatpickr("#sampling-date", {
        enable: enabledDates.map(d => new Date(d + 'T12:00:00')),
        dateFormat: "Y-m-d",
        defaultDate: enabledDates[0] ? new Date(enabledDates[0] + 'T12:00:00') : null,
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            selectedSampleTickets = [];
            renderContramuestraForm([]);
            document.getElementById('btn-save-excel').disabled = true;
        },
        onOpen: function(selectedDates, dateStr, instance) {
            if (enabledDates.length > 0 && selectedDates.length === 0) {
                instance.jumpToDate(new Date(enabledDates[0] + 'T12:00:00'));
            }
        }
    });
}

// SELECT ALEATORIO
function generateRandomSample() {
    const targetDate = document.getElementById('sampling-date').value;
    const pct = parseFloat(document.getElementById('sampling-percentage').value);

    if (!targetDate) {
        showToast('Seleccione una fecha válida', 'warning');
        return;
    }

    const dayTickets = appData.aries.filter(row => {
        const isSameDate = formatDateReadable(row.FECHAENTRA) === targetDate;
        if (!isSameDate) return false;
        
        // El boleto debe tener un registro de análisis en la hoja de Calidad
        const existsInCalidad = appData.calidad.some(c => Number(c.TICKETPESO) === Number(row.TICKETPESO));
        return existsInCalidad;
    });

    if (dayTickets.length === 0) {
        showToast('No se encontraron boletos con análisis de calidad en la fecha seleccionada', 'warning');
        selectedSampleTickets = [];
        renderContramuestraForm([]);
        document.getElementById('btn-save-excel').disabled = true;
        return;
    }

    const sampleSize = Math.max(1, Math.round(dayTickets.length * pct));

    const shuffled = [...dayTickets];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    selectedSampleTickets = shuffled.slice(0, sampleSize);
    renderContramuestraForm(selectedSampleTickets);
    
    document.getElementById('btn-save-excel').disabled = false;
    showToast(`Se seleccionó aleatoriamente ${sampleSize} boletos (${Math.round(pct * 100)}% de ${dayTickets.length})`, 'info');
}

function renderContramuestraForm(tickets) {
    const container = document.getElementById('contramuestra-form-container');
    container.innerHTML = '';

    if (!tickets || tickets.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-vials"></i>
                <p>Seleccione una fecha y genere una muestra aleatoria para comenzar el registro.</p>
            </div>
        `;
        return;
    }

    tickets.forEach((ticket, index) => {
        const card = document.createElement('div');
        card.className = 'ticket-row-form';
        card.dataset.ticketNo = ticket.TICKETPESO;
        card.dataset.placa = ticket.PLACAST || '';
        card.dataset.kilos = ticket.PESOKILOS || ticket.CANTKILOSR || 0;
        card.dataset.fechaCompra = formatDateReadable(ticket.FECHAENTRA);
        card.dataset.articulo = ticket.TITULOA || 'MAIZ';

        const existingCm = appData.contramuestra.find(c => Number(c['TICKET No.']) === Number(ticket.TICKETPESO));
        const calidadRecord = appData.calidad.find(c => Number(c.TICKETPESO) === Number(ticket.TICKETPESO));
        
        const aries_hum_real = Number(ticket.HUM_REAL_I || ticket.HUMEDADRMP || 12.0);
        const aries_imp = Number(ticket.IMPUREZRMP || ticket.IMP_BASE_I || 0.5);

        const aries_hum1 = existingCm 
            ? (existingCm['ARIES_% HUM 1'] !== undefined && existingCm['ARIES_% HUM 1'] !== null ? existingCm['ARIES_% HUM 1'] : "")
            : (calidadRecord && calidadRecord.MUESTRA_1 !== undefined && calidadRecord.MUESTRA_1 !== null ? calidadRecord.MUESTRA_1 : aries_hum_real);

        const aries_hum2 = existingCm 
            ? (existingCm['ARIES_%HUM2'] !== undefined && existingCm['ARIES_%HUM2'] !== null ? existingCm['ARIES_%HUM2'] : "")
            : (calidadRecord && calidadRecord.MUESTRA_2 !== undefined && calidadRecord.MUESTRA_2 !== null ? calidadRecord.MUESTRA_2 : aries_hum_real);

        const aries_hum3 = existingCm 
            ? (existingCm['ARIES_%HUM3'] !== undefined && existingCm['ARIES_%HUM3'] !== null ? existingCm['ARIES_%HUM3'] : "")
            : (calidadRecord && calidadRecord.MUESTRA_3 !== undefined && calidadRecord.MUESTRA_3 !== null ? calidadRecord.MUESTRA_3 : aries_hum_real);

        const aries_imp_val = existingCm 
            ? (existingCm['ARIES_%IMP'] !== undefined && existingCm['ARIES_%IMP'] !== null ? existingCm['ARIES_%IMP'] : "")
            : (calidadRecord && calidadRecord.IMP_REAL !== undefined && calidadRecord.IMP_REAL !== null ? calidadRecord.IMP_REAL : aries_imp);

        const aries_podridos_val = existingCm 
            ? (existingCm['ARIES_PODRIDOS'] !== undefined && existingCm['ARIES_PODRIDOS'] !== null ? existingCm['ARIES_PODRIDOS'] : "")
            : (calidadRecord && calidadRecord.PODRIDOS !== undefined && calidadRecord.PODRIDOS !== null ? calidadRecord.PODRIDOS : "");

        const aries_partidos_val = existingCm 
            ? (existingCm['ARIES_PARTIDOS'] !== undefined && existingCm['ARIES_PARTIDOS'] !== null ? existingCm['ARIES_PARTIDOS'] : "")
            : (calidadRecord && calidadRecord.PARTIDOS !== undefined && calidadRecord.PARTIDOS !== null ? calidadRecord.PARTIDOS : "");

        const aries_hongos_val = existingCm 
            ? (existingCm['ARIES_HONGOS'] !== undefined && existingCm['ARIES_HONGOS'] !== null ? existingCm['ARIES_HONGOS'] : "")
            : (calidadRecord && calidadRecord.HONGOS !== undefined && calidadRecord.HONGOS !== null ? calidadRecord.HONGOS : "");

        const aries_insectos_val = existingCm 
            ? (existingCm['ARIES_INSECTOS'] !== undefined && existingCm['ARIES_INSECTOS'] !== null ? existingCm['ARIES_INSECTOS'] : "")
            : (calidadRecord && calidadRecord.INSECTOS !== undefined && calidadRecord.INSECTOS !== null ? calidadRecord.INSECTOS : "");

        const aries_calor_val = existingCm 
            ? (existingCm['ARIES_CALOR'] !== undefined && existingCm['ARIES_CALOR'] !== null ? existingCm['ARIES_CALOR'] : "")
            : (calidadRecord && calidadRecord.CALOR !== undefined && calidadRecord.CALOR !== null ? calidadRecord.CALOR : "");

        const calid_hum1 = existingCm && existingCm['CALID_%HUM1'] !== undefined && existingCm['CALID_%HUM1'] !== null ? existingCm['CALID_%HUM1'] : "";
        const calid_hum2 = existingCm && existingCm['CALID_%HUM2'] !== undefined && existingCm['CALID_%HUM2'] !== null ? existingCm['CALID_%HUM2'] : "";
        const calid_hum3 = existingCm && existingCm['CALID_%HUM3'] !== undefined && existingCm['CALID_%HUM3'] !== null ? existingCm['CALID_%HUM3'] : "";
        const calid_imp = existingCm && existingCm['CALID_%IMP'] !== undefined && existingCm['CALID_%IMP'] !== null ? existingCm['CALID_%IMP'] : "";
        const calid_podridos = existingCm && existingCm['CALID_PODRIDOS'] !== undefined && existingCm['CALID_PODRIDOS'] !== null ? existingCm['CALID_PODRIDOS'] : "";
        const calid_partidos = existingCm && existingCm['CALID_PARTIDOS'] !== undefined && existingCm['CALID_PARTIDOS'] !== null ? existingCm['CALID_PARTIDOS'] : "";
        const calid_hongos = existingCm && existingCm['CALID_HONGOS'] !== undefined && existingCm['CALID_HONGOS'] !== null ? existingCm['CALID_HONGOS'] : "";
        const calid_insectos = existingCm && existingCm['CALID_INSECTOS'] !== undefined && existingCm['CALID_INSECTOS'] !== null ? existingCm['CALID_INSECTOS'] : "";
        const calid_calor = existingCm && existingCm['CALID_CALOR'] !== undefined && existingCm['CALID_CALOR'] !== null ? existingCm['CALID_CALOR'] : "";

        const disableAttr = existingCm ? 'disabled' : '';

        card.innerHTML = `
            <div class="ticket-form-header">
                <div class="ticket-form-title">
                    <i class="fa-solid fa-truck"></i>
                    Boleto #${ticket.TICKETPESO}
                    <span class="badge badge-info">${ticket.PLACAST || 'Sin Placa'}</span>
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-weight:400;">
                        Peso: ${Number(ticket.PESOKILOS).toLocaleString('es-EC')} kg | Proveedor: ${ticket.NOMBREP || '-'}
                    </span>
                </div>
                ${existingCm ? '<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Ya Registrado en la Nube</span>' : ''}
            </div>

            ${existingCm ? `
            <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 6px; padding: 12px 16px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; color: #ef4444; font-size: 0.85rem; font-weight: 500;">
                <i class="fa-solid fa-circle-exclamation"></i> Boletos ya registran contramuestra
            </div>
            ` : ''}

            <div class="form-grid-columns">
                <div class="form-column-box">
                    <h4><i class="fa-solid fa-server"></i> Aries (Recepción Inicial)</h4>
                    <div class="fields-grid">
                        <div class="field-input">
                            <label>% Humedad 1</label>
                            <input type="number" step="0.1" class="val-aries-hum1" value="${aries_hum1}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Humedad 2</label>
                            <input type="number" step="0.1" class="val-aries-hum2" value="${aries_hum2}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Humedad 3</label>
                            <input type="number" step="0.1" class="val-aries-hum3" value="${aries_hum3}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Impureza</label>
                            <input type="number" step="0.01" class="val-aries-imp" value="${aries_imp_val}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Podridos</label>
                            <input type="number" step="0.01" class="val-aries-podridos" value="${aries_podridos_val}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Partidos</label>
                            <input type="number" step="0.01" class="val-aries-partidos" value="${aries_partidos_val}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Hongos</label>
                            <input type="number" step="0.01" class="val-aries-hongos" value="${aries_hongos_val}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Insectos</label>
                            <input type="number" step="0.01" class="val-aries-insectos" value="${aries_insectos_val}" disabled>
                        </div>
                        <div class="field-input">
                            <label>% Calor</label>
                            <input type="number" step="0.01" class="val-aries-calor" value="${aries_calor_val}" disabled>
                        </div>
                    </div>
                </div>

                <div class="form-column-box calidad">
                    <h4><i class="fa-solid fa-microscope"></i> Calidad (Asistente de Procesos)</h4>
                    <div class="fields-grid">
                        <div class="field-input">
                            <label>% Humedad 1</label>
                            <input type="number" step="0.1" class="val-calid-hum1" value="${calid_hum1}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Humedad 2</label>
                            <input type="number" step="0.1" class="val-calid-hum2" value="${calid_hum2}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Humedad 3</label>
                            <input type="number" step="0.1" class="val-calid-hum3" value="${calid_hum3}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Impureza</label>
                            <input type="number" step="0.01" class="val-calid-imp" value="${calid_imp}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Podridos</label>
                            <input type="number" step="0.01" class="val-calid-podridos" value="${calid_podridos}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Partidos</label>
                            <input type="number" step="0.01" class="val-calid-partidos" value="${calid_partidos}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Hongos</label>
                            <input type="number" step="0.01" class="val-calid-hongos" value="${calid_hongos}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Insectos</label>
                            <input type="number" step="0.01" class="val-calid-insectos" value="${calid_insectos}" ${disableAttr}>
                        </div>
                        <div class="field-input">
                            <label>% Calor</label>
                            <input type="number" step="0.01" class="val-calid-calor" value="${calid_calor}" ${disableAttr}>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// SAVE TO CLOUD OR FALLBACK TO EXCEL DOWNLOAD
function saveSampleToExcel() {
    const cardElements = document.querySelectorAll('.ticket-row-form');
    if (cardElements.length === 0) return;

    // --- GUARDADO EN LA NUBE (Supabase) ---
    const payload = [];
        cardElements.forEach(card => {
            const ticketNo = Number(card.dataset.ticketNo);
            const isAlreadyRegistered = appData.contramuestra.some(c => Number(c['TICKET No.']) === ticketNo);
            if (isAlreadyRegistered) return;

            payload.push({
                fechaCm: new Date().toISOString(),
                placa: card.dataset.placa,
                ticketNo: ticketNo,
                fechaCompra: card.dataset.fechaCompra,
                articulo: card.dataset.articulo,
                kilos: Number(card.dataset.kilos),
                
                aries_hum1: Number(card.querySelector('.val-aries-hum1').value || 0),
                aries_hum2: Number(card.querySelector('.val-aries-hum2').value || 0),
                aries_hum3: Number(card.querySelector('.val-aries-hum3').value || 0),
                aries_imp: Number(card.querySelector('.val-aries-imp').value || 0),
                aries_podridos: Number(card.querySelector('.val-aries-podridos').value || 0),
                aries_partidos: Number(card.querySelector('.val-aries-partidos').value || 0),
                aries_hongos: Number(card.querySelector('.val-aries-hongos').value || 0),
                aries_insectos: Number(card.querySelector('.val-aries-insectos').value || 0),
                aries_calor: Number(card.querySelector('.val-aries-calor').value || 0),
                
                calid_hum1: Number(card.querySelector('.val-calid-hum1').value || 0),
                calid_hum2: Number(card.querySelector('.val-calid-hum2').value || 0),
                calid_hum3: Number(card.querySelector('.val-calid-hum3').value || 0),
                calid_imp: Number(card.querySelector('.val-calid-imp').value || 0),
                calid_podridos: Number(card.querySelector('.val-calid-podridos').value || 0),
                calid_partidos: Number(card.querySelector('.val-calid-partidos').value || 0),
                calid_hongos: Number(card.querySelector('.val-calid-hongos').value || 0),
                calid_insectos: Number(card.querySelector('.val-calid-insectos').value || 0),
                calid_calor: Number(card.querySelector('.val-calid-calor').value || 0)
            });
        });

        if (payload.length === 0) {
            showToast('Los boletos seleccionados ya cuentan con contramuestra registrada.', 'warning');
            return;
        }

        const recordsToInsert = payload.map(item => ({
            fecha: item.fechaCm ? item.fechaCm.split('T')[0] : new Date().toISOString().split('T')[0],
            placa: item.placa,
            ticket_no: item.ticketNo,
            fecha_compra: item.fechaCompra ? item.fechaCompra.split('T')[0] : null,
            articulo: item.articulo,
            kilos: item.kilos,
            hum1_aries: item.aries_hum1,
            hum2_aries: item.aries_hum2,
            hum3_aries: item.aries_hum3,
            imp_aries: item.aries_imp,
            podridos_aries: item.aries_podridos,
            partidos_aries: item.aries_partidos,
            hongos_aries: item.aries_hongos,
            insectos_aries: item.aries_insectos,
            calor_aries: item.aries_calor,
            hum1_asist: item.calid_hum1,
            hum2_asist: item.calid_hum2,
            hum3_asist: item.calid_hum3,
            imp_asist: item.calid_imp,
            podridos_asist: item.calid_podridos,
            partidos_asist: item.calid_partidos,
            hongos_asist: item.calid_hongos,
            insectos_asist: item.calid_insectos,
            calor_asist: item.calid_calor,
            prom_humedad_asist: Number(((item.calid_hum1 + item.calid_hum2 + item.calid_hum3) / 3).toFixed(2))
        }));

        const loader = document.getElementById('sync-loader');
        if (loader) loader.classList.add('active');

        fetch(`${SUPABASE_URL}/rest/v1/contramuestras`, {
            method: 'POST',
            headers: {
                ...SUPABASE_HEADERS,
                'Prefer': 'resolution=merge-duplicates'
            },
            body: JSON.stringify(recordsToInsert)
        })
        .then(res => {
            if (!res.ok) throw new Error("Error en la respuesta de Supabase");
            if (loader) loader.classList.remove('active');
            showToast('Contramuestras guardadas en Supabase con éxito', 'success');
            setTimeout(tryAutoLoadExcel, 500);
        })
        .catch(err => {
            if (loader) loader.classList.remove('active');
            console.error("Error al guardar en Supabase:", err);
            showToast('Error al guardar en Supabase: ' + err.message, 'danger');
        });
}

function initializeAntimicoticoControls() {
    const datesWithTrucks = new Set();
    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr && dateStr !== '-') {
            datesWithTrucks.add(dateStr);
        }
    });
    
    // Obtener fechas que ya tienen un consumo diario registrado para deshabilitarlas en la selección (evita manipulación)
    const registeredDates = new Set(appData.antimicotico.map(r => formatDateReadable(r.FECHA)));
    
    // Filtrar para habilitar solo las fechas que tienen camiones recibidos y que NO han sido registradas aún
    const enabledDates = Array.from(datesWithTrucks)
        .filter(d => !registeredDates.has(d))
        .sort((a, b) => new Date(b) - new Date(a));
    
    if (window.flatpickrAntimicoticoInstance) {
        window.flatpickrAntimicoticoInstance.destroy();
    }
    
    const dateInput = document.getElementById('antimicotico-date');
    if (!dateInput) return;
    
    // Actualizar saldos del inventario global en las tarjetas
    updateAntimicoticoInventoryBalance();
    
    // Actualizar KPI de Adherencia Mensual
    let kpiDate = enabledDates[0] || (appData.antimicotico.length > 0 ? formatDateReadable(appData.antimicotico[0].FECHA) : new Date().toISOString().split('T')[0]);
    updateMonthlyAdherenceKPI(kpiDate);
    
    if (enabledDates.length === 0) {
        dateInput.placeholder = 'Todas las fechas disponibles ya registradas';
        dateInput.disabled = true;
        
        // Limpiar campos del formulario
        document.getElementById('anti-bin1-ini').value = 0;
        document.getElementById('anti-bin2-ini').value = 0;
        document.getElementById('anti-bin3-ini').value = 0;
        document.getElementById('anti-bin1-fin').value = 0;
        document.getElementById('anti-bin2-fin').value = 0;
        document.getElementById('anti-bin3-fin').value = 0;
        document.getElementById('btn-save-antimicotico').disabled = true;
        return;
    }
    
    dateInput.disabled = false;
    window.flatpickrAntimicoticoInstance = flatpickr("#antimicotico-date", {
        enable: enabledDates.map(d => new Date(d + 'T12:00:00')),
        dateFormat: "Y-m-d",
        defaultDate: enabledDates[0] ? new Date(enabledDates[0] + 'T12:00:00') : null,
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            prepopulateAntimicoticoForm(dateStr);
            updateAntimicoticoCalculations();
        },
        onOpen: function(selectedDates, dateStr, instance) {
            if (enabledDates.length > 0 && selectedDates.length === 0) {
                instance.jumpToDate(new Date(enabledDates[0] + 'T12:00:00'));
            }
        }
    });
    
    // Vincular el evento input a los campos numéricos para cálculos automáticos en tiempo real
    document.querySelectorAll('.anti-calc-input').forEach(input => {
        input.oninput = updateAntimicoticoCalculations;
    });
    
    // Disparar carga inicial para la fecha activa por defecto
    if (enabledDates[0]) {
        prepopulateAntimicoticoForm(enabledDates[0]);
        updateAntimicoticoCalculations();
    }
}

function prepopulateAntimicoticoForm(dateStr) {
    const prevRecord = findPreviousAntimicoticoRecord(dateStr);
    const bin1IniEl = document.getElementById('anti-bin1-ini');
    const bin2IniEl = document.getElementById('anti-bin2-ini');
    const bin3IniEl = document.getElementById('anti-bin3-ini');
    
    if (prevRecord) {
        bin1IniEl.value = prevRecord.BIN1_FIN !== null && prevRecord.BIN1_FIN !== undefined ? prevRecord.BIN1_FIN : 0;
        bin2IniEl.value = prevRecord.BIN2_FIN !== null && prevRecord.BIN2_FIN !== undefined ? prevRecord.BIN2_FIN : 0;
        bin3IniEl.value = prevRecord.BIN3_FIN !== null && prevRecord.BIN3_FIN !== undefined ? prevRecord.BIN3_FIN : 0;
        
        bin1IniEl.disabled = true;
        bin2IniEl.disabled = true;
        bin3IniEl.disabled = true;
    } else {
        bin1IniEl.value = 0;
        bin2IniEl.value = 0;
        bin3IniEl.value = 0;
        
        bin1IniEl.disabled = false;
        bin2IniEl.disabled = false;
        bin3IniEl.disabled = false;
    }
    
    document.getElementById('anti-bin1-fin').value = 0;
    document.getElementById('anti-bin2-fin').value = 0;
    document.getElementById('anti-bin3-fin').value = 0;
    document.getElementById('anti-bin1-add').value = 0;
    document.getElementById('anti-bin2-add').value = 0;
    document.getElementById('anti-bin3-add').value = 0;
    
    let totalKilosDay = 0;
    if (appData.aries) {
        appData.aries.forEach(row => {
            if (formatDateReadable(row.FECHAENTRA) === dateStr) {
                const isPurchase = Number(row.PESOARTIC) === 1;
                const isRejected = row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S';
                if (isPurchase && isRejected) {
                    return;
                }
                totalKilosDay += Number(row.PESOKILOS || row.CANTKILOSR || 0);
            }
        });
    }
    const totalTm = totalKilosDay / 1000;
    document.getElementById('anti-total-tm').value = totalTm.toFixed(1);
    
    document.getElementById('anti-bodega').value = 'BODEGA 4';
    document.getElementById('anti-realizado').value = 'Karen Quijije';
    document.getElementById('anti-observacion').value = '';
    
    document.getElementById('btn-save-antimicotico').innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Guardar Registro Diario';
}

function calculateIngresoForDate(dateStr) {
    const prevRecord = findPreviousAntimicoticoRecord(dateStr);
    let prevInvFinal = 0;
    if (prevRecord) {
        prevInvFinal = parseFloat(prevRecord.INV_FINAL || prevRecord.inv_final || prevRecord.TOTAL_FIN || 0);
    }
    
    let deliveriesToday = 0;
    if (appData.antimicotico_ingresos) {
        appData.antimicotico_ingresos.forEach(delivery => {
            if (formatDateReadable(delivery.FECHA) === dateStr) {
                deliveriesToday += parseFloat(delivery.CANTIDAD_KG || 0);
            }
        });
    }
    
    return prevInvFinal + deliveriesToday;
}

function findPreviousAntimicoticoRecord(dateStr) {
    const targetDate = new Date(dateStr + 'T12:00:00');
    let prev = null;
    let prevDiff = Infinity;
    
    appData.antimicotico.forEach(r => {
        const dStr = formatDateReadable(r.FECHA);
        if (dStr === '-') return;
        const d = new Date(dStr + 'T12:00:00');
        const diff = targetDate - d;
        if (diff > 0 && diff < prevDiff) {
            prevDiff = diff;
            prev = r;
        }
    });
    return prev;
}

function updateAntimicoticoCalculations() {
    const dateStr = document.getElementById('antimicotico-date').value;
    if (!dateStr) {
        document.getElementById('btn-save-antimicotico').disabled = true;
        return;
    }
    
    updateMonthlyAdherenceKPI(dateStr);
    
    const bin1_ini = parseFloat(document.getElementById('anti-bin1-ini').value) || 0;
    const bin2_ini = parseFloat(document.getElementById('anti-bin2-ini').value) || 0;
    const bin3_ini = parseFloat(document.getElementById('anti-bin3-ini').value) || 0;
    
    const bin1_fin = parseFloat(document.getElementById('anti-bin1-fin').value) || 0;
    const bin2_fin = parseFloat(document.getElementById('anti-bin2-fin').value) || 0;
    const bin3_fin = parseFloat(document.getElementById('anti-bin3-fin').value) || 0;
    
    const bin1_add = parseFloat(document.getElementById('anti-bin1-add').value) || 0;
    const bin2_add = parseFloat(document.getElementById('anti-bin2-add').value) || 0;
    const bin3_add = parseFloat(document.getElementById('anti-bin3-add').value) || 0;
    
    const total_ini = bin1_ini + bin2_ini + bin3_ini;
    const total_fin = bin1_fin + bin2_fin + bin3_fin;
    const total_add = bin1_add + bin2_add + bin3_add;
    
    document.getElementById('anti-total-ini-lbl').innerText = `${total_ini.toFixed(1)} kg`;
    document.getElementById('anti-total-fin-lbl').innerText = `${total_fin.toFixed(1)} kg`;
    document.getElementById('anti-total-add-lbl').innerText = `${total_add.toFixed(1)} kg`;
    
    const receivedTrucks = appData.aries.filter(row => {
        const isSameDate = formatDateReadable(row.FECHAENTRA) === dateStr;
        const isPurchase = Number(row.PESOARTIC) === 1;
        const isRejected = row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S';
        return isSameDate && isPurchase && !isRejected;
    });
    
    const numTrucks = receivedTrucks.length;
    const consTeo = numTrucks * 40.0;
    
    const consReal = total_ini + total_add - total_fin;
    const diff = consReal - consTeo;
    
    document.getElementById('anti-calc-trucks').innerText = `${numTrucks} camión${numTrucks !== 1 ? 'es' : ''}`;
    document.getElementById('anti-calc-teo').innerText = `${consTeo.toFixed(1)} kg`;
    document.getElementById('anti-calc-real').innerText = `${consReal.toFixed(1)} kg`;
    
    let totalKilosDay = 0;
    if (appData.aries) {
        appData.aries.forEach(row => {
            if (formatDateReadable(row.FECHAENTRA) === dateStr) {
                const isPurchase = Number(row.PESOARTIC) === 1;
                const isRejected = row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S';
                if (isPurchase && isRejected) {
                    return;
                }
                totalKilosDay += Number(row.PESOKILOS || row.CANTKILOSR || 0);
            }
        });
    }
    const total_tm = totalKilosDay / 1000;
    document.getElementById('anti-total-tm').value = total_tm.toFixed(1);
    
    const pctLtsTm = total_tm > 0 ? (consReal / total_tm) * 100 : 0;
    
    const ingreso = calculateIngresoForDate(dateStr);
    const inv_final = ingreso - consReal;
    
    document.getElementById('anti-calc-ingreso').innerText = `${ingreso.toFixed(1)} kg`;
    document.getElementById('anti-calc-inv-final').innerText = `${inv_final.toFixed(1)} kg`;
    document.getElementById('anti-calc-pct-lts-tm').innerText = `${pctLtsTm.toFixed(1)}%`;
    
    const diffEl = document.getElementById('anti-calc-diff');
    diffEl.innerText = `${diff >= 0 ? '+' : ''}${diff.toFixed(1)} kg`;
    if (diff > 0) {
        diffEl.style.color = 'var(--danger)';
    } else if (diff < 0) {
        diffEl.style.color = '#10B981';
    } else {
        diffEl.style.color = 'var(--text-main)';
    }
    
    let diffPct = 0;
    let kpiStatus = 'cumple';
    
    if (consTeo > 0) {
        diffPct = (diff / consTeo) * 100;
        if (Math.abs(diffPct) > 10) {
            kpiStatus = 'fuera';
        }
    } else {
        if (consReal > 0) {
            diffPct = 100;
            kpiStatus = 'fuera';
        } else {
            diffPct = 0;
            kpiStatus = 'cumple';
        }
    }
    
    const pctEl = document.getElementById('anti-calc-diff-pct');
    const badgeEl = document.getElementById('anti-calc-kpi-badge');
    
    if (pctEl) {
        pctEl.innerText = `${diffPct >= 0 ? '+' : ''}${diffPct.toFixed(1)}%`;
        if (kpiStatus === 'fuera') {
            pctEl.style.color = 'var(--danger)';
        } else {
            pctEl.style.color = '#10B981';
        }
    }
    
    if (badgeEl) {
        if (kpiStatus === 'cumple') {
            badgeEl.innerText = 'CUMPLE TARGET';
            badgeEl.style.background = '#10B981';
        } else {
            badgeEl.innerText = 'FUERA DE TARGET';
            badgeEl.style.background = 'var(--danger)';
        }
    }
    
    document.getElementById('btn-save-antimicotico').disabled = false;
}

function saveAntimicotico() {
    const dateStr = document.getElementById('antimicotico-date').value;
    const bin1_ini = parseFloat(document.getElementById('anti-bin1-ini').value || 0);
    const bin2_ini = parseFloat(document.getElementById('anti-bin2-ini').value || 0);
    const bin3_ini = parseFloat(document.getElementById('anti-bin3-ini').value || 0);
    const bin1_fin = parseFloat(document.getElementById('anti-bin1-fin').value || 0);
    const bin2_fin = parseFloat(document.getElementById('anti-bin2-fin').value || 0);
    const bin3_fin = parseFloat(document.getElementById('anti-bin3-fin').value || 0);
    const bin1_add = parseFloat(document.getElementById('anti-bin1-add').value || 0);
    const bin2_add = parseFloat(document.getElementById('anti-bin2-add').value || 0);
    const bin3_add = parseFloat(document.getElementById('anti-bin3-add').value || 0);
    const total_ini = parseFloat(document.getElementById('anti-total-ini').value || 0);
    const total_fin = parseFloat(document.getElementById('anti-total-fin').value || 0);
    const total_add = parseFloat(document.getElementById('anti-total-add').value || 0);
    const numTrucks = parseInt(document.getElementById('anti-trucks-rcvd').value || 0, 10);
    const consTeo = parseFloat(document.getElementById('anti-cons-teo').value || 0);
    const consReal = parseFloat(document.getElementById('anti-cons-real').value || 0);
    const diff = parseFloat(document.getElementById('anti-diferencia').value || 0);

    const n_bodega = document.getElementById('anti-bodega') ? document.getElementById('anti-bodega').value : '';
    const realizado_por = document.getElementById('anti-realizado') ? document.getElementById('anti-realizado').value : 'Karen Quijije';
    const observacion = document.getElementById('anti-observacion') ? document.getElementById('anti-observacion').value : '';

    if (!dateStr) {
        showToast('Por favor seleccione una fecha', 'warning');
        return;
    }

    const payload = {
        fecha: dateStr,
        bin1_ini: bin1_ini,
        bin2_ini: bin2_ini,
        bin3_ini: bin3_ini,
        bin1_fin: bin1_fin,
        bin2_fin: bin2_fin,
        bin3_fin: bin3_fin,
        bin1_add: bin1_add,
        bin2_add: bin2_add,
        bin3_add: bin3_add,
        total_ini: total_ini,
        total_fin: total_fin,
        cant_agregada: total_add,
        trucks_rcvd: numTrucks,
        cons_teo: consTeo,
        cons_real: consReal,
        diferencia: diff,
        bodega: n_bodega,
        realizado_por: realizado_por,
        observacion: observacion
    };
    
    const loader = document.getElementById('sync-loader');
    if (loader) {
        const title = document.getElementById('sync-loader-title');
        const msg = document.getElementById('sync-loader-msg');
        if (title) title.innerText = 'Sincronizando con Supabase...';
        if (msg) msg.innerText = 'Por favor espere. Guardando registro de antimicótico.';
        loader.classList.add('active');
    }
    
    fetch(`${SUPABASE_URL}/rest/v1/antimicotico`, {
        method: 'POST',
        headers: {
            ...SUPABASE_HEADERS,
            'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        if (!res.ok) throw new Error("Error en la respuesta de Supabase");
        if (loader) loader.classList.remove('active');
        showToast('Consumo de antimicótico guardado en Supabase con éxito', 'success');
        setTimeout(tryAutoLoadExcel, 500);
    })
    .catch(err => {
        if (loader) loader.classList.remove('active');
        console.error("Error al guardar consumo en Supabase:", err);
        showToast('Error al guardar en Supabase: ' + err.message, 'danger');
    });
}

function updateAntimicoticoInventoryBalance() {
    let totalIn = 0;
    let totalOut = 0;
    
    // Sumar ingresos / entregas
    if (appData.antimicotico_ingresos) {
        appData.antimicotico_ingresos.forEach(row => {
            totalIn += parseFloat(row.CANTIDAD_KG || 0);
        });
    }
    
    // Sumar consumos diarios
    if (appData.antimicotico) {
        appData.antimicotico.forEach(row => {
            totalOut += parseFloat(row.CONS_REAL || 0);
        });
    }
    
    const stock = totalIn - totalOut;
    
    const elIn = document.getElementById('anti-inv-total-in');
    const elOut = document.getElementById('anti-inv-total-out');
    const elStock = document.getElementById('anti-inv-stock');
    
    if (elIn) elIn.innerHTML = `${totalIn.toLocaleString('es-EC', {minimumFractionDigits: 1, maximumFractionDigits: 1})} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">kg</span>`;
    if (elOut) elOut.innerHTML = `${totalOut.toLocaleString('es-EC', {minimumFractionDigits: 1, maximumFractionDigits: 1})} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">kg</span>`;
    if (elStock) {
        elStock.innerHTML = `${stock.toLocaleString('es-EC', {minimumFractionDigits: 1, maximumFractionDigits: 1})} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">kg</span>`;
        if (stock < 0) {
            elStock.style.color = 'var(--danger)';
        } else if (stock < 1000) {
            elStock.style.color = 'var(--warning)';
        } else {
            elStock.style.color = '#0284c7';
        }
    }
}

// SUB-TABS SWITCHING
function switchAntiHistoryTab(tab) {
    antiHistoryTab = tab;
    
    document.querySelectorAll('.tab-toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (tab === 'consumos') {
        document.getElementById('btn-anti-tab-consumos').classList.add('active');
    } else {
        document.getElementById('btn-anti-tab-entregas').classList.add('active');
    }
    
    renderAntimicoticoHistoryTable();
}

// DELIVERY ENTRY MODAL LOGIC
function openAntiIngresoModal() {
    const dateInput = document.getElementById('anti-ingreso-date');
    if (dateInput && !window.flatpickrAntiIngresoInstance) {
        window.flatpickrAntiIngresoInstance = flatpickr("#anti-ingreso-date", {
            dateFormat: "Y-m-d",
            defaultDate: new Date(),
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                    longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                },
                months: {
                    shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                    longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                }
            }
        });
    }
    
    document.getElementById('anti-ingreso-qty').value = '';
    document.getElementById('anti-ingreso-ref').value = '';
    
    const modal = document.getElementById('anti-ingreso-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeAntiIngresoModal() {
    const modal = document.getElementById('anti-ingreso-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

function closeAntiIngresoModalOnOuterClick(event) {
    if (event.target.id === 'anti-ingreso-modal') {
        closeAntiIngresoModal();
    }
}

function saveAntiIngreso() {
    const dateStr = document.getElementById('anti-ingreso-date').value;
    const qty = parseFloat(document.getElementById('anti-ingreso-qty').value);
    const ref = document.getElementById('anti-ingreso-ref').value.trim();
    
    if (!dateStr || isNaN(qty) || qty <= 0) {
        showToast('Ingrese una cantidad válida y una fecha de recepción.', 'warning');
        return;
    }
    
    const payload = {
        fecha: dateStr,
        cantidad_kg: qty,
        referencia: ref || 'Entrega registrada'
    };
    
    const loader = document.getElementById('sync-loader');
    if (loader) {
        const title = document.getElementById('sync-loader-title');
        const msg = document.getElementById('sync-loader-msg');
        if (title) title.innerText = 'Sincronizando con Supabase...';
        if (msg) msg.innerText = 'Por favor espere. Guardando lote de antimicótico.';
        loader.classList.add('active');
    }
    
    fetch(`${SUPABASE_URL}/rest/v1/antimicotico_ingresos`, {
        method: 'POST',
        headers: SUPABASE_HEADERS,
        body: JSON.stringify(payload)
    })
    .then(res => {
        if (!res.ok) throw new Error("Error en la respuesta de Supabase");
        if (loader) loader.classList.remove('active');
        showToast('Ingreso de lote guardado en Supabase con éxito', 'success');
        closeAntiIngresoModal();
        setTimeout(tryAutoLoadExcel, 500);
    })
    .catch(err => {
        if (loader) loader.classList.remove('active');
        closeAntiIngresoModal();
        console.error("Error al registrar lote en Supabase:", err);
        showToast('Error al registrar lote en Supabase: ' + err.message, 'danger');
    });
}

function renderAntimicoticoHistoryTable() {
    const tbody = document.getElementById('antimicotico-table-body');
    const thead = document.getElementById('antimicotico-table-header');
    if (!tbody || !thead) return;
    
    if (antiHistoryTab === 'consumos') {
        thead.innerHTML = `
            <tr>
                <th>Fecha</th>
                <th>Inv. Inicial</th>
                <th>Agregado</th>
                <th>Inv. Final</th>
                <th>Carros</th>
                <th>C. Teórico</th>
                <th>C. Real</th>
                <th>Diferencia</th>
            </tr>
        `;
        
        if (!appData.antimicotico || appData.antimicotico.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 24px;">No hay registros de consumo de antimicótico.</td></tr>`;
            return;
        }
        
        const sorted = [...appData.antimicotico].sort((a, b) => new Date(b.FECHA) - new Date(a.FECHA));
        tbody.innerHTML = '';
        sorted.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            const totalIni = Number(row.TOTAL_INI || 0);
            const totalFin = Number(row.TOTAL_FIN || 0);
            const added = Number(row.CANT_AGREGADA || row.cant_agregada || 0);
            const trucks = Number(row.TRUCKS_RCVD || 0);
            const consTeo = Number(row.CONS_TEO || 0);
            const consReal = Number(row.CONS_REAL || 0);
            const diff = Number(row.DIFERENCIA || 0);
            
            let diffPct = 0;
            let complies = true;
            if (consTeo > 0) {
                diffPct = (diff / consTeo) * 100;
                if (Math.abs(diffPct) > 10) complies = false;
            } else {
                if (consReal > 0) {
                    diffPct = 100;
                    complies = false;
                }
            }
            
            let diffColor = 'var(--text-muted)';
            if (!complies) {
                diffColor = 'var(--danger)'; // Red if outside ±10% range
            } else if (diff !== 0) {
                diffColor = '#10B981'; // Green if within range
            }
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-weight: 600; color: var(--text-main);">${dateStr}</td>
                <td>${totalIni.toFixed(1)} kg</td>
                <td style="color: #10B981; font-weight: 500;">+${added.toFixed(1)} kg</td>
                <td>${totalFin.toFixed(1)} kg</td>
                <td>${trucks}</td>
                <td>${consTeo.toFixed(1)} kg</td>
                <td>${consReal.toFixed(1)} kg</td>
                <td style="font-weight: 600; color: ${diffColor};">${diff >= 0 ? '+' : ''}${diff.toFixed(1)} kg (${diffPct >= 0 ? '+' : ''}${diffPct.toFixed(1)}%)</td>
            `;
            tbody.appendChild(tr);
        });
    } else {
        thead.innerHTML = `
            <tr>
                <th>Fecha Recepción</th>
                <th>Cantidad Recibida</th>
                <th>Referencia / Guía / Factura</th>
            </tr>
        `;
        
        if (!appData.antimicotico_ingresos || appData.antimicotico_ingresos.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 24px;">No hay registros de ingresos de antimicótico.</td></tr>`;
            return;
        }
        
        const sorted = [...appData.antimicotico_ingresos].sort((a, b) => new Date(b.FECHA) - new Date(a.FECHA));
        tbody.innerHTML = '';
        sorted.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            const qty = Number(row.CANTIDAD_KG || 0);
            const ref = row.REFERENCIA || 'Lote registrado';
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-weight: 600; color: var(--text-main);">${dateStr}</td>
                <td style="font-weight: 600; color: #10B981;">+${qty.toLocaleString('es-EC', {minimumFractionDigits: 1})} kg</td>
                <td style="color: var(--text-muted);">${ref}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

// Actualizar KPI de Adherencia Mensual (±10% Target)
function updateMonthlyAdherenceKPI(selectedDateStr) {
    if (!selectedDateStr) return;
    const parts = selectedDateStr.split('-');
    const targetYearMonth = `${parts[0]}-${parts[1]}`; // e.g. "2026-08"
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const monthName = monthNames[parseInt(parts[1], 10) - 1];
    
    let totalDays = 0;
    let compliantDays = 0;
    
    appData.antimicotico.forEach(row => {
        const rDateStr = formatDateReadable(row.FECHA);
        if (rDateStr === '-') return;
        if (rDateStr.startsWith(targetYearMonth)) {
            totalDays++;
            
            const consTeo = parseFloat(row.CONS_TEO || 0);
            const consReal = parseFloat(row.CONS_REAL || 0);
            const diff = parseFloat(row.DIFERENCIA || 0);
            
            let diffPct = 0;
            let complies = true;
            
            if (consTeo > 0) {
                diffPct = (diff / consTeo) * 100;
                if (Math.abs(diffPct) > 10) {
                    complies = false;
                }
            } else {
                if (consReal > 0) {
                    complies = false;
                }
            }
            
            if (complies) {
                compliantDays++;
            }
        }
    });
    
    const complianceRate = totalDays > 0 ? (compliantDays / totalDays) * 100 : 100;
    
    const elTitle = document.getElementById('anti-kpi-month-title');
    const elVal = document.getElementById('anti-kpi-compliance');
    const elRatio = document.getElementById('anti-kpi-ratio');
    
    if (elTitle) elTitle.innerText = `KPI Adherencia (${monthName})`;
    if (elVal) {
        elVal.innerText = `${complianceRate.toFixed(1)}%`;
        if (totalDays === 0) {
            elVal.style.color = 'var(--text-muted)';
        } else if (complianceRate >= 85) {
            elVal.style.color = '#10B981'; // Green
        } else if (complianceRate >= 70) {
            elVal.style.color = '#F59E0B'; // Orange
        } else {
            elVal.style.color = 'var(--danger)'; // Red
        }
    }
    if (elRatio) {
        elRatio.innerText = `${compliantDays} de ${totalDays} día${totalDays !== 1 ? 's' : ''} en rango (±10%)`;
    }
}

function exportHistoryReport() {
    // 1. Obtener registros de contramuestras filtrados actualmente
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;
    
    const sorted = [...appData.contramuestra].sort((a, b) => {
        const dateA = new Date(a['FECHA'] || 0);
        const dateB = new Date(b['FECHA'] || 0);
        return dateB - dateA;
    });
    
    const filterInput = document.getElementById('history-date-filter');
    const monthSelect = document.getElementById('history-month-filter');
    
    const dateFilter = filterInput ? filterInput.value : null;
    const currentMonthFilter = monthSelect ? monthSelect.value : 'recent';
    
    let displayed = [];
    let reportTitleDate = '';
    
    if (dateFilter) {
        displayed = sorted.filter(row => formatDateReadable(row['FECHA']) === dateFilter);
        reportTitleDate = dateFilter;
    } else {
        if (currentMonthFilter === 'recent') {
            displayed = sorted.slice(0, 10);
            reportTitleDate = 'Últimos 10 registros';
        } else if (currentMonthFilter === 'all') {
            displayed = sorted;
            reportTitleDate = 'Todos los registros';
        } else {
            displayed = sorted.filter(row => {
                const dateStr = formatDateReadable(row['FECHA']);
                return dateStr && dateStr.startsWith(currentMonthFilter);
            });
            const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            const parts = currentMonthFilter.split('-');
            reportTitleDate = `${monthNames[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
        }
    }
    
    if (displayed.length === 0) {
        showToast('No hay datos disponibles para exportar con los filtros actuales.', 'warning');
        return;
    }
    
    // Clonar y ordenar ascendentemente por fecha para reporte ordenado
    const reportDataList = [...displayed].reverse();
    
    // Calcular boletos totales de compra recibidos en Aries para esa fecha
    let totalAriesCount = 0;
    if (dateFilter) {
        totalAriesCount = appData.aries.filter(r => formatDateReadable(r.FECHAENTRA) === dateFilter && Number(r.PESOARTIC) === 1 && (!r.RECHAZA_PS || String(r.RECHAZA_PS).trim().toUpperCase() !== 'S')).length;
    } else {
        if (currentMonthFilter === 'recent') {
            const dispDates = [...new Set(reportDataList.map(r => formatDateReadable(r['FECHA DE COMPRA'] || r['FECHA'])))];
            totalAriesCount = appData.aries.filter(r => dispDates.includes(formatDateReadable(r.FECHAENTRA)) && Number(r.PESOARTIC) === 1 && (!r.RECHAZA_PS || String(r.RECHAZA_PS).trim().toUpperCase() !== 'S')).length;
        } else if (currentMonthFilter === 'all') {
            totalAriesCount = appData.aries.filter(r => Number(r.PESOARTIC) === 1 && (!r.RECHAZA_PS || String(r.RECHAZA_PS).trim().toUpperCase() !== 'S')).length;
        } else {
            totalAriesCount = appData.aries.filter(r => {
                const dateStr = formatDateReadable(r.FECHAENTRA);
                return dateStr && dateStr.startsWith(currentMonthFilter) && Number(r.PESOARTIC) === 1 && (!r.RECHAZA_PS || String(r.RECHAZA_PS).trim().toUpperCase() !== 'S');
            }).length;
        }
    }
    
    const controlFisicoCount = reportDataList.length;
    const diffCount = totalAriesCount - controlFisicoCount;
    
    let t1RowsHtml = '';
    let t2RowsHtml = '';
    
    reportDataList.forEach((row, idx) => {
        const rowNum = idx + 1;
        const cmDate = formatDateReadable(row['FECHA DE COMPRA'] || row['FECHA']);
        
        // Parámetros Aries
        const ah1 = parseFloat(row['ARIES_% HUM 1'] || 0);
        const ah2 = parseFloat(row['ARIES_%HUM2'] || 0);
        const ah3 = parseFloat(row['ARIES_%HUM3'] || 0);
        const aAvgHum = (ah1 + ah2 + ah3) / 3;
        
        const a_imp = parseFloat(row['ARIES_%IMP'] || 0);
        const a_podridos = parseFloat(row['ARIES_PODRIDOS'] || 0);
        const a_partidos = parseFloat(row['ARIES_PARTIDOS'] || 0);
        const a_hongos = parseFloat(row['ARIES_HONGOS'] || 0);
        const a_insectos = parseFloat(row['ARIES_INSECTOS'] || 0);
        const a_calor = parseFloat(row['ARIES_CALOR'] || 0);
        
        // Parámetros Calidad
        const ch1 = parseFloat(row['CALID_%HUM1'] || 0);
        const ch2 = parseFloat(row['CALID_%HUM2'] || 0);
        const ch3 = parseFloat(row['CALID_%HUM3'] || 0);
        const cAvgHum = (ch1 + ch2 + ch3) / 3;
        
        const c_imp = parseFloat(row['CALID_%IMP'] || 0);
        const c_podridos = parseFloat(row['CALID_PODRIDOS'] || 0);
        const c_partidos = parseFloat(row['CALID_PARTIDOS'] || 0);
        const c_hongos = parseFloat(row['CALID_HONGOS'] || 0);
        const c_insectos = parseFloat(row['CALID_INSECTOS'] || 0);
        const c_calor = parseFloat(row['CALID_CALOR'] || 0);
        
        // Variaciones
        const d_hum = cAvgHum - aAvgHum;
        const d_imp = c_imp - a_imp;
        const d_partidos = c_partidos - a_partidos;
        const d_insectos = c_insectos - a_insectos;
        const d_calor = c_calor - a_calor;
        const d_hongos = c_hongos - a_hongos;
        const d_podridos = c_podridos - a_podridos;
        
        const ticketNo = row['TICKET No.'] || '';
        
        t1RowsHtml += `
            <tr style="height: 24px;">
                <td style="border: 1px solid #000; font-weight: bold; padding: 5px 2px; font-size: 8pt;">${rowNum}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${row['PLACA'] || ''}</td>
                <td style="border: 1px solid #000; font-weight: bold; color: #1F4E79; padding: 5px 2px; font-size: 8pt;">${ticketNo}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${cmDate}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${row['ARTICULO'] || 'MAIZ'}</td>
                <td style="border: 1px solid #000; text-align: right; padding-right: 4px; padding-top: 5px; padding-bottom: 5px; font-size: 8pt;">${Number(row['KILOS'] || 0).toLocaleString('es-EC')}</td>
                
                <!-- Aries -->
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${ah1.toFixed(1)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${ah2.toFixed(1)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${ah3.toFixed(1)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_imp.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_podridos.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_partidos.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_hongos.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_insectos.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 5px 2px; font-size: 8pt;">${a_calor.toFixed(2)}</td>
                
                <!-- Calidad -->
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${ch1.toFixed(1)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${ch2.toFixed(1)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${ch3.toFixed(1)}</td>
                <td style="border: 1px solid #000; background-color: #C6E0B4; font-weight: bold; padding: 5px 2px; font-size: 8pt;">${cAvgHum.toFixed(1)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_imp.toFixed(2)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_podridos.toFixed(2)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_partidos.toFixed(2)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_hongos.toFixed(2)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_insectos.toFixed(2)}</td>
                <td style="border: 1px solid #000; background-color: #E2EFDA; padding: 5px 2px; font-size: 8pt;">${c_calor.toFixed(2)}</td>
            </tr>
        `;
        
        t2RowsHtml += `
            <tr style="height: 24px;">
                <td style="border: 1px solid #000; font-weight: bold; color: #1F4E79; padding: 5px 2px; font-size: 8pt;">${ticketNo}</td>
                <td style="border: 1px solid #000; font-weight: bold; color: ${d_hum >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_hum >= 0 ? '+' : '')}${d_hum.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_imp >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_imp >= 0 ? '+' : '')}${d_imp.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_partidos >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_partidos >= 0 ? '+' : '')}${d_partidos.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_insectos >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_insectos >= 0 ? '+' : '')}${d_insectos.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_calor >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_calor >= 0 ? '+' : '')}${d_calor.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_hongos >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_hongos >= 0 ? '+' : '')}${d_hongos.toFixed(2)}</td>
                <td style="border: 1px solid #000; color: ${d_podridos >= 0 ? '#111' : 'red'}; padding: 5px 2px; font-size: 8pt;">${(d_podridos >= 0 ? '+' : '')}${d_podridos.toFixed(2)}</td>
                <td style="border: 1px solid #000; font-style: italic; color: #666; padding: 5px 2px; font-size: 8pt;">N/A</td>
            </tr>
        `;
    });

    const htmlContent = `
        <div style="width: 100%; box-sizing: border-box; font-family: Arial, sans-serif; color: #111; font-size: 8.5pt; padding: 10px;">
            <!-- Header Block -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; border-bottom: 2px solid #E2001A;">
                <tr style="height: 65px;">
                    <td style="width: 140px; text-align: left; vertical-align: middle; height: 65px; padding: 0;">
                        <img src="data:image/png;base64,${LOGO_BASE64}" style="width: 125px; height: 47px; display: block; border: none; margin: 0;" />
                    </td>
                    <td style="text-align: center; vertical-align: middle; height: 65px; padding: 0;">
                        <div style="font-size: 13pt; font-weight: bold; color: #111; text-transform: uppercase; font-family: Arial, sans-serif; line-height: 1.2;">CENTRO DE OPERACIONES MANTA</div>
                        <div style="font-size: 9pt; font-weight: bold; color: #333; margin-top: 4px; text-transform: uppercase; font-family: Arial, sans-serif;">
                            REGISTRO DE VALIDACIÓN POR MUESTREO DE ANÁLISIS DE HUMEDAD Y VARIACIÓN DE LECTURA
                        </div>
                    </td>
                    <td style="width: 140px; height: 65px; padding: 0;"></td>
                </tr>
            </table>

            <!-- Date Block -->
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 9pt;">
                FECHA DE REVISIÓN: <span style="background-color: #FFF2CC; padding: 3px 10px; border: 1px solid #A0A0A0; border-radius: 2px; font-weight: bold; color: #111;">${reportTitleDate}</span>
            </div>

            <!-- Table 1: Detalle de Muestreo (Aries vs Calidad) -->
            <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 18px; border: 1px solid #000; text-align: center; background-color: #fff;">
                <colgroup>
                    <col style="width: 2.0%;"> <!-- N° -->
                    <col style="width: 4.5%;"> <!-- PLACA -->
                    <col style="width: 4.5%;"> <!-- TICKET No. -->
                    <col style="width: 6.0%;"> <!-- FECHA COMPRA -->
                    <col style="width: 3.5%;"> <!-- ARTICULO -->
                    <col style="width: 5.0%;"> <!-- KILOS -->
                    
                    <!-- Aries (9 columns) -->
                    <col style="width: 3.6%;"> <!-- %H1 -->
                    <col style="width: 3.6%;"> <!-- %H2 -->
                    <col style="width: 3.6%;"> <!-- %H3 -->
                    <col style="width: 3.6%;"> <!-- %IMP -->
                    <col style="width: 4.2%;"> <!-- PODR -->
                    <col style="width: 4.2%;"> <!-- PART -->
                    <col style="width: 4.2%;"> <!-- HONG -->
                    <col style="width: 4.2%;"> <!-- INSE -->
                    <col style="width: 4.2%;"> <!-- CALO -->
                    
                    <!-- Calidad (10 columns) -->
                    <col style="width: 3.6%;"> <!-- %H1 -->
                    <col style="width: 3.6%;"> <!-- %H2 -->
                    <col style="width: 3.6%;"> <!-- %H3 -->
                    <col style="width: 4.5%;"> <!-- PROM HUM -->
                    <col style="width: 3.6%;"> <!-- %IMP -->
                    <col style="width: 4.2%;"> <!-- PODR -->
                    <col style="width: 4.2%;"> <!-- PART -->
                    <col style="width: 4.2%;"> <!-- HONG -->
                    <col style="width: 4.2%;"> <!-- INSE -->
                    <col style="width: 4.2%;"> <!-- CALO -->
                </colgroup>
                <thead>
                    <tr style="color: white; font-weight: bold; font-size: 8pt; text-align: center;">
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">N°</th>
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">PLACA</th>
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">TICKET No.</th>
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">FECHA COMPRA</th>
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">ARTICULO</th>
                        <th rowspan="2" style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">KILOS</th>
                        <th colspan="9" style="border: 1px solid #000; background-color: #2F5597; color: white; font-weight: bold; text-align: center; vertical-align: middle;">REGISTRO DE CONTROL DE MUESTREO (ARIES)</th>
                        <th colspan="10" style="border: 1px solid #000; background-color: #375623; color: white; font-weight: bold; text-align: center; vertical-align: middle;">REGISTRO ASISTENTE DE PROCESOS (CALIDAD)</th>
                    </tr>
                    <tr style="color: white; font-weight: bold; font-size: 7.5pt; text-align: center;">
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H1</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H2</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H3</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% IMP</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">PODR.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">PART.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">HONG.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">INSE.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">CALO.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H1</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H2</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% H3</th>
                        <th style="border: 1px solid #000; background-color: #C6E0B4; color: black; font-weight: bold; text-align: center; vertical-align: middle;">PROM.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% IMP</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">PODR.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">PART.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">HONG.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">INSE.</th>
                        <th style="border: 1px solid #000; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">CALO.</th>
                    </tr>
                </thead>
                <tbody>
                    ${t1RowsHtml}
                </tbody>
            </table>

            <!-- Summary Text Block -->
            <div style="font-size: 9pt; margin-bottom: 20px; line-height: 1.4; background-color: #F2F2F2; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                Se registraron un total de <strong>${totalAriesCount}</strong> boletos de ingreso en el sistema Aries para el período seleccionado. 
                De estos, se realizaron <strong>${controlFisicoCount}</strong> análisis físicos en contramuestras, resultando en una diferencia de <strong>${diffCount}</strong> boletos sin control físico.
            </div>

            <!-- Table 2: Desviaciones -->
            <table style="width: 100%; border-collapse: collapse; text-align: center; background-color: #fff;">
                <thead>
                    <tr style="color: white; font-weight: bold; font-size: 8pt; text-align: center;">
                        <th rowspan="2" style="border: 1px solid #000; width: 12%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">TICKET No.</th>
                        <th colspan="7" style="border: 1px solid #000; background-color: #C00000; color: white; font-weight: bold; text-align: center; vertical-align: middle;">VARIACIONES REGISTRADAS (CALIDAD - ARIES)</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 38%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">OBSERVACIÓN</th>
                    </tr>
                    <tr style="color: white; font-weight: bold; font-size: 7.5pt; text-align: center;">
                        <th style="border: 1px solid #000; width: 7%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% HUM</th>
                        <th style="border: 1px solid #000; width: 7%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% IMP</th>
                        <th style="border: 1px solid #000; width: 8%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% PART.</th>
                        <th style="border: 1px solid #000; width: 8%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% INSE.</th>
                        <th style="border: 1px solid #000; width: 8%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% CALO.</th>
                        <th style="border: 1px solid #000; width: 8%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% HONG.</th>
                        <th style="border: 1px solid #000; width: 8%; background-color: #1F4E79; color: white; font-weight: bold; text-align: center; vertical-align: middle;">% PODR.</th>
                    </tr>
                </thead>
                <tbody>
                    ${t2RowsHtml}
                </tbody>
            </table>
        </div>
    `;

    const opt = {
        margin:       [0.4, 0.4, 0.4, 0.4],
        filename:     `Reporte_Calidad_${reportTitleDate}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2.5, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'legal', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(htmlContent).save();
}

function exportAntimicoticoReport() {
    const tbody = document.getElementById('antimicotico-table-body');
    if (!tbody) return;
    
    const allSorted = [...appData.antimicotico].sort((a, b) => new Date(a.FECHA) - new Date(b.FECHA));
    
    let runningBatchStock = 0;
    const calculatedData = {};
    
    allSorted.forEach(row => {
        const dateStr = formatDateReadable(row.FECHA);
        
        let ingreso = Number(row.INGRESO || row.ingreso || 0);
        if (ingreso === 0) {
            let totalKilosDay = 0;
            appData.antimicotico_ingresos.forEach(d => {
                if (formatDateReadable(d.FECHA) === dateStr) {
                    totalKilosDay += Number(d.CANTIDAD_KG || 0);
                }
            });
            ingreso = totalKilosDay;
        }
        
        const totalIni = Number(row.TOTAL_INI || 0);
        const totalFin = Number(row.TOTAL_FIN || 0);
        const consReal = Number(row.CONS_REAL || 0);
        
        let invFinal = Number(row.INV_FINAL || row.inv_final || 0);
        if (invFinal === 0) {
            invFinal = ingreso - consReal;
        }
        
        runningBatchStock = invFinal;
        
        let totalTm = Number(row.TOTAL_TM || row.total_tm || 0);
        if (totalTm === 0 && appData.aries) {
            let totalKilosDay = 0;
            appData.aries.forEach(r => {
                if (formatDateReadable(r.FECHAENTRA) === dateStr) {
                    const isPurchase = Number(r.PESOARTIC) === 1;
                    const isRejected = r.RECHAZA_PS && String(r.RECHAZA_PS).trim().toUpperCase() === 'S';
                    if (isPurchase && isRejected) return;
                    totalKilosDay += Number(r.PESOKILOS || r.CANTKILOSR || 0);
                }
            });
            totalTm = totalKilosDay / 1000;
        }
        
        let pctConsumo = Number(row.PCT_CONSUMO_TM || row.pct_consumo_tm || 0);
        if (pctConsumo === 0 && totalTm > 0) {
            pctConsumo = (consReal / totalTm) * 100;
        }
        
        calculatedData[dateStr] = {
            ingreso,
            invFinal,
            totalTm,
            pctConsumo,
            consReal,
            totalIni,
            totalFin
        };
    });
    
    const startVal = document.getElementById('anti-filter-start').value;
    const endVal = document.getElementById('anti-filter-end').value;
    
    let filtered = [...allSorted];
    if (startVal) {
        const startD = new Date(startVal + 'T00:00:00');
        filtered = filtered.filter(row => new Date(formatDateReadable(row.FECHA) + 'T00:00:00') >= startD);
    }
    if (endVal) {
        const endD = new Date(endVal + 'T23:59:59');
        filtered = filtered.filter(row => new Date(formatDateReadable(row.FECHA) + 'T00:00:00') <= endD);
    }
    
    if (filtered.length === 0) {
        showToast('No hay registros en el rango de fechas seleccionado.', 'warning');
        return;
    }
    
    let tableRowsHtml = '';
    filtered.forEach((row, idx) => {
        const dateStr = formatDateReadable(row.FECHA);
        const calc = calculatedData[dateStr] || {
            ingreso: 0,
            totalIni: Number(row.TOTAL_INI || 0),
            totalFin: Number(row.TOTAL_FIN || 0),
            consReal: Number(row.CONS_REAL || 0),
            totalTm: 0,
            pctConsumo: 0,
            invFinal: 0
        };
        
        const bodegaStr = row["#_DE_BODEGA"] || row.BODEGA || row.bodega || '';
        const realizadoStr = row.REALIZADO_POR || row.realizado_por || row.realizado || '-';
        const observacionStr = row.OBSERVACION || row.observacion || '-';
        
        const rowBgColor = idx % 2 === 0 ? '#ffffff' : '#f9f9f9';
        
        tableRowsHtml += `
            <tr style="height: 24px; background-color: ${rowBgColor};">
                <td style="border: 1px solid #666; text-align: center; padding: 5px; font-size: 7.5pt; font-weight: bold;">${dateStr}</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt;">${calc.ingreso.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt;">${calc.totalIni.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt;">${calc.totalFin.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt; font-weight: bold; background-color: #f2f2f2;">${calc.consReal.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt;">${calc.totalTm.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: center; padding: 5px; font-size: 7.5pt; font-weight: bold; color: #E2001A;">${calc.pctConsumo.toFixed(1)}%</td>
                <td style="border: 1px solid #666; text-align: right; padding: 5px; font-size: 7.5pt; font-weight: bold; color: #0284c7; background-color: #e6f3ff;">${calc.invFinal.toFixed(1)}</td>
                <td style="border: 1px solid #666; text-align: center; padding: 5px; font-size: 7.5pt;">${bodegaStr}</td>
                <td style="border: 1px solid #666; text-align: left; padding: 5px; font-size: 7.5pt; white-space: nowrap;">${realizadoStr}</td>
                <td style="border: 1px solid #666; text-align: left; padding: 5px; font-size: 7.2pt; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${observacionStr}">${observacionStr}</td>
            </tr>
        `;
    });
    
    const htmlContent = `
        <div style="width: 100%; box-sizing: border-box; font-family: Arial, sans-serif; color: #111; font-size: 8.5pt; padding: 10px;">
            <!-- Header Block -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; border-bottom: 2px solid #E2001A;">
                <tr style="height: 65px;">
                    <td style="width: 140px; text-align: left; vertical-align: middle; height: 65px; padding: 0;">
                        <img src="data:image/png;base64,${LOGO_BASE64}" style="width: 125px; height: 47px; display: block; border: none; margin: 0;" />
                    </td>
                    <td style="text-align: center; vertical-align: middle; height: 65px; padding: 0;">
                        <div style="font-size: 13.5pt; font-weight: bold; font-family: 'Century Gothic', Arial, sans-serif; letter-spacing: 0.5px; color: #E2001A; line-height: 1.2;">PRONACA EMISALVA VÍA MANTA / MONTECRISTI</div>
                        <div style="font-size: 9.5pt; font-weight: bold; color: #444; margin-top: 4px; text-transform: uppercase;">
                            CONTROL DE CONSUMO DE ANTIMICÓTICO - PRODUCTO: MAÍZ NACIONAL
                        </div>
                    </td>
                    <td style="width: 140px; height: 65px; padding: 0;"></td>
                </tr>
            </table>

            <!-- Table of Logs -->
            <table style="width: 100%; border-collapse: collapse; margin-top: 5px;">
                <thead>
                    <tr style="color: white;">
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Fecha</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Ingreso</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Lectura Inicial</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Lectura Final</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Consumo Litros</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Total TM</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">%Consumo Lts/TM</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Inv. Final</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;"># de Bodega</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Realizado Por</th>
                        <th style="border: 1px solid #666; padding: 6px 4px; font-size: 7.8pt; text-align: center; text-transform: uppercase; background-color: #E2001A; color: white; font-weight: bold;">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRowsHtml}
                </tbody>
            </table>
            <!-- Signatures Section Removed -->
        </div>
    `;
    
    const opt = {
        margin:       [0.4, 0.4, 0.4, 0.4],
        filename:     `Reporte_Consumo_Antimicotico_${new Date().toISOString().split('T')[0]}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2.5, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(htmlContent).save();
}


// MATRIX DE CONTROLES DASHBOARD
function updateControlsMatrixTable(selectedMonth) {
    if (!selectedMonth) {
        const select = document.getElementById('dashboard-month-filter');
        selectedMonth = select ? select.value : 'all';
    }
    
    let purchaseCount = 0;      // Total compras (OK + rechazados)
    let purchasesOkCount = 0;   // Compras OK (peso_artic === 1 y NO rechazados)
    let transferencesCount = 0; // Transferencias (peso_artic !== 1)
    let rejectedCount = 0;
    
    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr === '-') return;
        if (selectedMonth !== 'all' && !dateStr.startsWith(selectedMonth)) return;
        
        const pesoArtic = Number(row.PESOARTIC);
        const isRejected = row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S';
        
        if (pesoArtic === 1) {
            purchaseCount++;
            if (!isRejected) {
                purchasesOkCount++;
            } else {
                rejectedCount++;
            }
        } else {
            transferencesCount++;
        }
    });

    let contramuestraCount = 0;
    if (appData.contramuestra) {
        appData.contramuestra.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            if (dateStr === '-') return;
            if (selectedMonth === 'all' || dateStr.startsWith(selectedMonth)) {
                contramuestraCount++;
            }
        });
    }

    let antiTeoSum = 0;
    let antiRealSum = 0;
    if (appData.antimicotico) {
        appData.antimicotico.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            if (dateStr === '-') return;
            if (selectedMonth === 'all' || dateStr.startsWith(selectedMonth)) {
                antiTeoSum += parseFloat(row.CONS_TEO || 0);
                antiRealSum += parseFloat(row.CONS_REAL || 0);
            }
        });
    }

    const elFotoCompras = document.getElementById('ctrl-foto-compras');
    const elFotoTransf = document.getElementById('ctrl-foto-transf');
    const elHallazgosTotales = document.getElementById('ctrl-hallazgos-totales');
    const elHallazgosCerrados = document.getElementById('ctrl-hallazgos-cerrados');

    let fotoCompras = 0;
    let fotoTransf = 0;
    let hasStoredFotos = false;

    if (appData.seguimiento_fotografico && appData.seguimiento_fotografico.length > 0) {
        appData.seguimiento_fotografico.forEach(r => {
            const d = formatDateReadable(r.fecha || r.FECHA);
            if (d === '-') return;
            if (selectedMonth === 'all' || d.startsWith(selectedMonth)) {
                fotoCompras += parseInt(r.fotos_compras || 0, 10);
                fotoTransf += parseInt(r.fotos_transf || 0, 10);
                hasStoredFotos = true;
            }
        });
    }

    if (!hasStoredFotos) {
        fotoCompras = elFotoCompras ? parseInt(elFotoCompras.value, 10) || 0 : 50;
        fotoTransf = elFotoTransf ? parseInt(elFotoTransf.value, 10) || 0 : 42;
    } else {
        if (elFotoCompras) elFotoCompras.value = fotoCompras;
        if (elFotoTransf) elFotoTransf.value = fotoTransf;
    }
    const anulados = rejectedCount;
    const hallazgosTotales = elHallazgosTotales ? parseInt(elHallazgosTotales.value, 10) || 0 : 3;
    const hallazgosCerrados = elHallazgosCerrados ? parseInt(elHallazgosCerrados.value, 10) || 0 : 2;
    const hallazgosPendientes = Math.max(0, hallazgosTotales - hallazgosCerrados);

    const pctFotoCompras = purchasesOkCount > 0 ? (fotoCompras / purchasesOkCount) * 100 : 0;
    const pctFotoTransf = transferencesCount > 0 ? (fotoTransf / transferencesCount) * 100 : 0;
    const pctAnulados = purchaseCount > 0 ? (anulados / purchaseCount) * 100 : 0;
    const pctCm = purchasesOkCount > 0 ? (contramuestraCount / purchasesOkCount) * 100 : 0;
    const pctCierre = hallazgosTotales > 0 ? (hallazgosCerrados / hallazgosTotales) * 100 : 0;
    const antiAdherencia = antiTeoSum > 0 ? (antiRealSum / antiTeoSum) * 100 : 100;

    // Calcular Cumplimientos
    const statusFotoCompras = purchasesOkCount === 0 ? 'SIN DATO' : (pctFotoCompras >= 40 ? 'CUMPLE' : 'NO CUMPLE');
    const statusFotoTransf = transferencesCount === 0 ? 'SIN DATO' : (pctFotoTransf >= 40 ? 'CUMPLE' : 'NO CUMPLE');
    const statusAnulados = purchaseCount === 0 ? 'SIN DATO' : 'CUMPLE';
    const statusCm = purchasesOkCount === 0 ? 'SIN DATO' : (pctCm >= 30 ? 'CUMPLE' : 'NO CUMPLE');
    const statusAnti = antiTeoSum === 0 ? 'SIN DATO' : (antiAdherencia >= 90 && antiAdherencia <= 110 ? 'CUMPLE' : 'NO CUMPLE');
    const statusInterno = hallazgosTotales === 0 ? 'CUMPLE' : (pctCierre === 100 ? 'CUMPLE' : 'ALERTA');

    function getPill(status) {
        if (status === 'CUMPLE') return '<span style="display:inline-block; padding:3px 8px; border-radius:4px; font-weight:bold; font-size:0.75rem; text-align:center; background:#10B981; color:white;">CUMPLE</span>';
        if (status === 'NO CUMPLE') return '<span style="display:inline-block; padding:3px 8px; border-radius:4px; font-weight:bold; font-size:0.75rem; text-align:center; background:#EF4444; color:white;">NO CUMPLE</span>';
        if (status === 'ALERTA') return '<span style="display:inline-block; padding:3px 8px; border-radius:4px; font-weight:bold; font-size:0.75rem; text-align:center; background:#f59e0b; color:white;">ALERTA</span>';
        return '<span style="display:inline-block; padding:3px 8px; border-radius:4px; font-weight:bold; font-size:0.75rem; text-align:center; background:#6B7280; color:white;">SIN DATO</span>';
    }

    const tbody = document.getElementById('controls-matrix-tbody');
    if (tbody) {
        tbody.innerHTML = `
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Control fotográfico de compras</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Confirmar el seguimiento del vehículo y la normalidad del proceso de compra.</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">% compras con evidencia completa</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); font-weight: 500;">${fotoCompras} / ${purchasesOkCount} boletos</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);">${pctFotoCompras.toFixed(1)}%</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${getPill(statusFotoCompras)}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Control fotográfico de transferencias</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Confirmar el seguimiento del vehículo durante transferencias y detectar novedades.</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">% transferencias con evidencia completa</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); font-weight: 500;">${fotoTransf} / ${transferencesCount} boletos</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);">${pctFotoTransf.toFixed(1)}%</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${getPill(statusFotoTransf)}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Anulación de tickets</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Identificar tickets anulados, causas, responsables y recurrencias.</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">N° tickets anulados / % sobre emitidos</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); font-weight: 500;">${anulados} boletos</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);">100.0%</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${getPill(statusAnulados)}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Revisión de contramuestras</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Verificar el cumplimiento del muestreo de contramuestras sobre tickets revisados.</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">% tickets con contramuestra revisada</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); font-weight: 500;">${contramuestraCount} / ${purchasesOkCount} boletos</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);">${pctCm.toFixed(1)}%</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${getPill(statusCm)}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Registro consumo antimicótico</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Validar la adherencia entre consumo real y consumo esperado según carros recibidos.</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Consumo real vs teórico / % adherencia</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); font-weight: 500;">${(antiRealSum/1000).toFixed(2)} Tn vs ${(antiTeoSum/1000).toFixed(2)} Tn</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--text-main);">${antiAdherencia.toFixed(1)}%</td>
                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${getPill(statusAnti)}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; color: var(--text-main);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Visita Control Interno</td>
                <td style="padding: 10px; color: var(--text-muted);">Documentar resultados de la visita, hallazgos y avance de acciones.</td>
                <td style="padding: 10px; color: var(--text-muted);">Hallazgos / % cierre</td>
                <td style="padding: 10px; color: var(--text-main); font-weight: 500;">${hallazgosCerrados} cerrados de ${hallazgosTotales}</td>
                <td style="padding: 10px; font-weight: bold; color: var(--text-main);">${pctCierre.toFixed(1)}%</td>
                <td style="padding: 10px;">${getPill(statusInterno)}</td>
            </tr>
        `;
    }
}

function exportDashboardControlsReport() {
    const select = document.getElementById('dashboard-month-filter');
    const selectedMonth = select ? select.value : 'all';
    
    let monthName = 'Todos los Meses';
    if (selectedMonth !== 'all') {
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const parts = selectedMonth.split('-');
        monthName = `${monthNames[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
    }

    let purchaseCount = 0;      // Total compras (OK + rechazados)
    let purchasesOkCount = 0;   // Compras OK (peso_artic === 1 y NO rechazados)
    let transferencesCount = 0; // Transferencias (peso_artic !== 1)
    let rejectedCount = 0;
    let purchasedKilos = 0;
    
    appData.aries.forEach(row => {
        const dateStr = formatDateReadable(row.FECHAENTRA);
        if (dateStr === '-') return;
        if (selectedMonth !== 'all' && !dateStr.startsWith(selectedMonth)) return;
        
        const pesoArtic = Number(row.PESOARTIC);
        const isRejected = row.RECHAZA_PS && String(row.RECHAZA_PS).trim().toUpperCase() === 'S';
        
        if (pesoArtic === 1) {
            purchaseCount++;
            if (!isRejected) {
                purchasesOkCount++;
                purchasedKilos += Number(row.PESOKILOS || row.CANTKILOSR || 0);
            } else {
                rejectedCount++;
            }
        } else {
            transferencesCount++;
        }
    });

    let contramuestraCount = 0;
    if (appData.contramuestra) {
        appData.contramuestra.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            if (dateStr === '-') return;
            if (selectedMonth === 'all' || dateStr.startsWith(selectedMonth)) {
                contramuestraCount++;
            }
        });
    }

    let antiTeoSum = 0;
    let antiRealSum = 0;
    if (appData.antimicotico) {
        appData.antimicotico.forEach(row => {
            const dateStr = formatDateReadable(row.FECHA);
            if (dateStr === '-') return;
            if (selectedMonth === 'all' || dateStr.startsWith(selectedMonth)) {
                antiTeoSum += parseFloat(row.CONS_TEO || 0);
                antiRealSum += parseFloat(row.CONS_REAL || 0);
            }
        });
    }

    const elFotoCompras = document.getElementById('ctrl-foto-compras');
    const elFotoTransf = document.getElementById('ctrl-foto-transf');
    const elHallazgosTotales = document.getElementById('ctrl-hallazgos-totales');
    const elHallazgosCerrados = document.getElementById('ctrl-hallazgos-cerrados');

    let fotoCompras = 0;
    let fotoTransf = 0;
    let hasStoredFotos = false;

    if (appData.seguimiento_fotografico && appData.seguimiento_fotografico.length > 0) {
        appData.seguimiento_fotografico.forEach(r => {
            const d = formatDateReadable(r.fecha || r.FECHA);
            if (d === '-') return;
            if (selectedMonth === 'all' || d.startsWith(selectedMonth)) {
                fotoCompras += parseInt(r.fotos_compras || 0, 10);
                fotoTransf += parseInt(r.fotos_transf || 0, 10);
                hasStoredFotos = true;
            }
        });
    }

    if (!hasStoredFotos) {
        fotoCompras = elFotoCompras ? parseInt(elFotoCompras.value, 10) || 0 : 50;
        fotoTransf = elFotoTransf ? parseInt(elFotoTransf.value, 10) || 0 : 42;
    } else {
        if (elFotoCompras) elFotoCompras.value = fotoCompras;
        if (elFotoTransf) elFotoTransf.value = fotoTransf;
    }
    const anulados = rejectedCount;
    const hallazgosTotales = elHallazgosTotales ? parseInt(elHallazgosTotales.value, 10) || 0 : 3;
    const hallazgosCerrados = elHallazgosCerrados ? parseInt(elHallazgosCerrados.value, 10) || 0 : 2;
    const hallazgosPendientes = Math.max(0, hallazgosTotales - hallazgosCerrados);

    const pctFotoCompras = purchasesOkCount > 0 ? (fotoCompras / purchasesOkCount) * 100 : 0;
    const pctFotoTransf = transferencesCount > 0 ? (fotoTransf / transferencesCount) * 100 : 0;
    const pctAnulados = purchaseCount > 0 ? (anulados / purchaseCount) * 100 : 0;
    const pctCm = purchasesOkCount > 0 ? (contramuestraCount / purchasesOkCount) * 100 : 0;
    const pctCierre = hallazgosTotales > 0 ? (hallazgosCerrados / hallazgosTotales) * 100 : 0;
    const antiAdherencia = antiTeoSum > 0 ? (antiRealSum / antiTeoSum) * 100 : 100;

    // Calcular Cumplimientos
    const statusFotoCompras = purchasesOkCount === 0 ? 'SIN DATO' : (pctFotoCompras >= 40 ? 'CUMPLE' : 'NO CUMPLE');
    const statusFotoTransf = transferencesCount === 0 ? 'SIN DATO' : (pctFotoTransf >= 40 ? 'CUMPLE' : 'NO CUMPLE');
    const statusAnulados = purchaseCount === 0 ? 'SIN DATO' : 'CUMPLE';
    const statusCm = purchasesOkCount === 0 ? 'SIN DATO' : (pctCm >= 30 ? 'CUMPLE' : 'NO CUMPLE');
    const statusAnti = antiTeoSum === 0 ? 'SIN DATO' : (antiAdherencia >= 90 && antiAdherencia <= 110 ? 'CUMPLE' : 'NO CUMPLE');
    const statusInterno = hallazgosTotales === 0 ? 'CUMPLE' : (pctCierre === 100 ? 'CUMPLE' : 'ALERTA');

    function getPdfPill(status) {
        if (status === 'CUMPLE') return '<div style="background-color: #10B981; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7.2pt; width: 68px; text-transform: uppercase; margin: 0 auto;">CUMPLE</div>';
        if (status === 'NO CUMPLE') return '<div style="background-color: #EF4444; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7.2pt; width: 68px; text-transform: uppercase; margin: 0 auto;">NO CUMPLE</div>';
        if (status === 'ALERTA') return '<div style="background-color: #f59e0b; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7.2pt; width: 68px; text-transform: uppercase; margin: 0 auto;">ALERTA</div>';
        return '<div style="background-color: #6B7280; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7.2pt; width: 68px; text-transform: uppercase; margin: 0 auto;">SIN DATO</div>';
    }

    const htmlContent = `
        <div style="width: 100%; box-sizing: border-box; font-family: Arial, sans-serif; color: #111; font-size: 8.5pt; padding: 15px;">
            
            <!-- Header Block -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border-bottom: 2px solid #E2001A;">
                <tr style="height: 65px;">
                    <td style="width: 140px; text-align: left; vertical-align: middle; height: 65px; padding: 0;">
                        <img src="data:image/png;base64,${LOGO_BASE64}" style="width: 125px; height: 47px; display: block; border: none; margin: 0;" />
                    </td>
                    <td style="text-align: center; vertical-align: middle; height: 65px; padding: 0;">
                        <div style="font-size: 15pt; font-weight: bold; font-family: 'Century Gothic', Arial, sans-serif; letter-spacing: 0.5px; color: #E2001A; line-height: 1.2; text-transform: uppercase;">MATRIZ DE SEGUIMIENTO DE CONTROLES</div>
                        <div style="font-size: 9pt; font-weight: bold; color: #555; margin-top: 4px; text-transform: uppercase;">
                            Estructura sugerida para el reporte mensual y trazabilidad de evidencias
                        </div>
                    </td>
                    <td style="width: 140px; text-align: right; vertical-align: middle; height: 65px; padding: 0; color: #E2001A; font-weight: bold; font-size: 9pt; font-family: Arial, sans-serif;">
                        REPORTE MENSUAL<br><span style="font-size: 7.5pt; color: #555; font-weight: normal;">Página 2</span>
                    </td>
                </tr>
            </table>

            <!-- High Level Stats Blocks -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                    <td style="width: 32%; padding: 0;">
                        <div style="border: 1px solid #ddd; border-radius: 6px; padding: 12px; background: #fff; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="font-size: 9pt; color: #666; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">Compras de ${monthName}</div>
                            <div style="font-size: 16pt; font-weight: bold; color: #111;">${(purchasedKilos / 1000).toLocaleString('es-EC', {maximumFractionDigits: 1})} <span style="font-size: 10pt; font-weight: normal; color: #666;">Tn</span></div>
                        </div>
                    </td>
                    <td style="width: 2%;"></td>
                    <td style="width: 32%; padding: 0;">
                        <div style="border: 1px solid #ddd; border-radius: 6px; padding: 12px; background: #fff; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="font-size: 9pt; color: #666; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">Tickets Generados</div>
                            <div style="font-size: 16pt; font-weight: bold; color: #1F4E79;">${purchaseCount}</div>
                        </div>
                    </td>
                    <td style="width: 2%;"></td>
                    <td style="width: 32%; padding: 0;">
                        <div style="border: 1px solid #ddd; border-radius: 6px; padding: 12px; background: #fff; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="font-size: 9pt; color: #666; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">Antimicótico Consumido</div>
                            <div style="font-size: 16pt; font-weight: bold; color: #375623;">${(antiRealSum / 1000).toLocaleString('es-EC', {maximumFractionDigits: 2})} <span style="font-size: 10pt; font-weight: normal; color: #666;">Tn</span></div>
                        </div>
                    </td>
                </tr>
            </table>

            <!-- Red Bar -->
            <div style="background-color: #E2001A; color: white; padding: 8px 12px; font-weight: bold; font-size: 9.5pt; border-radius: 4px 4px 0 0; text-transform: uppercase; font-family: Arial, sans-serif; letter-spacing: 0.5px;">
                Matriz de indicadores y criterios de revisión
            </div>

            <!-- Table of Matrix -->
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; margin-bottom: 20px; background-color: #fff; text-align: left;">
                <thead>
                    <tr style="background-color: #7030A0; color: white; font-weight: bold; font-size: 8.5pt;">
                        <th style="border: 1px solid #ddd; padding: 8px 10px; width: 20%;">ACTIVIDAD</th>
                        <th style="border: 1px solid #ddd; padding: 8px 10px; width: 28%;">OBJETIVO / QUÉ SE REVISA</th>
                        <th style="border: 1px solid #ddd; padding: 8px 10px; width: 20%;">INDICADOR</th>
                        <th style="border: 1px solid #ddd; padding: 8px 10px; text-align: center; width: 14%;">VALOR PUNTUAL</th>
                        <th style="border: 1px solid #ddd; padding: 8px 10px; text-align: center; width: 10%;">PORCENTAJE</th>
                        <th style="border: 1px solid #ddd; padding: 8px 10px; text-align: center; width: 8%;">ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="height: 35px; background-color: #ffffff;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Control fotográfico de compras
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Confirmar el seguimiento del vehículo y la normalidad del proceso de compra.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">% compras con evidencia completa</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500;">
                            ${fotoCompras} / ${purchasesOkCount}
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            ${pctFotoCompras.toFixed(1)}%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusFotoCompras)}
                        </td>
                    </tr>
                    <tr style="height: 35px; background-color: #f9f9f9;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Control fotográfico de transferencias
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Confirmar el seguimiento del vehículo durante transferencias y detectar novedades.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">% transferencias con evidencia completa</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500;">
                            ${fotoTransf} / ${transferencesCount}
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            ${pctFotoTransf.toFixed(1)}%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusFotoTransf)}
                        </td>
                    </tr>
                    <tr style="height: 35px; background-color: #ffffff;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Anulación de tickets
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Identificar tickets anulados, causas, responsables y recurrencias.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">N° tickets anulados / % sobre emitidos</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500;">
                            ${anulados}
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            100.0%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusAnulados)}
                        </td>
                    </tr>
                    <tr style="height: 35px; background-color: #f9f9f9;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Revisión de contramuestras
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Verificar el cumplimiento del muestreo de contramuestras sobre tickets revisados.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">% tickets con contramuestra revisada</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500;">
                            ${contramuestraCount} / ${purchasesOkCount}
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            ${pctCm.toFixed(1)}%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusCm)}
                        </td>
                    </tr>
                    <tr style="height: 35px; background-color: #ffffff;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Registro consumo antimicótico
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Validar la adherencia entre consumo real y consumo esperado según carros recibidos.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">Consumo real vs teórico / % adherencia</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500; font-size: 7.5pt;">
                            ${(antiRealSum/1000).toFixed(2)} Tn vs ${(antiTeoSum/1000).toFixed(2)} Tn
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            ${antiAdherencia.toFixed(1)}%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusAnti)}
                        </td>
                    </tr>
                    <tr style="height: 35px; background-color: #f9f9f9;">
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-weight: bold; font-size: 8pt; vertical-align: middle; color: #333;">
                            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#E2001A; margin-right:8px; vertical-align:middle;"></span>Visita Control Interno
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #444; vertical-align: middle;">Documentar resultados de la visita, hallazgos y avance de acciones.</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 7.8pt; color: #555; vertical-align: middle;">Hallazgos / % cierre</td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; text-align: center; vertical-align: middle; color: #333; font-weight: 500;">
                            ${hallazgosCerrados} cerrados de ${hallazgosTotales}
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; font-size: 8pt; font-weight: bold; text-align: center; vertical-align: middle; color: #111;">
                            ${pctCierre.toFixed(1)}%
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px 10px; vertical-align: middle; text-align: center;">
                            ${getPdfPill(statusInterno)}
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Bottom Cards Grid (Explicaciones y Semáforo) -->
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <!-- Lectura Ejecutiva -->
                    <td style="width: 49%; padding: 0; vertical-align: top;">
                        <div style="border: 1px solid #e1b4b9; background-color: #fcf1f2; border-radius: 6px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); min-height: 160px;">
                            <div style="color: #900; font-weight: bold; font-size: 8.5pt; text-transform: uppercase; margin-bottom: 8px; font-family: Arial, sans-serif;">LECTURA EJECUTIVA SUGERIDA</div>
                            <ul style="margin: 0; padding-left: 14px; font-size: 7.5pt; color: #555; line-height: 1.55;">
                                <li style="margin-bottom: 4px;"><strong>Fotográficos:</strong> Controlar la cobertura de evidencias por compras y transferencias.</li>
                                <li style="margin-bottom: 4px;"><strong>Tickets:</strong> Monitorear cantidad anulada, causas y responsables.</li>
                                <li style="margin-bottom: 4px;"><strong>Contramuestras:</strong> Comparar el porcentaje revisado frente a la meta establecida.</li>
                                <li style="margin-bottom: 4px;"><strong>Antimicótico:</strong> Validar adherencia entre consumo real y consumo esperado.</li>
                                <li style="margin-bottom: 0;"><strong>Control Interno:</strong> Revisar hallazgos, responsables, fechas compromiso y cierre.</li>
                            </ul>
                        </div>
                    </td>
                    <td style="width: 2%;"></td>
                    <!-- Semáforo Visual -->
                    <td style="width: 49%; padding: 0; vertical-align: top;">
                        <div style="border: 1px solid #b6e2d3; background-color: #f0fbf7; border-radius: 6px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); min-height: 160px;">
                            <div style="color: #0d5c3a; font-weight: bold; font-size: 8.5pt; text-transform: uppercase; margin-bottom: 8px; font-family: Arial, sans-serif;">SEMÁFORO VISUAL (CRITERIOS)</div>
                            
                            <table style="width: 100%; border-collapse: collapse; font-size: 7.5pt; color: #555;">
                                <tr style="height: 26px;">
                                    <td style="width: 75px; padding: 2px 0;">
                                        <div style="background-color: #10B981; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7pt; width: 68px; text-transform: uppercase;">CUMPLE</div>
                                    </td>
                                    <td style="padding: 2px 5px; vertical-align: middle; color: #444;">Dentro de la meta o criterio definido.</td>
                                </tr>
                                <tr style="height: 26px;">
                                    <td style="padding: 2px 0;">
                                        <div style="background-color: #EF4444; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7pt; width: 68px; text-transform: uppercase;">NO CUMPLE</div>
                                    </td>
                                    <td style="padding: 2px 5px; vertical-align: middle; color: #444;">Desviación crítica o falta de evidencia.</td>
                                </tr>
                                <tr style="height: 26px;">
                                    <td style="padding: 2px 0;">
                                        <div style="background-color: #f59e0b; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7pt; width: 68px; text-transform: uppercase;">ALERTA</div>
                                    </td>
                                    <td style="padding: 2px 5px; vertical-align: middle; color: #444;">Desviación que requiere seguimiento.</td>
                                </tr>
                                <tr style="height: 26px;">
                                    <td style="padding: 2px 0;">
                                        <div style="background-color: #6B7280; color: white; font-weight: bold; text-align: center; border-radius: 4px; padding: 3px 0; font-size: 7pt; width: 68px; text-transform: uppercase;">SIN DATO</div>
                                    </td>
                                    <td style="padding: 2px 5px; vertical-align: middle; color: #444;">Información pendiente de cargar.</td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    `;

    const opt = {
        margin:       [0.4, 0.4, 0.4, 0.4],
        filename:     `Reporte_Matriz_Seguimiento_Controles_${monthName.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2.5, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(htmlContent).save();
}


// ==============================================================================
// MÓDULO DE SEGUIMIENTO FOTOGRÁFICO (COMPRAS Y TRANSFERENCIAS)
// ==============================================================================

function initializeFotograficoControls() {
    // 1. Obtener todas las fechas con camiones registrados en Aries
    const datesWithTrucks = new Set();
    appData.aries.forEach(row => {
        const d = formatDateReadable(row.FECHAENTRA);
        if (d && d !== '-') datesWithTrucks.add(d);
    });

    const enabledDates = Array.from(datesWithTrucks).sort((a, b) => new Date(b) - new Date(a));
    const dateInput = document.getElementById('foto-fecha');
    if (!dateInput) return;

    if (flatpickrFotoInstance) {
        flatpickrFotoInstance.destroy();
    }

    const defaultDate = enabledDates[0] ? new Date(enabledDates[0] + 'T12:00:00') : new Date();

    flatpickrFotoInstance = flatpickr("#foto-fecha", {
        dateFormat: "Y-m-d",
        defaultDate: defaultDate,
        enable: enabledDates.length > 0 ? enabledDates.map(d => new Date(d + 'T12:00:00')) : undefined,
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
            }
        },
        onChange: function(selectedDates, dateStr) {
            onFotograficoDateChange(dateStr);
        }
    });

    // Vincular inputs numéricos a recálculo en tiempo real
    document.querySelectorAll('.foto-calc-input').forEach(input => {
        input.oninput = updateFotograficoDayCalculations;
    });

    // Cargar fecha por defecto
    const initialDateStr = enabledDates[0] || new Date().toISOString().split('T')[0];
    onFotograficoDateChange(initialDateStr);

    populateFotograficoMonthFilter();
}

function populateFotograficoMonthFilter() {
    const select = document.getElementById('foto-history-month');
    if (!select) return;

    const monthsSet = new Set();
    if (appData.seguimiento_fotografico) {
        appData.seguimiento_fotografico.forEach(r => {
            const d = formatDateReadable(r.fecha || r.FECHA);
            if (d && d !== '-') monthsSet.add(d.substring(0, 7));
        });
    }
    appData.aries.forEach(r => {
        const d = formatDateReadable(r.FECHAENTRA);
        if (d && d !== '-') monthsSet.add(d.substring(0, 7));
    });

    const sortedMonths = Array.from(monthsSet).sort().reverse();
    const currentVal = select.value || 'all';

    select.innerHTML = '<option value="all">Todos los Meses</option>';
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    sortedMonths.forEach(m => {
        const parts = m.split('-');
        const name = `${monthNames[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = name;
        select.appendChild(opt);
    });

    select.value = currentVal;
}

function onFotograficoDateChange(dateStr) {
    if (!dateStr) return;

    // Calcular camiones de Compras (pesoartic === 1) y Transferencias (pesoartic !== 1) de ese día
    let comprasTrucks = 0;
    let transfTrucks = 0;

    appData.aries.forEach(row => {
        if (formatDateReadable(row.FECHAENTRA) === dateStr) {
            const pesoArtic = Number(row.PESOARTIC);
            if (pesoArtic === 1) {
                comprasTrucks++;
            } else {
                transfTrucks++;
            }
        }
    });

    const elTotalCompras = document.getElementById('foto-total-compras');
    const elTotalTransf = document.getElementById('foto-total-transf');
    if (elTotalCompras) elTotalCompras.value = comprasTrucks;
    if (elTotalTransf) elTotalTransf.value = transfTrucks;

    // Buscar si ya existe un registro guardado para este día
    const existing = (appData.seguimiento_fotografico || []).find(r => formatDateReadable(r.fecha || r.FECHA) === dateStr);
    const badge = document.getElementById('foto-status-badge');

    if (existing) {
        document.getElementById('foto-count-compras').value = existing.fotos_compras || 0;
        document.getElementById('foto-count-transf').value = existing.fotos_transf || 0;
        if (existing.responsable) document.getElementById('foto-responsable').value = existing.responsable;
        document.getElementById('foto-obs').value = existing.observacion || '';
        
        if (badge) {
            badge.innerText = 'Registrado en Supabase';
            badge.style.background = '#dcfce7';
            badge.style.color = '#15803d';
        }
    } else {
        document.getElementById('foto-count-compras').value = 0;
        document.getElementById('foto-count-transf').value = 0;
        document.getElementById('foto-obs').value = '';
        
        if (badge) {
            badge.innerText = 'Nuevo Registro';
            badge.style.background = '#e2e8f0';
            badge.style.color = '#475569';
        }
    }

    updateFotograficoDayCalculations();
}

function updateFotograficoDayCalculations() {
    const totalCompras = parseInt(document.getElementById('foto-total-compras').value, 10) || 0;
    const fotosCompras = parseInt(document.getElementById('foto-count-compras').value, 10) || 0;
    const totalTransf = parseInt(document.getElementById('foto-total-transf').value, 10) || 0;
    const fotosTransf = parseInt(document.getElementById('foto-count-transf').value, 10) || 0;

    const pctCompras = totalCompras > 0 ? (fotosCompras / totalCompras) * 100 : 0;
    const pctTransf = totalTransf > 0 ? (fotosTransf / totalTransf) * 100 : 0;

    const badgeCompras = document.getElementById('foto-badge-compras');
    if (badgeCompras) {
        badgeCompras.innerText = `${pctCompras.toFixed(1)}% ${pctCompras >= 40 ? '✓ Cumple' : '✗ No Cumple'}`;
        badgeCompras.style.background = pctCompras >= 40 ? '#dcfce7' : '#fee2e2';
        badgeCompras.style.color = pctCompras >= 40 ? '#15803d' : '#b91c1c';
        if (totalCompras === 0) {
            badgeCompras.innerText = 'Sin Camiones';
            badgeCompras.style.background = '#f1f5f9';
            badgeCompras.style.color = '#64748b';
        }
    }

    const badgeTransf = document.getElementById('foto-badge-transf');
    if (badgeTransf) {
        badgeTransf.innerText = `${pctTransf.toFixed(1)}% ${pctTransf >= 40 ? '✓ Cumple' : '✗ No Cumple'}`;
        badgeTransf.style.background = pctTransf >= 40 ? '#dcfce7' : '#fee2e2';
        badgeTransf.style.color = pctTransf >= 40 ? '#15803d' : '#b91c1c';
        if (totalTransf === 0) {
            badgeTransf.innerText = 'Sin Camiones';
            badgeTransf.style.background = '#f1f5f9';
            badgeTransf.style.color = '#64748b';
        }
    }
}

function saveSeguimientoFotografico() {
    const dateStr = document.getElementById('foto-fecha').value;
    if (!dateStr) {
        showToast('Seleccione una fecha de operación válida.', 'warning');
        return;
    }

    const totalCompras = parseInt(document.getElementById('foto-total-compras').value, 10) || 0;
    const fotosCompras = parseInt(document.getElementById('foto-count-compras').value, 10) || 0;
    const totalTransf = parseInt(document.getElementById('foto-total-transf').value, 10) || 0;
    const fotosTransf = parseInt(document.getElementById('foto-count-transf').value, 10) || 0;

    const pctCompras = totalCompras > 0 ? (fotosCompras / totalCompras) * 100 : 0;
    const pctTransf = totalTransf > 0 ? (fotosTransf / totalTransf) * 100 : 0;

    const responsable = document.getElementById('foto-responsable').value.trim() || 'Karen Quijije';
    const observacion = document.getElementById('foto-obs').value.trim();

    const payload = {
        fecha: dateStr,
        compras_total: totalCompras,
        fotos_compras: fotosCompras,
        pct_compras: Number(pctCompras.toFixed(2)),
        transf_total: totalTransf,
        fotos_transf: fotosTransf,
        pct_transf: Number(pctTransf.toFixed(2)),
        responsable: responsable,
        observacion: observacion
    };

    const loader = document.getElementById('sync-loader');
    if (loader) {
        document.getElementById('sync-loader-title').innerText = 'Guardando Seguimiento Fotográfico...';
        document.getElementById('sync-loader-msg').innerText = 'Sincronizando con Supabase en la nube.';
        loader.classList.add('active');
    }

    fetch(`${SUPABASE_URL}/rest/v1/seguimiento_fotografico`, {
        method: 'POST',
        headers: {
            ...SUPABASE_HEADERS,
            'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
    })
    .then(async res => {
        if (!res.ok) {
            const errJson = await res.json().catch(() => ({}));
            throw new Error(errJson.message || `Error HTTP ${res.status}`);
        }
        if (loader) loader.classList.remove('active');
        showToast('Seguimiento fotográfico guardado con éxito en Supabase', 'success');

        // Actualizar datos locales de inmediato
        const existingIdx = (appData.seguimiento_fotografico || []).findIndex(r => formatDateReadable(r.fecha || r.FECHA) === dateStr);
        if (existingIdx !== -1) {
            appData.seguimiento_fotografico[existingIdx] = payload;
        } else {
            appData.seguimiento_fotografico.unshift(payload);
        }

        updateFotograficoKPIs();
        renderFotograficoTrendChart();
        renderFotograficoTable();
        updateControlsMatrixTable();
    })
    .catch(err => {
        if (loader) loader.classList.remove('active');
        console.error("Error al guardar seguimiento fotográfico:", err);
        showToast('Error al guardar en Supabase: ' + err.message, 'danger');
    });
}

function updateFotograficoKPIs() {
    const list = appData.seguimiento_fotografico || [];
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    let mesFotosCompras = 0;
    let mesTotalCompras = 0;
    let mesFotosTransf = 0;
    let mesTotalTransf = 0;
    let diasCount = 0;

    list.forEach(r => {
        const d = formatDateReadable(r.fecha || r.FECHA);
        if (d && d.startsWith(currentMonth)) {
            mesFotosCompras += parseInt(r.fotos_compras || 0, 10);
            mesTotalCompras += parseInt(r.compras_total || 0, 10);
            mesFotosTransf += parseInt(r.fotos_transf || 0, 10);
            mesTotalTransf += parseInt(r.transf_total || 0, 10);
            diasCount++;
        }
    });

    const pctCompras = mesTotalCompras > 0 ? (mesFotosCompras / mesTotalCompras) * 100 : 0;
    const pctTransf = mesTotalTransf > 0 ? (mesFotosTransf / mesTotalTransf) * 100 : 0;

    const elValCompras = document.getElementById('kpi-foto-compras-mes');
    const elSubCompras = document.getElementById('kpi-foto-compras-sub');
    if (elValCompras) elValCompras.innerText = `${mesFotosCompras} / ${mesTotalCompras}`;
    if (elSubCompras) elSubCompras.innerText = `${pctCompras.toFixed(1)}% cumplimiento (${pctCompras >= 40 ? 'Cumple' : 'Bajo meta'})`;

    const elValTransf = document.getElementById('kpi-foto-transf-mes');
    const elSubTransf = document.getElementById('kpi-foto-transf-sub');
    if (elValTransf) elValTransf.innerText = `${mesFotosTransf} / ${mesTotalTransf}`;
    if (elSubTransf) elSubTransf.innerText = `${pctTransf.toFixed(1)}% cumplimiento (${pctTransf >= 40 ? 'Cumple' : 'Bajo meta'})`;

    const elDias = document.getElementById('kpi-foto-dias-reg');
    if (elDias) elDias.innerText = list.length;
}

function renderFotograficoTrendChart() {
    const canvas = document.getElementById('fotograficoTrendChart');
    if (!canvas) return;

    if (charts.fotoTrend) charts.fotoTrend.destroy();

    const list = [...(appData.seguimiento_fotografico || [])].sort((a, b) => {
        const da = new Date(a.fecha || a.FECHA);
        const db = new Date(b.fecha || b.FECHA);
        return da - db;
    });

    if (list.length === 0) {
        const ctx = canvas.getContext('2d');
        charts.fotoTrend = new Chart(ctx, {
            type: 'line',
            data: { labels: ['Sin datos'], datasets: [] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'No hay registros de fotos para graficar' }
                }
            }
        });
        return;
    }

    const labels = list.map(r => formatDateReadable(r.fecha || r.FECHA));
    const dataCompras = list.map(r => parseFloat(r.pct_compras || 0));
    const dataTransf = list.map(r => parseFloat(r.pct_transf || 0));
    const targetLine = list.map(() => 40); // Meta 40%

    const ctx = canvas.getContext('2d');
    charts.fotoTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '% Cumplimiento Compras',
                    data: dataCompras,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2.5,
                    fill: false,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#10B981'
                },
                {
                    label: '% Cumplimiento Transferencias',
                    data: dataTransf,
                    borderColor: '#0284c7',
                    backgroundColor: 'rgba(2, 132, 199, 0.1)',
                    borderWidth: 2.5,
                    fill: false,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#0284c7'
                },
                {
                    label: 'Meta Mínima (40%)',
                    data: targetLine,
                    borderColor: '#EF4444',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: val => `${val}%`,
                        color: '#64748b'
                    },
                    grid: { color: 'rgba(226, 232, 240, 0.6)' }
                },
                x: {
                    ticks: { color: '#64748b', maxRotation: 45, minRotation: 45 },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { family: 'Outfit', weight: '600' }, color: '#374151' }
                },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%`
                    }
                }
            }
        }
    });
}

function renderFotograficoTable() {
    const tbody = document.getElementById('fotografico-table-body');
    if (!tbody) return;

    const select = document.getElementById('foto-history-month');
    const selectedMonth = select ? select.value : 'all';

    let list = [...(appData.seguimiento_fotografico || [])];
    if (selectedMonth !== 'all') {
        list = list.filter(r => {
            const d = formatDateReadable(r.fecha || r.FECHA);
            return d && d.startsWith(selectedMonth);
        });
    }

    list.sort((a, b) => new Date(b.fecha || b.FECHA) - new Date(a.fecha || a.FECHA));

    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 24px;">No hay registros fotográficos para el período seleccionado.</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    list.forEach(r => {
        const fecha = formatDateReadable(r.fecha || r.FECHA);
        const comprasFotos = r.fotos_compras || 0;
        const comprasTotal = r.compras_total || 0;
        const pctCompras = parseFloat(r.pct_compras || 0);

        const transfFotos = r.fotos_transf || 0;
        const transfTotal = r.transf_total || 0;
        const pctTransf = parseFloat(r.pct_transf || 0);

        const cumpleCompras = comprasTotal === 0 || pctCompras >= 40;
        const cumpleTransf = transfTotal === 0 || pctTransf >= 40;
        const cumpleGlobal = cumpleCompras && cumpleTransf;

        const badgeGlobal = cumpleGlobal 
            ? '<span style="background: #dcfce7; color: #15803d; padding: 3px 10px; border-radius: 12px; font-weight: 700; font-size: 0.75rem;">CUMPLE</span>'
            : '<span style="background: #fee2e2; color: #b91c1c; padding: 3px 10px; border-radius: 12px; font-weight: 700; font-size: 0.75rem;">NO CUMPLE</span>';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${fecha}</td>
            <td><strong>${comprasFotos}</strong> / ${comprasTotal} camiones</td>
            <td><span style="color: ${pctCompras >= 40 ? '#10B981' : '#EF4444'}; font-weight: 700;">${pctCompras.toFixed(1)}%</span></td>
            <td><strong>${transfFotos}</strong> / ${transfTotal} camiones</td>
            <td><span style="color: ${pctTransf >= 40 ? '#10B981' : '#EF4444'}; font-weight: 700;">${pctTransf.toFixed(1)}%</span></td>
            <td>${badgeGlobal}</td>
            <td>${r.responsable || 'Karen Quijije'}</td>
            <td style="color: var(--text-muted); font-size: 0.8rem;">${r.observacion || '-'}</td>
        `;
        tbody.appendChild(tr);
    });
}

function exportFotograficoReport() {
    showToast('Generando reporte de seguimiento fotográfico...', 'info');
    window.print();
}

// ==============================================================================
// CARGADOR Y SINCRONIZADOR DE EXCEL DIARIO CON SUPABASE
// ==============================================================================

function openExcelSyncModal(mode = 'recepciones') {
    const modal = document.getElementById('excel-sync-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    const previewBox = document.getElementById('sync-preview-box');
    if (previewBox) previewBox.style.display = 'none';
    const pContainer = document.getElementById('sync-progress-bar-container');
    if (pContainer) pContainer.style.display = 'none';
    const btnSync = document.getElementById('btn-execute-sync');
    if (btnSync) btnSync.style.display = 'none';
    const input = document.getElementById('sync-file-input');
    if (input) input.value = '';
    excelSyncParsedData = null;
    lastLoadedSyncWorkbook = null;

    setSyncMode(mode || 'recepciones');
}

function setSyncMode(mode) {
    currentSyncMode = mode || 'recepciones';
    const isRecep = (currentSyncMode === 'recepciones');

    // Actualizar Encabezado del Modal
    const title = document.getElementById('sync-modal-title');
    const icon = document.getElementById('sync-modal-icon');
    const titleText = document.getElementById('sync-modal-title-text');
    if (title) title.style.color = isRecep ? '#EF4444' : '#0284c7';
    if (icon) icon.className = isRecep ? 'fa-solid fa-truck' : 'fa-solid fa-vial';
    if (titleText) titleText.innerText = isRecep ? 'Actualizar Tabla: Recepciones' : 'Actualizar Tabla: Calidad';

    // Actualizar Botones de Pestaña de Modo
    const btnRecep = document.getElementById('btn-mode-recep');
    const btnCalid = document.getElementById('btn-mode-calid');
    if (btnRecep) {
        btnRecep.style.background = isRecep ? '#EF4444' : 'transparent';
        btnRecep.style.color = isRecep ? '#ffffff' : '#64748b';
    }
    if (btnCalid) {
        btnCalid.style.background = isRecep ? 'transparent' : '#0284c7';
        btnCalid.style.color = isRecep ? '#64748b' : '#ffffff';
    }

    // Actualizar Texto Explicativo
    const desc = document.getElementById('sync-modal-desc');
    if (desc) {
        desc.style.borderLeft = isRecep ? '4px solid #EF4444' : '4px solid #0284c7';
        desc.innerHTML = isRecep
            ? 'Suba el archivo de <strong>Recepciones / Aries</strong>. El sistema extraerá los boletos de pesaje y los guardará directamente en la tabla <strong style="color: #EF4444;">recepciones</strong> de Supabase.'
            : 'Suba el archivo de <strong>Calidad / Laboratorio</strong>. El sistema extraerá los análisis y los guardará directamente en la tabla <strong style="color: #0284c7;">calidad</strong> de Supabase.';
    }

    // Actualizar Zona DropZone
    const dropZone = document.getElementById('sync-drop-zone');
    const dropIcon = document.getElementById('sync-drop-icon');
    const dropText = document.getElementById('sync-drop-text');
    if (dropZone) {
        dropZone.style.border = isRecep ? '2px dashed #EF4444' : '2px dashed #0284c7';
        dropZone.style.background = isRecep ? 'rgba(239, 68, 68, 0.03)' : 'rgba(2, 132, 199, 0.03)';
    }
    if (dropIcon) dropIcon.style.color = isRecep ? '#EF4444' : '#0284c7';
    if (dropText) dropText.innerText = isRecep ? 'Arrastre aquí el archivo Excel de Recepciones' : 'Arrastre aquí el archivo Excel de Calidad';

    // Actualizar Botón de Ejecutar
    const btnSync = document.getElementById('btn-execute-sync');
    const btnSyncText = document.getElementById('btn-execute-sync-text');
    if (btnSync) btnSync.style.background = isRecep ? '#EF4444' : '#0284c7';
    if (btnSyncText) btnSyncText.innerText = isRecep ? 'Guardar en Tabla Recepciones' : 'Guardar en Tabla Calidad';

    // Barra de Progreso
    const pFill = document.getElementById('sync-progress-fill');
    if (pFill) pFill.style.background = isRecep ? '#EF4444' : '#0284c7';

    // Si ya teníamos un archivo cargado en memoria, reprocesarlo con el nuevo modo seleccionado
    if (lastLoadedSyncWorkbook) {
        processExcelSyncWorkbook(lastLoadedSyncWorkbook.workbook, lastLoadedSyncWorkbook.fileName);
    }
}

function closeExcelSyncModal() {
    const modal = document.getElementById('excel-sync-modal');
    if (modal) modal.style.display = 'none';
}

function closeExcelSyncModalOnOuterClick(e) {
    if (e.target && e.target.id === 'excel-sync-modal') {
        closeExcelSyncModal();
    }
}

function handleSyncFileSelect(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array', cellDates: true });
            lastLoadedSyncWorkbook = { workbook, fileName: file.name };
            processExcelSyncWorkbook(workbook, file.name);
        } catch(err) {
            console.error(err);
            showToast('Error al leer el archivo Excel: ' + err.message, 'danger');
        }
    };
    reader.readAsArrayBuffer(file);
}

function processExcelSyncWorkbook(workbook, fileName) {
    const isRecep = (currentSyncMode === 'recepciones');

    if (isRecep) {
        // Buscar hoja de recepciones
        let ariesSheet = workbook.Sheets['Ingreso Manta'] || workbook.Sheets['Ingreso Balzar'] || workbook.Sheets['Aries'];
        if (!ariesSheet) {
            const sheetNames = workbook.SheetNames || [];
            const matchedName = sheetNames.find(n => /ingreso|aries|recepcion/i.test(n));
            if (matchedName) ariesSheet = workbook.Sheets[matchedName];
            else if (sheetNames.length === 1) ariesSheet = workbook.Sheets[sheetNames[0]];
        }

        if (!ariesSheet) {
            showToast('No se encontró la hoja de Recepciones ("Ingreso Manta", "Ingreso Balzar" o "Aries") en el archivo.', 'warning');
            return;
        }

        const rawAries = XLSX.utils.sheet_to_json(ariesSheet, { defval: null });
        const recepcionesPayload = [];

        rawAries.forEach(r => {
            const ticket = r.TICKETPESO || r.ticketpeso || r['TICKET No.'] || r['Ticket'] || r['TICKET'];
            if (!ticket) return;

            const fEntra = r.FECHAENTRA instanceof Date ? r.FECHAENTRA.toISOString().split('T')[0] : (r.FECHAENTRA ? String(r.FECHAENTRA).substring(0, 10) : null);
            const fSale = r.FECHASALE instanceof Date ? r.FECHASALE.toISOString().split('T')[0] : (r.FECHASALE ? String(r.FECHASALE).substring(0, 10) : null);

            recepcionesPayload.push({
                ticketpeso: Number(ticket),
                fechaentra: fEntra,
                horaentra: r.HORAENTRA ? String(r.HORAENTRA).substring(0, 20) : null,
                fechasale: fSale,
                horasale: r.HORASALE ? String(r.HORASALE).substring(0, 20) : null,
                tituloa: r.TITULOA || null,
                nombrep: r.NOMBREP || null,
                pesobruto: r.PESOBRUTO !== null ? Number(r.PESOBRUTO) : null,
                tara: r.TARA !== null ? Number(r.TARA) : null,
                pesokilos: r.PESOKILOS !== null ? Number(r.PESOKILOS) : null,
                humedadrmp: r.HUMEDADRMP !== null ? Number(r.HUMEDADRMP) : null,
                impurezrmp: r.IMPUREZRMP !== null ? Number(r.IMPUREZRMP) : null,
                hum_real_i: r.HUM_REAL_I !== null ? Number(r.HUM_REAL_I) : null,
                placast: r.PLACAST ? String(r.PLACAST).substring(0, 20) : null,
                guiat: r.GUIAT ? String(r.GUIAT).substring(0, 50) : null,
                nrecepcion: r.NRECEPCION ? Number(r.NRECEPCION) : null,
                pesoartic: r.PESOARTIC !== null ? Number(r.PESOARTIC) : null,
                rechaza_ps: r.RECHAZA_PS ? String(r.RECHAZA_PS).substring(0, 10) : null,
                idsilos: r.IDSILOS ? String(r.IDSILOS).substring(0, 50) : null,
                centro_sap: r.CENTRO_SAP ? String(r.CENTRO_SAP).substring(0, 50) : null
            });
        });

        if (recepcionesPayload.length === 0) {
            showToast('El archivo no contiene boletos válidos con ticket de pesaje.', 'warning');
            return;
        }

        excelSyncParsedData = {
            mode: 'recepciones',
            data: recepcionesPayload,
            fileName: fileName
        };

        const fnEl = document.getElementById('sync-filename');
        if (fnEl) fnEl.innerText = fileName;
        const lblEl = document.getElementById('sync-preview-label');
        if (lblEl) lblEl.innerText = 'Boletos de Recepción detectados:';
        const countEl = document.getElementById('sync-preview-count');
        if (countEl) {
            countEl.innerText = `${recepcionesPayload.length} boletos`;
            countEl.style.color = '#EF4444';
        }
        const statusEl = document.getElementById('sync-status-msg');
        if (statusEl) statusEl.innerHTML = 'Listo para guardar en la tabla <strong style="color: #EF4444;">recepciones</strong> de Supabase.';
        document.getElementById('sync-preview-box').style.display = 'flex';
        document.getElementById('btn-execute-sync').style.display = 'inline-block';

    } else {
        // Buscar hoja de calidad
        let calidadSheet = workbook.Sheets['Calidad'] || workbook.Sheets['Base de Calidad'] || workbook.Sheets['Base Calidad'];
        if (!calidadSheet) {
            const sheetNames = workbook.SheetNames || [];
            const matchedName = sheetNames.find(n => /calidad|laboratorio/i.test(n));
            if (matchedName) calidadSheet = workbook.Sheets[matchedName];
            else if (sheetNames.length === 1) calidadSheet = workbook.Sheets[sheetNames[0]];
        }

        if (!calidadSheet) {
            showToast('No se encontró la hoja de Calidad ("Calidad" o "Base de Calidad") en el archivo.', 'warning');
            return;
        }

        const rawCalidad = XLSX.utils.sheet_to_json(calidadSheet, { defval: null });
        const calidadPayload = [];

        rawCalidad.forEach(r => {
            const ticket = r.TICKETPESO || r.ticketpeso || r['TICKET No.'] || r['Ticket'] || r['TICKET'];
            if (!ticket) return;

            const fEntra = r.FECHAENTRA instanceof Date ? r.FECHAENTRA.toISOString().split('T')[0] : (r.FECHAENTRA ? String(r.FECHAENTRA).substring(0, 10) : null);

            calidadPayload.push({
                ticketpeso: Number(ticket),
                centro_ope: r.CENTRO_OPE || null,
                fechaentra: fEntra,
                horaentra: r.HORAENTRA ? String(r.HORAENTRA).substring(0, 20) : null,
                nom_artic: r.NOM_ARTIC || null,
                nombrep: r.NOMBREP || null,
                placa_vehi: r.PLACA_VEHI ? String(r.PLACA_VEHI).substring(0, 20) : null,
                kg_neto: r.KG_NETO !== null ? Number(r.KG_NETO) : null,
                humedad: r.HUMEDAD !== null ? Number(r.HUMEDAD) : null,
                impureza: r.IMPUREZA !== null ? Number(r.IMPUREZA) : null,
                imp_real: r.IMP_REAL !== null ? Number(r.IMP_REAL) : null,
                partidos: r.PARTIDOS !== null ? Number(r.PARTIDOS) : null,
                insectos: r.INSECTOS !== null ? Number(r.INSECTOS) : null,
                calor: r.CALOR !== null ? Number(r.CALOR) : null,
                hongos: r.HONGOS !== null ? Number(r.HONGOS) : null,
                podridos: r.PODRIDOS !== null ? Number(r.PODRIDOS) : null,
                densidad: r.DENSIDAD !== null ? Number(r.DENSIDAD) : null,
                muestra_1: r.MUESTRA_1 !== null ? Number(r.MUESTRA_1) : null,
                muestra_2: r.MUESTRA_2 !== null ? Number(r.MUESTRA_2) : null,
                muestra_3: r.MUESTRA_3 !== null ? Number(r.MUESTRA_3) : null,
                idsilos: r.IDSILOS ? String(r.IDSILOS).substring(0, 50) : null,
                inspector: r.INSPECTOR || null,
                confirma: r.CONFIRMA || null
            });
        });

        if (calidadPayload.length === 0) {
            showToast('El archivo no contiene filas válidas de análisis de calidad (TICKETPESO).', 'warning');
            return;
        }

        excelSyncParsedData = {
            mode: 'calidad',
            data: calidadPayload,
            fileName: fileName
        };

        const fnEl = document.getElementById('sync-filename');
        if (fnEl) fnEl.innerText = fileName;
        const lblEl = document.getElementById('sync-preview-label');
        if (lblEl) lblEl.innerText = 'Análisis de Calidad detectados:';
        const countEl = document.getElementById('sync-preview-count');
        if (countEl) {
            countEl.innerText = `${calidadPayload.length} análisis`;
            countEl.style.color = '#0284c7';
        }
        const statusEl = document.getElementById('sync-status-msg');
        if (statusEl) statusEl.innerHTML = 'Listo para guardar en la tabla <strong style="color: #0284c7;">calidad</strong> de Supabase.';
        document.getElementById('sync-preview-box').style.display = 'flex';
        document.getElementById('btn-execute-sync').style.display = 'inline-block';
    }
}

async function executeExcelSyncToSupabase() {
    if (!excelSyncParsedData || !excelSyncParsedData.data || excelSyncParsedData.data.length === 0) {
        showToast('No hay datos cargados para sincronizar.', 'warning');
        return;
    }

    const mode = excelSyncParsedData.mode || currentSyncMode;
    const isRecep = (mode === 'recepciones');
    const endpoint = isRecep ? `${SUPABASE_URL}/rest/v1/recepciones` : `${SUPABASE_URL}/rest/v1/calidad`;
    const tableName = isRecep ? 'recepciones' : 'calidad';
    const items = excelSyncParsedData.data;

    const btn = document.getElementById('btn-execute-sync');
    if (btn) btn.disabled = true;

    const pContainer = document.getElementById('sync-progress-bar-container');
    const pFill = document.getElementById('sync-progress-fill');
    const pPct = document.getElementById('sync-progress-pct');
    const pLabel = document.getElementById('sync-progress-label');

    pContainer.style.display = 'flex';
    pFill.style.width = '10%';
    pFill.style.background = isRecep ? '#EF4444' : '#0284c7';
    pPct.innerText = '10%';
    pLabel.innerText = `Preparando ${items.length} registros para tabla ${tableName}...`;

    try {
        const CHUNK_SIZE = 100;
        for (let i = 0; i < items.length; i += CHUNK_SIZE) {
            const chunk = items.slice(i, i + CHUNK_SIZE);
            pLabel.innerText = `Guardando en ${tableName} (${Math.min(i + chunk.length, items.length)} de ${items.length})...`;

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    ...SUPABASE_HEADERS,
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify(chunk)
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Error en Supabase (${tableName}): ${res.status} ${errText || res.statusText}`);
            }

            const progress = 10 + Math.round(((i + chunk.length) / items.length) * 88);
            pFill.style.width = `${progress}%`;
            pPct.innerText = `${progress}%`;
        }

        pFill.style.width = '100%';
        pPct.innerText = '100%';
        pLabel.innerText = '¡Sincronización completada exitosamente!';

        const successMsg = isRecep 
            ? `¡Se sincronizaron con éxito ${items.length} recepciones en Supabase!`
            : `¡Se sincronizaron con éxito ${items.length} análisis de calidad en Supabase!`;
        showToast(successMsg, 'success');

        setTimeout(() => {
            closeExcelSyncModal();
            tryAutoLoadExcel();
        }, 1200);

    } catch(err) {
        console.error("Error en sincronización con Supabase:", err);
        pLabel.innerText = 'Error al sincronizar: ' + err.message;
        pFill.style.background = '#DC2626';
        showToast('Error al sincronizar: ' + err.message, 'danger');
        if (btn) btn.disabled = false;
    }
}
