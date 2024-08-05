const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const questionSections = document.querySelectorAll('.question');
const quizForms = document.querySelectorAll(".quiz");
const quizOptions = document.querySelectorAll('.quiz-option');
const scoreElement = document.querySelector('.score-page');
const errorMessage = document.querySelector('#error-message');



/**
 * currentQuestionIndex: keeps track of which question the user is currently on, starting from 0.
 * userScore: keeps track of user's score starting from 0
 * selectedAnswer:An array to store answer selected by the users for each question.
 * correctAnswer: An array to store the correct answers for each question.
 */
let currentQuestionIndex = 0;
let userScore = 0;
const selectedAnswer = [];
const correctAnswers = ['ShopCommerce', 'All the above', 'All the above'];

/**
 * showCurrentIndex function: updates the html element to display the which question the user is currently on.
 * It selects the element with specific data-question-number attribute and updates its innerHTML.
 */

function showCurrentIndex() {
    const questionIndexElement = document.querySelector(`.question[data-question-number="${currentQuestionIndex + 1}"] .question-index`);
    questionIndexElement.innerHTML = `Question ${currentQuestionIndex + 1} of ${questionSections.length}`;
}

/**
 * showCurrentQuestion function: will display the current question number on the top of the page.
 * Is displays the current question to the user and hides the other questions.
 * It loops through all the questions and adds active-question class to displays the question, while removing it from others.
 */


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


function showUserScore() {
    scoreElement.classList.add('show');
    scoreElement.innerHTML = `<h3>Your score is ${userScore} out of ${questionSections.length}</h3>`;
}


function getSelectedAnswer() {
    const quizOptions = questionSections[currentQuestionIndex].querySelectorAll('.quiz-option');
    console.log("🚀 ~ quizOptions:", quizOptions);

    for (const option of quizOptions) {
        if (option.checked) {
            return selectedValue = option.parentNode.textContent.trim();
        }
    }
    return null;

}

function updateButtonVisibility() {
    prevBtn.classList.toggle('hide', currentQuestionIndex === 0);
    nextBtn.classList.toggle('hide', currentQuestionIndex >= questionSections.length);
}

function validationCheck() {
    const selectedOption = questionSections[currentQuestionIndex].querySelector('.quiz-option:checked');
    console.log("🚀 ~ selectedOption:", selectedOption);
    if (!selectedOption) {
        errorMessage.textContent = 'Please select an option';
        return false;
    }
    errorMessage.textContent = '';
    return true;
}


nextBtn.addEventListener('click', () => {
    if (!validationCheck()) {
        return;// stop the form if no option is selected        
    }
    const chosenAnswer = getSelectedAnswer();
    // console.log("🚀 ~ chosenAnswer:", chosenAnswer);
    selectedAnswer[currentQuestionIndex] = chosenAnswer;
    if (chosenAnswer === correctAnswers[currentQuestionIndex]) {
        userScore++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questionSections.length) {
        showUserScore();
        nextBtn.classList.add('hide');
    } else {
        showCurrentQuestion();
    }
    ;
})

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
        updateButtonVisibility();
    }
});




showCurrentQuestion();













