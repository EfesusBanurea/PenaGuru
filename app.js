document.addEventListener('DOMContentLoaded', () => {
    // --- Database Simulation (LocalStorage) ---
    const DB_KEY = 'grading_db_v1';
    let db = JSON.parse(localStorage.getItem(DB_KEY));
    if (db && !db.weights) {
        db.weights = { harian: 40, uts: 30, uas: 30 };
    }
    if (db && !db.profile) {
        db.profile = { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" };
    }

    // OVERRIDE & RESET DATA FOR FRESH START (Sesuai Permintaan User)
    const DB_VERSION_FLAG = 'grading_db_v7_10_students';
    if (!localStorage.getItem(DB_VERSION_FLAG)) {
        db = {
            classes: [
                {
                    id: "class_2024_7a", name: "Kelas VII-A", tahunAjaran: "2024/2025", harianCount: 3, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s14",
                    students: [
                        { id: "s1", nis: "24001", nama: "Ahmad Budi Santoso", jk: "L", harian: [85, 90, 88], uts: 85, uas: 90, catatan: "Sangat aktif di kelas." },
                        { id: "s2", nis: "24002", nama: "Citra Kirana", jk: "P", harian: [92, 95, 90], uts: 88, uas: 92, catatan: "Pertahankan!" },
                        { id: "s3", nis: "24003", nama: "Dion Wiyoko", jk: "L", harian: [78, 80, 82], uts: 75, uas: 80, catatan: "Perbanyak latihan soal." },
                        { id: "s4", nis: "24004", nama: "Eka Putri", jk: "P", harian: [88, 85, 90], uts: 89, uas: 90, catatan: "" },
                        { id: "s13", nis: "24005", nama: "Farhan Maulana", jk: "L", harian: [75, 78, 80], uts: 76, uas: 82, catatan: "" },
                        { id: "s14", nis: "24006", nama: "Gita Savitri", jk: "P", harian: [95, 98, 96], uts: 95, uas: 97, catatan: "Teladan kelas." },
                        { id: "s15", nis: "24007", nama: "Hendra Wijaya", jk: "L", harian: [80, 82, 85], uts: 80, uas: 84, catatan: "" },
                        { id: "s16", nis: "24008", nama: "Indah Permatasari", jk: "P", harian: [88, 90, 92], uts: 89, uas: 91, catatan: "Aktif bertanya." },
                        { id: "s30", nis: "24009", nama: "Bagas Satrio", jk: "L", harian: [82, 80, 85], uts: 82, uas: 85, catatan: "" },
                        { id: "s31", nis: "24010", nama: "Alya Nabila", jk: "P", harian: [90, 95, 88], uts: 92, uas: 90, catatan: "" }
                    ]
                },
                {
                    id: "class_2024_7b", name: "Kelas VII-B", tahunAjaran: "2024/2025", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s18",
                    students: [
                        { id: "s5", nis: "24011", nama: "Fajar Siddiq", jk: "L", harian: [60, 65], uts: 70, uas: 75, catatan: "Butuh remedial secepatnya." },
                        { id: "s6", nis: "24012", nama: "Gita Gutawa", jk: "P", harian: [92, 95], uts: 94, uas: 96, catatan: "Sangat rajin mengerjakan PR." },
                        { id: "s17", nis: "24013", nama: "Hasan Basri", jk: "L", harian: [78, 82], uts: 80, uas: 85, catatan: "" },
                        { id: "s18", nis: "24014", nama: "Irene Sukandar", jk: "P", harian: [85, 88], uts: 86, uas: 90, catatan: "Cerdas dalam logika." },
                        { id: "s19", nis: "24015", nama: "Joko Anwar", jk: "L", harian: [70, 75], uts: 72, uas: 78, catatan: "Tingkatkan kehadiran." },
                        { id: "s20", nis: "24016", nama: "Kirana Larasati", jk: "P", harian: [90, 92], uts: 91, uas: 94, catatan: "" },
                        { id: "s28", nis: "24017", nama: "Tukul Arwana", jk: "L", harian: [50, 60], uts: 65, uas: 70, catatan: "Harus bimbingan ekstra." },
                        { id: "s32", nis: "24018", nama: "Dian Sastrowardoyo", jk: "P", harian: [92, 95], uts: 95, uas: 98, catatan: "Bagus sekali." },
                        { id: "s33", nis: "24019", nama: "Angga Yunanda", jk: "L", harian: [85, 80], uts: 82, uas: 85, catatan: "" },
                        { id: "s34", nis: "24020", nama: "Raline Shah", jk: "P", harian: [88, 90], uts: 89, uas: 92, catatan: "" }
                    ]
                },
                {
                    id: "class_2023_8a", name: "Kelas VIII-A", tahunAjaran: "2023/2024", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s9",
                    students: [
                        { id: "s7", nis: "23001", nama: "Iqbal Ramadhan", jk: "L", harian: [88, 90], uts: 85, uas: 90, catatan: "Memiliki minat baca yang tinggi." },
                        { id: "s8", nis: "23002", nama: "Jihan Audy", jk: "P", harian: [70, 75], uts: 78, uas: 82, catatan: "Sering mengantuk." },
                        { id: "s9", nis: "23003", nama: "Kevin Julio", jk: "L", harian: [92, 88], uts: 90, uas: 95, catatan: "Ketua kelas yang bertanggung jawab." },
                        { id: "s21", nis: "23004", nama: "Luna Maya", jk: "P", harian: [85, 86], uts: 88, uas: 90, catatan: "" },
                        { id: "s22", nis: "23005", nama: "Mario Maurer", jk: "L", harian: [75, 78], uts: 80, uas: 82, catatan: "" },
                        { id: "s23", nis: "23006", nama: "Nadine Chandrawinata", jk: "P", harian: [95, 94], uts: 96, uas: 98, catatan: "Nilai terbaik di kelas." },
                        { id: "s35", nis: "23007", nama: "Raditya Dika", jk: "L", harian: [78, 80], uts: 82, uas: 85, catatan: "" },
                        { id: "s36", nis: "23008", nama: "Raisa Andriana", jk: "P", harian: [90, 92], uts: 94, uas: 95, catatan: "" },
                        { id: "s37", nis: "23009", nama: "Raffi Ahmad", jk: "L", harian: [75, 70], uts: 72, uas: 75, catatan: "Lebih fokus belajar." },
                        { id: "s38", nis: "23010", nama: "Chelsea Islan", jk: "P", harian: [88, 90], uts: 85, uas: 89, catatan: "" }
                    ]
                },
                {
                    id: "class_2022_9a", name: "Kelas IX-A", tahunAjaran: "2022/2023", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s26",
                    students: [
                        { id: "s10", nis: "22001", nama: "Lesti Kejora", jk: "P", harian: [80, 85], uts: 82, uas: 88, catatan: "" },
                        { id: "s11", nis: "22002", nama: "Maudy Ayunda", jk: "P", harian: [95, 96], uts: 94, uas: 98, catatan: "Sangat berprestasi." },
                        { id: "s12", nis: "22003", nama: "Nicholas Saputra", jk: "L", harian: [85, 88], uts: 86, uas: 90, catatan: "Pendiam namun kritis." },
                        { id: "s24", nis: "22004", nama: "Okan Kornelius", jk: "L", harian: [70, 72], uts: 75, uas: 78, catatan: "" },
                        { id: "s25", nis: "22005", nama: "Pevita Pearce", jk: "P", harian: [90, 92], uts: 91, uas: 94, catatan: "" },
                        { id: "s26", nis: "22006", nama: "Reza Rahadian", jk: "L", harian: [88, 90], uts: 89, uas: 92, catatan: "Sangat antusias belajar." },
                        { id: "s27", nis: "22007", nama: "Syifa Hadju", jk: "P", harian: [85, 85], uts: 86, uas: 88, catatan: "" },
                        { id: "s29", nis: "22008", nama: "Ariel Noah", jk: "L", harian: [55, 60], uts: 65, uas: 72, catatan: "Sering bolos latihan." },
                        { id: "s39", nis: "22009", nama: "Agnez Mo", jk: "P", harian: [92, 95], uts: 94, uas: 96, catatan: "" },
                        { id: "s40", nis: "22010", nama: "Afgan Syahreza", jk: "L", harian: [85, 82], uts: 84, uas: 88, catatan: "" }
                    ]
                }
            ],
            weights: { harian: 40, uts: 30, uas: 30 },
            profile: { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" }
        };
        localStorage.setItem(DB_KEY, JSON.stringify(db));
        localStorage.setItem(DB_VERSION_FLAG, "true");
    }

    function saveDB() {
        localStorage.setItem(DB_KEY, JSON.stringify(db));
    }

    // --- Dark Mode State & Logic ---
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleBtn = document.getElementById('btn-theme-toggle');

    if (themeToggleLightIcon && themeToggleDarkIcon && themeToggleBtn) {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
            document.documentElement.classList.add('dark');
        } else {
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', function() {
            themeToggleLightIcon.classList.toggle('hidden');
            themeToggleDarkIcon.classList.toggle('hidden');

            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    }

    // --- State ---
    let currentClassId = null;
    let currentClassIndex = -1;
    let currentYear = null;

    // --- Undo / Redo State ---
    let historyStack = [];
    let redoStack = [];

    // --- DOM Elements ---
    const yearDropdown = document.getElementById('year-dropdown');
    const classDropdown = document.getElementById('class-dropdown');
    const ketuaDropdown = document.getElementById('ketua-dropdown');
    const inputSearchStudent = document.getElementById('input-search-student');
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const classDatesInfo = document.getElementById('class-dates-info');
    
    // Buttons
    const btnAddHarian = document.getElementById('btn-add-harian');
    const btnSave = document.getElementById('btn-save');
    const btnOpenClassModal = document.getElementById('btn-open-class-modal');
    const btnOpenStudentModal = document.getElementById('btn-open-student-modal');
    const btnUndo = document.getElementById('btn-undo');
    const btnRedo = document.getElementById('btn-redo');
    
    // Modals
    const modalClass = document.getElementById('modal-class');
    const modalStudent = document.getElementById('modal-student');
    const modalExport = document.getElementById('modal-export');
    const closeClassModal = document.getElementById('close-class-modal');
    const closeStudentModal = document.getElementById('close-student-modal');
    const closeExportModal = document.getElementById('close-export-modal');

    // Forms
    const btnSubmitClass = document.getElementById('btn-submit-class');
    const btnSubmitStudent = document.getElementById('btn-submit-student');
    
    // Settings Elements
    const btnSettings = document.getElementById('btn-settings');
    const modalWeights = document.getElementById('modal-weights');
    const closeWeightsModal = document.getElementById('close-weights-modal');
    const inputWeightHarian = document.getElementById('input-weight-harian');
    const inputWeightUts = document.getElementById('input-weight-uts');
    const inputWeightUas = document.getElementById('input-weight-uas');
    const weightError = document.getElementById('weight-error');
    const weightTotalDisplay = document.getElementById('weight-total-display');
    const btnSubmitWeights = document.getElementById('btn-submit-weights');
    const legendFormula = document.getElementById('legend-formula');

    // Profile Elements
    const btnOpenProfile = document.getElementById('btn-open-profile');
    const modalProfile = document.getElementById('modal-profile');
    const closeProfileModal = document.getElementById('close-profile-modal');
    const inputProfileName = document.getElementById('input-profile-name');
    const inputProfileMapel = document.getElementById('input-profile-mapel');
    const btnSubmitProfile = document.getElementById('btn-submit-profile');
    const profileNameDisplay = document.getElementById('profile-name-display');
    const profileMapelDisplay = document.getElementById('profile-mapel-display');

    // --- V2.0 DOM Elements ---
    const btnLockClass = document.getElementById('btn-lock-class');
    const lockIcon = document.getElementById('lock-icon');
    const lockWarningBanner = document.getElementById('lock-warning-banner');

    const statClassAverage = document.getElementById('stat-class-average');
    const statClassPass = document.getElementById('stat-class-pass');
    const statClassFail = document.getElementById('stat-class-fail');

    const btnOpenImportModal = document.getElementById('btn-open-import-modal');
    const modalImport = document.getElementById('modal-import');
    const closeImportModal = document.getElementById('close-import-modal');
    const btnSubmitImport = document.getElementById('btn-submit-import');
    const inputImportFile = document.getElementById('input-import-file');

    const btnPrintPdf = document.getElementById('btn-print-pdf');

    // --- Edit Class & Edit Student DOM Elements ---
    const btnEditClass = document.getElementById('btn-edit-class');
    const modalEditClass = document.getElementById('modal-edit-class');
    const closeEditClassModal = document.getElementById('close-edit-class-modal');
    const inputEditClassGrade = document.getElementById('input-edit-class-grade');
    const inputEditClassGroup = document.getElementById('input-edit-class-group');
    const inputEditClassYear1 = document.getElementById('input-edit-class-year1');
    const inputEditClassYear2 = document.getElementById('input-edit-class-year2');
    const btnSubmitEditClass = document.getElementById('btn-submit-edit-class');

    const modalEditStudent = document.getElementById('modal-edit-student');
    const closeEditStudentModal = document.getElementById('close-edit-student-modal');
    const inputEditStudentId = document.getElementById('input-edit-student-id');
    const inputEditStudentNis = document.getElementById('input-edit-student-nis');
    const inputEditStudentJk = document.getElementById('input-edit-student-jk');
    const inputEditStudentName = document.getElementById('input-edit-student-name');
    const btnSubmitEditStudent = document.getElementById('btn-submit-edit-student');

    // --- Core Logic ---

    function recordState() {
        historyStack.push(JSON.stringify(db));
        if (historyStack.length > 20) {
            historyStack.shift();
        }
        redoStack = [];
        updateUndoRedoButtons();
    }

    function updateUndoRedoButtons() {
        const isLocked = currentClassIndex !== -1 && db.classes && db.classes[currentClassIndex] && !!db.classes[currentClassIndex].isLocked;
        if(btnUndo) btnUndo.disabled = isLocked || historyStack.length === 0;
        if(btnRedo) btnRedo.disabled = isLocked || redoStack.length === 0;
    }

    function updateStatsDashboard() {
        if (currentClassIndex === -1 || !db.classes || !db.classes[currentClassIndex]) {
            if (statClassAverage) statClassAverage.textContent = "0";
            if (statClassPass) statClassPass.innerHTML = "0% <span class='text-xs font-semibold text-emerald-600 dark:text-emerald-455'>(0 / 0)</span>";
            if (statClassFail) statClassFail.innerHTML = "0% <span class='text-xs font-semibold text-rose-600 dark:text-rose-455'>(0 / 0)</span>";
            return;
        }

        const currentClass = db.classes[currentClassIndex];
        const students = currentClass.students || [];
        if (students.length === 0) {
            if (statClassAverage) statClassAverage.textContent = "0";
            if (statClassPass) statClassPass.innerHTML = "0% <span class='text-xs font-semibold text-emerald-600 dark:text-emerald-455'>(0 / 0)</span>";
            if (statClassFail) statClassFail.innerHTML = "0% <span class='text-xs font-semibold text-rose-600 dark:text-rose-455'>(0 / 0)</span>";
            return;
        }

        const w = {
            harian: (db.weights && parseFloat(db.weights.harian)) || 40,
            uts: (db.weights && parseFloat(db.weights.uts)) || 30,
            uas: (db.weights && parseFloat(db.weights.uas)) || 30
        };
        const harianCount = currentClass.harianCount || 0;

        let totalFinalScore = 0;
        let passCount = 0;
        let failCount = 0;
        let gradedCount = 0;

        students.forEach(student => {
            let sumHarian = 0;
            let countHarian = 0;
            const harianList = student.harian || [];
            for (let i = 0; i < harianCount; i++) {
                const val = harianList[i];
                if (val !== null && val !== undefined && val !== "") { 
                    sumHarian += parseFloat(val); 
                    countHarian++; 
                }
            }
            const hasUts = student.uts !== null && student.uts !== undefined && student.uts !== "";
            const hasUas = student.uas !== null && student.uas !== undefined && student.uas !== "";

            // Count student in dashboard only if they have at least one grade entered
            if (countHarian > 0 || hasUts || hasUas) {
                gradedCount++;
                const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;
                const utsVal = parseFloat(student.uts) || 0;
                const uasVal = parseFloat(student.uas) || 0;
                const finalScore = Math.round((avgHarian * (w.harian/100)) + (utsVal * (w.uts/100)) + (uasVal * (w.uas/100)));

                totalFinalScore += finalScore;

                if (finalScore >= 75) {
                    passCount++;
                } else {
                    failCount++;
                }
            }
        });

        if (gradedCount === 0) {
            if (statClassAverage) statClassAverage.textContent = "0";
            if (statClassPass) statClassPass.innerHTML = "0% <span class='text-xs font-semibold text-emerald-600 dark:text-emerald-450'>(0 / 0)</span>";
            if (statClassFail) statClassFail.innerHTML = "0% <span class='text-xs font-semibold text-rose-600 dark:text-rose-450'>(0 / 0)</span>";
            return;
        }

        const classAverage = (totalFinalScore / gradedCount).toFixed(1);
        const passPercentage = Math.round((passCount / gradedCount) * 100);
        const failPercentage = Math.round((failCount / gradedCount) * 100);

        if (statClassAverage) statClassAverage.textContent = classAverage;
        if (statClassPass) statClassPass.innerHTML = `${passPercentage}% <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-450">(${passCount} / ${gradedCount})</span>`;
        if (statClassFail) statClassFail.innerHTML = `${failPercentage}% <span class="text-xs font-semibold text-rose-600 dark:text-rose-455">(${failCount} / ${gradedCount})</span>`;
    }

    if(btnUndo) {
        btnUndo.addEventListener('click', () => {
            if (historyStack.length === 0) return;
            redoStack.push(JSON.stringify(db));
            db = JSON.parse(historyStack.pop());
            saveDB();
            loadYearDropdown();
            updateUndoRedoButtons();
        });
    }

    if(btnRedo) {
        btnRedo.addEventListener('click', () => {
            if (redoStack.length === 0) return;
            historyStack.push(JSON.stringify(db));
            db = JSON.parse(redoStack.pop());
            saveDB();
            loadYearDropdown();
            updateUndoRedoButtons();
        });
    }

    function loadYearDropdown() {
        const years = [...new Set(db.classes.map(c => c.tahunAjaran))].sort().reverse();
        yearDropdown.innerHTML = '<option value="" disabled selected>-- Pilih Tahun Ajaran --</option>';
        
        if (years.length === 0) {
            currentYear = null;
            loadClassDropdownForYear(null);
            return;
        }

        years.forEach(y => {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y;
            yearDropdown.appendChild(opt);
        });

        // Set ke kosong secara default agar user harus memilih
        if (!currentYear || !years.includes(currentYear)) {
            currentYear = "";
        }
        yearDropdown.value = currentYear;
        loadClassDropdownForYear(currentYear);
    }

    function loadClassDropdownForYear(year) {
        classDropdown.innerHTML = '<option value="" disabled selected>-- Pilih Kelas --</option>';
        
        if (!year) {
            currentClassId = null;
            currentClassIndex = -1;
            renderTable();
            return;
        }

        const classesInYear = db.classes.filter(c => c.tahunAjaran === year);
        if (classesInYear.length === 0) {
            currentClassId = null;
            currentClassIndex = -1;
            renderTable();
            return;
        }

        classesInYear.forEach(c => {
            const option = document.createElement('option');
            option.value = c.id;
            option.textContent = c.name;
            classDropdown.appendChild(option);
        });

        // Set ke kosong secara default agar user harus memilih
        const validClass = classesInYear.find(c => c.id === currentClassId);
        if (!validClass) {
            currentClassId = "";
        }
        classDropdown.value = currentClassId;
        
        currentClassIndex = db.classes.findIndex(c => c.id === currentClassId);
        renderTable();
    }

    function selectClass(id) {
        currentClassId = id;
        currentClassIndex = db.classes.findIndex(c => c.id === id);
        if (inputSearchStudent) inputSearchStudent.value = '';
        renderTable();
    }

    if (yearDropdown) {
        yearDropdown.addEventListener('change', (e) => {
            currentYear = e.target.value;
            loadClassDropdownForYear(currentYear);
        });
    }

    classDropdown.addEventListener('change', (e) => {
        selectClass(e.target.value);
    });

    if (ketuaDropdown) {
        ketuaDropdown.addEventListener('change', (e) => {
            if (currentClassIndex === -1) return;
            recordState();
            db.classes[currentClassIndex].ketuaId = e.target.value;
            saveDB();
            renderTable();
        });
    }

    if (inputSearchStudent) {
        inputSearchStudent.addEventListener('input', () => {
            const term = inputSearchStudent.value.toLowerCase();
            const rows = tableBody.querySelectorAll('tr');
            rows.forEach(row => {
                if (row.cells.length < 3) return;
                const nis = row.cells[1]?.textContent.toLowerCase() || '';
                const nama = row.cells[2]?.textContent.toLowerCase() || '';
                if (nis.includes(term) || nama.includes(term)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // --- Sort Feature ---
    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            if (currentClassIndex === -1) {
                e.target.value = 'default';
                return;
            }
            
            const sortType = e.target.value;
            if (sortType === 'default') return;

            recordState();
            const cls = db.classes[currentClassIndex];
            
            function getSortScore(student) {
                let sumHarian = 0;
                let countHarian = 0;
                const harianList = student.harian || [];
                for (let i = 0; i < cls.harianCount; i++) {
                    if (harianList[i] !== undefined && harianList[i] !== null && harianList[i] !== '') {
                        sumHarian += parseFloat(harianList[i]);
                        countHarian++;
                    }
                }
                const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;
                const uts = parseFloat(student.uts) || 0;
                const uas = parseFloat(student.uas) || 0;
                
                const w = db.weights || { harian: 40, uts: 30, uas: 30 };
                return Math.round((avgHarian * (w.harian/100)) + (uts * (w.uts/100)) + (uas * (w.uas/100)));
            }

            cls.students.sort((a, b) => {
                if (sortType === 'name_asc') {
                    return a.nama.localeCompare(b.nama);
                } else if (sortType === 'name_desc') {
                    return b.nama.localeCompare(a.nama);
                } else if (sortType === 'score_desc') {
                    return getSortScore(b) - getSortScore(a);
                }
                return 0;
            });
            
            saveDB();
            renderTable();
            
            // Hapus baris yang me-reset value ke 'default' agar tulisan yang dipilih tetap terlihat
        });
    }

    // --- Rendering ---
    function renderTable() {
        if (currentClassIndex === -1) {
            tableHead.innerHTML = '';
            tableBody.innerHTML = '<tr><td colspan="10" class="px-6 py-12 text-center text-gray-500 font-medium">Silakan pilih Tahun Ajaran dan Kelas di atas.</td></tr>';
            if (ketuaDropdown) {
                ketuaDropdown.innerHTML = '<option value="">-- Pilih Kelas --</option>';
                ketuaDropdown.disabled = true;
            }
            updateStatsDashboard();
            return;
        }
        
        const currentClass = db.classes[currentClassIndex];
        const harianCount = currentClass.harianCount;
        const isLocked = !!currentClass.isLocked;

        // Update Lock Class UI Button & Banner
        if (btnLockClass) {
            if (isLocked) {
                btnLockClass.className = "h-12 w-12 flex-shrink-0 flex items-center justify-center text-amber-850 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 focus:ring-4 focus:ring-amber-200 font-medium rounded-xl focus:outline-none shadow-sm transition-all";
                btnLockClass.title = "Buka Kunci Kelas";
                if (lockIcon) {
                    lockIcon.innerHTML = `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10V7a4 4 0 1 1 8 0v3M5 10h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/>`;
                }
                if (lockWarningBanner) lockWarningBanner.classList.remove('hidden');
            } else {
                btnLockClass.className = "h-12 w-12 flex-shrink-0 flex items-center justify-center text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600 focus:ring-4 focus:ring-gray-100 dark:focus:ring-slate-700 font-medium rounded-xl focus:outline-none shadow-sm transition-all";
                btnLockClass.title = "Kunci Kelas";
                if (lockIcon) {
                    lockIcon.innerHTML = `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M4 11h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/>`;
                }
                if (lockWarningBanner) lockWarningBanner.classList.add('hidden');
            }
        }

        // Disable toolbar buttons when class is locked
        if (btnOpenStudentModal) btnOpenStudentModal.disabled = isLocked;
        if (btnOpenImportModal) btnOpenImportModal.disabled = isLocked;
        if (btnAddHarian) btnAddHarian.disabled = isLocked;

        // Update Ketua Dropdown
        if (ketuaDropdown) {
            ketuaDropdown.disabled = isLocked;
            ketuaDropdown.innerHTML = '<option value="">-- Belum Ada Ketua --</option>';
            currentClass.students.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.nama;
                ketuaDropdown.appendChild(opt);
            });
            ketuaDropdown.value = currentClass.ketuaId || "";
        }

        const inputDisabledAttr = isLocked ? 'disabled' : '';

        // Render Header
        let theadHTML = `<tr class="bg-blue-900 text-white">
            <th scope="col" class="px-2 py-4 border-x border-blue-800 w-10 text-center align-top">No</th>
            <th scope="col" class="px-4 py-4 border-x border-blue-800 w-24 text-center align-top">NIS</th>
            <th scope="col" class="px-4 py-4 border-x border-blue-800 text-center align-top">NAMA LENGKAP</th>
            <th scope="col" class="px-2 py-4 border-x border-blue-800 w-16 text-center align-top">L/P</th>`;
            
        for (let i = 0; i < harianCount; i++) {
            const dVal = currentClass.harianDates && currentClass.harianDates[i] ? currentClass.harianDates[i] : '';
            const delHarianBtn = isLocked ? '' : `
                <button class="text-blue-300 hover:text-red-400 transition-colors btn-delete-harian" data-harian-idx="${i}" title="Hapus Kolom">
                    <svg class="w-4 h-4 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button>
            `;
            theadHTML += `<th scope="col" class="px-2 py-3 border-x border-blue-800 text-center align-top min-w-[120px]">
                <div class="flex justify-center items-center gap-2 mb-1">
                    <span>Harian ${i + 1}</span>
                    ${delHarianBtn}
                </div>
                <input type="date" ${inputDisabledAttr} class="date-input-header header-date bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded px-1 border border-gray-300 dark:border-slate-600" data-date-type="harian" data-harian-idx="${i}" value="${dVal}">
            </th>`;
        }

        const utsVal = currentClass.utsDate || '';
        const uasVal = currentClass.uasDate || '';

        theadHTML += `
            <th scope="col" class="px-2 py-3 border-x border-blue-800 text-center align-top min-w-[120px]">
                <div class="mb-1">UTS</div>
                <input type="date" ${inputDisabledAttr} class="date-input-header header-date bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded px-1 border border-gray-300 dark:border-slate-600" data-date-type="uts" value="${utsVal}">
            </th>
            <th scope="col" class="px-2 py-3 border-x border-blue-800 text-center align-top min-w-[120px]">
                <div class="mb-1">UAS</div>
                <input type="date" ${inputDisabledAttr} class="date-input-header header-date bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded px-1 border border-gray-300 dark:border-slate-600" data-date-type="uas" value="${uasVal}">
            </th>
            <th scope="col" class="px-4 py-4 border-x border-blue-800 text-center align-top w-32 font-extrabold bg-blue-950">Nilai Akhir</th>
            <th scope="col" class="px-4 py-4 border-x border-blue-800 text-center align-top w-48">Catatan</th>
        </tr>`;
        tableHead.innerHTML = theadHTML;

        // Render Body
        tableBody.innerHTML = '';
        currentClass.students.forEach((student, studentIndex) => {
            const tr = document.createElement('tr');
            
            const harianCount = db.classes[currentClassIndex].harianCount;
            let sumHarian = 0, countHarian = 0;
            const harianList = student.harian || [];
            for (let i = 0; i < harianCount; i++) {
                if (harianList[i] !== null && harianList[i] !== undefined && harianList[i] !== "") { 
                    sumHarian += parseFloat(harianList[i]); 
                    countHarian++; 
                }
            }
            const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;
            const hasScore = countHarian > 0 || student.uts !== null || student.uas !== null;
            
            const w = {
                harian: (db.weights && parseFloat(db.weights.harian)) || 40,
                uts: (db.weights && parseFloat(db.weights.uts)) || 30,
                uas: (db.weights && parseFloat(db.weights.uas)) || 30
            };
            const utsVal = parseFloat(student.uts) || 0;
            const uasVal = parseFloat(student.uas) || 0;
            const finalScore = Math.round((avgHarian * (w.harian/100)) + (utsVal * (w.uts/100)) + (uasVal * (w.uas/100)));

            const isMerah = hasScore && finalScore < 75;
            const bgClass = isMerah ? "bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/30 red-row" : "bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700";
            
            tr.className = `${bgClass} border-b border-gray-200 dark:border-slate-700 transition-colors`;
            
            const isKetua = (currentClass.ketuaId === student.id);
            const ketuaBadge = isKetua ? `<span class="mr-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-200 text-yellow-800 border border-yellow-300 dark:bg-yellow-950/40 dark:text-yellow-300 dark:border-yellow-800" title="Ketua Kelas">👑 KETUA</span>` : '';
            const nameTdClass = isKetua ? "bg-yellow-100 dark:bg-yellow-950/20" : "";
 
            const actionBtns = isLocked ? '' : `
                <div class="flex items-center gap-1.5 flex-shrink-0">
                    <button class="w-6 h-6 flex justify-center items-center text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors btn-edit-student bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-800" data-student-id="${student.id}" data-student-idx="${studentIndex}" title="Ubah Data Murid">
                        <svg class="w-3.5 h-3.5 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m14.304 4.844 2.852 2.852M7 7H4v3h3L18.855 1.145a2.017 2.017 0 0 1 2.852 0 2.018 2.018 0 0 1 0 2.852L7 17Z"/></svg>
                    </button>
                    <button class="w-6 h-6 flex justify-center items-center text-gray-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors btn-delete-student bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-800" data-student-id="${student.id}" title="Hapus Murid">
                        <svg class="w-3.5 h-3.5 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                    </button>
                </div>
            `;
 
            // Static Columns with Actions
            let trHTML = `
                <td class="px-2 border-x border-gray-200 dark:border-slate-700 text-center text-gray-500 dark:text-slate-400">${studentIndex + 1}</td>
                <td class="px-4 border-x border-gray-200 dark:border-slate-700 text-center whitespace-nowrap text-gray-500 dark:text-slate-400 font-mono">${student.nis}</td>
                <td class="px-4 border-x border-gray-200 dark:border-slate-700 text-center font-bold text-gray-900 dark:text-slate-100 whitespace-nowrap transition-colors ${nameTdClass}">
                    <div class="flex items-center justify-between w-full">
                        <div class="w-14 flex-shrink-0"></div> <!-- Spacer untuk keseimbangan -->
                        <span class="flex-grow text-center px-2 flex items-center justify-center">${ketuaBadge}${student.nama}</span>
                        ${actionBtns}
                    </div>
                </td>
                <td class="px-2 border-x border-gray-200 dark:border-slate-700 text-center font-bold text-gray-700 dark:text-slate-300 w-16">${student.jk || '-'}</td>
            `;
 
            // Dynamic Harian Columns
            for (let i = 0; i < harianCount; i++) {
                const harianList = student.harian || [];
                const val = harianList[i] !== undefined ? harianList[i] : '';
                trHTML += `
                    <td class="p-0 border-x border-gray-200 dark:border-slate-700 h-[52px]">
                        <input type="number" min="0" max="100" 
                               ${inputDisabledAttr}
                               class="excel-input"
                               data-student-idx="${studentIndex}" 
                               data-col-type="harian" 
                               data-harian-idx="${i}" 
                               value="${val}">
                    </td>
                `;
            }
 
            // UTS & UAS Columns
            trHTML += `
                <td class="p-0 border-x border-gray-200 dark:border-slate-700 h-[52px]">
                    <input type="number" min="0" max="100" 
                           ${inputDisabledAttr}
                           class="excel-input"
                           data-student-idx="${studentIndex}" 
                           data-col-type="uts" 
                           value="${student.uts !== null ? student.uts : ''}">
                </td>
                <td class="p-0 border-x border-gray-200 dark:border-slate-700 h-[52px]">
                    <input type="number" min="0" max="100" 
                           ${inputDisabledAttr}
                           class="excel-input"
                           data-student-idx="${studentIndex}" 
                           data-col-type="uas" 
                           value="${student.uas !== null ? student.uas : ''}">
                </td>
                <td class="px-4 border-x border-gray-200 dark:border-slate-700 text-center font-extrabold text-lg text-gray-900 dark:text-slate-100 bg-gray-50 dark:bg-slate-700/50" id="final-${studentIndex}">-</td>
                <td class="p-0 border-x border-gray-200 dark:border-slate-700 h-[52px]">
                    <textarea ${inputDisabledAttr} class="excel-textarea" data-student-idx="${studentIndex}" data-col-type="catatan" placeholder="Tulis pesan...">${student.catatan || ''}</textarea>
                </td>
            `;

            tr.innerHTML = trHTML;
            tableBody.appendChild(tr);

            calculateFinalScore(studentIndex);
        });

        // Attach delete and edit event listeners for students
        if (!isLocked) {
            document.querySelectorAll('.btn-edit-student').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetBtn = e.target.closest('.btn-edit-student') || e.target;
                    const studentId = targetBtn.getAttribute('data-student-id');
                    const studentIdx = parseInt(targetBtn.getAttribute('data-student-idx'));
                    const cls = db.classes[currentClassIndex];
                    const student = cls.students[studentIdx] || cls.students.find(s => s.id === studentId);
                    
                    if (student) {
                        if (inputEditStudentId) inputEditStudentId.value = student.id;
                        if (inputEditStudentNis) inputEditStudentNis.value = student.nis || '';
                        if (inputEditStudentJk) inputEditStudentJk.value = student.jk || 'L';
                        if (inputEditStudentName) inputEditStudentName.value = student.nama || '';
                        
                        openModal(modalEditStudent);
                    }
                });
            });

            document.querySelectorAll('.btn-delete-student').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetBtn = e.target.closest('.btn-delete-student') || e.target;
                    const studentId = targetBtn.getAttribute('data-student-id');
                    if (confirm('Yakin ingin menghapus murid ini?')) {
                        recordState();
                        const cls = db.classes[currentClassIndex];
                        cls.students = cls.students.filter(s => s.id !== studentId);
                        saveDB();
                        renderTable();
                    }
                });
            });

            document.querySelectorAll('.btn-delete-harian').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetBtn = e.target.closest('.btn-delete-harian') || e.target;
                    const idx = parseInt(targetBtn.getAttribute('data-harian-idx'));
                    if (confirm(`Yakin ingin menghapus kolom Harian ${idx + 1}? Semua nilai di kolom ini akan hilang.`)) {
                        recordState();
                        const cls = db.classes[currentClassIndex];
                        cls.harianCount--;
                        if (cls.harianDates) cls.harianDates.splice(idx, 1);
                        cls.students.forEach(student => {
                            student.harian.splice(idx, 1);
                        });
                        saveDB();
                        renderTable();
                    }
                });
            });
        }

        updateStatsDashboard();
        updateUndoRedoButtons();
    }

    function calculateFinalScore(studentIndex) {
        const student = db.classes[currentClassIndex].students[studentIndex];
        const harianCount = db.classes[currentClassIndex].harianCount;
        
        let sumHarian = 0;
        let countHarian = 0;
        const harianList = student.harian || [];
        for (let i = 0; i < harianCount; i++) {
            if (harianList[i] !== undefined && harianList[i] !== null && harianList[i] !== '') {
                sumHarian += parseFloat(harianList[i]);
                countHarian++;
            }
        }
        const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;

        const hasUts = student.uts !== undefined && student.uts !== null && student.uts !== '';
        const hasUas = student.uas !== undefined && student.uas !== null && student.uas !== '';

        const uts = parseFloat(student.uts) || 0;
        const uas = parseFloat(student.uas) || 0;

        const w = {
            harian: (db.weights && parseFloat(db.weights.harian)) || 40,
            uts: (db.weights && parseFloat(db.weights.uts)) || 30,
            uas: (db.weights && parseFloat(db.weights.uas)) || 30
        };
        let finalScore = (avgHarian * (w.harian/100)) + (uts * (w.uts/100)) + (uas * (w.uas/100));
        finalScore = Math.round(finalScore);
        
        const hasScore = countHarian > 0 || hasUts || hasUas;
        const isMerah = hasScore && finalScore < 75;

        const finalCell = document.getElementById(`final-${studentIndex}`);
        if (finalCell) {
            finalCell.textContent = finalScore;
            const tr = finalCell.closest('tr');
            
            // Manage Tailwind classes for KKM on finalCell and row
            if (isMerah) {
                finalCell.classList.add('below-kkm');
                finalCell.classList.remove('above-kkm');
                if (tr) {
                    tr.classList.add('bg-red-50', 'hover:bg-red-100', 'dark:bg-red-950/20', 'dark:hover:bg-red-950/30', 'red-row');
                    tr.classList.remove('bg-white', 'hover:bg-gray-50', 'dark:bg-slate-800', 'dark:hover:bg-slate-700');
                }
            } else {
                finalCell.classList.add('above-kkm');
                finalCell.classList.remove('below-kkm');
                if (tr) {
                    tr.classList.remove('bg-red-50', 'hover:bg-red-100', 'dark:bg-red-950/20', 'dark:hover:bg-red-950/30', 'red-row');
                    tr.classList.add('bg-white', 'hover:bg-gray-50', 'dark:bg-slate-800', 'dark:hover:bg-slate-700');
                }
            }
        }
        updateStatsDashboard();
    }

    // --- Event Listeners (CRUD) ---

    tableBody.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            recordState(); 
            const studentIdx = e.target.getAttribute('data-student-idx');
            const colType = e.target.getAttribute('data-col-type');
            const student = db.classes[currentClassIndex].students[studentIdx];

            if (colType === 'catatan') {
                student.catatan = e.target.value;
            } else {
                const val = e.target.value === '' ? null : parseFloat(e.target.value);
                if (colType === 'harian') {
                    const harianIdx = e.target.getAttribute('data-harian-idx');
                    if (!student.harian) student.harian = [];
                    student.harian[harianIdx] = val;
                } else if (colType === 'uts') {
                    student.uts = val;
                } else if (colType === 'uas') {
                    student.uas = val;
                }
                calculateFinalScore(studentIdx);
            }
            saveDB();
        }
    });

    tableBody.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
            const val = e.target.value === '' ? null : parseFloat(e.target.value);
            const studentIdx = e.target.getAttribute('data-student-idx');
            const colType = e.target.getAttribute('data-col-type');
            
            const student = db.classes[currentClassIndex].students[studentIdx];

            if (colType === 'harian') {
                const harianIdx = e.target.getAttribute('data-harian-idx');
                if (!student.harian) student.harian = [];
                student.harian[harianIdx] = val;
            } else if (colType === 'uts') {
                student.uts = val;
            } else if (colType === 'uas') {
                student.uas = val;
            }
            calculateFinalScore(studentIdx);
        }
    });

    // Save Button
    btnSave.addEventListener('click', () => {
        saveDB(); 
        const originalText = btnSave.innerHTML;
        btnSave.innerHTML = `
            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
            </svg>
            Tersimpan!
        `;
        setTimeout(() => {
            btnSave.innerHTML = originalText;
        }, 2000);
    });

    // Save Dates from Headers
    tableHead.addEventListener('change', (e) => {
        if (e.target.classList.contains('header-date')) {
            recordState();
            const val = e.target.value;
            const dateType = e.target.getAttribute('data-date-type');
            const cls = db.classes[currentClassIndex];
            
            if (dateType === 'harian') {
                if (!cls.harianDates) cls.harianDates = [];
                const idx = e.target.getAttribute('data-harian-idx');
                cls.harianDates[idx] = val;
            } else if (dateType === 'uts') {
                cls.utsDate = val;
            } else if (dateType === 'uas') {
                cls.uasDate = val;
            }
            saveDB();
        }
    });

    // Add Harian Column
    btnAddHarian.addEventListener('click', () => {
        if (currentClassIndex === -1) return;
        recordState();
        db.classes[currentClassIndex].harianCount++;
        saveDB();
        renderTable();
    });

    // Modal Toggles (Tailwind manually toggle hidden/flex classes)
    function openModal(modalEl) {
        modalEl.classList.remove('hidden');
        modalEl.classList.add('flex');
    }
    
    function closeModal(modalEl) {
        modalEl.classList.add('hidden');
        modalEl.classList.remove('flex');
    }

    btnOpenClassModal.onclick = () => openModal(modalClass);
    closeClassModal.onclick = () => closeModal(modalClass);
    if(closeExportModal) closeExportModal.onclick = () => closeModal(modalExport);
    
    // Delete Class
    const btnDeleteClass = document.getElementById('btn-delete-class');
    if (btnDeleteClass) {
        btnDeleteClass.addEventListener('click', () => {
            if (currentClassIndex === -1) return;
            const cls = db.classes[currentClassIndex];
            if (confirm(`Peringatan!\nApakah Anda yakin ingin menghapus "${cls.name}" beserta SEMUA data murid dan nilainya?\n\nTindakan ini dapat dibatalkan dengan tombol Undo.`)) {
                recordState();
                db.classes.splice(currentClassIndex, 1);
                saveDB();
                loadYearDropdown();
            }
        });
    }

    btnOpenStudentModal.onclick = () => {
        if (currentClassIndex === -1) {
            alert('Silakan buat atau pilih kelas terlebih dahulu!');
            return;
        }
        openModal(modalStudent);
    }
    closeStudentModal.onclick = () => closeModal(modalStudent);

    // Create Class
    btnSubmitClass.onclick = () => {
        const grade = document.getElementById('input-class-grade').value;
        const group = document.getElementById('input-class-group').value.trim();
        const year1Str = document.getElementById('input-class-year1').value;
        const year2Str = document.getElementById('input-class-year2').value;
        
        if (!grade || !group) return alert('Pilih Tingkat dan Rombel kelas!');
        if (!year1Str || !year2Str) return alert('Isi Tahun Ajaran terlebih dahulu!');
        
        const y1 = parseInt(year1Str);
        const y2 = parseInt(year2Str);
        
        if (isNaN(y1) || isNaN(y2) || y2 !== y1 + 1) {
            return alert('Tahun ajaran tidak valid! Tahun kedua harus tepat 1 tahun setelah tahun pertama (Contoh: 2024 dan 2025).');
        }

        const year = `${y1}/${y2}`;
        const name = `Kelas ${grade}-${group}`;
        const harianCount = parseInt(document.getElementById('input-class-harian').value) || 2;

        // Cegah kelas ganda
        const isDuplicate = db.classes.some(c => c.name === name && c.tahunAjaran === year);
        if (isDuplicate) {
            alert(`Peringatan: ${name} untuk Tahun Ajaran ${year} sudah ada! Silakan cek kembali pilihan Anda.`);
            return;
        }

        recordState();
        const newClass = {
            id: "class_" + Date.now(),
            name: name,
            tahunAjaran: year,
            harianCount: harianCount,
            harianDates: [],
            utsDate: '',
            uasDate: '',
            students: []
        };

        db.classes.push(newClass);
        saveDB();
        
        document.getElementById('input-class-group').value = '';
        document.getElementById('input-class-year1').value = '';
        document.getElementById('input-class-year2').value = '';
        closeModal(modalClass);
        
        currentYear = year;
        currentClassId = newClass.id;
        loadYearDropdown();
    };

    // Export to Excel (Multi-sheet per Tahun Ajaran)
    const btnExportExcel = document.getElementById('btn-export-excel');
    const selectExportYear = document.getElementById('select-export-year');
    const btnSubmitExport = document.getElementById('btn-submit-export');

    if (btnExportExcel && modalExport) {
        btnExportExcel.addEventListener('click', () => {
            if (db.classes.length === 0) {
                alert('Belum ada kelas sama sekali!');
                return;
            }
            
            // Populasikan Dropdown Tahun Ajaran
            const uniqueYears = [...new Set(db.classes.map(c => c.tahunAjaran).filter(y => y))];
            
            if (uniqueYears.length === 0) {
                alert('Tidak ada data Tahun Ajaran yang valid.');
                return;
            }

            selectExportYear.innerHTML = '';
            uniqueYears.forEach(y => {
                const opt = document.createElement('option');
                opt.value = y;
                opt.textContent = y;
                selectExportYear.appendChild(opt);
            });
            
            // Pilih tahun ajaran dari kelas aktif jika ada
            if (currentClassIndex !== -1 && db.classes[currentClassIndex].tahunAjaran) {
                selectExportYear.value = db.classes[currentClassIndex].tahunAjaran;
            }

            openModal(modalExport);
        });
    }

    if (btnSubmitExport) {
        btnSubmitExport.addEventListener('click', () => {
            const selectedYear = selectExportYear.value;
            if (!selectedYear) return;

            const targetClasses = db.classes.filter(c => c.tahunAjaran === selectedYear);
            if (targetClasses.length === 0) return alert('Tidak ada kelas di tahun ajaran tersebut.');

            const wb = XLSX.utils.book_new();
            const data = [];
            const rowMetadata = [];
            
            // Cari jumlah harian maksimal agar kolom tabel sejajar jika digabung
            let maxHarianCount = 0;
            targetClasses.forEach(cls => {
                if (cls.harianCount > maxHarianCount) maxHarianCount = cls.harianCount;
            });

            // 1. Global Title (DAFTAR NILAI TAHUN AJARAN XXXX/XXXX)
            data.push([`DAFTAR NILAI TAHUN AJARAN ${selectedYear}`]);
            rowMetadata.push({ type: 'main_title' });
            
            const prof = db.profile || { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" };
            data.push([`Mata Pelajaran: ${prof.mapel}`]);
            rowMetadata.push({ type: 'main_subtitle' });
            data.push([`Guru Pengajar: ${prof.name}`]);
            rowMetadata.push({ type: 'main_subtitle' });
            
            data.push([]);
            rowMetadata.push({ type: 'empty' });

            targetClasses.forEach(cls => {
                // 2. Class Subtitle (KELAS | : | Nama Kelas) dipisah tiap cell
                // Agar tulisan tidak terpotong karena kolom A ukurannya kecil (No), 
                // kita taruh KELAS di A, ':' di B, Nama Kelas di C.
                let classNameStr = cls.name.toUpperCase();
                if(classNameStr.startsWith('KELAS ')) {
                    classNameStr = classNameStr.replace('KELAS ', '');
                }
                
                // KELAS di A, ': XX-X' di B
                data.push(['KELAS', `: ${classNameStr}`]);
                rowMetadata.push({ type: 'class_subtitle' });
                
                // Table Headers
                const headers = ['No', 'NIS', 'Nama Lengkap', 'L/P'];
                for (let i = 0; i < maxHarianCount; i++) {
                    headers.push(`Harian ${i + 1}`);
                }
                headers.push('UTS', 'UAS', 'Nilai Akhir', 'Catatan');
                data.push(headers);
                rowMetadata.push({ type: 'header' });
                
                // Table Data (Students)
                cls.students.forEach((student, index) => {
                    const row = [index + 1, student.nis, student.nama, student.jk || '-'];
                    
                    let sumHarian = 0;
                    let countHarian = 0;
                    const harianList = student.harian || [];
                    for (let i = 0; i < maxHarianCount; i++) {
                        const val = harianList[i] !== undefined && harianList[i] !== null && harianList[i] !== '' ? harianList[i] : '';
                        row.push(val);
                        if (val !== '') {
                            sumHarian += parseFloat(val);
                            countHarian++;
                        }
                    }
                    
                    const uts = student.uts !== null && student.uts !== '' ? student.uts : '';
                    const uas = student.uas !== null && student.uas !== '' ? student.uas : '';
                    row.push(uts, uas);
                    
                    const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;
                    const w = db.weights || { harian: 40, uts: 30, uas: 30 };
                    const utsVal = parseFloat(uts) || 0;
                    const uasVal = parseFloat(uas) || 0;
                    const finalScore = Math.round((avgHarian * (w.harian/100)) + (utsVal * (w.uts/100)) + (uasVal * (w.uas/100)));
                    row.push(finalScore);
                    row.push(student.catatan || '');
                    
                    data.push(row);
                    
                    const hasScore = countHarian > 0 || uts !== '' || uas !== '';
                    const isMerah = hasScore && finalScore < 75;
                    const isKetua = (cls.ketuaId === student.id);
                    
                    rowMetadata.push({ 
                        type: 'student', 
                        isMerah: isMerah, 
                        isKetua: isKetua,
                        catatanCol: row.length - 1
                    });
                });
                
                // Gap between classes
                data.push([]);
                rowMetadata.push({ type: 'empty' });
                data.push([]);
                rowMetadata.push({ type: 'empty' });
            });
            
            // Create Sheet
            const ws = XLSX.utils.aoa_to_sheet(data);
            
            // --- Styling Definition ---
            const borderAll = {
                top: { style: "thin", color: { rgb: "D1D5DB" } },
                bottom: { style: "thin", color: { rgb: "D1D5DB" } },
                left: { style: "thin", color: { rgb: "D1D5DB" } },
                right: { style: "thin", color: { rgb: "D1D5DB" } }
            };

            const titleStyle = { 
                font: { bold: true, sz: 14, color: { rgb: "1E3A8A" }, name: "Inter" },
                fill: { fgColor: { rgb: "EFF6FF" } },
                alignment: { horizontal: "center", vertical: "center" }
            };
            const mainSubStyle = {
                font: { bold: true, sz: 11, color: { rgb: "4B5563" }, name: "Inter" },
                fill: { fgColor: { rgb: "EFF6FF" } },
                alignment: { horizontal: "center", vertical: "center" }
            };
            const subTitleStyle = { 
                font: { bold: true, sz: 11, color: { rgb: "1E3A8A" }, name: "Inter" } 
            };
            
            const headerStyle = {
                font: { bold: true, color: { rgb: "FFFFFF" }, sz: 10, name: "Inter" },
                fill: { fgColor: { rgb: "1E3A8A" } }, // blue-900
                border: borderAll,
                alignment: { horizontal: "center", vertical: "center" }
            };

            // Colors for conditional formatting
            const colorRed = { rgb: "FEE2E2" }; // red-50
            const colorRedText = { rgb: "DC2626" }; // red-600
            const colorYellow = { rgb: "FEF08A" }; // yellow-200
            const colorYellowText = { rgb: "854D0E" }; // yellow-800
            const colorWhite = { rgb: "FFFFFF" };
            const colorBlack = { rgb: "000000" };
            
            function getStudentStyle(isMerah, isKetua, align) {
                let fgColor = colorWhite;
                let fontColor = colorBlack;
                let fontBold = false;
                
                // Ketua Kelas is prioritized for background color (Yellow)
                if (isKetua) { 
                    fgColor = colorYellow; 
                    fontColor = colorYellowText;
                    fontBold = true; 
                }
                // Remedial is Red
                else if (isMerah) { 
                    fgColor = colorRed; 
                    fontColor = colorRedText;
                    fontBold = true; 
                }
                
                return {
                    font: { bold: fontBold, color: fontColor, name: "Inter", sz: 10 },
                    fill: { fgColor: fgColor },
                    border: borderAll,
                    alignment: { horizontal: align, vertical: "center" }
                };
            }

            // Terapkan style ke masing-masing cell
            for (const cellAddress in ws) {
                if (cellAddress.startsWith('!')) continue;
                
                const cell = ws[cellAddress];
                const col = cellAddress.replace(/[0-9]/g, '');
                const row = parseInt(cellAddress.replace(/[a-zA-Z]/g, '')) - 1; // 0-indexed
                
                if (!rowMetadata[row]) continue;
                const meta = rowMetadata[row];

                if (meta.type === 'main_title') {
                    cell.s = titleStyle;
                } else if (meta.type === 'main_subtitle') {
                    cell.s = mainSubStyle;
                } else if (meta.type === 'class_subtitle') {
                    cell.s = subTitleStyle;
                } else if (meta.type === 'header') {
                    cell.s = headerStyle;
                } else if (meta.type === 'student') {
                    const isLeftAlign = (col === 'C' || col === XLSX.utils.encode_col(meta.catatanCol));
                    const align = isLeftAlign ? "left" : "center";
                    cell.s = getStudentStyle(meta.isMerah, meta.isKetua, align);
                }
            }

            // --- Set Column Widths ---
            const colWidths = [
                { wch: 8 },   // No (diperlebar agar 'KELAS' muat)
                { wch: 12 },  // NIS
                { wch: 30 },  // Nama Lengkap
                { wch: 6 }    // L/P
            ];
            
            for (let i = 0; i < maxHarianCount; i++) {
                colWidths.push({ wch: 10 });
            }
            
            colWidths.push(
                { wch: 10 }, // UTS
                { wch: 10 }, // UAS
                { wch: 12 }, // Nilai Akhir
                { wch: 40 }  // Catatan
            );
            
            ws['!cols'] = colWidths;

            // --- Set Row Heights dynamically based on row type ---
            const rowHeights = rowMetadata.map(meta => {
                if (meta.type === 'main_title') return { hpt: 28 };
                if (meta.type === 'main_subtitle') return { hpt: 18 };
                if (meta.type === 'class_subtitle') return { hpt: 24 };
                if (meta.type === 'header') return { hpt: 24 };
                if (meta.type === 'student') return { hpt: 20 };
                return { hpt: 12 }; // Spacer/empty rows
            });
            ws['!rows'] = rowHeights;
            
            // --- Merge Cells ---
            // Merge baris judul (Baris 0, 1, 2 dari Kolom 0 sampai kolom terakhir)
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: colWidths.length - 1 } },
                { s: { r: 1, c: 0 }, e: { r: 1, c: colWidths.length - 1 } },
                { s: { r: 2, c: 0 }, e: { r: 2, c: colWidths.length - 1 } }
            ];
            
            let sheetName = `Rekap Tahun ${selectedYear.replace(/[^a-zA-Z0-9]/g, '')}`.substring(0, 31);
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
            
            const fileName = `Rekap_Semua_Kelas_${selectedYear.replace(/[\\/\\s]/g, '-')}.xlsx`;
            XLSX.writeFile(wb, fileName);
            closeModal(modalExport);
        });
    }

    // Create Student
    btnSubmitStudent.onclick = () => {
        const nis = document.getElementById('input-student-nis').value;
        const name = document.getElementById('input-student-name').value;
        const jk = document.getElementById('input-student-jk').value;

        if (!nis || !name || !jk) return alert('Semua data (NIS, Nama, Jenis Kelamin) harus diisi!');

        recordState();
        const newStudent = {
            id: "std_" + Date.now(),
            nis: nis,
            nama: name,
            jk: jk,
            harian: [],
            uts: null,
            uas: null,
            catatan: ""
        };

        db.classes[currentClassIndex].students.push(newStudent);
        saveDB();

        document.getElementById('input-student-nis').value = '';
        document.getElementById('input-student-name').value = '';
        closeModal(modalStudent);
        
        renderTable();
    };

    // --- Edit Class Detail Handlers ---
    if (btnEditClass) {
        btnEditClass.addEventListener('click', () => {
            if (currentClassIndex === -1) {
                alert('Silakan pilih kelas terlebih dahulu!');
                return;
            }
            const cls = db.classes[currentClassIndex];
            
            // Parse name
            let grade = "VII";
            let group = "";
            if (cls.name.startsWith("Kelas ")) {
                const parts = cls.name.substring(6).split("-");
                if (parts.length >= 2) {
                    grade = parts[0];
                    group = parts.slice(1).join("-");
                } else {
                    group = parts[0];
                }
            } else {
                group = cls.name;
            }
            
            // Parse years from tahunAjaran
            let y1 = "", y2 = "";
            if (cls.tahunAjaran && cls.tahunAjaran.includes("/")) {
                const yParts = cls.tahunAjaran.split("/");
                y1 = yParts[0];
                y2 = yParts[1];
            }
            
            // Populate modal inputs
            if (inputEditClassGrade) inputEditClassGrade.value = grade;
            if (inputEditClassGroup) inputEditClassGroup.value = group;
            if (inputEditClassYear1) inputEditClassYear1.value = y1;
            if (inputEditClassYear2) inputEditClassYear2.value = y2;
            
            openModal(modalEditClass);
        });
    }

    if (closeEditClassModal) {
        closeEditClassModal.onclick = () => closeModal(modalEditClass);
    }

    if (btnSubmitEditClass) {
        btnSubmitEditClass.onclick = () => {
            const grade = inputEditClassGrade.value;
            const group = inputEditClassGroup.value.trim();
            const year1Str = inputEditClassYear1.value;
            const year2Str = inputEditClassYear2.value;
            
            if (!grade || !group) return alert('Pilih Tingkat dan isi Rombel kelas!');
            if (!year1Str || !year2Str) return alert('Isi Tahun Ajaran terlebih dahulu!');
            
            const y1 = parseInt(year1Str);
            const y2 = parseInt(year2Str);
            
            if (isNaN(y1) || isNaN(y2) || y2 !== y1 + 1) {
                return alert('Tahun ajaran tidak valid! Tahun kedua harus tepat 1 tahun setelah tahun pertama (Contoh: 2024 dan 2025).');
            }
            
            const year = `${y1}/${y2}`;
            const name = `Kelas ${grade}-${group}`;
            
            const cls = db.classes[currentClassIndex];
            
            // Cegah kelas ganda (kecuali jika namanya tetap sama)
            const isDuplicate = db.classes.some((c, idx) => idx !== currentClassIndex && c.name === name && c.tahunAjaran === year);
            if (isDuplicate) {
                alert(`Peringatan: ${name} untuk Tahun Ajaran ${year} sudah ada! Silakan cek kembali pilihan Anda.`);
                return;
            }
            
            recordState();
            cls.name = name;
            cls.tahunAjaran = year;
            saveDB();
            
            closeModal(modalEditClass);
            
            currentYear = year;
            currentClassId = cls.id;
            loadYearDropdown();
        };
    }

    // --- Edit Student Detail Handlers ---
    if (closeEditStudentModal) {
        closeEditStudentModal.onclick = () => closeModal(modalEditStudent);
    }

    if (btnSubmitEditStudent) {
        btnSubmitEditStudent.onclick = () => {
            const studentId = inputEditStudentId.value;
            const nis = inputEditStudentNis.value.trim();
            const jk = inputEditStudentJk.value;
            const name = inputEditStudentName.value.trim();
            
            if (!nis || !name) {
                alert('NIS dan Nama Murid tidak boleh kosong!');
                return;
            }
            
            const cls = db.classes[currentClassIndex];
            const student = cls.students.find(s => s.id === studentId);
            
            if (!student) {
                alert('Data murid tidak ditemukan!');
                return;
            }
            
            // Check for duplicate NIS (only for OTHER students in this class)
            const isDuplicateNis = cls.students.some(s => s.id !== studentId && s.nis === nis);
            if (isDuplicateNis) {
                alert(`Peringatan: Murid dengan NIS ${nis} sudah ada di kelas ini!`);
                return;
            }
            
            recordState();
            student.nis = nis;
            student.jk = jk;
            student.nama = name;
            saveDB();
            
            closeModal(modalEditStudent);
            renderTable();
        };
    }

    // --- Save and Load Project (JSON Backup) ---
    const btnSaveProject = document.getElementById('btn-save-project');
    const btnOpenProject = document.getElementById('btn-open-project');
    const inputOpenProject = document.getElementById('input-open-project');

    if (btnSaveProject) {
        btnSaveProject.addEventListener('click', () => {
            const dataStr = JSON.stringify(db, null, 2);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            const date = new Date().toISOString().split('T')[0];
            a.download = `Backup_Buku_Nilai_${date}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    if (btnOpenProject && inputOpenProject) {
        btnOpenProject.addEventListener('click', () => {
            inputOpenProject.click();
        });

        inputOpenProject.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const loadedDb = JSON.parse(event.target.result);
                    if (loadedDb && loadedDb.classes) {
                        recordState();
                        db = loadedDb;
                        if (!db.weights) db.weights = { harian: 40, uts: 30, uas: 30 };
                        saveDB();
                        loadYearDropdown();
                        updateLegendFormula();
                        alert('Proyek berhasil dimuat!');
                    } else {
                        alert('Format file tidak dikenali. Pastikan itu adalah file Backup Buku Nilai (.json) yang valid.');
                    }
                } catch (error) {
                    alert('Gagal membaca file. File mungkin rusak atau format tidak sesuai.');
                }
            };
            reader.readAsText(file);
            inputOpenProject.value = '';
        });
    }

    // --- Weight Settings Logic ---
    function updateLegendFormula() {
        if (!legendFormula) return;
        const w = db.weights || { harian: 40, uts: 30, uas: 30 };
        legendFormula.innerHTML = `<strong>Nilai Akhir</strong> = (Rata-rata Harian x ${w.harian}%) + (UTS x ${w.uts}%) + (UAS x ${w.uas}%)`;
    }

    function checkWeightsTotal() {
        const h = parseInt(inputWeightHarian.value) || 0;
        const uts = parseInt(inputWeightUts.value) || 0;
        const uas = parseInt(inputWeightUas.value) || 0;
        const total = h + uts + uas;
        
        weightTotalDisplay.textContent = total;
        if (total === 100) {
            weightError.classList.add('hidden');
            btnSubmitWeights.disabled = false;
            btnSubmitWeights.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            weightError.classList.remove('hidden');
            btnSubmitWeights.disabled = true;
            btnSubmitWeights.classList.add('opacity-50', 'cursor-not-allowed');
        }
    }

    if (btnSettings && modalWeights) {
        btnSettings.addEventListener('click', () => {
            const w = db.weights || { harian: 40, uts: 30, uas: 30 };
            inputWeightHarian.value = w.harian;
            inputWeightUts.value = w.uts;
            inputWeightUas.value = w.uas;
            checkWeightsTotal();
            openModal(modalWeights);
        });

        closeWeightsModal.addEventListener('click', () => closeModal(modalWeights));
        
        inputWeightHarian.addEventListener('input', checkWeightsTotal);
        inputWeightUts.addEventListener('input', checkWeightsTotal);
        inputWeightUas.addEventListener('input', checkWeightsTotal);

        btnSubmitWeights.addEventListener('click', () => {
            const h = parseInt(inputWeightHarian.value) || 0;
            const uts = parseInt(inputWeightUts.value) || 0;
            const uas = parseInt(inputWeightUas.value) || 0;
            
            if (h + uts + uas !== 100) return;
            
            recordState();
            db.weights = { harian: h, uts: uts, uas: uas };
            saveDB();
            
            updateLegendFormula();
            renderTable(); // Update all current scores
            closeModal(modalWeights);
        });
    }

    // --- V2.0 Class Lock Event Listener ---
    if (btnLockClass) {
        btnLockClass.addEventListener('click', () => {
            if (currentClassIndex === -1) return;
            const cls = db.classes[currentClassIndex];
            recordState();
            cls.isLocked = !cls.isLocked;
            saveDB();
            renderTable();
        });
    }

    // --- V2.0 Excel Import Event Listeners ---
    if (btnOpenImportModal && modalImport) {
        btnOpenImportModal.addEventListener('click', () => {
            modalImport.classList.remove('hidden');
            modalImport.classList.add('flex');
        });
    }

    if (closeImportModal && modalImport) {
        closeImportModal.addEventListener('click', () => {
            modalImport.classList.add('hidden');
            modalImport.classList.remove('flex');
            if (inputImportFile) inputImportFile.value = '';
        });
    }

    // --- Download Template Excel ---
    const btnDownloadTemplate = document.getElementById('btn-download-template');
    if (btnDownloadTemplate) {
        btnDownloadTemplate.addEventListener('click', () => {
            // Create data matching the columns (including beautiful titles and instructions)
            const data = [
                ["TEMPLATE IMPORT DAFTAR SISWA", "", ""], // Row 0 (A1:C1 merged)
                ["Silahkan isi tabel dibawah sesuai NIS, Nama Lengkap Murid, dan Jenis Kelamin", "", ""], // Row 1 (A2:C2 merged)
                ["", "", ""], // Row 2 (Spacer)
                ["NIS (Nomor Induk)", "Nama Lengkap Murid", "Jenis Kelamin (L/P)"], // Row 3 (Headers)
                ["1001", "CONTOH: Ahmad Fauzi", "L"], // Row 4 (Sample 1)
                ["1002", "CONTOH: Siti Aminah", "P"], // Row 5 (Sample 2)
                ["1003", "CONTOH: Budi Santoso", "L"]   // Row 6 (Sample 3)
            ];
            
            // Add 100 empty styled blank rows for easy input
            for (let i = 0; i < 100; i++) {
                data.push(["", "", ""]);
            }
            
            // Generate sheet
            const ws = XLSX.utils.aoa_to_sheet(data);
            
            // --- Premium Excel Visual Styling ---
            const borderThin = {
                top: { style: "thin", color: { rgb: "D1D5DB" } },
                bottom: { style: "thin", color: { rgb: "D1D5DB" } },
                left: { style: "thin", color: { rgb: "D1D5DB" } },
                right: { style: "thin", color: { rgb: "D1D5DB" } }
            };

            const titleStyle = {
                font: { bold: true, sz: 14, color: { rgb: "1E3A8A" }, name: "Inter" },
                fill: { fgColor: { rgb: "EFF6FF" } },
                alignment: { horizontal: "center", vertical: "center" }
            };

            const subtitleStyle = {
                font: { italic: true, sz: 10, color: { rgb: "4B5563" }, name: "Inter" },
                fill: { fgColor: { rgb: "EFF6FF" } },
                alignment: { horizontal: "center", vertical: "center" }
            };

            const instructionStyle = {
                font: { sz: 9.5, color: { rgb: "065F46" }, name: "Inter", bold: true },
                fill: { fgColor: { rgb: "ECFDF5" } }, // Emerald-50
                border: {
                    top: { style: "thin", color: { rgb: "A7F3D0" } },
                    bottom: { style: "thin", color: { rgb: "A7F3D0" } },
                    left: { style: "thin", color: { rgb: "A7F3D0" } },
                    right: { style: "thin", color: { rgb: "A7F3D0" } }
                },
                alignment: { horizontal: "center", vertical: "center", wrapText: true }
            };

            const headerStyle = {
                font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11, name: "Inter" },
                fill: { fgColor: { rgb: "1E3A8A" } }, // Deep Navy
                border: borderThin,
                alignment: { horizontal: "center", vertical: "center" }
            };

            const inputRowStyleNIS = {
                font: { sz: 11, name: "Inter" },
                border: borderThin,
                alignment: { horizontal: "center", vertical: "center" }
            };

            const inputRowStyleNama = {
                font: { sz: 11, name: "Inter" },
                border: borderThin,
                alignment: { horizontal: "left", vertical: "center" }
            };

            const inputRowStyleJK = {
                font: { sz: 11, name: "Inter" },
                border: borderThin,
                alignment: { horizontal: "center", vertical: "center" }
            };

            // Ensure all cells in the grid exist and apply styles
            const totalRows = data.length;
            const totalCols = 3; // Columns A, B, C

            for (let r = 0; r < totalRows; r++) {
                for (let c = 0; c < totalCols; c++) {
                    const cellRef = XLSX.utils.encode_cell({ r: r, c: c });
                    if (!ws[cellRef]) {
                        ws[cellRef] = { v: "", t: "s" };
                    }
                    const cell = ws[cellRef];

                    // Set standard text formatting for all cells to prevent Excel auto-formatting numbers
                    cell.z = "@";

                    if (r === 0) {
                        cell.s = titleStyle;
                    } else if (r === 1) {
                        cell.s = instructionStyle;
                    } else if (r === 2) {
                        // Spacer row
                        cell.s = {
                            fill: { fgColor: { rgb: "FFFFFF" } }
                        };
                    } else if (r === 3) {
                        cell.s = headerStyle;
                    } else {
                        // Data rows
                        const isSample = (r >= 4 && r <= 6);
                        let baseStyle;
                        if (c === 0) {
                            baseStyle = JSON.parse(JSON.stringify(inputRowStyleNIS));
                        } else if (c === 1) {
                            baseStyle = JSON.parse(JSON.stringify(inputRowStyleNama));
                        } else {
                            baseStyle = JSON.parse(JSON.stringify(inputRowStyleJK));
                        }

                        // Style sample rows slightly differently (italic, grey text) so they are visually distinct
                        if (isSample) {
                            baseStyle.font.color = { rgb: "9CA3AF" }; // Grey text
                            baseStyle.font.italic = true;
                        }

                        cell.s = baseStyle;
                    }
                }
            }

            // Set custom row heights for comfortable reading & entering data
            ws['!rows'] = [
                { hpt: 28 }, // Row 1 (Title)
                { hpt: 26 }, // Row 2 (Instructions)
                { hpt: 10 }, // Row 3 (Spacer)
                { hpt: 25 }  // Row 4 (Headers)
            ];
            for (let i = 4; i < totalRows; i++) {
                ws['!rows'].push({ hpt: 22 }); // Input rows
            }

            // Set column widths
            ws['!cols'] = [
                { wch: 18 }, // NIS
                { wch: 38 }, // Nama Lengkap Murid
                { wch: 25 }  // Jenis Kelamin (L/P)
            ];

            // Merge titles & instructions
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }, // A1:C1
                { s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }  // A2:C2
            ];
            
            // Create workbook and download
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Daftar Siswa");
            XLSX.writeFile(wb, "Template_Daftar_Siswa.xlsx");
        });
    }

    if (btnSubmitImport) {
        btnSubmitImport.addEventListener('click', () => {
            if (currentClassIndex === -1) {
                alert("Silakan pilih kelas terlebih dahulu.");
                return;
            }
            if (!inputImportFile.files || inputImportFile.files.length === 0) {
                alert("Silakan pilih file terlebih dahulu.");
                return;
            }

            const file = inputImportFile.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                    if (json.length <= 1) {
                        alert("File kosong atau tidak memiliki data.");
                        return;
                    }

                    const currentClass = db.classes[currentClassIndex];
                    let importCount = 0;

                    recordState();

                    // Skip header row
                    for (let i = 1; i < json.length; i++) {
                        const row = json[i];
                        if (!row || row.length === 0) continue;

                        const nis = String(row[0] || '').trim();
                        const nama = String(row[1] || '').trim();
                        let jk = String(row[2] || '').trim().toUpperCase();

                        if (!nis || !nama) continue;

                        // Abaikan baris header, judul, petunjuk, dan contoh bawaan template
                        const nisLower = nis.toLowerCase();
                        const namaLower = nama.toLowerCase();
                        if (nisLower === 'nis' || 
                            nisLower.includes('template') || 
                            nisLower.includes('petunjuk') ||
                            namaLower.includes('nama lengkap') ||
                            namaLower.includes('nama murid') ||
                            namaLower.startsWith('contoh:') ||
                            namaLower.includes('contoh')) {
                            continue;
                        }

                        // Normalize L/P
                        if (jk.startsWith('L') || jk === 'LAKI-LAKI') {
                            jk = 'L';
                        } else if (jk.startsWith('P') || jk === 'PEREMPUAN') {
                            jk = 'P';
                        } else {
                            jk = 'L';
                        }

                        // Check if student already exists in this class by NIS
                        const exists = currentClass.students.some(s => s.nis === nis);
                        if (exists) continue;

                        currentClass.students.push({
                            id: "s_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
                            nis: nis,
                            nama: nama,
                            jk: jk,
                            harian: Array(currentClass.harianCount).fill(''),
                            uts: '',
                            uas: '',
                            catatan: ''
                        });
                        importCount++;
                    }

                    if (importCount > 0) {
                        saveDB();
                        renderTable();
                        alert(`Berhasil mengimpor ${importCount} siswa.`);
                    } else {
                        alert("Tidak ada siswa baru yang berhasil diimpor (mungkin sudah ada di database).");
                    }

                    // Reset and close
                    modalImport.classList.add('hidden');
                    modalImport.classList.remove('flex');
                    inputImportFile.value = '';

                } catch (err) {
                    console.error(err);
                    alert("Gagal membaca file. Pastikan format file sesuai.");
                }
            };

            reader.readAsArrayBuffer(file);
        });
    }

    // --- V2.0 Print PDF Listener ---
    // --- V2.0 Print PDF Listener ---
    if (btnPrintPdf) {
        btnPrintPdf.addEventListener('click', () => {
            const currentClass = db.classes[currentClassIndex];
            if (!currentClass) return alert('Tidak ada kelas aktif yang dapat dicetak.');
            
            const prof = db.profile || { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" };
            const w = db.weights || { harian: 40, uts: 30, uas: 30 };
            
            // Format Indonesian Date
            const months = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];
            const d = new Date();
            const formattedDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
            
            // Start print-section HTML content
            let printHTML = `
                <div class="print-header">
                    <h1>Laporan Rekapitulasi Hasil Belajar Murid</h1>
                    <p>PenaGuru - Rekap Nilai Digital Guru & Wali Kelas</p>
                </div>
                
                <div class="print-metadata">
                    <div class="print-metadata-col">
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Mata Pelajaran</span>
                            <span class="print-metadata-value">: ${prof.mapel}</span>
                        </div>
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Kelas</span>
                            <span class="print-metadata-value">: ${currentClass.name.toUpperCase()}</span>
                        </div>
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Tahun Ajaran</span>
                            <span class="print-metadata-value">: ${currentClass.tahunAjaran}</span>
                        </div>
                    </div>
                    <div class="print-metadata-col" style="text-align: right; align-items: flex-end;">
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Guru Pengajar</span>
                            <span class="print-metadata-value">: ${prof.name}</span>
                        </div>
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Kriteria KKM</span>
                            <span class="print-metadata-value">: 75</span>
                        </div>
                        <div class="print-metadata-item">
                            <span class="print-metadata-label">Rumus Bobot</span>
                            <span class="print-metadata-value">: Harian (${w.harian}%) - UTS (${w.uts}%) - UAS (${w.uas}%)</span>
                        </div>
                    </div>
                </div>
                
                <table class="print-table">
                    <thead>
                        <tr>
                            <th style="width: 5%;">No</th>
                            <th style="width: 12%;">NIS</th>
                            <th style="width: 25%;">Nama Lengkap Murid</th>
                            <th style="width: 8%;">L/P</th>
                            <th style="width: 12%;">Rata-Rata Harian</th>
                            <th style="width: 8%;">UTS</th>
                            <th style="width: 8%;">UAS</th>
                            <th style="width: 10%;">Nilai Akhir</th>
                            <th style="width: 12%;">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            // Loop through students
            currentClass.students.forEach((student, index) => {
                const harianList = student.harian || [];
                let sumHarian = 0;
                let countHarian = 0;
                const harianCount = currentClass.harianCount;
                
                for (let i = 0; i < harianCount; i++) {
                    const val = harianList[i];
                    if (val !== undefined && val !== null && val !== '') {
                        sumHarian += parseFloat(val);
                        countHarian++;
                    }
                }
                
                const avgHarian = countHarian > 0 ? (sumHarian / countHarian) : 0;
                const utsVal = parseFloat(student.uts) || 0;
                const uasVal = parseFloat(student.uas) || 0;
                const finalScore = Math.round((avgHarian * (w.harian/100)) + (utsVal * (w.uts/100)) + (uasVal * (w.uas/100)));
                
                const hasScore = countHarian > 0 || (student.uts !== null && student.uts !== '') || (student.uas !== null && student.uas !== '');
                const isRemedial = hasScore && finalScore < 75;
                const rowClass = isRemedial ? 'class="red-row"' : '';
                const ketText = isRemedial ? 'REMEDIAL' : (hasScore ? 'TUNTAS' : '-');
                
                const isKetua = (currentClass.ketuaId === student.id);
                const ketuaLabel = isKetua ? ' <strong>(👑 Ketua Kelas)</strong>' : '';
                
                printHTML += `
                    <tr ${rowClass}>
                        <td class="center">${index + 1}</td>
                        <td class="center">${student.nis}</td>
                        <td>${student.nama}${ketuaLabel}</td>
                        <td class="center">${student.jk || '-'}</td>
                        <td class="center">${countHarian > 0 ? avgHarian.toFixed(1) : '-'}</td>
                        <td class="center">${student.uts !== null && student.uts !== '' ? student.uts : '-'}</td>
                        <td class="center">${student.uas !== null && student.uas !== '' ? student.uas : '-'}</td>
                        <td class="center" style="font-weight: 800;">${hasScore ? finalScore : '-'}</td>
                        <td class="center" style="font-weight: 700;">${ketText}</td>
                    </tr>
                `;
            });
            
            printHTML += `
                    </tbody>
                </table>
                
                <div class="print-signatures">
                    <div class="print-signature-box">
                        <p>Mengetahui,</p>
                        <p>Kepala Sekolah</p>
                        <div class="print-signature-space"></div>
                        <p class="print-signature-name">....................................................</p>
                        <p>NIP. .........................................</p>
                    </div>
                    <div class="print-signature-box">
                        <p>Jakarta, ${formattedDate}</p>
                        <p>Guru Kelas / Pengajar</p>
                        <div class="print-signature-space"></div>
                        <p class="print-signature-name">${prof.name}</p>
                        <p>NIP. .........................................</p>
                    </div>
                </div>
            `;
            
            const printSection = document.getElementById('print-section');
            if (printSection) {
                printSection.innerHTML = printHTML;
                window.print();
            }
        });
    }

    // Initialize
    loadYearDropdown();
    updateUndoRedoButtons();
    updateLegendFormula();

    const profileNameMobileDisplay = document.getElementById('profile-name-mobile-display');
    const profileMapelMobileDisplay = document.getElementById('profile-mapel-mobile-display');
    const profileMobileCard = document.getElementById('profile-mobile-card');

    function updateProfileUI() {
        const prof = db.profile || { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" };
        if (profileNameDisplay) profileNameDisplay.textContent = prof.name;
        if (profileMapelDisplay) profileMapelDisplay.textContent = prof.mapel;
        if (profileNameMobileDisplay) profileNameMobileDisplay.textContent = prof.name;
        if (profileMapelMobileDisplay) profileMapelMobileDisplay.textContent = prof.mapel;
    }

    // Set up edit listeners for both desktop and mobile buttons
    const bindProfileOpen = (btn) => {
        if (btn && modalProfile) {
            btn.addEventListener('click', () => {
                const prof = db.profile || { name: "Ibu R. Bangun S.Pd", mapel: "Matematika" };
                inputProfileName.value = prof.name;
                inputProfileMapel.value = prof.mapel;
                openModal(modalProfile);
            });
        }
    };

    bindProfileOpen(btnOpenProfile);
    bindProfileOpen(profileMobileCard);

    updateProfileUI();

    if (modalProfile) {
        if (closeProfileModal) {
            closeProfileModal.addEventListener('click', () => closeModal(modalProfile));
        }

        if (btnSubmitProfile) {
            btnSubmitProfile.addEventListener('click', () => {
                const newName = inputProfileName.value.trim() || "Ibu R. Bangun S.Pd";
                const newMapel = inputProfileMapel.value.trim() || "Matematika";
                
                recordState();
                db.profile = { name: newName, mapel: newMapel };
                saveDB();
                
                updateProfileUI();
                closeModal(modalProfile);
            });
        }
    }
});
