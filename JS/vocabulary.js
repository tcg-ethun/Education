

    const wordPairsData = [
      [
  { bangla: "প্রত্যাখ্যান করা", english: "reject" },
{ bangla: "চালিয়ে যাওয়া", english: "continue" },
{ bangla: "পদ ছেড়ে দেয়া", english: "abdicate" },
   { bangla: " তিব্রতর করা", english: "intensify" },
{ bangla: " প্রশমিত করা", english: "mitigate" },


      ],
      [
  { bangla: "পরিত্যাগ করা", english: "forsake" },
{ bangla: " বহাল রাখা", english: "uphold" },
{ bangla: "ত্যাগ করা", english: "give up" },
   { bangla: " বৃদ্ধি করা ", english: "amplify" },

{ bangla: "সমর্থন দেয়া", english: "espouse" },
      ],
      [
          { bangla: " ধরে রাখা", english: " retain" },
{ bangla: " আলিঙ্গন করা", english: "embrace" },
{ bangla: "এড়িয়ে চলা", english: "shun" },
{ bangla: "কোনো কিছুকে গ্রহণ করা", english: "adopt" },
{ bangla: " হ্রাস করা", english: "decline" },

      ],
      [
          { bangla: " কোনো কিছুর পিছনে ছোটা", english: "pursue" },
{ bangla: "কমে যাওয়া", english: " diminish" },
{ bangla: "ত্যাগ করা", english: "quit" },
{ bangla: " দীর্ঘায়িত করা", english: "prolong" },
{ bangla: "ছুড়ে ফেলা", english: "discard" },

      ],
      [
   { bangla: "ফেলে যাওয়া", english: "desert" },
   { bangla: "ছেড়ে দেওয়া", english: "relinquish" },
   { bangla: "আরো খারাপ করা", english: "make worse" },
   { bangla: "বাড়িয়ে দেয়া", english: "boost" },
   { bangla: "কমে যাওয়া", english: "dwindle" },
      ],

      [

   { bangla: " কমানো", english: "lessen" },
   { bangla: "বাড়িয়ে দেয়া", english: "magnify" },
{ bangla: "অস্বীকার করা", english: "renounce" },
   { bangla: " অত্যন্ত রাগানো ", english: " exasperate" },
{ bangla: "ত্যাগ করা", english: "give up" },
      ],
  
    ];

let currentWordPairs = [];
let availableEnglishWords = [];
let userAnswers = {};

const quizContainer = document.getElementById('quiz-container');
const pairsContainer = document.getElementById('pairs-container');
const englishWordsContainer = document.getElementById('english-words-container');
const roundResultDiv = document.getElementById('round-result');
const solutionContainer = document.getElementById('solution-container');
const solutionList = solutionContainer.querySelector('.solution-list');

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initializeQuiz() {
  currentWordPairs = wordPairsData[Math.floor(Math.random() * wordPairsData.length)];
  availableEnglishWords = currentWordPairs.map(pair => pair.english);

  shuffleArray(availableEnglishWords);

  userAnswers = {};

  roundResultDiv.textContent = '';
  solutionContainer.style.display = 'none';
  quizContainer.style.display = 'flex';

  generateQuizUI();
}

function generateQuizUI() {
  pairsContainer.innerHTML = '';
  englishWordsContainer.innerHTML = '';

  currentWordPairs.forEach(pair => {
    const wordPairDiv = document.createElement('div');
    wordPairDiv.classList.add('word-pair');
    wordPairDiv.innerHTML = `
      <div class="bangla">${pair.bangla}</div>
      <div class="drop-zone" data-bangla="${pair.bangla}" onclick="selectDropZone(this)"></div>
    `;
    pairsContainer.appendChild(wordPairDiv);
  });

  availableEnglishWords.forEach(word => {
    const div = document.createElement('div');
    div.classList.add('english-word');
    div.textContent = word;
    div.onclick = () => selectWord(word, div);
    englishWordsContainer.appendChild(div);
  });

  selectedDropZone = null;
}

let selectedDropZone = null;

function selectDropZone(zone) {
  selectedDropZone = zone;
  // Highlight selected drop zone
  document.querySelectorAll('.drop-zone').forEach(z => z.style.borderColor = '#ccc');
  zone.style.borderColor = '#3a6df0';
}

function selectWord(word, element) {
  if (!selectedDropZone) {
    alert('প্রথমে একটি বাংলা শব্দের বক্সে ক্লিক করুন যেখানে আপনি ইংরেজি শব্দ বসাতে চান।');
    return;
  }

  // পুরানো শব্দ থাকলে সাজেশনে ফেরত পাঠাও
  const oldWord = selectedDropZone.textContent.trim();
  if (oldWord) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('english-word');
    newDiv.textContent = oldWord;
    newDiv.onclick = () => selectWord(oldWord, newDiv);
    englishWordsContainer.appendChild(newDiv);
  }

  selectedDropZone.textContent = word;
  selectedDropZone.style.borderColor = '#3a6df0';

  const banglaWord = selectedDropZone.getAttribute('data-bangla');
  userAnswers[banglaWord] = word;

  element.remove();

  selectedDropZone = null;
  document.querySelectorAll('.drop-zone').forEach(z => z.style.borderColor = '#ccc');

  checkIfComplete();
}

function checkIfComplete() {
  const dropZones = document.querySelectorAll('.drop-zone');
  let allFilled = true;
  dropZones.forEach(zone => {
    if (!zone.textContent.trim()) allFilled = false;
  });

  if (allFilled) {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = 'none';
  solutionContainer.style.display = 'block';
  roundResultDiv.textContent = 'আপনার ফলাফল নিচে দেখুন';

  solutionList.innerHTML = '';

  // currentWordPairs এর কপি তৈরি করে সেটাকে শাফল করবো
  const shuffledPairs = [...currentWordPairs];
  shuffleArray(shuffledPairs);

  shuffledPairs.forEach(pair => {
    const userAnswer = userAnswers[pair.bangla] || ' - ';
    const li = document.createElement('li');
    const correct = userAnswer === pair.english;
    li.innerHTML = `<span>${pair.bangla}</span> <span style="color:${correct ? 'green' : 'red'}">${userAnswer} (${pair.english})</span>`;
    solutionList.appendChild(li);
  });
}

function resetQuiz() {
  solutionContainer.style.display = 'none';
  roundResultDiv.textContent = '';
  quizContainer.style.display = 'flex';
  initializeQuiz();
}

// শুরুতেই কুইজ লোড করো
initializeQuiz();
