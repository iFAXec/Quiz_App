const nextBtn = document.querySelector('.next-btn');
const questionSections = document.querySelectorAll('.question');


let currentQuestionIndex = 0;

nextBtn.addEventListener('click', () => {

    questionSections.forEach((question, index) => {
        currentQuestionIndex++;
        if (index === currentQuestionIndex) {
            question.classList.add('active-question');
        } else {
            question.classList.remove('active-question');
        }

        if (currentQuestionIndex > questionSections.length) {
            currentQuestionIndex = 0;
        }
    })
})




