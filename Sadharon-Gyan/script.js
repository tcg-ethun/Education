document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");
    const banglaOptions = ["ক", "খ", "গ", "ঘ"];

    // Function to convert Arabic numerals to Bangla numerals
    function toBanglaNumber(number) {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return number.toString().split('').map(digit => banglaDigits[parseInt(digit)]).join('');
    }

    mcqs.forEach((mcq, index) => {
        const mcqContainer = document.createElement("div");
        mcqContainer.style.marginBottom = "35px"; // Control space between MCQs

        // Question with Bangla numbering
        const question = document.createElement("p");
        question.innerHTML =`${toBanglaNumber(index + 1)}. ${mcq.question}`;
        mcqContainer.appendChild(question);

        // Options with Bangla letters
        mcq.options.forEach((option, i) => {
            const optionText = `${banglaOptions[i]}. ${option}`;
            const optionElement = document.createElement("p");

            // Check if this is the correct answer
            if (i === mcq.answer) {
                optionElement.style.color = "red"; // Correct answer in red
            }

            optionElement.textContent = optionText;
            mcqContainer.appendChild(optionElement);
        });

        contentDiv.appendChild(mcqContainer);
    });
});