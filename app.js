const nextBtn = document.querySelector('.next-btn');
const questionSections = document.querySelectorAll('.question');


let currentQuestionIndex = 0;

function showCurrentIndex() {

    const questionIndexElement = document.querySelector(`.question[data-question-number="${currentQuestionIndex + 1}"] .question-index`);
    console.log(questionIndexElement);
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
    }
    showCurrentQuestion();

})

showCurrentQuestion();




