// DataLoom Professional - Main JS (v8.0 Executive Summaries)

// --- Localization (TR/EN) ---
const translations = {
    en: {
        nav_datasource: "DATA SOURCE", nav_loaded: "Loaded", nav_nofile: "No dataset loaded",
        nav_explore: "EXPLORE & PREP", nav_workspace: "Workspace", nav_overview: "Overview & Insights", nav_dataeditor: "Data Editor & Prep",
        nav_analytics: "ANALYTICS & ML", nav_distributions: "Distributions", nav_groupby: "Group By Analysis", nav_regression: "Linear Regression", nav_anomaly: "Anomaly Detection", nav_kmeans: "K-Means Clustering",
        status_ready: "Ready", press: "Press", btn_command: "Command", processing: "Processing Data...",
        upload_title: "Import Your Dataset", upload_desc: "Drag and drop your CSV file here, or click to browse files from your computer.", upload_btn: "Browse Files",
        key_discoveries: "Key Discoveries (Auto-Insights)", processing_insights: "Processing insights...",
        stat_rows: "Total Rows", stat_cols: "Total Columns", stat_missing: "Missing Values", schema_title: "Dataset Schema",
        th_colname: "Column Name", th_datatype: "Data Type", th_missing: "Missing Values", th_unique: "Unique Values",
        fe_title: "Feature Engineering", fe_col1: "Col 1", fe_op: "Op", fe_col2: "Col 2", fe_newname: "New Col Name", btn_create: "Create",
        search_placeholder: "Search data...", btn_fillna: "Fill NAs (Mean)", btn_dropna: "Drop NAs",
        grid_title: "Data Grid", grid_hint: "(Click headers to sort)", grid_footer: "Showing top 100 rows",
        dist_sel_title: "Variable Selection", dist_sel_label: "Select Column to Analyze", dist_min: "Min", dist_max: "Max", dist_mean: "Mean", dist_chart_title: "Distribution Analysis", btn_export: "Export",
        gb_cat: "Group By (Categorical)", gb_agg: "Aggregation", gb_num: "Target (Numeric)", gb_chart_title: "Group Analysis Result",
        agg_avg: "Average", agg_sum: "Sum", agg_min: "Min", agg_max: "Max",
        corr_x: "X Axis (Independent)", corr_y: "Y Axis (Dependent)", corr_pearson: "Pearson (r)", corr_chart_title: "Scatter Plot & Linear Regression Trendline",
        out_col: "Select Numeric Column", out_thresh: "Z-Score Threshold", btn_find: "Find Anomalies", out_found: "Anomalies Found", out_chart_title: "Anomaly Highlight Scatter (Index vs Value)",
        out_exec_title: "Top Extreme Cases (Raw Data)", out_th_row: "Row Index", out_th_val: "Value", out_th_z: "Z-Score", out_th_status: "Status",
        km_x: "Feature 1 (X Axis)", km_y: "Feature 2 (Y Axis)", km_k: "Clusters (K)", btn_run_ml: "Run ML", km_chart_title: "Clustering Results",
        km_exec_title: "Segment Profiles (Executive Summary)", km_th_seg: "Segment", km_th_persona: "Persona / Profile", km_th_size: "Size",
        cmd_placeholder: "Search actions, tabs, or features (Ctrl+K)"
    },
    tr: {
        nav_datasource: "VERİ KAYNAĞI", nav_loaded: "Yüklendi", nav_nofile: "Veri seti yüklenmedi",
        nav_explore: "KEŞFET & HAZIRLA", nav_workspace: "Çalışma Alanı", nav_overview: "Özet ve Temel Keşifler", nav_dataeditor: "Veri Düzenleyici",
        nav_analytics: "ANALİTİK & ML", nav_distributions: "Dağılımlar", nav_groupby: "Kırılım (Group By)", nav_regression: "Doğrusal Regresyon", nav_anomaly: "Anomali Tespiti", nav_kmeans: "K-Means Kümeleme",
        status_ready: "Hazır", press: "Kısayol:", btn_command: "Komutlar", processing: "Veri İşleniyor...",
        upload_title: "Veri Setinizi Yükleyin", upload_desc: "CSV dosyanızı buraya sürükleyip bırakın veya bilgisayarınızdan seçmek için tıklayın.", upload_btn: "Dosya Seç",
        key_discoveries: "Temel Keşifler (Otomatik Yorumlama)", processing_insights: "Yorumlamalar işleniyor...",
        stat_rows: "Toplam Satır", stat_cols: "Toplam Kolon", stat_missing: "Eksik (Kayıp) Veriler", schema_title: "Veri Şeması",
        th_colname: "Kolon Adı", th_datatype: "Veri Tipi", th_missing: "Eksik Değerler", th_unique: "Benzersiz Sayı",
        fe_title: "Özellik Üretimi (Feature Eng)", fe_col1: "1. Kolon", fe_op: "İşlem", fe_col2: "2. Kolon", fe_newname: "Yeni Kolon Adı", btn_create: "Oluştur",
        search_placeholder: "Verilerde ara...", btn_fillna: "Boşlukları Doldur (Ortalama)", btn_dropna: "Bozuk Satırları Sil",
        grid_title: "Veri Tablosu", grid_hint: "(Sıralamak için başlıklara tıklayın)", grid_footer: "İlk 100 satır gösteriliyor",
        dist_sel_title: "Değişken Seçimi", dist_sel_label: "Analiz edilecek kolonu seçin", dist_min: "Minimum", dist_max: "Maksimum", dist_mean: "Ortalama", dist_chart_title: "Dağılım Analizi", btn_export: "İndir",
        gb_cat: "Grupla (Kategorik)", gb_agg: "Hesaplama Türü", gb_num: "Hedef Kolon (Sayısal)", gb_chart_title: "Grup Analizi Sonucu",
        agg_avg: "Ortalama", agg_sum: "Toplam", agg_min: "En Düşük", agg_max: "En Yüksek",
        corr_x: "X Ekseni (Bağımsız)", corr_y: "Y Ekseni (Bağımlı)", corr_pearson: "Korelasyon (r)", corr_chart_title: "Dağılım Grafiği & Trend Çizgisi",
        out_col: "Sayısal Kolon Seçin", out_thresh: "Z-Skoru Eşiği", btn_find: "Anomalileri Bul", out_found: "Bulunan Anomali Sayısı", out_chart_title: "Anomali Vurgulu Dağılım",
        out_exec_title: "Tespit Edilen En Uç Hatalı Kayıtlar (Ham Veri)", out_th_row: "Satır No", out_th_val: "Gerçek Değer", out_th_z: "Z-Skoru", out_th_status: "Durum",
        km_x: "Özellik 1 (X Ekseni)", km_y: "Özellik 2 (Y Ekseni)", km_k: "Küme Sayısı (K)", btn_run_ml: "Yapay Zekayı Çalıştır", km_chart_title: "Kümeleme Sonuçları",
        km_exec_title: "Müşteri/Segment Profilleri (Yönetici Özeti)", km_th_seg: "Segment Adı", km_th_persona: "Kimlik / Profil (Persona)", km_th_size: "Kayıt Sayısı",
        cmd_placeholder: "Aksiyon, sekme veya özellik ara (Ctrl+K)"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key]; 
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-lang-tr').classList.toggle('active', lang === 'tr');
    
    // Re-generate dynamic text and charts when language changes
    if(window.parsedData && window.parsedData.length > 0) {
        window.generateSmartInsights();
        window.renderAllCharts();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('btn-lang-tr').addEventListener('click', () => setLanguage('tr'));

    const fileInput = document.getElementById('file-input');
    const dropZone = document.getElementById('drop-zone');
    const loadingOverlay = document.getElementById('loading-overlay');
    
    const fileInfo = document.getElementById('file-info');
    const noFileInfo = document.getElementById('no-file-info');
    const sidebarFilename = document.getElementById('sidebar-filename');
    const sidebarFilesize = document.getElementById('sidebar-filesize');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const navItems = document.querySelectorAll('.nav-item');
    const appStatus = document.getElementById('app-status');
    const pageTitle = document.getElementById('page-title');

    const statRows = document.getElementById('stat-rows');
    const statCols = document.getElementById('stat-cols');
    const statMissing = document.getElementById('stat-missing');
    const schemaTbody = document.getElementById('schema-tbody');
    const discoveryList = document.getElementById('discovery-list');

    const columnSelect = document.getElementById('column-select');
    const varDetails = document.getElementById('var-details');
    const varMin = document.getElementById('var-min');
    const varMax = document.getElementById('var-max');
    const varMean = document.getElementById('var-mean');
    const distInsight = document.getElementById('dist-insight');
    const distInsightText = document.getElementById('dist-insight-text');

    const groupCatSelect = document.getElementById('group-cat-select');
    const groupAggSelect = document.getElementById('group-agg-select');
    const groupNumSelect = document.getElementById('group-num-select');
    const gbInsight = document.getElementById('gb-insight');
    const gbInsightText = document.getElementById('gb-insight-text');

    const corrXSelect = document.getElementById('corr-x-select');
    const corrYSelect = document.getElementById('corr-y-select');
    const corrValue = document.getElementById('corr-value');
    const corrInsight = document.getElementById('corr-insight');
    const corrInsightText = document.getElementById('corr-insight-text');
    const corrExecSummary = document.getElementById('corr-exec-summary');
    const corrExecText = document.getElementById('corr-exec-text');

    const kmeansXSelect = document.getElementById('kmeans-x-select');
    const kmeansYSelect = document.getElementById('kmeans-y-select');
    const kmeansKInput = document.getElementById('kmeans-k-input');
    const btnRunKmeans = document.getElementById('btn-run-kmeans');
    const kmInsight = document.getElementById('km-insight');
    const kmInsightText = document.getElementById('km-insight-text');
    const kmExecSummary = document.getElementById('km-exec-summary');
    const kmExecTbody = document.getElementById('km-exec-tbody');
    const kmThX = document.getElementById('km-th-x');
    const kmThY = document.getElementById('km-th-y');

    const rawDataThead = document.getElementById('raw-data-thead');
    const rawDataTbody = document.getElementById('raw-data-tbody');
    const dataSearch = document.getElementById('data-search');
    const btnDropNa = document.getElementById('btn-drop-na');
    const btnFillMean = document.getElementById('btn-fill-mean');

    const feCol1 = document.getElementById('fe-col1');
    const feCol2 = document.getElementById('fe-col2');
    const feOp = document.getElementById('fe-op');
    const feNewName = document.getElementById('fe-newname');
    const btnCreateFeature = document.getElementById('btn-create-feature');

    const outlierSelect = document.getElementById('outlier-select');
    const outlierThreshold = document.getElementById('outlier-threshold');
    const btnRunOutlier = document.getElementById('btn-run-outlier');
    const outlierCount = document.getElementById('outlier-count');
    const outInsight = document.getElementById('out-insight');
    const outInsightText = document.getElementById('out-insight-text');
    const outExecSummary = document.getElementById('out-exec-summary');
    const outExecTbody = document.getElementById('out-exec-tbody');

    // --- Header Actions ---
    const btnExportPdf = document.getElementById('btn-export-pdf');
    if (btnExportPdf) {
        btnExportPdf.addEventListener('click', () => {
            // Un-hide all insights/sections that have content so they print
            if(window.parsedData && window.parsedData.length > 0) {
                window.print();
            } else {
                alert(currentLang === 'tr' ? 'Önce bir veri seti yüklemelisiniz.' : 'Please load a dataset first.');
            }
        });
    }

    // --- State Variables ---
    window.parsedData = [];
    let headers = [];
    let columnStats = {};
    let sortState = { col: null, asc: true };
    let distChart = null, scatterChart = null, groupByChartInstance = null, kmeansChartInstance = null, outlierChartInstance = null;

    function getChartTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        return {
            bgBar: isDark ? 'rgba(94, 129, 172, 0.8)' : 'rgba(14, 165, 233, 0.8)', 
            bgScatter: isDark ? 'rgba(94, 129, 172, 0.5)' : 'rgba(14, 165, 233, 0.5)',
            borderScatter: isDark ? '#5e81ac' : '#0ea5e9',
            lineReg: isDark ? '#bf616a' : '#ef4444',
            grid: isDark ? '#27272a' : '#e5e7eb',
            text: isDark ? '#d1d5db' : '#4b5563',
            canvasBg: 'transparent',
            outlier: isDark ? '#bf616a' : '#ef4444',
            normal: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
        };
    }
    
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.register({
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
            const {ctx} = chart; ctx.save(); ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || getChartTheme().canvasBg; ctx.fillRect(0, 0, chart.width, chart.height); ctx.restore();
        }
    });

    window.renderAllCharts = function() {
        Chart.defaults.color = getChartTheme().text;
        if(window.parsedData && window.parsedData.length > 0) {
            if(distChart) window.updateDistribution();
            if(groupByChartInstance) window.updateGroupBy();
            if(scatterChart) window.updateCorrelation();
            if(outlierChartInstance) window.runOutlierDetection();
            if(kmeansChartInstance) window.runKMeans();
        }
    }

    navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('disabled')) return;
            navItems.forEach(n => n.classList.remove('active')); btn.classList.add('active');
            pageTitle.textContent = btn.querySelector('span').textContent;
            const targetId = btn.getAttribute('data-target');
            document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
            setTimeout(() => { document.getElementById(targetId).classList.remove('hidden'); }, 10);
            if(targetId === 'distribution-view' && distChart) distChart.update();
            if(targetId === 'groupby-view' && groupByChartInstance) groupByChartInstance.update();
            if(targetId === 'correlation-view' && scatterChart) scatterChart.update();
            if(targetId === 'outlier-view' && outlierChartInstance) outlierChartInstance.update();
            if(targetId === 'kmeans-view' && kmeansChartInstance) kmeansChartInstance.update();
        });
    });

    dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', e => { e.preventDefault(); dropZone.classList.remove('dragover'); if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]); });
    fileInput.addEventListener('change', e => { if (e.target.files.length) handleFile(e.target.files[0]); });
    removeFileBtn.addEventListener('click', resetApp);

    function handleFile(file) {
        if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) { alert(currentLang === 'tr' ? 'Geçersiz format. Lütfen CSV yükleyin.' : 'Invalid format. Please upload a CSV.'); return; }
        loadingOverlay.classList.remove('hidden'); appStatus.textContent = translations[currentLang].processing;

        setTimeout(() => {
            Papa.parse(file, {
                header: true, dynamicTyping: true, skipEmptyLines: true,
                complete: function(results) {
                    if (results.data && results.data.length > 0) {
                        processData(results.data, results.meta.fields, file.name, file.size);
                    } else { alert(currentLang === 'tr' ? 'Dosya boş.' : 'File is empty.'); loadingOverlay.classList.add('hidden'); appStatus.textContent = translations[currentLang].status_ready; }
                },
                error: function(err) { alert((currentLang === 'tr' ? 'Hata: ' : 'Error: ') + err.message); loadingOverlay.classList.add('hidden'); appStatus.textContent = translations[currentLang].status_ready; }
            });
        }, 800);
    }

    function processData(data, fields, filename, filesize) {
        parsedData = data; headers = fields;
        analyzeColumns();
        
        if(filename) {
            noFileInfo.classList.add('hidden'); fileInfo.classList.remove('hidden');
            sidebarFilename.textContent = filename; sidebarFilesize.textContent = (filesize / 1024).toFixed(1) + ' KB';
        }
        appStatus.textContent = translations[currentLang].nav_loaded;
        navItems.forEach(n => n.classList.remove('disabled'));

        populateOverview(); populateDropdowns(); renderDataGrid(parsedData);
        window.generateSmartInsights();
        loadingOverlay.classList.add('hidden');
        if(filename) document.getElementById('nav-overview').click();

        if(headers.length > 0) { columnSelect.value = headers[0]; updateDistribution(); }
        const numCols = headers.filter(h => columnStats[h].type === 'Numeric');
        const catCols = headers.filter(h => columnStats[h].type === 'Categorical');
        if (catCols.length > 0 && numCols.length > 0) { groupCatSelect.value = catCols[0]; groupNumSelect.value = numCols[0]; updateGroupBy(); }
        if (numCols.length >= 2) { 
            corrXSelect.value = numCols[0]; corrYSelect.value = numCols[1]; updateCorrelation();
            kmeansXSelect.value = numCols[0]; kmeansYSelect.value = numCols[1]; 
        }
        if(numCols.length > 0) { outlierSelect.value = numCols[0]; }
    }

    function resetApp() {
        parsedData = []; headers = []; columnStats = {}; sortState = { col: null, asc: true };
        fileInfo.classList.add('hidden'); noFileInfo.classList.remove('hidden'); fileInput.value = ''; appStatus.textContent = translations[currentLang].status_ready;
        navItems.forEach(n => { if (n.getAttribute('data-target') !== 'upload-view') n.classList.add('disabled'); });
        navItems[0].click();
    }

    function analyzeColumns() {
        columnStats = {}; let totalMissing = 0;
        headers.forEach(header => {
            let values = parsedData.map(row => row[header]);
            let nonNullValues = values.filter(v => v !== null && v !== undefined && v !== '');
            let missingCount = values.length - nonNullValues.length;
            totalMissing += missingCount;
            let uniqueValues = new Set(nonNullValues);
            let isNumeric = nonNullValues.length > 0 && nonNullValues.every(v => typeof v === 'number');
            
            let stats = { type: isNumeric ? 'Numeric' : 'Categorical', missing: missingCount, uniqueCount: uniqueValues.size, values: nonNullValues };
            if (isNumeric) {
                let bounds = getMinMax(nonNullValues);
                stats.min = bounds.min; stats.max = bounds.max;
                let sum = nonNullValues.reduce((a, b) => a + b, 0); stats.mean = sum / nonNullValues.length;
                let sqSum = nonNullValues.reduce((a, b) => a + Math.pow(b - stats.mean, 2), 0);
                stats.stdDev = Math.sqrt(sqSum / nonNullValues.length);
            }
            columnStats[header] = stats;
        });
        statMissing.textContent = totalMissing.toLocaleString();
        if(totalMissing > 0) statMissing.classList.add('text-danger'); else { statMissing.classList.remove('text-danger'); statMissing.classList.add('text-success'); }
    }

    function getMinMax(arr) {
        let min = Infinity, max = -Infinity;
        for(let i=0; i<arr.length; i++) {
            if(arr[i] < min) min = arr[i];
            if(arr[i] > max) max = arr[i];
        }
        return {min, max};
    }

    function calcCorrelationDirect(colX, colY, data) {
        let n = 0, sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
        let len = data.length;
        for(let i=0; i<len; i++) {
            let x = data[i][colX], y = data[i][colY];
            if(typeof x === 'number' && typeof y === 'number') {
                n++; sumX+=x; sumY+=y; sumXY+=x*y; sumX2+=x*x; sumY2+=y*y;
            }
        }
        if(n===0) return 0;
        let denom = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY))); 
        return denom === 0 ? 0 : ((n * sumXY) - (sumX * sumY)) / denom;
    }

    window.generateSmartInsights = function() {
        discoveryList.innerHTML = '';
        let missingCols = headers.filter(h => columnStats[h].missing > 0).sort((a,b) => columnStats[b].missing - columnStats[a].missing);
        let numCols = headers.filter(h => columnStats[h].type === 'Numeric');
        
        let bestCorr = 0; let bestPair = null;
        let colsToCheck = numCols.slice(0, 30); // Prevent freeze on large dimensional data
        for(let i=0; i<colsToCheck.length; i++) {
            for(let j=i+1; j<colsToCheck.length; j++) {
                let r = Math.abs(calcCorrelationDirect(colsToCheck[i], colsToCheck[j], parsedData));
                if(r > bestCorr && r < 0.99) { bestCorr = r; bestPair = [colsToCheck[i], colsToCheck[j]]; }
            }
        }

        let outText = '';
        if (currentLang === 'tr') {
            if(missingCols.length > 0) outText += `<li><strong>Eksik Veri Tespiti:</strong> En çok eksik veri <strong>${missingCols[0]}</strong> kolonunda (${columnStats[missingCols[0]].missing} satır). Temizleme sekmesini kullanabilirsiniz.</li>`;
            else outText += `<li><strong>Veri Kalitesi:</strong> Harika! Veri setinizde hiç eksik değer yok. Tamamen analize hazır.</li>`;
            if(bestPair && bestCorr > 0.5) outText += `<li><strong>Güçlü İlişki:</strong> <strong>${bestPair[0]}</strong> ve <strong>${bestPair[1]}</strong> arasında oldukça güçlü bir ilişki var (r=${bestCorr.toFixed(2)}). Regresyon sekmesinden inceleyin.</li>`;
            else if (bestPair) outText += `<li><strong>Zayıf İlişkiler:</strong> Veri setindeki sayısal değerler arasında çok güçlü ve güvenilir bir korelasyon (trend) bulunamadı.</li>`;
            outText += `<li><strong>Boyut:</strong> Sistemde anlık olarak işlenen veri büyüklüğü: ${headers.length} değişken ve ${parsedData.length} kayıt.</li>`;
        } else {
            if(missingCols.length > 0) outText += `<li><strong>Missing Data Detected:</strong> Column <strong>${missingCols[0]}</strong> has the most missing values (${columnStats[missingCols[0]].missing} rows). Consider using the Data Prep tab.</li>`;
            else outText += `<li><strong>Data Quality:</strong> Excellent! Your dataset contains zero missing values. Ready for analysis.</li>`;
            if(bestPair && bestCorr > 0.5) outText += `<li><strong>Strong Correlation:</strong> There is a significant relationship between <strong>${bestPair[0]}</strong> and <strong>${bestPair[1]}</strong> (r=${bestCorr.toFixed(2)}). Check the Linear Regression tab.</li>`;
            else if (bestPair) outText += `<li><strong>Weak Trends:</strong> No highly significant linear correlations were found between the numeric columns.</li>`;
            outText += `<li><strong>Dataset Size:</strong> You are actively processing ${headers.length} dimensions across ${parsedData.length} records.</li>`;
        }
        discoveryList.innerHTML = outText;
    };

    function renderDataGrid(dataToRender) {
        if (!dataToRender || dataToRender.length === 0) {
            rawDataThead.innerHTML = ''; rawDataTbody.innerHTML = `<tr><td class="text-center p-4">${currentLang === 'tr' ? 'Veri bulunamadı' : 'No data available'}</td></tr>`; return;
        }
        let theadHtml = '<tr>';
        headers.forEach(h => {
            let sortIcon = sortState.col === h ? (sortState.asc ? '▲' : '▼') : '';
            theadHtml += `<th onclick="window.sortData('${h}')" style="cursor:pointer" class="hover:bg-hover">${h} <span class="text-xs text-muted">${sortIcon}</span></th>`;
        });
        theadHtml += '</tr>'; rawDataThead.innerHTML = theadHtml;

        const limit = Math.min(100, dataToRender.length);
        let tbodyHtml = '';
        for (let i = 0; i < limit; i++) {
            let row = dataToRender[i]; tbodyHtml += '<tr>';
            headers.forEach(h => {
                let val = row[h];
                if (val === null || val === undefined || val === '') val = `<span class="text-danger"><i>null</i></span>`;
                else if (typeof val === 'number') val = `<span class="text-accent">${val.toFixed(2)}</span>`;
                tbodyHtml += `<td>${val}</td>`;
            });
            tbodyHtml += '</tr>';
        }
        rawDataTbody.innerHTML = tbodyHtml;
    }

    window.sortData = function(col) {
        if (sortState.col === col) sortState.asc = !sortState.asc; else { sortState.col = col; sortState.asc = true; }
        let sorted = [...parsedData].sort((a, b) => {
            let valA = a[col]; let valB = b[col];
            if (valA === null || valA === undefined) return sortState.asc ? 1 : -1;
            if (valB === null || valB === undefined) return sortState.asc ? -1 : 1;
            if (typeof valA === 'number' && typeof valB === 'number') return sortState.asc ? valA - valB : valB - valA;
            valA = String(valA).toLowerCase(); valB = String(valB).toLowerCase();
            if (valA < valB) return sortState.asc ? -1 : 1;
            if (valA > valB) return sortState.asc ? 1 : -1;
            return 0;
        });
        renderDataGrid(sorted);
    };

    dataSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) { renderDataGrid(parsedData); return; }
        const filtered = parsedData.filter(row => {
            return headers.some(h => { let val = row[h]; return val !== null && val !== undefined && String(val).toLowerCase().includes(query); });
        });
        renderDataGrid(filtered);
    });

    btnDropNa.addEventListener('click', () => {
        parsedData = parsedData.filter(row => headers.every(h => row[h] !== null && row[h] !== undefined && row[h] !== ''));
        processData(parsedData, headers, sidebarFilename.textContent, 0);
    });

    btnFillMean.addEventListener('click', () => {
        let numCols = headers.filter(h => columnStats[h].type === 'Numeric');
        parsedData.forEach(row => {
            numCols.forEach(col => { if (row[col] === null || row[col] === undefined || row[col] === '') row[col] = columnStats[col].mean; });
        });
        processData(parsedData, headers, sidebarFilename.textContent, 0);
    });

    btnCreateFeature.addEventListener('click', () => {
        const c1 = feCol1.value; const c2 = feCol2.value; const op = feOp.value; const newName = feNewName.value.trim();
        if(!c1 || !c2 || !newName) return;
        if(headers.includes(newName)) { alert(currentLang === 'tr' ? 'Bu kolon adı zaten var!' : 'Column name already exists!'); return; }
        parsedData.forEach(row => {
            let v1 = row[c1]; let v2 = row[c2]; let res = null;
            if(typeof v1 === 'number' && typeof v2 === 'number') {
                if(op === 'add') res = v1 + v2;
                else if(op === 'sub') res = v1 - v2;
                else if(op === 'mul') res = v1 * v2;
                else if(op === 'div') res = v2 !== 0 ? v1 / v2 : null;
            }
            row[newName] = res;
        });
        headers.push(newName);
        processData(parsedData, headers, sidebarFilename.textContent, 0);
        document.getElementById('nav-data').click();
    });

    function populateOverview() {
        statRows.textContent = parsedData.length.toLocaleString(); statCols.textContent = headers.length;
        let schemaHtml = '';
        headers.forEach(h => {
            let s = columnStats[h];
            let typeBadge = s.type === 'Numeric' ? `<span style="color:var(--accent); border:1px solid rgba(94, 129, 172,0.3); background:rgba(94, 129, 172,0.1); padding:2px 6px; border-radius:4px; font-size:10px;">NUM</span>` : `<span style="color:var(--text-muted); border:1px solid var(--border-focus); background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px; font-size:10px;">CAT</span>`;
            schemaHtml += `<tr><td class="font-semibold" style="color:var(--text-primary)">${h}</td><td>${typeBadge}</td><td class="${s.missing>0?'text-danger':''}">${s.missing}</td><td>${s.uniqueCount}</td></tr>`;
        });
        schemaTbody.innerHTML = schemaHtml;
    }

    function populateDropdowns() {
        let allOptions = '<option value="">...</option>'; headers.forEach(h => allOptions += `<option value="${h}">${h}</option>`);
        columnSelect.innerHTML = allOptions;
        let catOptions = ''; let numOptions = '';
        headers.forEach(h => {
            if (columnStats[h].type === 'Categorical') catOptions += `<option value="${h}">${h}</option>`;
            if (columnStats[h].type === 'Numeric') numOptions += `<option value="${h}">${h}</option>`;
        });
        groupCatSelect.innerHTML = catOptions || '<option value="">...</option>'; groupNumSelect.innerHTML = numOptions || '<option value="">...</option>';
        corrXSelect.innerHTML = numOptions || '<option value="">...</option>'; corrYSelect.innerHTML = numOptions || '<option value="">...</option>';
        kmeansXSelect.innerHTML = numOptions || '<option value="">...</option>'; kmeansYSelect.innerHTML = numOptions || '<option value="">...</option>';
        outlierSelect.innerHTML = numOptions || '<option value="">...</option>';
        feCol1.innerHTML = numOptions || '<option value="">...</option>'; feCol2.innerHTML = numOptions || '<option value="">...</option>';
    }

    // --- Analytics Logics ---

    window.updateDistribution = function() {
        const col = columnSelect.value; if (!col) { distInsight.classList.add('hidden'); return; }
        const stats = columnStats[col]; distInsight.classList.remove('hidden');

        if (stats.type === 'Numeric') { 
            varDetails.classList.remove('hidden'); varMin.textContent = stats.min.toFixed(2); varMax.textContent = stats.max.toFixed(2); varMean.textContent = stats.mean.toFixed(2); 
            let range = stats.max - stats.min;
            if(currentLang === 'tr') distInsightText.innerHTML = `<strong>${col}</strong> değişkenine ait analiz tamamlandı. Verilerin merkez noktası (ortalama) <strong>${stats.mean.toFixed(2)}</strong> seviyesinde. En düşük değer <strong>${stats.min.toFixed(2)}</strong> iken, en yüksek değer <strong>${stats.max.toFixed(2)}</strong> olarak ölçüldü. Toplam <strong>${range.toFixed(2)}</strong> birimlik geniş bir açıklıkta dağılan bu veriler, sistemin genel varyansı hakkında önemli yapısal ipuçları sunuyor.`;
            else distInsightText.innerHTML = `Analysis complete for <strong>${col}</strong>. The dataset's center point (mean) is situated at <strong>${stats.mean.toFixed(2)}</strong>. Values span broadly from a minimum of <strong>${stats.min.toFixed(2)}</strong> to a maximum of <strong>${stats.max.toFixed(2)}</strong> (a total spread of ${range.toFixed(2)} units). This wide distribution provides crucial structural clues about the system's overall variance.`;
        } else { 
            varDetails.classList.add('hidden'); 
            let counts = {}; let maxCount = 0; let topCat = "";
            for(let i=0; i<stats.values.length; i++) {
                let v = stats.values[i];
                counts[v] = (counts[v] || 0) + 1;
                if(counts[v] > maxCount) { maxCount = counts[v]; topCat = v; }
            }
            let topCount = maxCount; let percent = ((topCount/stats.values.length)*100).toFixed(1);
            if(currentLang === 'tr') distInsightText.innerHTML = `<strong>${col}</strong> kategorik değişkeni analiz edildi. Veri setinde en baskın ve dominant kategori <strong>'${topCat}'</strong> olarak belirlendi. Bu kategori tek başına ${topCount} kez tekrar ederek tüm verinin <strong>%${percent}</strong>'lik aslan payını oluşturuyor. Karar mekanizmalarında bu segmentin ağırlığını merkeze almanız stratejik bir avantaj sağlayacaktır.`;
            else distInsightText.innerHTML = `Categorical analysis of <strong>${col}</strong> reveals that <strong>'${topCat}'</strong> is the most dominant segment. Appearing ${topCount} times, it single-handedly accounts for a massive <strong>${percent}%</strong> share of the entire dataset. Prioritizing this segment in your strategic decision-making will yield the highest impact.`;
        }

        if(distChart) distChart.destroy(); const ctx = document.getElementById('distributionChart').getContext('2d');
        let labelText = currentLang === 'tr' ? 'Frekans' : 'Freq';
        if (stats.type === 'Numeric') {
            const bins = 20; const step = (stats.max - stats.min) / bins; let counts = new Array(bins).fill(0); let labels = [];
            for(let i=0; i<bins; i++) labels.push(`${(stats.min + i*step).toFixed(1)}`);
            stats.values.forEach(v => { let binIndex = Math.floor((v - stats.min) / step); if (binIndex >= bins) binIndex = bins - 1; counts[binIndex]++; });
            distChart = new Chart(ctx, { type: 'bar', data: { labels: labels, datasets: [{ label: labelText, data: counts, backgroundColor: getChartTheme().bgBar, borderRadius: 4 }] }, options: getChartOptions() });
        } else {
            let counts = {}; stats.values.forEach(v => counts[v] = (counts[v] || 0) + 1); let sortedArr = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 15);
            distChart = new Chart(ctx, { type: 'bar', data: { labels: sortedArr.map(i => i[0]), datasets: [{ label: labelText, data: sortedArr.map(i => i[1]), backgroundColor: getChartTheme().bgBar, borderRadius: 4 }] }, options: { ...getChartOptions(), indexAxis: 'y' } });
        }
    }

    window.updateGroupBy = function() {
        const catCol = groupCatSelect.value; const numCol = groupNumSelect.value; const aggType = groupAggSelect.value;
        if (!catCol || !numCol) { gbInsight.classList.add('hidden'); return; }
        let groups = {};
        parsedData.forEach(row => {
            let catVal = row[catCol]; let numVal = row[numCol];
            if (catVal !== null && catVal !== undefined && typeof numVal === 'number') {
                if(!groups[catVal]) groups[catVal] = { sum: 0, count: 0, min: numVal, max: numVal, vals: [] }; 
                groups[catVal].sum += numVal; groups[catVal].count += 1;
                if(numVal < groups[catVal].min) groups[catVal].min = numVal;
                if(numVal > groups[catVal].max) groups[catVal].max = numVal;
            }
        });
        
        let results = []; 
        for (let key in groups) {
            let val = 0;
            if(aggType === 'avg') val = groups[key].sum / groups[key].count;
            else if(aggType === 'sum') val = groups[key].sum;
            else if(aggType === 'min') val = groups[key].min;
            else if(aggType === 'max') val = groups[key].max;
            results.push({ category: key, val: val });
        }
        results.sort((a,b) => b.val - a.val); let topResults = results.slice(0, 20);
        
        gbInsight.classList.remove('hidden');
        let aggName = aggType.toUpperCase();
        if(topResults.length > 0) {
            if(currentLang === 'tr') gbInsightText.innerHTML = `<strong>${catCol}</strong> kırılımında yapılan detaylı gruplama analizinde, <strong>${numCol}</strong> hedef metriği açısından en başarılı ve kazançlı grubun <strong>'${topResults[0].category}'</strong> olduğu tespit edildi (Hesaplanan Skor: ${topResults[0].val.toFixed(2)}). Bu kategori, rakiplerine kıyasla pazar/veritabanı içinde belirgin bir asimetrik üstünlüğe sahip. İleriye dönük hamlelerinizde bu yüksek performanslı gruba odaklanmanız tavsiye edilir.`;
            else gbInsightText.innerHTML = `Detailed breakdown analysis by <strong>${catCol}</strong> reveals that the most successful group regarding the <strong>${numCol}</strong> metric is clearly <strong>'${topResults[0].category}'</strong> (Calculated Score: ${topResults[0].val.toFixed(2)}). This specific category holds a significant asymmetric advantage over its peers. Focusing future strategies and resource allocations on this high-performing group is highly recommended.`;
        }

        if(groupByChartInstance) groupByChartInstance.destroy(); const ctx = document.getElementById('groupByChart').getContext('2d');
        groupByChartInstance = new Chart(ctx, { type: 'bar', data: { labels: topResults.map(r => r.category), datasets: [{ label: `${aggName} ${numCol}`, data: topResults.map(r => r.val), backgroundColor: getChartTheme().bgBar, borderRadius: 4 }] }, options: getChartOptions() });
    }

    window.updateCorrelation = function() {
        const colX = corrXSelect.value; const colY = corrYSelect.value; 
        if (!colX || !colY) { corrInsight.classList.add('hidden'); corrExecSummary.classList.add('hidden'); return; }
        
        let pairedData = []; let xVals = []; let yVals = [];
        parsedData.forEach(row => { let x = row[colX]; let y = row[colY]; if (typeof x === 'number' && typeof y === 'number') { pairedData.push({x: x, y: y}); xVals.push(x); yVals.push(y); } });
        if (xVals.length === 0) return;
        
        let r = pearsonCorrelation(xVals, yVals); corrValue.textContent = r.toFixed(3);
        
        corrInsight.classList.remove('hidden');
        if (Math.abs(r) > 0.7) {
            corrValue.style.color = 'var(--success)';
            if(currentLang === 'tr') corrInsightText.innerHTML = `<strong>Kuvvetli Doğrusal Etkileşim:</strong> <strong>${colX}</strong> ve <strong>${colY}</strong> değişkenleri arasında son derece yüksek ve belirleyici bir korelasyon (r=${r.toFixed(2)}) saptandı. <strong>${colX}</strong> metriklerindeki büyüme, <strong>${colY}</strong> üzerinde kesin ve güvenilir bir etki yaratıyor. Bu güçlü bağ, gelecekteki davranışları öngören (Predictive AI) modeller inşa etmek için mükemmel bir zemin oluşturur.`;
            else corrInsightText.innerHTML = `<strong>Strong Linear Interaction:</strong> A highly decisive and significant correlation (r=${r.toFixed(2)}) was detected between <strong>${colX}</strong> and <strong>${colY}</strong>. Growth in <strong>${colX}</strong> creates a definitive and reliable impact on <strong>${colY}</strong>. This strong structural bond provides an excellent foundation for building predictive AI forecasting models.`;
        } else if (Math.abs(r) > 0.3) {
            corrValue.style.color = 'var(--text-primary)';
            if(currentLang === 'tr') corrInsightText.innerHTML = `<strong>Zayıf / Orta Derece Etkileşim:</strong> <strong>${colX}</strong> ve <strong>${colY}</strong> arasında gözle görülür ancak kesin olmayan, yumuşak bir trend mevcut. Sistemin karakterini tek başına bu ilişki açıklamıyor olabilir; modele ikincil dış faktörler (gizli değişkenler) de etki ediyor olabilir.`;
            else corrInsightText.innerHTML = `<strong>Moderate Interaction:</strong> There is a noticeable but non-definitive, soft trend existing between <strong>${colX}</strong> and <strong>${colY}</strong>. This relationship alone does not fully explain the system's character; secondary external factors (hidden variables) are likely influencing the model.`;
        } else {
            corrValue.style.color = 'var(--text-muted)';
            if(currentLang === 'tr') corrInsightText.innerHTML = `<strong>Bağlantısızlık (Korelasyon Yok):</strong> Veri bilimi analizlerimize göre <strong>${colX}</strong> ve <strong>${colY}</strong> arasında doğrusal bir etkileşim veya nedensellik bulunamadı. Veriler tamamen bağımsız ve kaotik bir şekilde dağılıyor, birbirleri üzerinde istatistiksel bir itme/çekme kuvvetleri yok.`;
            else corrInsightText.innerHTML = `<strong>No Correlation (Disconnected):</strong> Data science analysis confirms absolutely no linear interaction or causality between <strong>${colX}</strong> and <strong>${colY}</strong>. The data points distribute chaotically and independently, exerting zero statistical push/pull forces on each other.`;
        }

        let n = xVals.length; let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        for (let i = 0; i < n; i++) { sumX += xVals[i]; sumY += yVals[i]; sumXY += xVals[i] * yVals[i]; sumX2 += xVals[i] * xVals[i]; }
        let m = ((n * sumXY) - (sumX * sumY)) / ((n * sumX2) - (sumX * sumX)); let b = (sumY - (m * sumX)) / n;
        
        // Executive Summary Real Life prediction
        corrExecSummary.classList.remove('hidden');
        if (Math.abs(r) > 0.3) {
            if(currentLang === 'tr') corrExecText.innerHTML = `<i data-lucide="target" style="width:14px; height:14px; display:inline-block; vertical-align:-2px; margin-right:4px;"></i> 💡 <strong>Yapay Zeka Öngörüsü:</strong> Doğrusal makine öğrenimi modeline göre, <strong>${colX}</strong> parametresinde planlayacağınız her <strong>1 birimlik</strong> stratejik büyüme, doğrudan <strong>${colY}</strong> tarafında net olarak <strong>${Math.abs(m).toFixed(2)} birimlik</strong> bir ${m > 0 ? '<span class="text-success">YÜKSELİŞİ (KAZANÇ)</span>' : '<span class="text-danger">DÜŞÜŞÜ (KAYIP)</span>'} tetikleyecektir. Yönetimsel kararlar alırken bu matematiksel çarpan etkisini (ROI) dikkate almalısınız.`;
            else corrExecText.innerHTML = `<i data-lucide="target" style="width:14px; height:14px; display:inline-block; vertical-align:-2px; margin-right:4px;"></i> 💡 <strong>AI Prediction:</strong> According to the linear machine learning model, every planned <strong>1 unit</strong> strategic growth in the <strong>${colX}</strong> parameter will directly trigger a net <strong>${Math.abs(m).toFixed(2)} unit</strong> ${m > 0 ? '<span class="text-success">INCREASE (GAIN)</span>' : '<span class="text-danger">DECREASE (LOSS)</span>'} in <strong>${colY}</strong>. Management should heavily factor in this mathematical multiplier effect (ROI) during strategic decision-making.`;
        } else {
            if(currentLang === 'tr') corrExecText.innerHTML = `<i data-lucide="target" style="width:14px; height:14px; display:inline-block; vertical-align:-2px; margin-right:4px;"></i> <strong>Tahmin Motoru:</strong> Algoritma, bu iki parametre arasında mantıklı ve tutarlı bir yatırım/getiri formülü (Aksiyon-Tepki) oluşturamadı.`;
            else corrExecText.innerHTML = `<i data-lucide="target" style="width:14px; height:14px; display:inline-block; vertical-align:-2px; margin-right:4px;"></i> <strong>Prediction Engine:</strong> The AI algorithm could not formulate a logical and consistent action-reaction (investment/return) formula between these two disconnected parameters.`;
        }
        let bounds = getMinMax(xVals);
        let linePoints = [ {x: bounds.min, y: m * bounds.min + b}, {x: bounds.max, y: m * bounds.max + b} ];
        if(scatterChart) scatterChart.destroy(); const ctx = document.getElementById('scatterChart').getContext('2d');
        let displayData = pairedData.length > 2000 ? pairedData.filter((_, i) => i % Math.ceil(pairedData.length/2000) === 0) : pairedData;
        let lblTrend = currentLang === 'tr' ? 'Trend Çizgisi' : 'Trendline';
        let lblData = currentLang === 'tr' ? 'Veri Noktaları' : 'Data';
        scatterChart = new Chart(ctx, { type: 'scatter', data: { datasets: [ { label: lblTrend, data: linePoints, type: 'line', borderColor: getChartTheme().lineReg, borderWidth: 2, pointRadius: 0, fill: false }, { label: lblData, data: displayData, backgroundColor: getChartTheme().bgScatter, pointRadius: 2 } ] }, options: { ...getChartOptions(), scales: { x: { title: { display: true, text: colX, color: getChartTheme().text }, grid:{color:getChartTheme().grid} }, y: { title: { display: true, text: colY, color: getChartTheme().text }, grid:{color:getChartTheme().grid} } } } });
        lucide.createIcons();
    }

    window.runOutlierDetection = function() {
        const col = outlierSelect.value; const thresh = parseFloat(outlierThreshold.value); 
        if (!col || isNaN(thresh)) { outInsight.classList.add('hidden'); outExecSummary.classList.add('hidden'); return; }
        
        const stats = columnStats[col]; if(stats.type !== 'Numeric' || stats.stdDev === 0) return;
        let normalPoints = []; let outlierPoints = []; let anomalies = 0;
        let outlierDetails = [];

        parsedData.forEach((row, i) => {
            let val = row[col];
            if(typeof val === 'number') {
                let z = Math.abs((val - stats.mean) / stats.stdDev);
                if(z > thresh) { 
                    outlierPoints.push({x: i, y: val}); 
                    anomalies++; 
                    outlierDetails.push({row: i+1, val: val, z: z, raw: row});
                } else { normalPoints.push({x: i, y: val}); }
            }
        });
        outlierCount.textContent = anomalies;
        
        outInsight.classList.remove('hidden');
        if(anomalies > 0) {
            let percent = ((anomalies / parsedData.length) * 100).toFixed(2);
            if(currentLang === 'tr') outInsightText.innerHTML = `🚨 <strong>Kritik Anomali Uyarısı:</strong> <strong>${col}</strong> veri kolonunda, normal matematiksel sınırların ve standart sapmanın çok ötesine geçen tam <strong>${anomalies}</strong> adet ekstrem sapma/kriz tespit edildi (Tüm verinin %${percent} kadarı). Grafikteki kırmızı alarm noktalarıyla işaretlenen bu aykırı değerler, veri tabanı hatalarından veya şirket içi istisnai kriz/fırsat durumlarından kaynaklanıyor olabilir. Algoritmanın ayıkladığı alt tablodaki satırları acilen denetlemeniz önerilir.`;
            else outInsightText.innerHTML = `🚨 <strong>Critical Anomaly Alert:</strong> In the <strong>${col}</strong> dataset, the AI has detected exactly <strong>${anomalies}</strong> extreme deviations that severely breach normal mathematical boundaries and standard deviations (accounting for ${percent}% of all data). These severe outliers, highlighted as red dots on the matrix, could stem from critical database entry errors or signify exceptional systemic crisis/opportunity events. It is urgently recommended that you audit the algorithmic breakdown table below.`;
            
            // Executive Summary Table for Outliers
            outExecSummary.classList.remove('hidden');
            outlierDetails.sort((a,b) => b.z - a.z); // Sort by highest Z-score
            let top5 = outlierDetails.slice(0, 5);
            let tBodyHtml = '';
            let lblRow = currentLang === 'tr' ? 'Satır' : 'Row';
            let lblExt = currentLang === 'tr' ? 'EKSTREM' : 'EXTREME';
            top5.forEach(o => {
                tBodyHtml += `<tr>
                    <td>${lblRow} #${o.row}</td>
                    <td class="font-semibold text-danger">${o.val}</td>
                    <td>${o.z.toFixed(2)}</td>
                    <td><span style="color:#bf616a; background:rgba(191,97,106,0.1); padding:2px 6px; border-radius:4px; font-size:10px;">${lblExt}</span></td>
                </tr>`;
            });
            outExecTbody.innerHTML = tBodyHtml;

        } else {
            outExecSummary.classList.add('hidden');
            if(currentLang === 'tr') outInsightText.innerHTML = `<strong>Sorun Yok:</strong> Z-Score = ${thresh} eşiğine göre <strong>${col}</strong> kolonunda anomali bulunamadı.`;
            else outInsightText.innerHTML = `<strong>Clear:</strong> No anomalies detected in <strong>${col}</strong> at a Z-Score threshold of ${thresh}.`;
        }

        if(outlierChartInstance) outlierChartInstance.destroy(); const ctx = document.getElementById('outlierChart').getContext('2d');
        let displayNormals = normalPoints.length > 2000 ? normalPoints.filter((_, i) => i % Math.ceil(normalPoints.length/2000) === 0) : normalPoints;
        let lblOut = currentLang === 'tr' ? 'Anomaliler' : 'Outliers';
        let lblNorm = currentLang === 'tr' ? 'Normal Veri' : 'Normal Data';
        outlierChartInstance = new Chart(ctx, { type: 'scatter', data: { datasets: [ { label: lblOut, data: outlierPoints, backgroundColor: getChartTheme().outlier, pointRadius: 4, pointBorderColor: getChartTheme().canvasBg, pointBorderWidth: 1, z: 10 }, { label: lblNorm, data: displayNormals, backgroundColor: getChartTheme().normal, pointRadius: 2, z: 1 } ]}, options: { ...getChartOptions(), plugins:{legend:{display:true, labels:{color:getChartTheme().text}}, customCanvasBackgroundColor:{color:getChartTheme().canvasBg}}, scales: { x: { title: { display: true, text: currentLang === 'tr' ? 'Satır No' : 'Row Index', color: getChartTheme().text }, grid:{color:getChartTheme().grid} }, y: { title: { display: true, text: col, color: getChartTheme().text }, grid:{color:getChartTheme().grid} } } } });
        lucide.createIcons();
    }

    window.runKMeans = function() {
        const colX = kmeansXSelect.value; const colY = kmeansYSelect.value; const k = parseInt(kmeansKInput.value);
        if (!colX || !colY || isNaN(k) || k < 2) { kmInsight.classList.add('hidden'); kmExecSummary.classList.add('hidden'); return; }
        
        kmThX.textContent = (currentLang === 'tr' ? 'Ort. ' : 'Avg ') + colX;
        kmThY.textContent = (currentLang === 'tr' ? 'Ort. ' : 'Avg ') + colY;

        let dataPoints = []; parsedData.forEach(row => { let x = row[colX]; let y = row[colY]; if (typeof x === 'number' && typeof y === 'number') dataPoints.push({x: x, y: y}); });
        if(dataPoints.length < k) return;
        let xArr = dataPoints.map(p=>p.x), yArr = dataPoints.map(p=>p.y);
        let boundsX = getMinMax(xArr), boundsY = getMinMax(yArr);
        let minX = boundsX.min, maxX = boundsX.max;
        let minY = boundsY.min, maxY = boundsY.max;
        let normData = dataPoints.map(p => ({ origX: p.x, origY: p.y, x: maxX===minX ? 0 : (p.x - minX)/(maxX - minX), y: maxY===minY ? 0 : (p.y - minY)/(maxY - minY) }));
        
        kmInsight.classList.remove('hidden');
        kmExecSummary.classList.add('hidden');
        kmInsightText.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><div class="spinner" style="width:16px; height:16px; border-width:2px;"></div> <span class="text-muted">${currentLang === 'tr' ? 'Yapay Zeka Modeli Eğitiliyor...' : 'Training AI Model...'}</span></div>`;
        
        // Run K-Means synchronously to avoid CORS/file:// Worker issues
        setTimeout(() => {
            let centroids = []; let usedIndices = new Set();
            while(centroids.length < k) { let idx = Math.floor(Math.random() * normData.length); if(!usedIndices.has(idx)) { centroids.push({x: normData[idx].x, y: normData[idx].y}); usedIndices.add(idx); } }
            let clusters = new Array(normData.length).fill(-1); let changed = true; let iter = 0;
            let finalCounts = new Array(k).fill(0);

            while(changed && iter < 50) {
                changed = false;
                for(let i=0; i<normData.length; i++) { 
                    let minDist = Infinity; let bestK = -1; 
                    for(let c=0; c<k; c++) { 
                        let dist = Math.pow(normData[i].x - centroids[c].x, 2) + Math.pow(normData[i].y - centroids[c].y, 2); 
                        if(dist < minDist) { minDist = dist; bestK = c; } 
                    } 
                    if(clusters[i] !== bestK) { clusters[i] = bestK; changed = true; } 
                }
                let newSums = Array.from({length:k}, () => ({x:0, y:0, count:0}));
                for(let i=0; i<normData.length; i++) { let c = clusters[i]; newSums[c].x += normData[i].x; newSums[c].y += normData[i].y; newSums[c].count++; }
                for(let c=0; c<k; c++) { 
                    if(newSums[c].count > 0) centroids[c] = {x: newSums[c].x/newSums[c].count, y: newSums[c].y/newSums[c].count}; 
                    if(!changed) finalCounts[c] = newSums[c].count;
                } 
                iter++;
            }

            kmExecSummary.classList.remove('hidden');

            let unnormCentroids = centroids.map((c, i) => ({ 
                id: i, 
                size: finalCounts[i], 
                percent: ((finalCounts[i] / normData.length) * 100).toFixed(1),
                x: c.x * (maxX - minX) + minX, 
                y: c.y * (maxY - minY) + minY,
                normX: c.x,
                normY: c.y
            }));
            
            let highestYCluster = unnormCentroids.indexOf(unnormCentroids.reduce((max, obj) => (max.y > obj.y) ? max : obj));
            if(currentLang === 'tr') kmInsightText.innerHTML = `🧠 <strong>Akıllı AI Segmentasyonu:</strong> K-Means Makine Öğrenmesi algoritması, verilerinizi gizli davranış örüntülerine göre <strong>${k}</strong> organik segmente (kümeye) ayırdı. En kazançlı ve dikkat çekici kitle olan (Segment ${highestYCluster+1}), <strong>${colY}</strong> hedef metriğinde muazzam bir yoğunlaşmaya (${unnormCentroids[highestYCluster].y.toFixed(2)} ortalama) sahip gruptur. Aşağıdaki yapay zeka tarafından oluşturulmuş yönetici özet tablosunda, her bir grubun pazar/kitle 'Kimliğini' (Persona) stratejik vizyonda inceleyebilirsiniz.`;
            else kmInsightText.innerHTML = `🧠 <strong>Smart AI Segmentation:</strong> The K-Means Machine Learning algorithm has organically partitioned your complex data into <strong>${k}</strong> hidden behavioral segments (clusters). The most lucrative and striking demographic (Segment ${highestYCluster+1}) holds a massive concentration in the <strong>${colY}</strong> target metric (averaging ${unnormCentroids[highestYCluster].y.toFixed(2)}). Review the AI-generated executive summary table below to inspect each group's strategic market 'Persona'.`;

            let clusterColors = ['#5e81ac', '#bf616a', '#a3be8c', '#ebcb8b', '#b48ead', '#d08770', '#88c0d0', '#81a1c1'];
            let tBodyHtml = '';
            unnormCentroids.sort((a,b) => b.y - a.y);
            unnormCentroids.forEach((c, idx) => {
                let persona = idx === 0 ? (currentLang === 'tr' ? 'Lider Segment' : 'Leader Segment') : (idx === unnormCentroids.length - 1 ? (currentLang === 'tr' ? 'Riskli/Zayıf Segment' : 'At-Risk Segment') : (currentLang === 'tr' ? 'Ortalama Gelişim' : 'Average Growth'));
                let clr = clusterColors[c.id % clusterColors.length];
                tBodyHtml += `<tr>
                    <td><span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${clr}; margin-right:6px;"></span> ${currentLang === 'tr' ? 'Küme' : 'Cluster'} ${c.id + 1}</td>
                    <td class="font-semibold text-accent">${persona}</td>
                    <td>${c.size} <span class="text-xs text-muted">(${c.percent}%)</span></td>
                    <td>${c.x.toFixed(2)}</td>
                    <td class="font-semibold">${c.y.toFixed(2)}</td>
                </tr>`;
            });
            kmExecTbody.innerHTML = tBodyHtml;

            let datasets = [];
            let lblCluster = currentLang === 'tr' ? 'Küme' : 'Cluster';
            for(let c=0; c<k; c++) { let points = []; for(let i=0; i<normData.length; i++) { if(clusters[i] === c) points.push({x: normData[i].origX, y: normData[i].origY}); } datasets.push({ label: `${lblCluster} ${c+1}`, data: points, backgroundColor: clusterColors[c%clusterColors.length], pointRadius: 3 }); }
            if(kmeansChartInstance) kmeansChartInstance.destroy(); const ctx = document.getElementById('kmeansChart').getContext('2d');
            kmeansChartInstance = new Chart(ctx, { type: 'scatter', data: { datasets: datasets }, options: { ...getChartOptions(), plugins:{legend:{display:true, labels:{color:getChartTheme().text}}, customCanvasBackgroundColor:{color:getChartTheme().canvasBg}}, scales: { x: { title: { display: true, text: colX, color: getChartTheme().text }, grid:{color:getChartTheme().grid} }, y: { title: { display: true, text: colY, color: getChartTheme().text }, grid:{color:getChartTheme().grid} } } } });
            lucide.createIcons();
        }, 50);
    }

    columnSelect.addEventListener('change', window.updateDistribution);
    groupCatSelect.addEventListener('change', window.updateGroupBy); groupNumSelect.addEventListener('change', window.updateGroupBy); groupAggSelect.addEventListener('change', window.updateGroupBy);
    corrXSelect.addEventListener('change', window.updateCorrelation); corrYSelect.addEventListener('change', window.updateCorrelation);
    btnRunKmeans.addEventListener('click', window.runKMeans);
    btnRunOutlier.addEventListener('click', window.runOutlierDetection);

    function pearsonCorrelation(x, y) {
        let n = x.length; let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
        for (let i = 0; i < n; i++) { sumX += x[i]; sumY += y[i]; sumXY += x[i] * y[i]; sumX2 += x[i] * x[i]; sumY2 += y[i] * y[i]; }
        let denom = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY))); return denom === 0 ? 0 : ((n * sumXY) - (sumX * sumY)) / denom;
    }

    function getChartOptions() { return { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, customCanvasBackgroundColor: { color: getChartTheme().canvasBg } }, scales: { x: { grid: { color: getChartTheme().grid }, ticks: { color: getChartTheme().text } }, y: { grid: { color: getChartTheme().grid }, ticks: { color: getChartTheme().text } } } }; }
    window.downloadChart = function(canvasId, name) { const canvas = document.getElementById(canvasId); if(!canvas) return; const link = document.createElement('a'); link.download = `DataLoom_${name}.png`; link.href = canvas.toDataURL('image/png', 1.0); link.click(); };
});
