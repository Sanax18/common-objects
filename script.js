tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                        }
                    }
                }
            }
        }

/*
         * VOCABULARY DATASET
         * Comprehensive list of objects for Home, Classroom/University, and Street.
         */
        const vocabularyData = [
            // AT HOME
            {
                id: "table",
                word: "Table",
                ipa: "/ˈteɪ.bəl/",
                translation: "Mesa",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-table",
                color: "amber",
                example: "The dinner is ready on the table.",
                exampleEs: "La cena está lista sobre la mesa.",
                grammarNote: "Singular: What is this? -> It's a table."
            },
            {
                id: "smartphone",
                word: "Smartphone",
                ipa: "/ˈsmɑːrt.foʊn/",
                translation: "Teléfono inteligente",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-mobile-screen-button",
                color: "indigo",
                example: "I use my smartphone to call my family every day.",
                exampleEs: "Uso mi teléfono inteligente para llamar a mi familia todos los días.",
                grammarNote: "Singular: What is this? -> It's a smartphone."
            },
            {
                id: "keys",
                word: "Keys",
                ipa: "/kiːz/",
                translation: "Llaves",
                category: "home",
                type: "plural",
                icon: "fa-solid fa-key",
                color: "yellow",
                example: "Don't forget your house keys on the desk!",
                exampleEs: "¡No olvides tus llaves de la casa en el escritorio!",
                grammarNote: "Plural: What are these? -> They are keys."
            },
            {
                id: "backpack",
                word: "Backpack",
                ipa: "/ˈbæk.pæk/",
                translation: "Mochila",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-briefcase",
                color: "blue",
                example: "My backpack is full of heavy books.",
                exampleEs: "Mi mochila está llena de libros pesados.",
                grammarNote: "Singular: What is this? -> It's a backpack."
            },
            {
                id: "wallet",
                word: "Wallet",
                ipa: "/ˈwɑː.lɪt/",
                translation: "Billetera",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-wallet",
                color: "emerald",
                example: "He keeps his cash and credit cards in his wallet.",
                exampleEs: "Él guarda su dinero en efectivo y tarjetas en su billetera.",
                grammarNote: "Singular: What is this? -> It's a wallet."
            },
            {
                id: "glasses",
                word: "Glasses",
                ipa: "/ˈɡlæs.ɪz/",
                translation: "Gafas / Lentes",
                category: "home",
                type: "plural",
                icon: "fa-solid fa-glasses",
                color: "purple",
                example: "She wears glasses when she reads a book.",
                exampleEs: "Ella usa gafas cuando lee un libro.",
                grammarNote: "Plural: What are these? -> They are glasses."
            },
            {
                id: "umbrella",
                word: "Umbrella",
                ipa: "/ʌmˈbrel.ə/",
                translation: "Paraguas",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-umbrella",
                color: "cyan",
                example: "Take an umbrella because it might rain today.",
                exampleEs: "Lleva un paraguas porque podría llover hoy.",
                grammarNote: "Singular: What is this? -> It's an umbrella."
            },
            {
                id: "clock",
                word: "Clock",
                ipa: "/klɑːk/",
                translation: "Reloj de pared",
                category: "home",
                type: "singular",
                icon: "fa-solid fa-clock",
                color: "rose",
                example: "The wall clock shows that it is eight o'clock.",
                exampleEs: "El reloj de pared muestra que son las ocho en punto.",
                grammarNote: "Singular: What is this? -> It's a clock."
            },

            // CLASSROOM / UNIVERSITY
            {
                id: "chair",
                word: "Chair",
                ipa: "/tʃer/",
                translation: "Silla",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-chair",
                color: "teal",
                example: "Please sit down on the chair.",
                exampleEs: "Por favor siéntate en la silla.",
                grammarNote: "Singular: What is this? -> It's a chair."
            },
            {
                id: "pen",
                word: "Pen",
                ipa: "/pen/",
                translation: "Bolígrafo / Lapicero",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-pen-nib",
                color: "blue",
                example: "I need a blue pen to sign this form.",
                exampleEs: "Necesito un bolígrafo azul para firmar este formulario.",
                grammarNote: "Singular: What is this? -> It's a pen."
            },
            {
                id: "pencil",
                word: "Pencil",
                ipa: "/ˈpen.səl/",
                translation: "Lápiz",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-pencil",
                color: "amber",
                example: "Draw the picture with a pencil first.",
                exampleEs: "Dibuja la imagen con un lápiz primero.",
                grammarNote: "Singular: What is this? -> It's a pencil."
            },
            {
                id: "eraser",
                word: "Eraser",
                ipa: "/ɪˈreɪ.sɚ/",
                translation: "Borrador",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-eraser",
                color: "pink",
                example: "Can I borrow your eraser to fix a mistake?",
                exampleEs: "¿Puedo pedir prestado tu borrador para corregir un error?",
                grammarNote: "Singular: What is this? -> It's an eraser."
            },
            {
                id: "notebook",
                word: "Notebook",
                ipa: "/ˈnoʊt.bʊk/",
                translation: "Cuaderno",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-book-open",
                color: "sky",
                example: "I write my daily class notes in my notebook.",
                exampleEs: "Escribo mis notas diarias de clase en mi cuaderno.",
                grammarNote: "Singular: What is this? -> It's a notebook."
            },
            {
                id: "laptop",
                word: "Laptop",
                ipa: "/ˈlæp.tɑːp/",
                translation: "Computadora portátil",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-laptop",
                color: "slate",
                example: "She is typing her research paper on her laptop.",
                exampleEs: "Ella está escribiendo su trabajo de investigación en su portátil.",
                grammarNote: "Singular: What is this? -> It's a laptop."
            },
            {
                id: "book",
                word: "Book",
                ipa: "/bʊk/",
                translation: "Libro",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-book",
                color: "indigo",
                example: "This English grammar book is very clear.",
                exampleEs: "Este libro de gramática en inglés es muy claro.",
                grammarNote: "Singular: What is this? -> It's a book."
            },
            {
                id: "whiteboard",
                word: "Whiteboard",
                ipa: "/ˈwaɪt.bɔːrd/",
                translation: "Tablero blanco",
                category: "classroom",
                type: "singular",
                icon: "fa-solid fa-chalkboard",
                color: "emerald",
                example: "The teacher wrote the homework assignment on the whiteboard.",
                exampleEs: "El profesor escribió la tarea en el tablero.",
                grammarNote: "Singular: What is this? -> It's a whiteboard."
            },

            // ON THE STREET
            {
                id: "traffic-light",
                word: "Traffic Light",
                ipa: "/ˈtræf.ɪk ˌlaɪt/",
                translation: "Semáforo",
                category: "street",
                type: "singular",
                icon: "fa-solid fa-traffic-light",
                color: "red",
                example: "Stop when the traffic light turns red.",
                exampleEs: "Detente cuando el semáforo se ponga en rojo.",
                grammarNote: "Singular: What is this? -> It's a traffic light."
            },
            {
                id: "bicycle",
                word: "Bicycle",
                ipa: "/ˈbaɪ.sə.kəl/",
                translation: "Bicicleta",
                category: "street",
                type: "singular",
                icon: "fa-solid fa-bicycle",
                color: "emerald",
                example: "He rides his bicycle to the university campus.",
                exampleEs: "Él monta en su bicicleta hacia el campus universitario.",
                grammarNote: "Singular: What is this? -> It's a bicycle."
            },
            {
                id: "bus-stop",
                word: "Bus Stop",
                ipa: "/ˈbʌs ˌstɑːp/",
                translation: "Parada de autobús",
                category: "street",
                type: "singular",
                icon: "fa-solid fa-bus-simple",
                color: "amber",
                example: "We are waiting at the bus stop for line number 5.",
                exampleEs: "Estamos esperando en la parada de autobús para la línea 5.",
                grammarNote: "Singular: What is this? -> It's a bus stop."
            },
            {
                id: "bench",
                word: "Bench",
                ipa: "/bentʃ/",
                translation: "Banca / Asiento de parque",
                category: "street",
                type: "singular",
                icon: "fa-solid fa-couch",
                color: "stone",
                example: "Let's sit down on the park bench and rest.",
                exampleEs: "Sentémonos en la banca del parque a descansar.",
                grammarNote: "Singular: What is this? -> It's a bench."
            }
        ];

        let currentFilter = 'all';
        let searchQuery = '';
        let flippedCards = new Set();
        let currentQuizIndex = 0;
        let quizScore = 0;
        let activeQuizQuestions = [];
        let currentSpeechText = '';
        let currentUtterance = null;

        function speakText(text) {
            if (!('speechSynthesis' in window)) {
                alert("Tu navegador no soporta sintetizador de voz.");
                return;
            }

            // Cancel only when there is speech to interrupt; idle cancels can clip startup audio.
            if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
                window.speechSynthesis.cancel();
            }

            currentSpeechText = text;
            const utterance = new SpeechSynthesisUtterance(text);
            currentUtterance = utterance;
            utterance.onend = utterance.onerror = function() {
                if (currentUtterance === utterance) {
                    currentUtterance = null;
                }
            };
            utterance.lang = 'en-US';
            
            // Adjust speed rate from user selector
            const speedSelect = document.getElementById('speed-select');
            if (speedSelect) {
                utterance.rate = parseFloat(speedSelect.value) || 1.0;
            }

            // Try to find a high quality English voice if available
            const voices = window.speechSynthesis.getVoices();
            const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
            if (englishVoice) {
                utterance.voice = englishVoice;
            }

            window.speechSynthesis.speak(utterance);
        }

        // Initialize Web Speech API voice loading
        if ('speechSynthesis' in window) {
            window.speechSynthesis.onvoiceschanged = function() {
                window.speechSynthesis.getVoices();
            };
        }

        const speedSelect = document.getElementById('speed-select');
        if (speedSelect) {
            speedSelect.addEventListener('change', function() {
                if ('speechSynthesis' in window && window.speechSynthesis.speaking && currentSpeechText) {
                    speakText(currentSpeechText);
                }
            });
        }

        function switchTab(tabName) {
            const tabs = ['flashcards', 'key-concept', 'quiz'];
            
            tabs.forEach(t => {
                const section = document.getElementById(`section-${t}`);
                const tabBtn = document.getElementById(`tab-${t}`);
                
                if (t === tabName) {
                    section.classList.remove('hidden');
                    tabBtn.className = "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center space-x-2 bg-white text-indigo-900 shadow-md";
                } else {
                    section.classList.add('hidden');
                    tabBtn.className = "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center space-x-2 text-white hover:text-indigo-100 hover:bg-white/10";
                }
            });

            // Scroll smoothly to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function renderFlashcards() {
            const grid = document.getElementById('flashcards-grid');
            const emptyState = document.getElementById('empty-state');
            grid.innerHTML = '';

            const filtered = vocabularyData.filter(item => {
                const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
                const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      item.translation.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }

            filtered.forEach(item => {
                const isFlipped = flippedCards.has(item.id);
                
                // Color badge mappings
                let categoryBadge = '';
                if (item.category === 'home') categoryBadge = '<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-house mr-1"></i>At Home</span>';
                else if (item.category === 'classroom') categoryBadge = '<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-graduation-cap mr-1"></i>Classroom</span>';
                else categoryBadge = '<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-city mr-1"></i>On Street</span>';

                const cardHTML = `
                    <div class="perspective-1000 h-80 w-full group">
                        <div id="card-inner-${item.id}" class="card-inner relative w-full h-full transform-style-3d cursor-pointer ${isFlipped ? 'is-flipped' : ''}">
                            
                            <!-- FRONT OF CARD -->
                            <div onclick="toggleCardFlip('${item.id}')" class="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all backface-hidden flex flex-col justify-between">
                                <div class="flex items-center justify-between">
                                    ${categoryBadge}
                                    <button onclick="event.stopPropagation(); speakText('${item.word}')" title="Escuchar pronunciación" class="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center shadow-2xs">
                                        <i class="fa-solid fa-volume-high text-sm"></i>
                                    </button>
                                </div>

                                <div class="text-center space-y-2 py-2">
                                    <div class="text-5xl text-indigo-600 my-1 group-hover:scale-110 transition-transform duration-300">
                                        <i class="${item.icon}"></i>
                                    </div>
                                    <h3 class="text-2xl font-black text-slate-800 tracking-tight">${item.word}</h3>
                                    <p class="text-xs font-mono text-slate-400">${item.ipa}</p>
                                    <p class="text-xs font-semibold text-indigo-600 bg-indigo-50 inline-block px-3 py-1 rounded-lg">${item.translation}</p>
                                </div>

                                <div class="flex items-center justify-center text-xs text-slate-400 font-medium pt-2 border-t border-slate-100">
                                    <i class="fa-solid fa-rotate mr-1.5 text-indigo-500"></i> Voltear para ver ejemplo
                                </div>
                            </div>

                            <!-- BACK OF CARD -->
                            <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900 to-purple-950 text-white rounded-3xl p-6 shadow-md backface-hidden rotate-y-180 flex flex-col justify-between border border-indigo-700">
                                <div class="flex items-center justify-between border-b border-indigo-800/80 pb-3">
                                    <span class="text-xs font-bold text-yellow-300 uppercase tracking-wider">
                                        <i class="fa-solid fa-quote-left mr-1"></i> Example Sentence
                                    </span>
                                    <button onclick="event.stopPropagation(); speakText('${item.example.replace(/'/g, "\\'")}')" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center">
                                        <i class="fa-solid fa-volume-high text-xs"></i>
                                    </button>
                                </div>

                                <div class="space-y-3 my-auto">
                                    <p class="text-base sm:text-lg font-bold leading-snug text-indigo-50">
                                        "${item.example}"
                                    </p>
                                    <p class="text-xs text-indigo-200 italic">
                                        "${item.exampleEs}"
                                    </p>
                                    <div class="mt-2 text-[11px] bg-white/10 p-2.5 rounded-xl border border-white/10 text-indigo-100">
                                        <i class="fa-solid fa-circle-info text-yellow-300 mr-1"></i> ${item.grammarNote}
                                    </div>
                                </div>

                                <div onclick="toggleCardFlip('${item.id}')" class="flex items-center justify-center text-xs text-indigo-300 font-medium pt-2 border-t border-indigo-800/80 hover:text-white transition">
                                    <i class="fa-solid fa-rotate-left mr-1.5"></i> Voltear al frente
                                </div>
                            </div>

                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', cardHTML);
            });

            updateCounts();
        }

        function toggleCardFlip(id) {
            const cardInner = document.getElementById(`card-inner-${id}`);
            if (flippedCards.has(id)) {
                flippedCards.delete(id);
                if (cardInner) cardInner.classList.remove('is-flipped');
            } else {
                flippedCards.add(id);
                if (cardInner) cardInner.classList.add('is-flipped');
            }
            updateCounts();
        }

        function updateCounts() {
            const countAll = vocabularyData.length;
            const countHome = vocabularyData.filter(v => v.category === 'home').length;
            const countClassroom = vocabularyData.filter(v => v.category === 'classroom').length;
            const countStreet = vocabularyData.filter(v => v.category === 'street').length;

            document.getElementById('count-all').innerText = countAll;
            document.getElementById('count-home').innerText = countHome;
            document.getElementById('count-classroom').innerText = countClassroom;
            document.getElementById('count-street').innerText = countStreet;

            const counterEl = document.getElementById('flipped-counter');
            if (counterEl) {
                counterEl.innerText = `Tarjetas exploradas: ${flippedCards.size} / ${vocabularyData.length}`;
            }
        }

        function filterCategory(category) {
            currentFilter = category;
            const buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(btn => {
                btn.className = "cat-btn px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-slate-100 text-slate-700 hover:bg-slate-200";
            });

            const activeBtn = document.getElementById(`cat-${category}`);
            if (activeBtn) {
                activeBtn.className = "cat-btn px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-indigo-600 text-white shadow-sm";
            }

            renderFlashcards();
        }

        function handleSearch() {
            searchQuery = document.getElementById('search-input').value;
            renderFlashcards();
        }

        // Dialogue playback helper
        function playFullDialogue(dialogueId) {
            if (dialogueId === 'd1') {
                speakText("What is this on the table?");
                setTimeout(() => speakText("It is a smartphone! And what are these?"), 2500);
                setTimeout(() => speakText("They are my house keys."), 5500);
            } else if (dialogueId === 'd2') {
                speakText("Excuse me, what is this object?");
                setTimeout(() => speakText("It is an eraser for the whiteboard."), 2500);
                setTimeout(() => speakText("Oh thank you! They are markers."), 5500);
            }
        }

        function startQuiz() {
            document.getElementById('quiz-start-screen').classList.add('hidden');
            document.getElementById('quiz-results-screen').classList.add('hidden');
            document.getElementById('quiz-play-screen').classList.remove('hidden');

            quizScore = 0;
            currentQuizIndex = 0;
            document.getElementById('quiz-score').innerText = quizScore;

            // Generate randomized list of 8 questions
            const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
            activeQuizQuestions = shuffled.slice(0, 8).map(item => {
                // Determine question grammatical format based on singular vs plural
                const questionText = item.type === 'plural' ? "What are these?" : "What is this?";
                
                // Correct answer wording
                let correctAnswer = "";
                if (item.type === 'plural') {
                    correctAnswer = `They are ${item.word.toLowerCase()}.`;
                } else {
                    const firstLetter = item.word.charAt(0).toLowerCase();
                    const article = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? "an" : "a";
                    correctAnswer = `It's ${article} ${item.word.toLowerCase()}.`;
                }

                // Generate 2 distractors from other vocabulary items
                const otherItems = vocabularyData.filter(v => v.id !== item.id);
                const distractorsRaw = [...otherItems].sort(() => 0.5 - Math.random()).slice(0, 2);

                const distractors = distractorsRaw.map(d => {
                    if (d.type === 'plural') {
                        return `They are ${d.word.toLowerCase()}.`;
                    } else {
                        const firstLetter = d.word.charAt(0).toLowerCase();
                        const article = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? "an" : "a";
                        return `It's ${article} ${d.word.toLowerCase()}.`;
                    }
                });

                // Mix options A, B, C
                const options = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());

                return {
                    item: item,
                    questionText: questionText,
                    correctAnswer: correctAnswer,
                    options: options
                };
            });

            loadQuizQuestion();
        }

        function loadQuizQuestion() {
            const feedbackBox = document.getElementById('quiz-feedback');
            feedbackBox.classList.add('hidden');

            const currentQ = activeQuizQuestions[currentQuizIndex];
            
            // Progress Bar & Question Num
            document.getElementById('quiz-question-number').innerText = `Pregunta ${currentQuizIndex + 1}/${activeQuizQuestions.length}`;
            const progressPercent = ((currentQuizIndex + 1) / activeQuizQuestions.length) * 100;
            document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;

            // Icon Display
            document.getElementById('quiz-icon-container').innerHTML = `<i class="${currentQ.item.icon}"></i>`;
            
            // Question Text
            document.getElementById('quiz-question-text').innerText = currentQ.questionText;

            // Render Options A, B, C
            const optionsContainer = document.getElementById('quiz-options-container');
            optionsContainer.innerHTML = '';

            const letters = ['A', 'B', 'C'];
            currentQ.options.forEach((optText, idx) => {
                const btn = document.createElement('button');
                btn.className = "quiz-opt-btn w-full p-4 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 border border-slate-200 rounded-2xl text-left font-semibold text-slate-800 transition flex items-center justify-between group";
                btn.onclick = () => selectQuizAnswer(optText, currentQ.correctAnswer, btn);

                btn.innerHTML = `
                    <div class="flex items-center space-x-3">
                        <span class="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs group-hover:bg-indigo-600 group-hover:text-white transition">
                            ${letters[idx]}
                        </span>
                        <span class="text-sm sm:text-base">${optText}</span>
                    </div>
                    <i class="fa-regular fa-circle text-slate-300 group-hover:text-indigo-500 transition"></i>
                `;
                optionsContainer.appendChild(btn);
            });

            // Automatically speak question prompt audio
            playQuizPromptAudio();
        }

        function playQuizPromptAudio() {
            const currentQ = activeQuizQuestions[currentQuizIndex];
            speakText(`${currentQ.questionText} ${currentQ.item.word}`);
        }

        function selectQuizAnswer(selectedOption, correctAnswer, clickedBtn) {
            // Disable all option buttons
            const allBtns = document.querySelectorAll('.quiz-opt-btn');
            allBtns.forEach(btn => btn.disabled = true);

            const feedbackBox = document.getElementById('quiz-feedback');
            const feedbackIcon = document.getElementById('feedback-icon');
            const feedbackText = document.getElementById('feedback-text');

            if (selectedOption === correctAnswer) {
                quizScore += 10;
                document.getElementById('quiz-score').innerText = quizScore;
                
                clickedBtn.className = "quiz-opt-btn w-full p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-left font-bold text-emerald-900 flex items-center justify-between";
                
                feedbackBox.className = "p-4 rounded-2xl border text-sm font-medium flex items-center justify-between bg-emerald-50 border-emerald-200 text-emerald-800";
                feedbackIcon.className = "fa-solid fa-circle-check text-2xl text-emerald-600";
                feedbackText.innerHTML = `<div><strong>¡Correcto!</strong> <span class="block text-xs font-normal">Escuchas la respuesta correcta: "${correctAnswer}"</span></div>`;
                
                speakText(`Correct! ${correctAnswer}`);
            } else {
                clickedBtn.className = "quiz-opt-btn w-full p-4 bg-rose-50 border-2 border-rose-400 rounded-2xl text-left font-bold text-rose-900 flex items-center justify-between";
                
                // Highlight the correct answer button
                allBtns.forEach(btn => {
                    if (btn.innerText.includes(correctAnswer)) {
                        btn.className = "quiz-opt-btn w-full p-4 bg-emerald-50 border-2 border-emerald-400 rounded-2xl text-left font-bold text-emerald-900 flex items-center justify-between";
                    }
                });

                feedbackBox.className = "p-4 rounded-2xl border text-sm font-medium flex items-center justify-between bg-rose-50 border-rose-200 text-rose-800";
                feedbackIcon.className = "fa-solid fa-circle-xmark text-2xl text-rose-600";
                feedbackText.innerHTML = `<div><strong>¡Casi!</strong> <span class="block text-xs font-normal">La respuesta correcta era: <strong>${correctAnswer}</strong></span></div>`;
                
                speakText(`Not quite. The correct answer is: ${correctAnswer}`);
            }

            feedbackBox.classList.remove('hidden');
        }

        function nextQuestion() {
            currentQuizIndex++;
            if (currentQuizIndex < activeQuizQuestions.length) {
                loadQuizQuestion();
            } else {
                showQuizResults();
            }
        }

        function showQuizResults() {
            document.getElementById('quiz-play-screen').classList.add('hidden');
            document.getElementById('quiz-results-screen').classList.remove('hidden');

            const totalQuestions = activeQuizQuestions.length;
            const correctCount = quizScore / 10;
            const percentage = Math.round((correctCount / totalQuestions) * 100);

            document.getElementById('result-score-percent').innerText = `${percentage}%`;
            document.getElementById('result-score-count').innerText = `${correctCount} / ${totalQuestions}`;

            const badgeIcon = document.getElementById('result-badge-icon');
            const resultMsg = document.getElementById('result-message');

            if (percentage >= 80) {
                badgeIcon.className = "w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto shadow-md bg-emerald-100 text-emerald-600 border-4 border-emerald-200";
                resultMsg.innerText = "¡Felicidades! Has dominado el vocabulario de objetos cotidianos.";
                speakText("Great job! You passed the quiz!");
            } else {
                badgeIcon.className = "w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto shadow-md bg-amber-100 text-amber-600 border-4 border-amber-200";
                resultMsg.innerText = "¡Buen intento! Repasa las tarjetas y vuelve a intentarlo para obtener un 100%.";
                speakText("Good effort! Keep practicing your everyday objects.");
            }
        }

        window.onload = function() {
            renderFlashcards();
        };
