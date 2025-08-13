
const questions = [

  
    {
    question:  " কোনটি মৌলিক শব্দ ? ",
    options: [" চাঁদ ",      " প্রশাসন  ",       "বন্ধুত্ব  ",       "  দায়িত্ব "],
    answer:  0,
     tag: "DU - C (Bangla)"
},

    {
    question:  " 'বৈষম্যবিরোধী' কোন সমাস দ্বারা গঠিত?  ",
    options: ["দ্বিতীয়া তৎপুরুষ ",      " তৃতীয়া তৎপুরুষ  ",       " চতুর্থী তৎপুরুষ ",       " ষষ্ঠী তৎপুরুষ "],
    answer:  3,
     tag: "DU - C (Bangla)"
},

    {
    question:  "  কোন শব্দটি শুদ্ধ? ",
    options: [" অদ্যাবধি ",   "অনুমান নির্ভর   ", " অন্তর্ভুক্ত  ", "আকাঙ্খা  "],
    answer:  0,
     tag: "DU - C (Bangla)"
},

    {
    question:  "  'মিছিল' শব্দটি কোন ভাষা থেকে এসেছে? ",
    options: ["ফারসি ", " পর্তুগিজ  ", "  আরবি", " তুর্কি "],
    answer:  0,
     tag: "DU - C (Bangla)"
},

    {
    question:  " কোন শব্দটি অপপ্রয়োগ-দুষ্ট নয়? ",
    options: [" নির্দোষী",      "  দৈন্যতা ",      "  শুধুমাত্র ",       " উদ্বেল "],
    answer:  3,
     tag: "DU - C (Bangla)"
},


    {
    question:  "  'বুদ্ধিমান' এর বিশেষ্য পদ কি? ",
    options: ["বুদ্ধি ",      " বুদ্ধিত্ব  ",       " বুদ্ধিমত্তা ",       " বৃদ্ধি "],
    answer:  0,
     tag: "DU - C (Bangla)"
},

    {
    question:  "  'সম্মুখে অগ্রসর হয়ে অভ্যর্থনা' এক কথায় বলে- ",
    options: [" প্রত্যুদ্গমন",      "  আবাহন ",       " সম্ভাষণ ",       " প্রত্যুৎগমন "],
    answer:  0,
     tag: "DU - C (Bangla)"
},

    {
    question:  " ‘যে নারীর স্বামী ও পুত্র নেই' এর এক কথায় প্রকাশ।  ",
    options: [" নবোড়া",      " অনূঢ়া  ",       "অবীরা  ",       "কুমারী  "],
    answer:  2,
     tag: "DU - C (Bangla)"
},


    {
    question:  "   'খাঁটি সোনার চাইতে খাঁটি, আমার দেশের মাটি।' কোন ধরনের বাক্য?",
    options: ["সরল ",      "যৌগিক   ",       " জটিল ",       "অতি সরল  "],
    answer:  2,
     tag: "DU - C (Bangla)"
},


//     {
//     question:  "  ",
//     options: [" ",      "   ",       "  ",       "  "],
//     answer:  0,
//      tag: "DU - C (Bangla)"
// },

//     {
//     question:  "  ",
//     options: [" ",      "   ",       "  ",       "  "],
//     answer:  0,
//      tag: "DU - C (Bangla)"
// },

//     {
//     question:  "  ",
//     options: [" ",      "   ",       "  ",       "  "],
//     answer:  0,
//      tag: "DU - C (Bangla)"
// },









//   {
//     question: "ফ্যাসিবাদের জনক বলা হয় কাকে ? ",
//     options: ["জোসেফ স্টালিন","এডোলফ হিটলার","কাইজার উইলিয়াম","বেনিতো মুসোলিনি"],
//     answer: 3 ,
//      tag: "?"
// },

//     {
//     question:  " রূপান্তর খরচের সমষ্টি - ",
//     options: ["স্থির এবং পরিবর্তনশীল উপরিব্যয়  ",      " প্রত্যক্ষ মজুরি এবং কারখানা উপরিব্যয় ",       "  প্রত্যক্ষ কাচামাল এবং কারখানা উপরিব্যয় ",       " প্রত্যক্ষ মজুরি এবং পরোক্ষ মজুরি "],
//     answer:  1,
//      tag: "DU - C (ACC)"
// },


//     {
//     question:  " ",
//     options: ["  ",      "  ",       "  ",       "  "],
//     answer:  2 
// },
//     {
//     question:  " ",
//     options: ["  ",      "  ",       "  ",       "  "],
//     answer:  2 
// },

  
]
let questionHistory = [];
let currentQuestionIndex = -1;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion(question) {
    // Show tag (if available)
    document.getElementById('tag').innerText = question.tag ? question.tag : "";

    // Show question
    document.getElementById('question').innerText = question.question;

    // Show options
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(optionElement, index, question.answer);
        optionsList.appendChild(optionElement);
    });
}

function nextQuestion() {
    const nextQuestion = getRandomQuestion();
    questionHistory = questionHistory.slice(0, currentQuestionIndex + 1);
    questionHistory.push(nextQuestion);
    currentQuestionIndex++;
    loadQuestion(nextQuestion);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(questionHistory[currentQuestionIndex]);
    }
}

function selectOption(element, index, correctAnswer) {
    const options = document.querySelectorAll('.options li');
    
    // Remove old selection (except already marked correct/incorrect)
    options.forEach(option => {
        if (!option.classList.contains('correct') && !option.classList.contains('incorrect')) {
            option.classList.remove('selected');
        }
    });

    // Mark correct/incorrect and play sound
    if (index === correctAnswer) {
        element.classList.add('correct');
        document.getElementById('correctSound').play();
    } else {
        element.classList.add('incorrect');
        document.getElementById('incorrectSound').play();
    }

    element.classList.add('selected');
}

// Load first question
nextQuestion();
