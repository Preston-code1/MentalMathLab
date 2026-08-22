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
            operator.textContent = '÷'
        }

        console.log('Active Category:', activeCategory);
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

    input.addEventListener('change', generateEquation)
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

//Generates the equation when page loads.
generateEquation();