document.addEventListener('DOMContentLoaded', function() {
    const questionRange = document.getElementById('question-range');
    const selectedCountLabel = document.getElementById('questions-count');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const setupContainer = document.getElementById('setup-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionIndicator = document.getElementById('question-indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const resetQuizBtn = document.getElementById('reset-quiz-btn');
    const resultsContainer = document.getElementById('results-container');
    const scoreElement = document.getElementById('score');
    const resultsDetails = document.getElementById('results-details');
    const backToQuizBtn = document.getElementById('back-to-quiz-btn');

    // Array of all questions
    const allQuestions = [
        { q: 'বিশ্বের সবচেয়ে গরম দেশ কোনটি?', options: ['লিবিয়া', 'সৌদি আরব', 'মিশর', 'ইরাক'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে ঠান্ডা স্থান কোনটি?', options: ['সাইবেরিয়া', 'অ্যান্টার্কটিকা', 'গ্রিনল্যান্ড', 'আলাস্কা'], answer: 1 },
        { q: 'বিশ্বের সবচেয়ে বড় বায়ু বিদ্যুৎ উৎপাদনকারী দেশ কোনটি?', options: ['চীন', 'আমেরিকা', 'জার্মানি', 'ভারত'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় তেল উৎপাদনকারী দেশ কোনটি?', options: ['সৌদি আরব', 'রাশিয়া', 'আমেরিকা', 'ইরাক'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় বিমানবন্দর কোনটি?', options: ['দুবাই আন্তর্জাতিক বিমানবন্দর', 'হিথ্রো বিমানবন্দর', 'চাঙ্গি বিমানবন্দর', 'আটাতুর্ক বিমানবন্দর'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় শহর (জনসংখ্যার দিক থেকে) কোনটি?', options: ['টোকিও', 'দিল্লি', 'শাংহাই', 'মুম্বাই'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় প্রাচীন সভ্যতা কোনটি?', options: ['মেসোপটেমিয়া', 'মিশর', 'ইন্ডাস', 'চীন'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় বন্যপ্রাণী অভয়ারণ্য কোনটি?', options: ['ক্রুগার ন্যাশনাল পার্ক', 'সারেঙ্গেটি', 'বানফ ন্যাশনাল পার্ক', 'রামারি'], answer: 1 },
        { q: 'বিশ্বের সবচেয়ে বড় সমুদ্রের দ্বীপ কোনটি?', options: ['গ্রিনল্যান্ড', 'নিউ গিনি', 'বোর্নিও', 'মাদাগাস্কার'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় বায়ু বিদ্যুৎ উৎপাদনকারী দেশ কোনটি?', options: ['চীন', 'জার্মানি', 'আমেরিকা', 'ভারত'], answer: 0 },
        { q: 'আয়তন অনুযায়ী বাংলাদেশের ক্ষুদ্রতম জেলা কোনটি?', options: [ 'পঞ্চগড়', 'রাঙ্গামাটি', 'সাতক্ষীরা', 'নারায়ণগঞ্জ' ], answer: 3 },
         { q: 'আয়তনের দিক থেকে বিশ্বে বাংলাদেশের স্থান কততম?', options: [ '৮৫', '৯২', '৯৪', '১০২' ], answer: 2 }, 
         { q: 'বাংলাদেশের সকল পৌরসভার সদস্য সংখ্যা -', options: [ 'সমান', 'এলাকা ও জনসংখ্যার ভিত্তিতে নির্ধারিত', 'সরকার কর্তৃক নির্ধারিত', 'মেয়র কর্তৃক নির্ধারিত' ], answer: 1 }, 
         { q: 'বাংলাদেশের সর্ব উত্তরের জেলা থেকে হিমালয়ের কোন শৃঙ্গ দেখা যায়?', options: [ 'কাঞ্চনজঙ্ঘা', 'চিম্বুক', 'এভারেস্ট', 'কেওকারাডং' ], answer: 0 }, 
         { q: 'Which constitutional amendment replaced "Dacca" as "Dhaka"?', options: [ 'The Fourth Amendment, 1975', 'The Sixth Amendment, 1981', 'The Eighth Amendment, 1988', 'The Tenth Amendment, 1990' ], answer: 2 }, 
         { q: 'Which one of the following is not a local government institution?', options: [ 'Zilla Parishad', 'Union Parishad', 'Upazila Parishad', 'Divisional Board' ], answer: 3 }, 
         { q: 'Time difference of Bangladesh with Greenwich Meantime is-', options: [ '5 hours', '6 hours', '7 hours', '8 hours' ], answer: 1 },
         { q: 'ঢাকায় সর্বপ্রথম কবে রাজধানী স্থাপিত হয়?', options: [ '১২১০ খ্রিষ্টাব্দে', '১৩১০ খ্রিষ্টাব্দে', '১৫২০ খ্রিষ্টাব্দে', '১৬১০ খ্রিষ্টাব্দে' ], answer: 3 },
          { q: 'ঢাকায় বাংলার প্রথম রাজধানী কবে স্থাপিত হয়?', options: [ '১৫১০ সালে', '১৫৯০ সালে', '১৬০০ সালে', '১৬১০ সালে' ], answer: 3 }, 
          { q: 'বাংলাদেশে সিটি কর্পোরেশনের সংখ্যা কয়টি?', options: [ '১২', '১৫', '৮', '৯' ], answer: 2 }, 
          { q: 'বাংলাদেশের বৃহত্তম জেলা কোনটি?', options: [ 'ঢাকা', 'নারায়ণগঞ্জ', 'রাঙামাটি', 'সিলেট' ], answer: 2 }, 
          { q: 'বাংলাদেশের প্রথম "সাইবার সিটি"', options: [ 'কুমিল্লা', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট' ], answer: 3 }, 
          { q: 'মৌজা কী?', options: [ 'গ্রাম', 'ভূমির কর', 'পদবি', 'ভূমির কর একক' ], answer: 0 }, 
          { q: 'Considering the land area, what is largest and smallest Upazila of Bangladesh?', options: [ 'Thanchi, Amtali', 'Shibaganj, Karnaphuli', 'Shyamnagar, Polash', 'Betagi, Bakergonj' ], answer: 2 }, 
          { q: 'Which one is the least populated division of Bangladesh?', options: [ 'Rangpur', 'Barisal', 'Mymensingh', 'Sylhet' ], answer: 1 },
          { q: 'Which of the following is the largest district In terms of volume?', options: [ 'Chattagram', 'Rangamati', 'Bandarban', 'Dhaka' ], answer: 1 }
    
    ];

    let questions = [];
    let currentQuestionIndex = 0;
    let userAnswers = {};

    // Display selected range value
    questionRange.addEventListener('input', () => {
        selectedCountLabel.textContent = questionRange.value;
    });

    // Start quiz with selected number of questions
    startQuizBtn.addEventListener('click', () => {
        const selectedCount = parseInt(questionRange.value);

        if (selectedCount > allQuestions.length) {
            alert("প্রশ্নের সংখ্যা ডেটাবেজের চেয়ে বেশি!");
            return;
        }

        questions = getRandomQuestions(allQuestions, selectedCount);
        currentQuestionIndex = 0;
        userAnswers = {};

        // Save the selected questions, currentQuestionIndex, and userAnswers in localStorage
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);

        setupContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        displayQuestion();
    });

    // Get random questions from the full array
    function getRandomQuestions(allQuestions, selectedCount) {
        let shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, selectedCount);
    }

    // Display the current question
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.q;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;

            if (userAnswers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });

        questionIndicator.textContent = `প্রশ্ন ${currentQuestionIndex + 1} এর মধ্যে ${questions.length}`;
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    }

    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        saveAnswers();
    
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
    }

    // Save answers to localStorage
    function saveAnswers() {
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    }

    // Go to previous question
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            saveProgress();
            displayQuestion();
        }
    });

    // Go to next question
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            saveProgress();
            displayQuestion();
        }
    });

    // Save current progress (question index and answers) to localStorage
    function saveProgress() {
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    }

    // View results
    viewResultsBtn.addEventListener('click', () => {
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                correctAnswers++;
            }
        });

        scoreElement.textContent = `আপনি ${correctAnswers} টি সঠিক উত্তর দিয়েছেন।`;

        resultsDetails.innerHTML = '';
        questions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            const userAnswer = userAnswers[index] !== undefined ? question.options[userAnswers[index]] : 'উত্তর দেওয়া হয়নি';
            const isCorrect = userAnswers[index] === question.answer;

            resultItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            resultItem.innerHTML = `
                <p><strong>প্রশ্ন ${index + 1}: ${question.q}</strong> </p>
                <p>আপনার উত্তর: ${userAnswer}</p>
                <p>সঠিক উত্তর: ${question.options[question.answer]}</p>
            `;
            resultsDetails.appendChild(resultItem);
        });

        quizContainer.classList.add('hidden');
        viewResultsBtn.classList.add('hidden');
        resetQuizBtn.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    });

    // Reset quiz
    resetQuizBtn.addEventListener('click', () => {
        localStorage.removeItem('quizQuestions');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('currentQuestionIndex');
        setupContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
    });

    // Back to quiz from results
    backToQuizBtn.addEventListener('click', () => {
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        viewResultsBtn.classList.remove('hidden');
        resetQuizBtn.classList.remove('hidden');
    });

    // Initialize quiz data from localStorage if available
    const savedQuestions = JSON.parse(localStorage.getItem('quizQuestions'));
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    const savedIndex = localStorage.getItem('currentQuestionIndex');

    if (savedQuestions && savedAnswers && savedIndex !== null) {
        questions = savedQuestions;
        userAnswers = savedAnswers;
        currentQuestionIndex = parseInt(savedIndex);

        setupContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        displayQuestion();
    }
});