const nextBtn = document.querySelector('.next-btn');
const questionSections = document.querySelectorAll('.question');
const quizForms = document.querySelector('.quiz');
const quizOptions = document.querySelectorAll('.quiz-option');



let currentQuestionIndex = 0;
let userScore = 0;


function showCurrentIndex() {

    const questionIndexElement = document.querySelector(`.question[data-question-number="${currentQuestionIndex + 1}"] .question-index`);
    // console.log(questionIndexElement);
    questionIndexElement.innerHTML = `Question ${currentQuestionIndex + 1} of ${questionSections.length}`;
}


function showCurrentQuestion() {
    showCurrentIndex();
    questionSections.forEach((question, index) => {
        if (index === currentQuestionIndex) {
            question.classList.add('active-question');
        } else {
            question.classList.remove('active-question');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionSections.length) {
        currentQuestionIndex = 0;
        showUserScore()
    } else {
        showCurrentQuestion();
    }
});
showCurrentQuestion();



let correctAnswers = ['ShopCommerce', 'All the above', 'All the above'];
const scoreElement = document.querySelector('.score-page');
console.log("🚀 ~ scoreElement:", scoreElement);

function showUserScore() {
    scoreElement.classList.add('show');
    scoreElement.innerHTML = `<h3>Your score is ${userScore} out of ${questionSections.length}</h3>`;
}



// console.log(quizOptions)
for (const option of quizOptions) {
    option.addEventListener("change", (e) => {
        const selectedOption = e.target;
        const selectedLabel = selectedOption.parentNode;
        const selectedValue = selectedLabel.textContent.trim();
        console.log(selectedValue);
        if (selectedValue === correctAnswers[currentQuestionIndex]) {
            userScore++;
        }
        if (currentQuestionIndex === questionSections.length - 1) {
            nextBtn.classList.add('hide');
            showUserScore();
        }
    });
}

console.log("🚀 ~ userScore:", userScore);









