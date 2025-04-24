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
       { q: 'বাংলাদেশের সকল পৌরসভার সদস্য সংখ্যা -', options: [ 'সমান', 'এলাকা ও জনসংখ্যার ভিত্তিতে নির্ধারিত', 'সরকার কর্তৃক নির্ধারিত', 'মেয়র কর্তৃক নির্ধারিত' ], answer: 1 }, 
         { q: 'বাংলাদেশের সর্ব উত্তরের জেলা থেকে হিমালয়ের কোন শৃঙ্গ দেখা যায়?', options: [ 'কাঞ্চনজঙ্ঘা', 'চিম্বুক', 'এভারেস্ট', 'কেওকারাডং' ], answer: 0 }, 
         { q: 'ঢাকায় সর্বপ্রথম কবে রাজধানী স্থাপিত হয়?', options: [ '১২১০ খ্রিষ্টাব্দে', '১৩১০ খ্রিষ্টাব্দে', '১৫২০ খ্রিষ্টাব্দে', '১৬১০ খ্রিষ্টাব্দে' ], answer: 3 },
          { q: 'ঢাকায় বাংলার প্রথম রাজধানী কবে স্থাপিত হয়?', options: [ '১৫১০ সালে', '১৫৯০ সালে', '১৬০০ সালে', '১৬১০ সালে' ], answer: 3 }, 
          { q: 'বাংলাদেশে সিটি কর্পোরেশনের সংখ্যা কয়টি?', options: [ '১২', '১৫', '৮', '৯' ], answer: 2 }, 
          { q: 'বাংলাদেশের বৃহত্তম জেলা কোনটি?', options: [ 'ঢাকা', 'নারায়ণগঞ্জ', 'রাঙামাটি', 'সিলেট' ], answer: 2 }, 
          { q: 'বাংলাদেশের প্রথম "সাইবার সিটি"', options: [ 'কুমিল্লা', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট' ], answer: 3 }, 
          { q: 'Which of the following is the largest district In terms of volume?', options: [ 'Chattagram', 'Rangamati', 'Bandarban', 'Dhaka' ], answer: 1 },
          { q: 'Which one is the least populated division of Bangladesh?', options: [ 'Rangpur', 'Barisal', 'Mymensingh', 'Sylhet' ], answer: 1 },
          { q: 'Considering the land area, what is largest and smallest Upazila of Bangladesh?', options: [ 'Thanchi, Amtali', 'Shibaganj, Karnaphuli', 'Shyamnagar, Polash', 'Betagi, Bakergonj' ], answer: 2 }, 
,
{
    q: 'Most southern part district of Bangladesh is-',
    options: ['Panchagarh', 'Bandarban', 'Sylhet', 'Cox\'s Bazar'],
    answer: 3
  },
  {
    q: 'Which of the following district has two borderline countries?',
    options: ['Rangamati', 'Sylhet', 'Mymensingh', 'Lalmonirhat'],
    answer: 0
  },
  {
    q: 'In the history of Dhaka, when was it declared capital for the first time?',
    options: ['1601', '1610', '1621', '1630'],
    answer: 1
  },
{
    q: 'আয়তনে বাংলাদেশের সর্ববৃহৎ সিটি কর্পোরেশন কোনটি?',
    options: ['রাজশাহী', 'ঢাকা', 'চট্টগ্রাম', 'গাজীপুর'],
    answer: 3
  },
  {
    q: 'ঢাকাকে প্রথম কখন বাংলার রাজধানী করা হয়?',
    options: ['১৫১০ সালে', '১৫৯০ সালে', '১৬০০ সালে', '১৬১০ সালে'],
    answer: 3
  },
  {
    q: 'GMT বা গ্রিনিচমান সময়ের সাথে বাংলাদেশের সময়ের পার্থক্য কত ঘণ্টা?',
    options: ['৬ ঘন্টা', '৮ ঘন্টা', '১০ ঘন্টা', '৫ ঘন্টা'],
    answer: 0
  },
  {
    q: 'বাংলাদেশের সর্ব-উত্তরে অবস্থিত জেলার নাম?',
    options: ['কুড়িগ্রাম', 'পীরগঞ্জ', 'পঞ্চগড়', 'সিলেট'],
    answer: 2
  },
  {
    q: 'বাংলাদেশের সর্বশেষ বিভাগের নাম কী?',
    options: ['ময়মনসিংহ', 'বরিশাল', 'খুলনা', 'রংপুর'],
    answer: 0
  },
  {
    q: 'স্বাধীনতালগ্নে বাংলাদেশের জেলা ছিল কতটি?',
    options: ['১৯', '২১', '৩২', '48'],
    answer: 0
  },
  {
    q: 'আয়তনে বাংলাদেশের বড় জেলা কোনটি?',
    options: ['ঢাকা', 'নারায়ণগঞ্জ', 'পার্বত্য রাঙ্গামাটি', 'পার্বত্য বান্দরবান'],
    answer: 2
  },
  {
    q: 'ঢাকা কত সালে সুবা-বাংলার রাজধানী হয়?',
    options: ['১৬১০', '১৬১১', '১৯১২', '১৬১৫'],
    answer: 0
  },
  {
    q: 'In term of land area, which one is the largest district of Bangladesh?',
    options: ['Rangamati', 'Chittagong', 'Dhaka', 'Feni'],
    answer: 0
  },
{
    q: 'বাংলাদেশের বৃহত্তম উপজেলা কোনটি?',
    options: ['শ্যামনগর', 'ঘাটাইল', 'সাভার', 'বরকল'],
    answer: 0
  },
    {
    q: 'বংলাদেশের সবচেয়ে কম বসতিপূর্ণ জেলা কোনটি?',
    options: ['বান্দরবান', 'রাঙ্গামাটি', 'খাগড়াছড়ি', 'মেহেরপুর'],
    answer: 0
  },
   {
    q: 'তথ্য মন্ত্রণালয়ের বর্তমান নাম কী?',
    options: ['তথ্য ও যেতার মন্ত্রণালয়', 'তথ্য ও যোগাযোগ মন্ত্রণালয়', 'তথ্য ও সংস্কৃতি মন্ত্রণালয়', 'তথ্য ও সাংস্কৃতি মন্ত্রণালয়'],
    answer: 2
  },
  {
    q: 'প্রাচীন চন্দ্রদ্বীপের বর্তমান নাম কী?',
    options: ['মালদ্বীপ', 'সন্দ্বীপ', 'হাতিয়া', 'বরিশাল'],
    answer: 3
  },
  {
    q: 'মুফল আমলে ঢাকার নাম কী ছিল?',
    options: ['ইসলামাবাদ', 'জাহাঙ্গীরনগর', 'বিক্রমপুর', 'সোনারগাঁও'],
    answer: 3
  },
  {
      q: 'বাংলাদেশে বর্তমানে বিভাগের সংখ্যা কয়টি?',
      options: ['৬টি', '৭টি', '৮টি', '৯টি'],
      answer: 2
    },
    {
      q: 'বাংলাবান্ধা কোন জেলায় অবস্থিত?',
      options: ['ঠাকুরগাঁও', 'শেরপুর', 'পঞ্চগড়', 'জয়পুরহাট'],
      answer: 2
    },
    {
      q: 'ঢাকা পৌরসভা\'র প্রথম নির্বাচন কবে অনুষ্ঠিত হয়?',
      options: ['১৬০৮ সালে', '১৮৬৪ সালে', '১৮৮৪ সালে', ' ১৯৯০ সালে'],
      answer: 2
    },
    {
        q: 'Of which place\'s former name "Gondowana land"?',
        options: ['Dinajpur', 'Bagerhat', 'Cox\'s-Bazar', 'Noakhali'],
        answer: 0
      },
      {
        q: 'What is the previous name of \'Barishal\'?',
        options: ['Chandradeep', 'Sudharam', 'Suvarna Gram', 'Bikrampur'],
        answer: 0
      },
      {
        q: 'What was the previous name of Comilla?',
        options: ['Tripura', 'Nasirabad', 'Sudharam', 'Subarnagram'],
        answer: 0
      },
      {
        q: 'বাংলাদেশের রুটির ঝুড়ি বলা হয় কোন জেলাকে?',
        options: ['বরিশাল', 'রাজশাহী', 'যশোর', 'দিনাজপুর'],
        answer: 3
      },
      {
        q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
        options: ['১টি', '২টি', '৩টি', '৪টি'],
        answer: 1
      },

        {
          q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
          options: ['১টি', '২টি', '৩টি', '৪টি'],
          answer: 1
        },
        {
          q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
          options: ['১টি', '২টি', '৩টি', '৪টি'],
          answer: 1
        },
        {
          q: 'বাংলাদেশের সাথে কোন দুটি দেশের স্থলসীমান্ত রয়েছে?',
          options: ['ভারত, পাকিস্তান', 'মালদ্বীপ, ভুটান', 'নেপাল, ভারত', 'ভারত, মায়ানমার'],
          answer: 3
        },
        {
          q: 'বাংলাদেশের ভৌগোলিক সঠিক অবস্থান কোনটি?',
          options: ['২৩.৬৮৫০ ডিগ্রি উত্তর, ৯০.৩৫৬৩ ডিগ্রি পশ্চিম', '৩০.৩৭৫৩ ডিগ্রি উত্তর, ৬৯.৩৪৫১ ডিগ্রি পশ্চিম', '২০.৫৯৩৭ ডিগ্রি উত্তর, ৭৮.৯৬২৯ ডিগ্রি পশ্চিম', 'কোনটিই নয়'],
          answer: 3
        },
        {
            q: 'বাংলার ভেনিস বলা হয় যে শহরকে?',
            options: ['চাঁদপুর', 'ভোলা', 'বরিশাল', 'খুলনা'],
            answer: 2
          },
          {
            q: 'ঢাকার প্রাচীন নাম কি?',
            options: ['জাহাঙ্গীরনগর', 'ইসলামপুর', 'সোনারগাঁও', 'ঢাকা'],
            answer: 0
          },
          {
            q: 'বরিশাল এর পূর্বনাম কী?',
            options: ['হরিকেল', 'বরদ্বীপ', 'চন্দ্রদ্বীপ', 'সুবর্ণচর'],
            answer: 2
          },
          {
            q: '\'গন্ডোয়ানাল্যান্ড\'- কোন স্থানের পূর্বনাম?',
            options: ['দিনাজপুর', 'বাগেরহাট', 'কক্সবাজার', 'বান্দরবান'],
            answer: 0
          },
          {
            q: 'বর্তমান মুজিব নগরের পূর্বনাম কি?',
            options: ['চন্দ্রবাড়ি', 'ভবেরপাড়া', 'টুংগীপাড়া', 'শিমুলিয়া'],
            answer: 1
          },
          {
            q: 'বাংলাদেশে সীমান্তবর্তী ভারতের রাজ্যের সংখ্যা কয়টি?',
            options: ['৩টি', '৪টি', '৫টি', '৬টি'],
            answer: 2
          },
          {
            q: 'নিচের কোন রেখার উপর বাংলাদেশ অবস্থিত?',
            options: ['ট্রপিক অব ক্যাপ্রিকন', 'ট্রপিক অব ক্যানসার', 'ইকুয়েটর', 'আর্কটিক সার্কেল'],
            answer: 1
          },
          {
            q: 'বাংলাদেশের কোন জেলা আসামের অংশ ছিল?',
            options: ['সিলেট', 'চট্টগ্রাম', 'কুমিল্লা', 'দিনাজপুর'],
            answer: 0
          },
          {
            q: 'বাংলাদেশের কোন জেলায় কর্কটক্রান্তি রেখা ও ৯০ ডিগ্রি দ্রাঘিমাংশের ছেদ বিন্দু অবস্থিত?',
            options: ['নাটোর', 'ফরিদপুর', 'ঝালকাঠি', 'মাগুরা'],
            answer: 1
          },
      

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