//Trick learning page - from learning to practicing
const learnSection = document.getElementById('explaination');
const practiceSection = document.getElementById('practice');

const nextBtn = document.getElementById('next-btn');
const learnBtn = document.getElementById('learn-btn');
const practiceBtn = document.getElementById('practice-btn')

const practiceBtns = [nextBtn, practiceBtn];

let showPractice = false;

practiceBtns.forEach(button => {
        button.addEventListener('click', () => {

        showPractice = true;
        switchPage();
    })
})

learnBtn.addEventListener('click', () => {

    showPractice = false;
    switchPage();
})

function switchPage() {

        if (showPractice) {
            learnSection.classList.add("hidden");
            practiceSection.classList.remove("hidden");
            practiceBtn.classList.add("active")
            learnBtn.classList.remove("active")
            nextBtn.classList.add("hidden");
        } else {
            learnSection.classList.remove("hidden");
            practiceSection.classList.add("hidden");
            practiceBtn.classList.remove("active")
            learnBtn.classList.add("active")
            nextBtn.classList.remove("hidden");
        }
}

// makeing the practice page functional
//Gets the min, max, and operator based off the page
const equationNum1 = document.getElementById('num1');
const equationNum2 = document.getElementById('num2');

let num1, num2 = 0;

let min1, min2 = 1;
let max1, max2 = 10;


const operator = document.getElementById('operator');
let activeCategory = "Add";

if (window.location.pathname.includes("multiply-by-11")) {
    activeCategory = "Multiply"
    min1 = 11;
    max1 = 99;
    min2 = 11;
    max2 = 11;
}

//Gets a random number from a min and a max
function getRandomNum(min, max) {

    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;
}

//Generates equation

function generateEquation(min1, max1, min2, max2) {

    num1 = getRandomNum(min1, max1);
    num2 = getRandomNum(min2, max2);

    equationNum1.textContent = num1;
    equationNum2.textContent = num2;
}

//gets answer
function getAnswer(num1, num2, operator) {

    switch (operator) {
        case 'Add':
            return num1 + num2;
        case 'Subtract':
            return num1 - num2;
        case 'Multiply':
            return num1 * num2;
        case 'Divide':
            return num1 / num2;
        default:
            return 0;
    }
}

//sees if correct
const userAnswerInput = document.getElementById('user-answer');

userAnswerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

        const userAnswer = Number(e.target.value);
        const correctAnswer = getAnswer(num1, num2, activeCategory);

        e.target.value = '';

        if (userAnswer === correctAnswer) {
            generateEquation(min1, max1, min2, max2);
        }
    }
});

generateEquation(min1, max1, min2, max2);
