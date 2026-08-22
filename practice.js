//toggle the catergory buttons for the practice page and changes the operator
const categoryButtons = document.querySelectorAll('.catergories button');
const operator = document.getElementById('operator');

let activeCategory = 'Add';

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        activeCategory = button.textContent.trim();

        if (activeCategory === 'Add') {
            operator.textContent = '+';
        } else if (activeCategory === 'Subtract') {
            operator.textContent = '-';
        } else if (activeCategory === "Multiply") {
            operator.textContent = 'x'
        } else if (activeCategory === "Divide") {
            operator.textContent = '÷';
        }

        resetStats();
        generateEquation();
    });
});

//Gets a random number from a min and a max
function getRandomNum(min, max) {

    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;
}

//Gets the min and max values and updates the equation by getting random numbers.
const rangeInputs = document.querySelectorAll('.range-input');
const equationNum1 = document.getElementById('num1');
const equationNum2 = document.getElementById('num2');

let num1 = 0;
let num2 = 0;

//Generates the equation
function generateEquation() {

    const min1 = Number(document.getElementById('min-num1').value) || 1;
    const max1 = Number(document.getElementById('max-num1').value) || 10;
    const min2 = Number(document.getElementById('min-num2').value) || 1;
    const max2 = Number(document.getElementById('max-num2').value) || 10;

    num1 = getRandomNum(min1, max1);
    num2 = getRandomNum(min2, max2);

    equationNum1.textContent = num1;
    equationNum2.textContent = num2;

    const currentAnswer = getAnswer(num1, num2, activeCategory);
    console.log(`Current Equation: ${num1} ${operator.textContent} ${num2} = ${currentAnswer}`);
}

//Sees if the min and max inputs are changed
rangeInputs.forEach(input => {

    input.addEventListener('change', () => {
        resetStats();
        generateEquation();
    });
});

//Gets the answer from the equation
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

//Timer
let startTime = performance.now();

function resetTimer() {
    startTime = performance.now();
}

function getTime() {
    const time = performance.now() - startTime;
    return (time / 1000).toFixed(1);
}

//Sees if the answer is correct and tracks the streak and updates accuracy
const userAnswerInput = document.getElementById('user-answer');
const streakDisplay = document.getElementById('streak');

let streak = 0;
let numCorrect = 0;
let totalAnswered = 0;
let totalTime = 0;

resetTimer();

userAnswerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

        if (e.target.value === '') {
            return;
        }

        const userAnswer = Number(e.target.value);
        const correctAnswer = getAnswer(num1, num2, activeCategory);

        e.target.value = '';
        totalAnswered++;

        if (userAnswer === correctAnswer) {
            streak++;
            numCorrect++;
            totalTime += Number(getTime());
            generateEquation();
            resetTimer();
        } else {
            streak = 0;
        }

        calculateAccuracy(totalAnswered, numCorrect);
        avgTime(totalAnswered, totalTime);
        streakDisplay.textContent = `${streak} streak`;
    }
});

//Calculates accuracy
const accuracyDisplay = document.getElementById('accuracy');

function calculateAccuracy(total, numCorrect) {

    if (total === 0) {
        accuracyDisplay.textContent = '100% accuracy';
        return;
    }

    let accuracy = Math.round((numCorrect / total) * 100);
    accuracyDisplay.textContent = `${accuracy}% accuracy`
    
}

//Calculates the average time
const avgTimeDisplay = document.getElementById('avg-time');

function avgTime(totalAnswered, totalTime) {

    if (totalAnswered === 0) {
        avgTimeDisplay.textContent = '0.0s avg time';
        return;
    }
    const avg = (totalTime / numCorrect).toFixed(1);
    avgTimeDisplay.textContent = `${avg}s avg time`;
}

//Resets the streak, avg time, and accuracy
function resetStats() {

    streak = 0;
    numCorrect = 0;
    totalAnswered = 0;
    totalTime = 0;

    resetTimer();

    streakDisplay.textContent = '0 streak';
    accuracyDisplay.textContent = '100% accuracy';
    avgTimeDisplay.textContent = '0.0s avg time';
}

//Generates the equation when page loads and resets stats.
generateEquation();
resetStats();