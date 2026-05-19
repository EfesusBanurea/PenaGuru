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
    const DB_VERSION_FLAG = 'grading_db_v10_seat_type';
    if (!localStorage.getItem(DB_VERSION_FLAG)) {
        db = {
            classes: [
                {
                    id: "class_2024_7a", name: "Kelas VII-A", tahunAjaran: "2024/2025", harianCount: 3, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s14", seatRows: 6, seatCols: 6, seatType: "single",
                    students: [
                        { id: "s1", nis: "24001", nama: "Ahmad Budi Santoso", jk: "L", harian: [85, 90, 88], uts: 85, uas: 90, catatan: "Sangat aktif di kelas.", seatRow: 1, seatCol: 1 },
                        { id: "s2", nis: "24002", nama: "Citra Kirana", jk: "P", harian: [92, 95, 90], uts: 88, uas: 92, catatan: "Pertahankan!", seatRow: 1, seatCol: 2 },
                        { id: "s3", nis: "24003", nama: "Dion Wiyoko", jk: "L", harian: [78, 80, 82], uts: 75, uas: 80, catatan: "Perbanyak latihan soal.", seatRow: 2, seatCol: 1 },
                        { id: "s4", nis: "24004", nama: "Eka Putri", jk: "P", harian: [88, 85, 90], uts: 89, uas: 90, catatan: "", seatRow: 2, seatCol: 2 },
                        { id: "s13", nis: "24005", nama: "Farhan Maulana", jk: "L", harian: [75, 78, 80], uts: 76, uas: 82, catatan: "", seatRow: 3, seatCol: 1 },
                        { id: "s14", nis: "24006", nama: "Gita Savitri", jk: "P", harian: [95, 98, 96], uts: 95, uas: 97, catatan: "Teladan kelas.", seatRow: 3, seatCol: 2 },
                        { id: "s15", nis: "24007", nama: "Hendra Wijaya", jk: "L", harian: [80, 82, 85], uts: 80, uas: 84, catatan: "", seatRow: 4, seatCol: 1 },
                        { id: "s16", nis: "24008", nama: "Indah Permatasari", jk: "P", harian: [88, 90, 92], uts: 89, uas: 91, catatan: "Aktif bertanya.", seatRow: 4, seatCol: 2 },
                        { id: "s30", nis: "24009", nama: "Bagas Satrio", jk: "L", harian: [82, 80, 85], uts: 82, uas: 85, catatan: "", seatRow: 5, seatCol: 1 },
                        { id: "s31", nis: "24010", nama: "Alya Nabila", jk: "P", harian: [90, 95, 88], uts: 92, uas: 90, catatan: "", seatRow: 5, seatCol: 2 }
                    ]
                },
                {
                    id: "class_2024_7b", name: "Kelas VII-B", tahunAjaran: "2024/2025", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s18", seatRows: 6, seatCols: 6, seatType: "single",
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
                    id: "class_2023_8a", name: "Kelas VIII-A", tahunAjaran: "2023/2024", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s9", seatRows: 6, seatCols: 6, seatType: "single",
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
                    id: "class_2022_9a", name: "Kelas IX-A", tahunAjaran: "2022/2023", harianCount: 2, harianDates: [], utsDate: "", uasDate: "", ketuaId: "s26", seatRows: 6, seatCols: 6, seatType: "single",
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
            const classScheduleInfo = document.getElementById('class-schedule-info');
            if (classScheduleInfo) {
                classScheduleInfo.classList.add('hidden');
            }
            return;
        }
        
        const currentClass = db.classes[currentClassIndex];
        const harianCount = currentClass.harianCount;
        const isLocked = !!currentClass.isLocked;

        // Update active class schedule display
        const infoSched1 = document.getElementById('info-sched1');
        const infoSched2 = document.getElementById('info-sched2');
        const classScheduleInfo = document.getElementById('class-schedule-info');
        if (classScheduleInfo) {
            classScheduleInfo.classList.remove('hidden');
            if (infoSched1) infoSched1.textContent = currentClass.sched1 || '-';
            if (infoSched2) {
                const s2 = (currentClass.sched2 || '').trim();
                infoSched2.textContent = (!s2 || s2.toLowerCase() === 'opsional') ? '-' : s2;
            }
        }

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
            <th scope="col" class="px-2 py-4 border-x border-blue-800 w-16 text-center align-top">L/P</th>
            <th scope="col" class="px-2 py-4 border-x border-blue-800 w-24 text-center align-top">TEMPAT DUDUK</th>`;
            
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
                <td class="px-2 border-x border-gray-200 dark:border-slate-700 text-center w-24 relative cell-seat cursor-pointer select-none" data-student-idx="${studentIndex}">
                    <span class="seat-badge px-2 py-0.5 rounded-full text-xs font-semibold transition-all duration-150 ${student.seatRow && student.seatCol ? 'bg-brown-50 hover:bg-brown-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-brown-600 dark:text-brown-300 border border-brown-200 dark:border-slate-600 shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 dark:bg-slate-700 dark:hover:bg-slate-650 dark:text-slate-400'}">
                        ${student.seatRow && student.seatCol ? `B${student.seatRow}-K${student.seatCol}` : '-'}
                    </span>
                </td>
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
                        if (document.getElementById('input-edit-student-seat-row')) {
                            document.getElementById('input-edit-student-seat-row').value = student.seatRow !== undefined && student.seatRow !== null ? String(student.seatRow) : '';
                        }
                        if (document.getElementById('input-edit-student-seat-col')) {
                            document.getElementById('input-edit-student-seat-col').value = student.seatCol !== undefined && student.seatCol !== null ? String(student.seatCol) : '';
                        }
                        
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

        // Attach seat popover listeners
        document.querySelectorAll('.cell-seat').forEach(cell => {
            const idx = parseInt(cell.getAttribute('data-student-idx'));
            cell.addEventListener('click', (e) => {
                e.stopPropagation();
                if (seatPopover && seatPopover.classList.contains('opacity-100') && seatPopover.dataset.activeStudentIdx === String(idx)) {
                    hideSeatPopover();
                } else {
                    showSeatPopover(cell, idx);
                }
            });
        });
        
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

    // Export Dropdown Toggle
    const dropdownExportBtn = document.getElementById('dropdown-export-btn');
    const dropdownExportMenu = document.getElementById('dropdown-export-menu');
    const dropdownArrowIcon = document.getElementById('dropdown-arrow-icon');

    if (dropdownExportBtn && dropdownExportMenu) {
        dropdownExportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = dropdownExportMenu.classList.contains('hidden');
            if (isHidden) {
                dropdownExportMenu.classList.remove('hidden');
                if (dropdownArrowIcon) dropdownArrowIcon.classList.add('rotate-180');
            } else {
                dropdownExportMenu.classList.add('hidden');
                if (dropdownArrowIcon) dropdownArrowIcon.classList.remove('rotate-180');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownExportBtn.contains(e.target) && !dropdownExportMenu.contains(e.target)) {
                dropdownExportMenu.classList.add('hidden');
                if (dropdownArrowIcon) dropdownArrowIcon.classList.remove('rotate-180');
            }
        });

        // Close dropdown when an option is clicked
        const dropdownOptions = dropdownExportMenu.querySelectorAll('button');
        dropdownOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                dropdownExportMenu.classList.add('hidden');
                if (dropdownArrowIcon) dropdownArrowIcon.classList.remove('rotate-180');
            });
        });
    }

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

    // Global mouse hover handler for seating popover
    let seatPopover = null;

    function createSeatPopover() {
        if (seatPopover) return seatPopover;
        seatPopover = document.createElement('div');
        seatPopover.id = 'seat-popover';
        seatPopover.className = 'absolute z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-xl p-4 rounded-xl transition-all duration-200 opacity-0 pointer-events-none w-72';
        document.body.appendChild(seatPopover);
        return seatPopover;
    }

    function showSeatPopover(element, studentIdx) {
        const popover = createSeatPopover();
        const student = db.classes[currentClassIndex].students[studentIdx];
        if (!student) return;
        
        popover.dataset.activeStudentIdx = String(studentIdx);

        // Build seat map
        const seatMap = {};
        const activeClass = db.classes[currentClassIndex];
        const maxR = activeClass.seatRows || 6;
        const maxC = activeClass.seatCols || 6;
        
        activeClass.students.forEach(s => {
            if (s.seatRow && s.seatCol) {
                const r = parseInt(s.seatRow);
                const c = parseInt(s.seatCol);
                const initials = s.nama.split(' ').filter(Boolean).map(p => p[0]).join('').substring(0, 3).toUpperCase();
                seatMap[`${r},${c}`] = {
                    id: s.id,
                    initials: initials,
                    nama: s.nama
                };
            }
        });

        const renderChairHTML = (row, col, occ, isCur) => {
            if (isCur) {
                return `
                    <div class="flex flex-col items-center justify-center p-2 bg-red-600 dark:bg-red-500 text-white border border-red-750 dark:border-red-400 rounded-xl select-none transition-all duration-150 shadow-md w-full aspect-square" title="${student.nama} (Baris ${row}, Kolom ${col})">
                        <span class="text-[9px] font-black leading-tight text-center break-words line-clamp-2 w-full px-1 uppercase tracking-wide">
                            ${student.nama}
                        </span>
                    </div>
                `;
            } else if (occ) {
                return `
                    <div class="flex flex-col items-center justify-center p-2 bg-brown-600 dark:bg-brown-500 text-white border border-brown-700 dark:border-brown-400 rounded-xl select-none transition-all duration-150 shadow-md w-full aspect-square" title="${occ.nama} (Baris ${row}, Kolom ${col})">
                        <span class="text-[9px] font-black leading-tight text-center break-words line-clamp-2 w-full px-1 uppercase tracking-wide">
                            ${occ.nama}
                        </span>
                    </div>
                `;
            } else {
                return `
                    <div class="flex flex-col items-center justify-center p-2 bg-gray-50/30 dark:bg-slate-800/20 border border-dashed border-gray-300 dark:border-slate-650 rounded-xl select-none transition-all duration-150 w-full aspect-square" title="Kosong (Baris ${row}, Kolom ${col})">
                        <span class="text-[9px] text-gray-400 dark:text-slate-500 font-extrabold uppercase mb-1">Kosong</span>
                        <div class="text-[11px] text-gray-350 dark:text-slate-550 font-black">
                            +
                        </div>
                    </div>
                `;
            }
        };

        // Generate Grid HTML (POV Guru: whiteboard/teacher desk at the bottom, row 1 at the bottom, col 1 on the right)
        let gridHTML = `
            <div class="flex flex-col items-center gap-3">
                <div class="flex items-center justify-between w-full border-b border-gray-100 dark:border-slate-700 pb-2 mb-1">
                    <span class="text-[11px] uppercase tracking-wider font-extrabold text-brown-600 dark:text-brown-400">Denah POV Guru</span>
                    <button type="button" id="btn-close-seat-popover" class="text-gray-400 hover:text-gray-650 dark:hover:text-slate-350 transition-colors p-1">
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Seat Grid -->
                <div class="grid gap-1.5 w-full" style="grid-template-columns: repeat(${maxC}, minmax(0, 1fr));">
        `;

        const isDoubleDesk = (activeClass.seatType === 'double');

        // Loop rows in reverse order (maxR down to 1) so row 1 (front) is at the bottom
        for (let r = maxR; r >= 1; r--) {
            if (isDoubleDesk) {
                // In double desk mode, columns are grouped into pairs (left-right desks)
                const numPairs = Math.ceil(maxC / 2);
                for (let k = 0; k < numPairs; k++) {
                    const c_left = maxC - 2 * k;
                    const c_right = maxC - (2 * k + 1);

                    const keyLeft = `${r},${c_left}`;
                    const occupiedLeft = seatMap[keyLeft];
                    const isCurrentLeft = (occupiedLeft && occupiedLeft.id === student.id) || (student.seatRow === r && student.seatCol === c_left);

                    if (c_right >= 1) {
                        const keyRight = `${r},${c_right}`;
                        const occupiedRight = seatMap[keyRight];
                        const isCurrentRight = (occupiedRight && occupiedRight.id === student.id) || (student.seatRow === r && student.seatCol === c_right);

                        gridHTML += `
                            <div class="col-span-2 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-700 bg-brown-100/40 dark:bg-slate-800/30 rounded-xl shadow-sm gap-1">
                                <!-- Chairs Row -->
                                <div class="grid grid-cols-2 gap-1">
                                    ${renderChairHTML(r, c_left, occupiedLeft, isCurrentLeft)}
                                    ${renderChairHTML(r, c_right, occupiedRight, isCurrentRight)}
                                </div>
                                <!-- Desk -->
                                <div class="py-0.5 bg-gray-200 dark:bg-slate-750 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-650">
                                    Meja
                                </div>
                            </div>
                        `;
                    } else {
                        // Odd column fallback
                        gridHTML += `
                            <div class="col-span-1 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-700 bg-brown-100/40 dark:bg-slate-800/30 rounded-xl shadow-sm gap-1">
                                ${renderChairHTML(r, c_left, occupiedLeft, isCurrentLeft)}
                                <!-- Desk -->
                                <div class="py-0.5 bg-gray-200 dark:bg-slate-750 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-650">
                                    Meja
                                </div>
                            </div>
                        `;
                    }
                }
            } else {
                for (let c = maxC; c >= 1; c--) {
                    const key = `${r},${c}`;
                    const occupied = seatMap[key];
                    const isCurrent = (occupied && occupied.id === student.id) || (student.seatRow === r && student.seatCol === c);

                    gridHTML += `
                        <div class="col-span-1 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-700 bg-brown-100/40 dark:bg-slate-800/30 rounded-xl shadow-sm gap-1">
                            ${renderChairHTML(r, c, occupied, isCurrent)}
                            <!-- Desk -->
                            <div class="py-0.5 bg-gray-200 dark:bg-slate-750 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-650">
                                Meja
                            </div>
                        </div>
                    `;
                }
            }
        }

        gridHTML += `
                </div>
                
                <!-- Front/Teacher Area at the bottom -->
                <div class="w-full bg-gray-100 dark:bg-slate-750 text-center py-1.5 text-[10px] font-bold text-gray-500 dark:text-slate-400 rounded-lg border border-gray-200 dark:border-slate-650 uppercase tracking-widest mt-1">
                    Papan Tulis / Meja Guru
                </div>
                
                <div class="text-[9px] text-gray-400 dark:text-slate-500 mt-0.5 italic w-full text-center">
                    Merah: Kursi milik ${student.nama.split(' ')[0]}
                </div>
            </div>
        `;

        popover.innerHTML = gridHTML;

        // Register close button
        const closeBtn = popover.querySelector('#btn-close-seat-popover');
        if (closeBtn) {
            closeBtn.onclick = (e) => {
                e.stopPropagation();
                hideSeatPopover();
            };
        }

        // Position Popover
        const rect = element.getBoundingClientRect();
        const popoverWidth = Math.max(288, maxC * 52);
        popover.style.width = `${popoverWidth}px`;
        
        // Calculate horizontal position (center aligned to element if possible)
        let left = rect.left + window.scrollX + (rect.width / 2) - (popoverWidth / 2);
        // Avoid boundary overflow
        if (left < 10) left = 10;
        if (left + popoverWidth > window.innerWidth - 10) {
            left = window.innerWidth - popoverWidth - 10;
        }

        popover.style.left = `${left}px`;
        popover.style.top = `0px`; // Temp
        popover.classList.remove('pointer-events-none');
        popover.classList.add('opacity-100');
        
        // Get actual height
        const actualHeight = popover.offsetHeight;
        let top = rect.top + window.scrollY - actualHeight - 10;
        if (top < window.scrollY + 10) {
            top = rect.bottom + window.scrollY + 10;
        }
        popover.style.top = `${top}px`;
    }

    // --- Interactive Seating Planner inside Class Edit Modal ---
    let seatPickerMenu = null;

    function renderLayoutGridSelector(currentRows, currentCols) {
        const container = document.getElementById('layout-grid-selector');
        if (!container) return;
        
        container.innerHTML = '';
        for (let y = 0; y < 8; y++) {
            const r = 8 - y;
            for (let x = 0; x < 8; x++) {
                const c = 8 - x;
                const box = document.createElement('div');
                box.className = 'w-4 h-4 border border-gray-200 dark:border-slate-700 rounded-sm cursor-pointer transition-colors duration-100 bg-gray-50 dark:bg-slate-750';
                box.dataset.row = r;
                box.dataset.col = c;
                
                // Highlight if inside selected layout bounds
                if (r <= currentRows && c <= currentCols) {
                    box.classList.remove('bg-gray-50', 'dark:bg-slate-750');
                    box.classList.add('bg-brown-600', 'dark:bg-brown-500');
                }
                
                box.onmouseenter = () => highlightSelector(r, c);
                box.onclick = () => selectSelectorDimensions(r, c);
                container.appendChild(box);
            }
        }
        
        container.onmouseleave = () => {
            const cls = db.classes[currentClassIndex];
            const activeR = cls.seatRows || 6;
            const activeC = cls.seatCols || 6;
            highlightSelector(activeR, activeC);
        };
    }
    
    function highlightSelector(targetR, targetC) {
        const label = document.getElementById('layout-grid-dimensions-label');
        if (label) {
            label.textContent = `${targetR} Baris x ${targetC} Kolom`;
        }
        
        const boxes = document.querySelectorAll('#layout-grid-selector div');
        boxes.forEach(box => {
            const r = parseInt(box.dataset.row);
            const c = parseInt(box.dataset.col);
            if (r <= targetR && c <= targetC) {
                box.classList.remove('bg-gray-50', 'dark:bg-slate-750');
                box.classList.add('bg-brown-600', 'dark:bg-brown-500');
            } else {
                box.classList.remove('bg-brown-600', 'dark:bg-brown-500');
                box.classList.add('bg-gray-50', 'dark:bg-slate-750');
            }
        });
    }
    
    function selectSelectorDimensions(targetR, targetC) {
        const cls = db.classes[currentClassIndex];
        recordState();
        cls.seatRows = targetR;
        cls.seatCols = targetC;
        saveDB();
        renderLayoutGridSelector(targetR, targetC);
        renderSeatingGrid(cls);
        renderTable();
    }

    function renderSeatingGrid(cls) {
        const wrapper = document.getElementById('interactive-layout-grid-wrapper');
        if (!wrapper) return;
        
        if (seatPickerMenu) {
            seatPickerMenu.remove();
            seatPickerMenu = null;
        }

        const maxR = cls.seatRows || 6;
        const maxC = cls.seatCols || 6;
        
        // Build seat map
        const seatMap = {};
        cls.students.forEach(s => {
            if (s.seatRow && s.seatCol) {
                const r = parseInt(s.seatRow);
                const c = parseInt(s.seatCol);
                const initials = s.nama.split(' ').filter(Boolean).map(p => p[0]).join('').substring(0, 3).toUpperCase();
                seatMap[`${r},${c}`] = {
                    id: s.id,
                    initials: initials,
                    nama: s.nama
                };
            }
        });

        const renderClassEditorChairHTML = (row, col, occ) => {
            if (occ) {
                return `
                    <div class="flex flex-col items-center justify-center p-2 bg-brown-600 dark:bg-brown-500 text-white border border-brown-700 dark:border-brown-400 rounded-xl select-none transition-all duration-150 cursor-pointer hover:scale-[1.04] shadow-md w-full aspect-square" data-row="${row}" data-col="${col}" title="${occ.nama}">
                        <span class="text-[9px] font-black leading-tight text-center break-words line-clamp-2 w-full px-1 uppercase tracking-wide">
                            ${occ.nama}
                        </span>
                    </div>
                `;
            } else {
                return `
                    <div class="flex flex-col items-center justify-center p-2 bg-gray-50/30 dark:bg-slate-800/20 border border-dashed border-gray-300 dark:border-slate-650 rounded-xl select-none transition-all duration-150 cursor-pointer hover:border-brown-500 dark:hover:border-slate-500 hover:scale-[1.04] w-full aspect-square" data-row="${row}" data-col="${col}">
                        <span class="text-[9px] text-gray-400 dark:text-slate-500 font-extrabold uppercase mb-1">Kosong</span>
                        <div class="text-[11px] text-gray-350 dark:text-slate-550 font-black">
                            +
                        </div>
                    </div>
                `;
            }
        };

        // Grid HTML
        let gridHTML = `<div class="grid gap-2.5 w-full max-w-xl" style="grid-template-columns: repeat(${maxC}, minmax(0, 1fr));">`;
        
        const isDoubleDesk = (cls.seatType === 'double');

        // POV Guru: Row maxR down to 1, Column maxC down to 1
        for (let r = maxR; r >= 1; r--) {
            if (isDoubleDesk) {
                const numPairs = Math.ceil(maxC / 2);
                for (let k = 0; k < numPairs; k++) {
                    const c_left = maxC - 2 * k;
                    const c_right = maxC - (2 * k + 1);
                    
                    const keyLeft = `${r},${c_left}`;
                    const occupiedLeft = seatMap[keyLeft];
                    
                    if (c_right >= 1) {
                        const keyRight = `${r},${c_right}`;
                        const occupiedRight = seatMap[keyRight];
                        
                        gridHTML += `
                            <div class="col-span-2 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-650 bg-brown-100/40 dark:bg-slate-750/30 rounded-xl shadow-sm gap-1">
                                <!-- Chairs Row -->
                                <div class="grid grid-cols-2 gap-1.5">
                                    ${renderClassEditorChairHTML(r, c_left, occupiedLeft)}
                                    ${renderClassEditorChairHTML(r, c_right, occupiedRight)}
                                </div>
                                <!-- Desk -->
                                <div class="py-0.5 bg-gray-250 dark:bg-slate-700 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-600">
                                    Meja
                                </div>
                            </div>
                        `;
                    } else {
                        // Single fallback for odd column count
                        gridHTML += `
                            <div class="col-span-1 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-650 bg-brown-100/40 dark:bg-slate-750/30 rounded-xl shadow-sm gap-1">
                                ${renderClassEditorChairHTML(r, c_left, occupiedLeft)}
                                <!-- Desk -->
                                <div class="py-0.5 bg-gray-250 dark:bg-slate-700 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-600">
                                    Meja
                                </div>
                            </div>
                        `;
                    }
                }
            } else {
                for (let c = maxC; c >= 1; c--) {
                    const key = `${r},${c}`;
                    const occupied = seatMap[key];
                    
                    gridHTML += `
                        <div class="col-span-1 flex flex-col justify-between p-1.5 border border-brown-200 dark:border-slate-650 bg-brown-100/40 dark:bg-slate-750/30 rounded-xl shadow-sm gap-1">
                            ${renderClassEditorChairHTML(r, c, occupied)}
                            <!-- Desk -->
                            <div class="py-0.5 bg-gray-250 dark:bg-slate-700 rounded text-center text-[7px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest border border-gray-300 dark:border-slate-600">
                                Meja
                            </div>
                        </div>
                    `;
                }
            }
        }
        
        gridHTML += `</div>`;
        wrapper.innerHTML = gridHTML;

        // Attach seat click listener
        wrapper.querySelectorAll('[data-row]').forEach(cell => {
            const r = parseInt(cell.dataset.row);
            const c = parseInt(cell.dataset.col);
            cell.onclick = (e) => {
                e.stopPropagation();
                showSeatPickerMenu(cell, r, c);
            };
        });
    }

    function showSeatPickerMenu(targetCell, row, col) {
        if (seatPickerMenu) seatPickerMenu.remove();
        
        seatPickerMenu = document.createElement('div');
        seatPickerMenu.className = 'absolute z-50 bg-white dark:bg-slate-800 border border-gray-255 dark:border-slate-700 shadow-2xl rounded-xl p-3 w-56 max-h-64 overflow-y-auto';
        
        const currentClass = db.classes[currentClassIndex];
        const occupiedBy = currentClass.students.find(s => s.seatRow === row && s.seatCol === col);
        
        let html = `
            <div class="text-[10px] uppercase tracking-wider font-extrabold text-gray-400 dark:text-slate-500 mb-2 border-b border-gray-100 dark:border-slate-700 pb-1.5 flex justify-between items-center">
                <span>Pilih Murid (B${row}-K${col})</span>
                <button type="button" id="btn-close-seat-picker" class="text-gray-400 hover:text-gray-650 dark:hover:text-slate-350 font-bold">✕</button>
            </div>
            <div class="space-y-1">
                <button type="button" class="w-full text-left px-2 py-1.5 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded font-semibold transition-colors btn-assign-student" data-student-id="clear">
                    ✕ Kosongkan Kursi
                </button>
        `;
        
        // Sort students: unassigned first, then assigned
        const sortedStudents = [...currentClass.students].sort((a, b) => {
            const aAssigned = a.seatRow && a.seatCol;
            const bAssigned = b.seatRow && b.seatCol;
            if (aAssigned && !bAssigned) return 1;
            if (!aAssigned && bAssigned) return -1;
            return a.nama.localeCompare(b.nama);
        });
        
        sortedStudents.forEach(s => {
            const isSelected = occupiedBy && occupiedBy.id === s.id;
            const otherSeat = s.seatRow && s.seatCol && (!occupiedBy || occupiedBy.id !== s.id) ? `B${s.seatRow}-K${s.seatCol}` : '';
            const statusText = otherSeat ? ` (${otherSeat})` : '';
            const activeClass = isSelected ? 'bg-brown-50 dark:bg-brown-950/30 text-brown-600 dark:text-brown-300 font-bold' : 'text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700';
            
            html += `
                <button type="button" class="w-full text-left px-2 py-1.5 text-xs rounded transition-colors flex justify-between items-center btn-assign-student ${activeClass}" data-student-id="${s.id}">
                    <span class="truncate">${s.nama}</span>
                    <span class="text-[9px] text-gray-400 dark:text-slate-500">${statusText}</span>
                </button>
            `;
        });
        
        html += `</div>`;
        seatPickerMenu.innerHTML = html;
        
        // Append to the parent container of the grid (so it absolute-positions relative to it)
        const container = document.getElementById('interactive-layout-grid-wrapper').parentNode;
        container.appendChild(seatPickerMenu);
        
        // Position menu near the targetCell
        const rect = targetCell.getBoundingClientRect();
        const parentRect = container.getBoundingClientRect();
        let left = rect.left - parentRect.left + (rect.width / 2) - 112; // center align
        let top = rect.bottom - parentRect.top + 8;
        
        // Overflow checks
        if (left < 10) left = 10;
        if (left + 224 > parentRect.width - 10) left = parentRect.width - 234;
        if (top + 256 > parentRect.height - 10) {
            top = rect.top - parentRect.top - 200; // Position above if overflows
        }
        if (top < 10) top = 10;
        
        seatPickerMenu.style.left = `${left}px`;
        seatPickerMenu.style.top = `${top}px`;
        
        // Close button handler
        seatPickerMenu.querySelector('#btn-close-seat-picker').onclick = (e) => {
            e.stopPropagation();
            seatPickerMenu.remove();
            seatPickerMenu = null;
        };
        
        // Assign student click handler
        seatPickerMenu.querySelectorAll('.btn-assign-student').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const studentId = btn.getAttribute('data-student-id');
                
                recordState();
                
                // Clear current seat occupancy
                currentClass.students.forEach(s => {
                    if (s.seatRow === row && s.seatCol === col) {
                        s.seatRow = null;
                        s.seatCol = null;
                    }
                });
                
                if (studentId !== 'clear') {
                    const targetStudent = currentClass.students.find(s => s.id === studentId);
                    if (targetStudent) {
                        targetStudent.seatRow = row;
                        targetStudent.seatCol = col;
                    }
                }
                
                saveDB();
                seatPickerMenu.remove();
                seatPickerMenu = null;
                
                // Re-render seating grid & main table
                renderSeatingGrid(currentClass);
                renderTable();
            };
        });
    }

    // Close seat picker menu if clicked outside
    document.addEventListener('click', (e) => {
        if (seatPickerMenu && !seatPickerMenu.contains(e.target) && !e.target.closest('[data-row]')) {
            seatPickerMenu.remove();
            seatPickerMenu = null;
        }
    });

    function hideSeatPopover() {
        if (seatPopover) {
            seatPopover.classList.add('pointer-events-none');
            seatPopover.classList.remove('opacity-100');
            delete seatPopover.dataset.activeStudentIdx;
        }
    }

    // Document listener for click-away to close seating popover
    document.addEventListener('click', (e) => {
        if (seatPopover && seatPopover.classList.contains('opacity-100')) {
            if (!seatPopover.contains(e.target) && !e.target.closest('.cell-seat')) {
                hideSeatPopover();
            }
        }
    });

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

    btnSubmitClass.onclick = () => {
        const grade = document.getElementById('input-class-grade').value;
        const group = document.getElementById('input-class-group').value.trim();
        const year1Str = document.getElementById('input-class-year1').value;
        const year2Str = document.getElementById('input-class-year2').value;
        const sched1 = document.getElementById('input-class-sched1') ? document.getElementById('input-class-sched1').value.trim() : '';
        const sched2 = document.getElementById('input-class-sched2') ? document.getElementById('input-class-sched2').value.trim() : '';
        
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
            sched1: sched1,
            sched2: sched2,
            seatRows: 6,
            seatCols: 6,
            seatType: 'single',
            students: []
        };

        db.classes.push(newClass);
        saveDB();
        
        document.getElementById('input-class-group').value = '';
        document.getElementById('input-class-year1').value = '';
        document.getElementById('input-class-year2').value = '';
        if (document.getElementById('input-class-sched1')) document.getElementById('input-class-sched1').value = '';
        if (document.getElementById('input-class-sched2')) document.getElementById('input-class-sched2').value = '';
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
        btnExportExcel.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdownExportMenu) dropdownExportMenu.classList.add('hidden');
            if (dropdownArrowIcon) dropdownArrowIcon.classList.remove('rotate-180');

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
            
            // --- Styling Constants ---
            const borderAll = {
                top: { style: "thin", color: { rgb: "D1D5DB" } },
                bottom: { style: "thin", color: { rgb: "D1D5DB" } },
                left: { style: "thin", color: { rgb: "D1D5DB" } },
                right: { style: "thin", color: { rgb: "D1D5DB" } }
            };

            const titleStyle = { 
                font: { bold: true, sz: 14, color: { rgb: "111827" }, name: "Inter" },
                alignment: { horizontal: "center", vertical: "center" }
            };
            const mainSubStyle = {
                font: { sz: 10.5, color: { rgb: "4B5563" }, name: "Inter" },
                alignment: { horizontal: "center", vertical: "center" }
            };
            const subTitleStyle = { 
                font: { bold: true, sz: 11, color: { rgb: "111827" }, name: "Inter" } 
            };
            
            const headerStyle = {
                font: { bold: true, color: { rgb: "1F2937" }, sz: 10, name: "Inter" },
                fill: { fgColor: { rgb: "F3F4F6" } }, // light gray
                border: borderAll,
                alignment: { horizontal: "center", vertical: "center" }
            };

            const colorRed = { rgb: "FEE2E2" }; // red-50
            const colorRedText = { rgb: "B91C1C" }; // red-700
            const colorWhite = { rgb: "FFFFFF" };
            const colorBlack = { rgb: "1F2937" }; // gray-800

            targetClasses.forEach(cls => {
                const data = [];
                const rowMetadata = [];
                const maxHarianCount = cls.harianCount || 2;

                // 1. Global Title (DAFTAR NILAI TAHUN AJARAN XXXX/XXXX)
                data.push([`DAFTAR NILAI TAHUN AJARAN ${selectedYear}`]);
                rowMetadata.push({ type: 'main_title' });
                
                const prof = db.profile || { name: "R. Bangun S.Pd", mapel: "Matematika" };
                
                const formatValue = (val) => {
                    if (!val || val.trim() === '-' || val.trim().toLowerCase() === 'opsional') {
                        return ": -";
                    }
                    let clean = val.trim();
                    if (clean.startsWith('(') && clean.endsWith(')')) {
                        return `: ${clean}`;
                    }
                    return `: (${clean})`;
                };

                data.push([`Mata Pelajaran`, '', formatValue(prof.mapel)]);
                rowMetadata.push({ type: 'meta_row' });
                
                data.push([`Guru Pengampu`, '', formatValue(prof.name)]);
                rowMetadata.push({ type: 'meta_row' });

                data.push([`Hari/Jam Pelajaran 1`, '', formatValue(cls.sched1)]);
                rowMetadata.push({ type: 'meta_row' });

                data.push([`Hari/Jam Pelajaran 2`, '', formatValue(cls.sched2)]);
                rowMetadata.push({ type: 'meta_row' });
                
                data.push([]);
                rowMetadata.push({ type: 'empty' });

                // 2. Class Subtitle (KELAS | : | Nama Kelas) dipisah tiap cell
                let classNameStr = cls.name.toUpperCase();
                if(classNameStr.startsWith('KELAS ')) {
                    classNameStr = classNameStr.replace('KELAS ', '');
                }
                
                data.push(['KELAS', '', `: ${classNameStr}`]);
                rowMetadata.push({ type: 'class_subtitle' });
                
                // Table Headers
                const headers = ['No', 'NIS', 'Nama Lengkap', 'L/P', 'Tempat Duduk'];
                for (let i = 0; i < maxHarianCount; i++) {
                    headers.push(`Harian ${i + 1}`);
                }
                headers.push('UTS', 'UAS', 'Nilai Akhir', 'Catatan');
                data.push(headers);
                rowMetadata.push({ type: 'header' });
                
                // Table Data (Students)
                cls.students.forEach((student, index) => {
                    const seatStr = student.seatRow && student.seatCol ? `B${student.seatRow}-K${student.seatCol}` : '-';
                    const row = [index + 1, student.nis, student.nama, student.jk || '-', seatStr];
                    
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
                    
                    rowMetadata.push({ 
                        type: 'student', 
                        isMerah: isMerah, 
                        isKetua: false,
                        namaCol: 2,
                        finalScoreCol: row.length - 2,
                        catatanCol: row.length - 1
                    });
                });
                
                // Create Sheet
                const ws = XLSX.utils.aoa_to_sheet(data);
                
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
                    } else if (meta.type === 'meta_row') {
                        const colIdx = XLSX.utils.decode_col(col);
                        if (colIdx === 0) {
                            cell.s = {
                                font: { bold: true, name: "Inter", sz: 10 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        } else if (colIdx === 2) {
                            cell.s = {
                                font: { name: "Inter", sz: 10 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        }
                    } else if (meta.type === 'class_subtitle') {
                        const colIdx = XLSX.utils.decode_col(col);
                        if (colIdx === 0 || colIdx === 2) {
                            cell.s = {
                                font: { bold: true, name: "Inter", sz: 11 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        }
                    } else if (meta.type === 'header') {
                        cell.s = headerStyle;
                    } else if (meta.type === 'student') {
                        const colIdx = XLSX.utils.decode_col(col);
                        const isLeftAlign = (colIdx === meta.namaCol || colIdx === meta.catatanCol);
                        const align = isLeftAlign ? "left" : "center";
                        
                        let fgColor = colorWhite;
                        let fontColor = colorBlack;
                        let fontBold = false;
                        
                        if (colIdx === meta.finalScoreCol && meta.isMerah) {
                            fgColor = colorRed;
                            fontColor = colorRedText;
                            fontBold = true;
                        }
                        
                        cell.s = {
                            font: { bold: fontBold, color: fontColor, name: "Inter", sz: 10 },
                            fill: { fgColor: fgColor },
                            border: borderAll,
                            alignment: { horizontal: align, vertical: "center" }
                        };
                    }
                    
                    // Set standard text formatting for student rows to prevent Excel auto-formatting numbers
                    if (meta.type === 'student') {
                        cell.z = "@";
                    }
                }

                // --- Set Column Widths ---
                const colWidths = [
                    { wch: 8 },   // No
                    { wch: 12 },  // NIS
                    { wch: 30 },  // Nama Lengkap
                    { wch: 6 },   // L/P
                    { wch: 15 }   // Tempat Duduk
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
                    if (meta.type === 'meta_row') return { hpt: 20 };
                    if (meta.type === 'class_subtitle') return { hpt: 24 };
                    if (meta.type === 'header') return { hpt: 24 };
                    if (meta.type === 'student') return { hpt: 20 };
                    return { hpt: 12 }; // Spacer/empty rows
                });
                ws['!rows'] = rowHeights;
                
                // --- Merge Cells ---
                ws['!merges'] = [
                    { s: { r: 0, c: 0 }, e: { r: 0, c: colWidths.length - 1 } },
                    { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } },
                    { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } },
                    { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } },
                    { s: { r: 4, c: 0 }, e: { r: 4, c: 1 } },
                    { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }
                ];
                
                let sheetName = cls.name.replace(/[\\\/\?\*\[\]\:]/g, "").substring(0, 31);
                XLSX.utils.book_append_sheet(wb, ws, sheetName);
            });
            
            const fileName = `Rekap_Semua_Kelas_${selectedYear.replace(/[\\/\\s]/g, '-')}.xlsx`;
            XLSX.writeFile(wb, fileName);
            closeModal(modalExport);
        });
    }

    // Create Student
    btnSubmitStudent.onclick = () => {
        const nis = document.getElementById('input-student-nis').value.trim();
        const name = document.getElementById('input-student-name').value.trim();
        const jk = document.getElementById('input-student-jk').value;
        const seatRowVal = document.getElementById('input-student-seat-row').value;
        const seatColVal = document.getElementById('input-student-seat-col').value;

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
            catatan: "",
            seatRow: seatRowVal ? parseInt(seatRowVal) : null,
            seatCol: seatColVal ? parseInt(seatColVal) : null
        };

        db.classes[currentClassIndex].students.push(newStudent);
        saveDB();

        document.getElementById('input-student-nis').value = '';
        document.getElementById('input-student-name').value = '';
        document.getElementById('input-student-seat-row').value = '';
        document.getElementById('input-student-seat-col').value = '';
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
            if (document.getElementById('input-edit-class-sched1')) {
                document.getElementById('input-edit-class-sched1').value = cls.sched1 || "";
            }
            if (document.getElementById('input-edit-class-sched2')) {
                document.getElementById('input-edit-class-sched2').value = cls.sched2 || "";
            }
            
            
            // Initialize Seating Editor inside Edit Class Modal
            const activeR = cls.seatRows || 6;
            const activeC = cls.seatCols || 6;
            renderLayoutGridSelector(activeR, activeC);
            updateSeatTypeToggle(cls);
            renderSeatingGrid(cls);

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
            const sched1 = document.getElementById('input-edit-class-sched1') ? document.getElementById('input-edit-class-sched1').value.trim() : '';
            const sched2 = document.getElementById('input-edit-class-sched2') ? document.getElementById('input-edit-class-sched2').value.trim() : '';
            
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
            cls.sched1 = sched1;
            cls.sched2 = sched2;
            saveDB();
            
            closeModal(modalEditClass);
            
            currentYear = year;
            currentClassId = cls.id;
            loadYearDropdown();
        };
    }

    function updateSeatTypeToggle(cls) {
        const btnSingle = document.getElementById('btn-seat-type-single');
        const btnDouble = document.getElementById('btn-seat-type-double');
        if (!btnSingle || !btnDouble) return;
        
        const isDouble = (cls.seatType === 'double');
        
        if (isDouble) {
            btnDouble.className = "px-3.5 py-2 text-xs font-bold rounded-e-lg border border-brown-600 bg-brown-600 text-white dark:bg-brown-500 dark:border-brown-500 transition-colors focus:z-10";
            btnSingle.className = "px-3.5 py-2 text-xs font-bold rounded-s-lg border border-gray-250 bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors focus:z-10";
        } else {
            btnSingle.className = "px-3.5 py-2 text-xs font-bold rounded-s-lg border border-brown-600 bg-brown-600 text-white dark:bg-brown-500 dark:border-brown-500 transition-colors focus:z-10";
            btnDouble.className = "px-3.5 py-2 text-xs font-bold rounded-e-lg border-t border-b border-r border-gray-250 bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors focus:z-10";
        }
    }

    const btnSeatTypeSingle = document.getElementById('btn-seat-type-single');
    const btnSeatTypeDouble = document.getElementById('btn-seat-type-double');
    
    if (btnSeatTypeSingle && btnSeatTypeDouble) {
        btnSeatTypeSingle.onclick = () => {
            if (currentClassIndex === -1) return;
            const cls = db.classes[currentClassIndex];
            recordState();
            cls.seatType = 'single';
            saveDB();
            updateSeatTypeToggle(cls);
            renderSeatingGrid(cls);
            renderTable();
        };
        
        btnSeatTypeDouble.onclick = () => {
            if (currentClassIndex === -1) return;
            const cls = db.classes[currentClassIndex];
            recordState();
            cls.seatType = 'double';
            saveDB();
            updateSeatTypeToggle(cls);
            renderSeatingGrid(cls);
            renderTable();
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
            const seatRowVal = document.getElementById('input-edit-student-seat-row') ? document.getElementById('input-edit-student-seat-row').value : '';
            const seatColVal = document.getElementById('input-edit-student-seat-col') ? document.getElementById('input-edit-student-seat-col').value : '';
            
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
            student.seatRow = seatRowVal ? parseInt(seatRowVal) : null;
            student.seatCol = seatColVal ? parseInt(seatColVal) : null;
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
            const targetYear = currentYear || "2024/2025";
            let targetClasses = db.classes.filter(c => c.tahunAjaran === targetYear);
            
            // If database has no classes for current year, generate a mock template class
            if (targetClasses.length === 0) {
                targetClasses = [{
                    id: "mock_class",
                    name: "Kelas VII-A",
                    tahunAjaran: targetYear,
                    harianCount: 4,
                    sched1: "Senin, 07.00-08.45",
                    sched2: "",
                    students: [
                        { id: "mock_1", nis: "24001", nama: "Ahmad Budi Santoso", jk: "L", harian: [85, 90, 88, 88], uts: 85, uas: 90, catatan: "Sangat aktif di kelas." },
                        { id: "mock_2", nis: "24002", nama: "Citra Kirana", jk: "P", harian: [92, 95, 90, 90], uts: 88, uas: 92, catatan: "Pertahankan!" },
                        { id: "mock_3", nis: "24003", nama: "Dion Wiyoko", jk: "L", harian: [78, 80, 82, 82], uts: 75, uas: 80, catatan: "Perbanyak latihan soal." },
                        { id: "mock_4", nis: "24004", nama: "Eka Putri", jk: "P", harian: [88, 85, 90, 90], uts: 89, uas: 90, catatan: "" },
                        { id: "mock_5", nis: "24005", nama: "Farhan Maulana", jk: "L", harian: [75, 78, 80, 80], uts: 76, uas: 82, catatan: "" },
                        { id: "mock_6", nis: "24006", nama: "Gita Savitri", jk: "P", harian: [95, 98, 96, 96], uts: 95, uas: 97, catatan: "Teladan kelas." },
                        { id: "mock_7", nis: "24007", nama: "Hendra Wijaya", jk: "L", harian: [80, 82, 85, 85], uts: 80, uas: 84, catatan: "" },
                        { id: "mock_8", nis: "24008", nama: "Indah Permatasari", jk: "P", harian: [88, 90, 92, 92], uts: 89, uas: 91, catatan: "Aktif bertanya." },
                        { id: "mock_9", nis: "24009", nama: "Bagas Satrio", jk: "L", harian: [82, 80, 85, 85], uts: 82, uas: 85, catatan: "" },
                        { id: "mock_10", nis: "24010", nama: "Alya Nabila", jk: "P", harian: [90, 95, 88, 88], uts: 92, uas: 90, catatan: "" }
                    ]
                }];
            }

            const wb = XLSX.utils.book_new();
            
            // --- Styling Constants ---
            const borderAll = {
                top: { style: "thin", color: { rgb: "D1D5DB" } },
                bottom: { style: "thin", color: { rgb: "D1D5DB" } },
                left: { style: "thin", color: { rgb: "D1D5DB" } },
                right: { style: "thin", color: { rgb: "D1D5DB" } }
            };

            const titleStyle = { 
                font: { bold: true, sz: 14, color: { rgb: "111827" }, name: "Inter" },
                alignment: { horizontal: "center", vertical: "center" }
            };
            
            const headerStyle = {
                font: { bold: true, color: { rgb: "1F2937" }, sz: 10, name: "Inter" },
                fill: { fgColor: { rgb: "F3F4F6" } }, // light gray
                border: borderAll,
                alignment: { horizontal: "center", vertical: "center" }
            };

            const colorRed = { rgb: "FEE2E2" }; // red-50
            const colorRedText = { rgb: "B91C1C" }; // red-700
            const colorWhite = { rgb: "FFFFFF" };
            const colorBlack = { rgb: "1F2937" }; // gray-800

            targetClasses.forEach(cls => {
                const data = [];
                const rowMetadata = [];
                const maxHarianCount = cls.harianCount || 2;

                // 1. Global Title
                data.push([`DAFTAR NILAI TAHUN AJARAN ${targetYear}`]);
                rowMetadata.push({ type: 'main_title' });
                
                const prof = db.profile || { name: "R. Bangun S.Pd", mapel: "Matematika" };
                
                const formatValue = (val) => {
                    if (!val || val.trim() === '-' || val.trim().toLowerCase() === 'opsional') {
                        return ": -";
                    }
                    let clean = val.trim();
                    if (clean.startsWith('(') && clean.endsWith(')')) {
                        return `: ${clean}`;
                    }
                    return `: (${clean})`;
                };

                data.push([`Mata Pelajaran`, '', formatValue(prof.mapel)]);
                rowMetadata.push({ type: 'meta_row' });
                
                data.push([`Guru Pengampu`, '', formatValue(prof.name)]);
                rowMetadata.push({ type: 'meta_row' });

                data.push([`Hari/Jam Pelajaran 1`, '', formatValue(cls.sched1)]);
                rowMetadata.push({ type: 'meta_row' });

                data.push([`Hari/Jam Pelajaran 2`, '', formatValue(cls.sched2)]);
                rowMetadata.push({ type: 'meta_row' });
                
                data.push([]);
                rowMetadata.push({ type: 'empty' });

                // 2. Class Subtitle
                let classNameStr = cls.name.toUpperCase();
                if(classNameStr.startsWith('KELAS ')) {
                    classNameStr = classNameStr.replace('KELAS ', '');
                }
                data.push(['KELAS', '', `: ${classNameStr}`]);
                rowMetadata.push({ type: 'class_subtitle' });
                
                // Table Headers
                const headers = ['No', 'NIS', 'Nama Lengkap', 'L/P', 'Tempat Duduk'];
                for (let i = 0; i < maxHarianCount; i++) {
                    headers.push(`Harian ${i + 1}`);
                }
                headers.push('UTS', 'UAS', 'Nilai Akhir', 'Catatan');
                data.push(headers);
                rowMetadata.push({ type: 'header' });
                
                // Table Data (Students)
                cls.students.forEach((student, index) => {
                    const seatStr = student.seatRow && student.seatCol ? `B${student.seatRow}-K${student.seatCol}` : '-';
                    const row = [index + 1, student.nis, student.nama, student.jk || '-', seatStr];
                    
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
                    
                    rowMetadata.push({ 
                        type: 'student', 
                        isMerah: isMerah, 
                        isKetua: false,
                        namaCol: 2,
                        finalScoreCol: row.length - 2,
                        catatanCol: row.length - 1
                    });
                });
                
                // Create Sheet
                const ws = XLSX.utils.aoa_to_sheet(data);
                
                // Apply Styles
                for (const cellAddress in ws) {
                    if (cellAddress.startsWith('!')) continue;
                    
                    const cell = ws[cellAddress];
                    const col = cellAddress.replace(/[0-9]/g, '');
                    const row = parseInt(cellAddress.replace(/[a-zA-Z]/g, '')) - 1; // 0-indexed
                    
                    if (!rowMetadata[row]) continue;
                    const meta = rowMetadata[row];

                    if (meta.type === 'main_title') {
                        cell.s = titleStyle;
                    } else if (meta.type === 'meta_row') {
                        const colIdx = XLSX.utils.decode_col(col);
                        if (colIdx === 0) {
                            cell.s = {
                                font: { bold: true, name: "Inter", sz: 10 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        } else if (colIdx === 2) {
                            cell.s = {
                                font: { name: "Inter", sz: 10 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        }
                    } else if (meta.type === 'class_subtitle') {
                        const colIdx = XLSX.utils.decode_col(col);
                        if (colIdx === 0 || colIdx === 2) {
                            cell.s = {
                                font: { bold: true, name: "Inter", sz: 11 },
                                alignment: { horizontal: "left", vertical: "center" }
                            };
                        }
                    } else if (meta.type === 'header') {
                        cell.s = headerStyle;
                    } else if (meta.type === 'student') {
                        const colIdx = XLSX.utils.decode_col(col);
                        const isLeftAlign = (colIdx === meta.namaCol || colIdx === meta.catatanCol);
                        const align = isLeftAlign ? "left" : "center";
                        
                        let fgColor = colorWhite;
                        let fontColor = colorBlack;
                        let fontBold = false;
                        
                        if (colIdx === meta.finalScoreCol && meta.isMerah) {
                            fgColor = colorRed;
                            fontColor = colorRedText;
                            fontBold = true;
                        }
                        
                        cell.s = {
                            font: { bold: fontBold, color: fontColor, name: "Inter", sz: 10 },
                            fill: { fgColor: fgColor },
                            border: borderAll,
                            alignment: { horizontal: align, vertical: "center" }
                        };
                    }
                    
                    // Set standard text formatting for data rows cell to prevent Excel auto-formatting numbers
                    if (meta.type === 'student') {
                        cell.z = "@";
                    }
                }

                // --- Column Widths ---
                const colWidths = [
                    { wch: 8 },   // No
                    { wch: 12 },  // NIS
                    { wch: 30 },  // Nama Lengkap
                    { wch: 6 },   // L/P
                    { wch: 15 }   // Tempat Duduk
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

                // --- Row Heights ---
                const rowHeights = rowMetadata.map(meta => {
                    if (meta.type === 'main_title') return { hpt: 28 };
                    if (meta.type === 'meta_row') return { hpt: 20 };
                    if (meta.type === 'class_subtitle') return { hpt: 24 };
                    if (meta.type === 'header') return { hpt: 24 };
                    if (meta.type === 'student') return { hpt: 20 };
                    return { hpt: 12 };
                });
                ws['!rows'] = rowHeights;
                
                // --- Merge Cells ---
                ws['!merges'] = [
                    { s: { r: 0, c: 0 }, e: { r: 0, c: colWidths.length - 1 } },
                    { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } },
                    { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } },
                    { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } },
                    { s: { r: 4, c: 0 }, e: { r: 4, c: 1 } },
                    { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }
                ];
                
                let sheetName = cls.name.replace(/[\\\/\?\*\[\]\:]/g, "").substring(0, 31);
                XLSX.utils.book_append_sheet(wb, ws, sheetName);
            });
            
            const fileName = `Template_Import_Kelas_${targetYear.replace(/[\\/\\s]/g, '-')}.xlsx`;
            XLSX.writeFile(wb, fileName);
        });
    }

    if (btnSubmitImport) {
        btnSubmitImport.addEventListener('click', () => {
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
                    const firstWorksheet = workbook.Sheets[firstSheetName];
                    const firstJson = XLSX.utils.sheet_to_json(firstWorksheet, { header: 1 });

                    if (firstJson.length <= 1) {
                        alert("File kosong atau tidak memiliki data.");
                        return;
                    }

                    // Robust check: see if "DAFTAR NILAI TAHUN AJARAN" or "KELAS" is present in the first sheet
                    let isRekapExport = false;
                    for (let r = 0; r < Math.min(firstJson.length, 10); r++) {
                        const row = firstJson[r];
                        if (row) {
                            const hasTitle = row.some(cell => typeof cell === 'string' && cell.toUpperCase().includes('DAFTAR NILAI TAHUN AJARAN'));
                            const hasKelas = row[0] === 'KELAS';
                            if (hasTitle || hasKelas) {
                                isRekapExport = true;
                                break;
                            }
                        }
                    }
                    
                    if (isRekapExport) {
                        // Import/Restore/Sync Classes from Rekap Export File
                        recordState();
                        
                        let newClasses = [];
                        let updatedClasses = [];
                        let newStudentsCount = 0;
                        let updatedStudentsCount = 0;
                        let parsedYear = "";
                        
                        // Loop through all sheets in the Excel workbook
                        workbook.SheetNames.forEach(sheetName => {
                            const worksheet = workbook.Sheets[sheetName];
                            const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                            if (json.length === 0) return;
                            
                            // 1. Determine Year & Schedules
                            let sheetYear = "";
                            let sheetSched1 = "";
                            let sheetSched2 = "";
                            for (let r = 0; r < Math.min(json.length, 12); r++) {
                                const row = json[r];
                                if (row && row[0] && typeof row[0] === 'string') {
                                    const firstCell = row[0].toUpperCase().trim();
                                    if (firstCell.includes('DAFTAR NILAI TAHUN AJARAN')) {
                                        const match = row[0].toUpperCase().match(/DAFTAR NILAI TAHUN AJARAN\s+(.+)/);
                                        if (match && match[1]) {
                                            sheetYear = match[1].trim();
                                        }
                                    } else if (firstCell.includes('HARI/JAM PELAJARAN 1')) {
                                        let rawVal = String(row[2] || row[1] || '').trim();
                                        if (rawVal.startsWith(':')) {
                                            rawVal = rawVal.substring(1).trim();
                                        }
                                        if (rawVal.startsWith('(') && rawVal.endsWith(')')) {
                                            rawVal = rawVal.substring(1, rawVal.length - 1).trim();
                                        }
                                        if (rawVal && rawVal.toLowerCase() !== 'opsional') {
                                            sheetSched1 = rawVal;
                                        }
                                    } else if (firstCell.includes('HARI/JAM PELAJARAN 2')) {
                                        let rawVal = String(row[2] || row[1] || '').trim();
                                        if (rawVal.startsWith(':')) {
                                            rawVal = rawVal.substring(1).trim();
                                        }
                                        if (rawVal.startsWith('(') && rawVal.endsWith(')')) {
                                            rawVal = rawVal.substring(1, rawVal.length - 1).trim();
                                        }
                                        if (rawVal && rawVal.toLowerCase() !== 'opsional') {
                                            sheetSched2 = rawVal;
                                        }
                                    }
                                }
                            }
                            if (sheetYear) parsedYear = sheetYear;
                            
                            // 2. Determine Class Name
                            let className = "";
                            const genericNames = ['daftar siswa', 'sheet1', 'template', 'siswa', 'import', 'daftar_siswa', 'sheet 1'];
                            if (!genericNames.includes(sheetName.trim().toLowerCase())) {
                                className = sheetName.trim();
                                if (!className.startsWith('Kelas')) {
                                    className = `Kelas ${className}`;
                                }
                            }
                            
                            // Check if there is a KELAS row inside the sheet
                            let cellClassName = "";
                            for (let r = 0; r < Math.min(json.length, 12); r++) {
                                const row = json[r];
                                if (row && row[0] && typeof row[0] === 'string' && row[0].toUpperCase() === 'KELAS') {
                                    let rawVal = String(row[2] || row[1] || '').trim();
                                    if (rawVal.startsWith(':')) {
                                        rawVal = rawVal.substring(1).trim();
                                    }
                                    if (rawVal) {
                                        cellClassName = rawVal.startsWith('Kelas') ? rawVal : `Kelas ${rawVal}`;
                                    }
                                    break;
                                }
                            }
                            
                            // Prioritize sheet name if it's specific, fallback to cellClassName
                            if (!className) {
                                className = cellClassName || "Kelas Baru";
                            }
                            
                            // 3. Find Header Row (NIS and Nama Lengkap)
                            let headerRow = null;
                            let headerRowIndex = -1;
                            for (let r = 0; r < json.length; r++) {
                                const row = json[r];
                                if (row && Array.isArray(row)) {
                                    const hasNis = row.some(cell => typeof cell === 'string' && cell.trim().toUpperCase() === 'NIS');
                                    const hasNama = row.some(cell => typeof cell === 'string' && (cell.trim().toUpperCase() === 'NAMA LENGKAP' || cell.trim().toUpperCase() === 'NAMA' || cell.trim().toUpperCase() === 'NAMA MURID'));
                                    if (hasNis && hasNama) {
                                        headerRow = row;
                                        headerRowIndex = r;
                                        break;
                                    }
                                }
                            }
                            
                            if (!headerRow) {
                                // No header row found in this sheet, skip
                                return;
                            }
                            
                            // 4. Map columns case-insensitively with space trimming
                            const nisCol = headerRow.findIndex(cell => typeof cell === 'string' && cell.trim().toUpperCase() === 'NIS');
                            const namaCol = headerRow.findIndex(cell => typeof cell === 'string' && (cell.trim().toUpperCase() === 'NAMA LENGKAP' || cell.trim().toUpperCase() === 'NAMA' || cell.trim().toUpperCase() === 'NAMA MURID'));
                            const jkCol = headerRow.findIndex(cell => typeof cell === 'string' && (cell.trim().toUpperCase() === 'L/P' || cell.trim().toUpperCase() === 'JK' || cell.trim().toUpperCase().includes('KELAMIN')));
                            const seatCol = headerRow.findIndex(cell => typeof cell === 'string' && (cell.trim().toUpperCase() === 'TEMPAT DUDUK' || cell.trim().toUpperCase() === 'KOORDINAT' || cell.trim().toUpperCase() === 'SEAT' || cell.trim().toUpperCase().includes('DUDUK')));
                            const UTSCol = headerRow.findIndex(cell => typeof cell === 'string' && cell.trim().toUpperCase() === 'UTS');
                            const UASCol = headerRow.findIndex(cell => typeof cell === 'string' && cell.trim().toUpperCase() === 'UAS');
                            const catatanCol = headerRow.findIndex(cell => typeof cell === 'string' && cell.trim().toUpperCase().startsWith('CATATAN'));
                            
                            // Map Harian columns case-insensitively
                            const harianCols = [];
                            headerRow.forEach((colName, colIdx) => {
                                if (typeof colName === 'string') {
                                    const colClean = colName.trim().toUpperCase();
                                    if (colClean.startsWith('HARIAN ')) {
                                        harianCols.push({
                                            index: colIdx,
                                            num: parseInt(colClean.replace('HARIAN ', '')) || 1
                                        });
                                    }
                                }
                            });
                            harianCols.sort((a, b) => a.num - b.num);
                            const harianCount = harianCols.length || 2;
                            
                            const targetYear = parsedYear || currentYear || "2024/2025";
                            
                            // Find or Create Class in database
                            let classIdx = db.classes.findIndex(c => c.name.toLowerCase() === className.toLowerCase() && c.tahunAjaran === targetYear);
                            
                            let existingStudents = [];
                            if (classIdx === -1) {
                                const newClass = {
                                    id: "cls_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
                                    name: className,
                                    tahunAjaran: targetYear,
                                    students: [],
                                    harianCount: harianCount,
                                    isLocked: false,
                                    ketuaId: null,
                                    sched1: sheetSched1,
                                    sched2: sheetSched2
                                };
                                db.classes.push(newClass);
                                classIdx = db.classes.length - 1;
                                newClasses.push(className);
                            } else {
                                // Update properties
                                db.classes[classIdx].name = className; // Update name spelling/capitalization
                                db.classes[classIdx].harianCount = harianCount;
                                db.classes[classIdx].sched1 = sheetSched1 || db.classes[classIdx].sched1 || "";
                                db.classes[classIdx].sched2 = sheetSched2 || db.classes[classIdx].sched2 || "";
                                existingStudents = [...db.classes[classIdx].students];
                                db.classes[classIdx].students = []; // Clear to rebuild/sync with Excel data
                                db.classes[classIdx].ketuaId = null;
                                updatedClasses.push(className);
                            }
                            
                            const currentImportClass = db.classes[classIdx];
                            
                            // 5. Read students starting from row after headers
                            let studentRowIndex = headerRowIndex + 1;
                            while (studentRowIndex < json.length) {
                                const sRow = json[studentRowIndex];
                                if (!sRow || sRow.length === 0 || sRow[0] === undefined || sRow[0] === null || sRow[0] === '') {
                                    break;
                                }
                                if (sRow[0] === 'KELAS') {
                                    break;
                                }
                                
                                const nis = String(sRow[nisCol] !== undefined ? sRow[nisCol] : '').trim();
                                let nama = String(sRow[namaCol] !== undefined ? sRow[namaCol] : '').trim();
                                let jk = String(sRow[jkCol] !== undefined ? sRow[jkCol] : '').trim().toUpperCase();
                                
                                if (nis && nama) {
                                    let isKetua = false;
                                    if (nama.includes('(👑)')) {
                                        isKetua = true;
                                        nama = nama.replace('(👑)', '').trim();
                                    } else if (nama.includes('(👑 Ketua Kelas)')) {
                                        isKetua = true;
                                        nama = nama.replace('(👑 Ketua Kelas)', '').trim();
                                    }
                                    
                                    if (jk.startsWith('L') || jk === 'LAKI-LAKI') {
                                        jk = 'L';
                                    } else if (jk.startsWith('P') || jk === 'PEREMPUAN') {
                                        jk = 'P';
                                    } else {
                                        jk = 'L';
                                    }
                                    
                                    const studentHarian = [];
                                    for (let hIdx = 0; hIdx < harianCount; hIdx++) {
                                        const colInfo = harianCols[hIdx];
                                        if (colInfo) {
                                            const scoreVal = sRow[colInfo.index];
                                            studentHarian.push(scoreVal !== undefined && scoreVal !== null && scoreVal !== '' ? String(scoreVal).trim() : '');
                                        } else {
                                            studentHarian.push('');
                                        }
                                    }
                                    
                                    const utsVal = UTSCol !== -1 && sRow[UTSCol] !== undefined && sRow[UTSCol] !== null && sRow[UTSCol] !== '' ? String(sRow[UTSCol]).trim() : '';
                                    const uasVal = UASCol !== -1 && sRow[UASCol] !== undefined && sRow[UASCol] !== null && sRow[UASCol] !== '' ? String(sRow[UASCol]).trim() : '';
                                    const catatanVal = catatanCol !== -1 && sRow[catatanCol] !== undefined ? String(sRow[catatanCol]).trim() : '';
                                    const seatVal = seatCol !== -1 && sRow[seatCol] !== undefined && sRow[seatCol] !== null && sRow[seatCol] !== '' ? String(sRow[seatCol]).trim() : '';
                                    
                                    let seatRow = null;
                                    let seatColVal = null;
                                    if (seatVal) {
                                        const match = seatVal.match(/B?\s*(\d+)\s*[-,\s:K]*\s*K?\s*(\d+)/i);
                                        if (match) {
                                            seatRow = parseInt(match[1]);
                                            seatColVal = parseInt(match[2]);
                                        } else {
                                            const parts = seatVal.split(/[^0-9]+/);
                                            if (parts.length >= 2) {
                                                seatRow = parseInt(parts[0]);
                                                seatColVal = parseInt(parts[1]);
                                            }
                                        }
                                    }
                                    
                                    const existingStudent = existingStudents.find(s => s.nis === nis);
                                    if (existingStudent) {
                                        updatedStudentsCount++;
                                    } else {
                                        newStudentsCount++;
                                    }
                                    const studentId = existingStudent ? existingStudent.id : ("s_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9));
                                    
                                    currentImportClass.students.push({
                                        id: studentId,
                                        nis: nis,
                                        nama: nama,
                                        jk: jk,
                                        harian: studentHarian,
                                        uts: utsVal,
                                        uas: uasVal,
                                        catatan: catatanVal,
                                        seatRow: seatRow,
                                        seatCol: seatColVal
                                    });
                                    
                                    if (isKetua) {
                                        currentImportClass.ketuaId = studentId;
                                    }
                                }
                                
                                studentRowIndex++;
                            }
                        });
                        
                        if (newClasses.length > 0 || updatedClasses.length > 0) {
                            saveDB();
                            
                            // Try to reload Year and Class Dropdowns
                            const finalYear = parsedYear || currentYear || "2024/2025";
                            currentYear = finalYear;
                            const firstClassOfTargetYear = db.classes.find(c => c.tahunAjaran === finalYear);
                            if (firstClassOfTargetYear) {
                                currentClassId = firstClassOfTargetYear.id;
                            }
                            
                            loadYearDropdown();
                            
                            let msg = `Hasil Impor/Sinkronisasi Rekap Kelas (Tahun Ajaran ${finalYear}):\n\n`;
                            if (newClasses.length > 0) {
                                msg += `• ${newClasses.length} Kelas Baru Dibuat:\n  - ${newClasses.join('\n  - ')}\n\n`;
                            }
                            if (updatedClasses.length > 0) {
                                msg += `• ${updatedClasses.length} Kelas Diperbarui:\n  - ${updatedClasses.join('\n  - ')}\n\n`;
                            }
                            msg += `• Siswa Baru Ditambahkan: ${newStudentsCount} anak\n`;
                            msg += `• Nilai/Data Siswa Diperbarui: ${updatedStudentsCount} anak\n`;
                            
                            alert(msg);
                        } else {
                            alert("Format Rekap Kelas terdeteksi, tetapi tidak ada data kelas/siswa yang berhasil diproses.");
                        }
                        
                    } else {
                        // Standard Import: import/update into the CURRENT ACTIVE CLASS
                        if (currentClassIndex === -1) {
                            alert("Silakan pilih kelas terlebih dahulu untuk mengimpor daftar siswa.");
                            return;
                        }
                        
                        const currentClass = db.classes[currentClassIndex];
                        let importCount = 0;
                        let updateCount = 0;
                        
                        recordState();
                        
                        // Find header row or use index 1 if not found
                        let startRowIndex = 1;
                        let nisColIdx = 0;
                        let namaColIdx = 1;
                        let jkColIdx = 2;
                        let seatColIdx = -1;
                        
                        for (let r = 0; r < Math.min(firstJson.length, 5); r++) {
                            const possibleHeader = firstJson[r];
                            if (possibleHeader && possibleHeader.some(cell => typeof cell === 'string' && (cell.toLowerCase().includes('nis') || cell.toLowerCase().includes('nama')))) {
                                startRowIndex = r + 1;
                                possibleHeader.forEach((cellVal, colIdx) => {
                                    if (typeof cellVal === 'string') {
                                        const valLower = cellVal.toLowerCase();
                                        if (valLower.includes('nis')) nisColIdx = colIdx;
                                        else if (valLower.includes('nama')) namaColIdx = colIdx;
                                        else if (valLower.includes('kelamin') || valLower.includes('jk') || valLower === 'l/p') jkColIdx = colIdx;
                                        else if (valLower.includes('duduk') || valLower.includes('seat') || valLower.includes('koordinat')) seatColIdx = colIdx;
                                    }
                                });
                                break;
                            }
                        }
                        
                        for (let i = startRowIndex; i < firstJson.length; i++) {
                            const row = firstJson[i];
                            if (!row || row.length === 0) continue;
                            
                            const nis = String(row[nisColIdx] !== undefined ? row[nisColIdx] : '').trim();
                            const nama = String(row[namaColIdx] !== undefined ? row[namaColIdx] : '').trim();
                            let jk = String(row[jkColIdx] !== undefined ? row[jkColIdx] : '').trim().toUpperCase();
                            
                            if (!nis || !nama) continue;
                            
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
                            
                            if (jk.startsWith('L') || jk === 'LAKI-LAKI') {
                                jk = 'L';
                            } else if (jk.startsWith('P') || jk === 'PEREMPUAN') {
                                jk = 'P';
                            } else {
                                jk = 'L';
                            }
                            
                            const seatVal = seatColIdx !== -1 && row[seatColIdx] !== undefined && row[seatColIdx] !== null && row[seatColIdx] !== '' ? String(row[seatColIdx]).trim() : '';
                            let seatRow = null;
                            let seatColVal = null;
                            if (seatVal) {
                                const match = seatVal.match(/B?\s*(\d+)\s*[-,\s:K]*\s*K?\s*(\d+)/i);
                                if (match) {
                                    seatRow = parseInt(match[1]);
                                    seatColVal = parseInt(match[2]);
                                } else {
                                    const parts = seatVal.split(/[^0-9]+/);
                                    if (parts.length >= 2) {
                                        seatRow = parseInt(parts[0]);
                                        seatColVal = parseInt(parts[1]);
                                    }
                                }
                            }
                            
                            const existingStudent = currentClass.students.find(s => s.nis === nis);
                            if (existingStudent) {
                                existingStudent.nama = nama;
                                existingStudent.jk = jk;
                                existingStudent.seatRow = seatRow;
                                existingStudent.seatCol = seatColVal;
                                updateCount++;
                            } else {
                                currentClass.students.push({
                                    id: "s_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
                                    nis: nis,
                                    nama: nama,
                                    jk: jk,
                                    harian: Array(currentClass.harianCount).fill(''),
                                    uts: '',
                                    uas: '',
                                    catatan: '',
                                    seatRow: seatRow,
                                    seatCol: seatColVal
                                });
                                importCount++;
                            }
                        }
                        
                        saveDB();
                        renderTable();
                        
                        let msg = `Hasil Impor Roster Murid (${currentClass.name}):\n\n`;
                        msg += `• Murid Baru Ditambahkan: ${importCount} anak\n`;
                        msg += `• Murid Diperbarui/Sinkron: ${updateCount} anak\n`;
                        alert(msg);
                    }
                    
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
        btnPrintPdf.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdownExportMenu) dropdownExportMenu.classList.add('hidden');
            if (dropdownArrowIcon) dropdownArrowIcon.classList.remove('rotate-180');

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
                
                printHTML += `
                    <tr ${rowClass}>
                        <td class="center">${index + 1}</td>
                        <td class="center">${student.nis}</td>
                        <td>${student.nama}</td>
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
