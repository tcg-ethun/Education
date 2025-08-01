


const banglaNumbers = Array.from({ length: questions.length }, (_, i) => (i + 1).toString());
const optionLabels = ["ক", "খ", "গ", "ঘ"];
let selectedAnswers = JSON.parse(localStorage.getItem('selectedAnswers')) || new Array(questions.length).fill(null);
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
function buildQuiz() {
quizContainer.innerHTML = '';
questions.forEach((question, questionIndex) => {
const questionContainer = document.createElement('div');
questionContainer.classList.add('question-container');
const questionDiv = document.createElement('div');
questionDiv.classList.add('question');
questionDiv.innerHTML = `<strong>${questionIndex + 1}. ${question.question}</strong>`;
questionContainer.appendChild(questionDiv);
const optionsDiv = document.createElement('div');
optionsDiv.classList.add('options');
question.options.forEach((option, optionIndex) => {
const optionDiv = document.createElement('div');
optionDiv.classList.add('option');
if (selectedAnswers[questionIndex] === question.options[optionIndex]) {
optionDiv.classList.add('selected');
}
optionDiv.innerHTML = `<span>${optionLabels[optionIndex]}.</span>
<label>${option}</label>`;
optionDiv.addEventListener('click', () => selectAnswer(questionIndex, optionIndex));
optionsDiv.appendChild(optionDiv);
});
questionContainer.appendChild(optionsDiv);
quizContainer.appendChild(questionContainer);
});
}
function selectAnswer(questionIndex, selectedOptionIndex) {
selectedAnswers[questionIndex] = questions[questionIndex].options[selectedOptionIndex];
localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
buildQuiz();
}
function showResult() {
let correctAnswers = 0;
quizContainer.innerHTML = '';
questions.forEach((question, questionIndex) => {
const selectedOption = selectedAnswers[questionIndex];
const isCorrect = selectedOption === question.options[question.answer];
if (isCorrect) {
correctAnswers++;
}
const questionContainer = document.createElement('div');
questionContainer.classList.add('question-container');
const questionDiv = document.createElement('div');
questionDiv.classList.add('question');
questionDiv.innerHTML = `<strong>${questionIndex + 1}. ${question.question}</strong>`;
questionContainer.appendChild(questionDiv);
const optionsDiv = document.createElement('div');
optionsDiv.classList.add('options');
question.options.forEach((option, optionIndex) => {
const optionDiv = document.createElement('div');
optionDiv.classList.add('option');
if (optionIndex === question.answer) {
optionDiv.classList.add('correct');
}
if (selectedOption === question.options[optionIndex] && !isCorrect) {
optionDiv.classList.add('incorrect');
}
if (selectedOption === question.options[optionIndex]) {
optionDiv.classList.add('selected');
}
optionDiv.innerHTML = `<span>${optionLabels[optionIndex]}.</span>
<label>${option}</label>`;
optionsDiv.appendChild(optionDiv);
});
questionContainer.appendChild(optionsDiv);
quizContainer.appendChild(questionContainer);
});
resultContainer.textContent = `You got ${correctAnswers} out of ${questions.length} `;
}
function resetQuiz() {
selectedAnswers = new Array(questions.length).fill(null);
localStorage.removeItem('selectedAnswers');
buildQuiz();
resultContainer.textContent = '';
}
function goBack() {
window.history.back();
}
buildQuiz();