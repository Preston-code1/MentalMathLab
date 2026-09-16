//Trick being learned page
const main = document.getElementById("explaination");

const params = new URLSearchParams(window.location.search);
const trick = params.get("trick");

const equationNum1 = document.getElementById('num1');
const equationNum2 = document.getElementById('num2');

let num1 = 0;
let num2 = 0;

const operator = document.getElementById('operator');
let activeCategory = "Add";

let min1 = 1;
let min2 = 1;
let max1 = 10;
let max2 = 10;

const learnSection = document.getElementById('explaination');
const practiceSection = document.getElementById('practice');

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const learnBtn = document.getElementById('learn-btn');
const practiceBtn = document.getElementById('practice-btn')

let sectionNum = 1;
let showPractice = false;

//All the tricks 
let trickName = "";

if (trick === "multiply-by-11") {
    trickName = "Multiply by 11";

    activeCategory = "Multiply"
    min1 = 11;
    max1 = 99;
    min2 = 11;
    max2 = 11;

    main.innerHTML = `
    <section id="example-1" class="example">
            <h1>34 x 11</h1>

            <p>Split the digits:</p>

            <div class="digits">
                <span>3</span>
                <span>4</span>
            </div>

            <p>Add them together:</p>

            <div class="addition">
                <span>3</span>
                <span>+</span>
                <span>4</span>
                <span>=</span>
                <span>7</span>
            </div>

            <p>Put the sum in the middle</p>

            <div class="answer">
                <span>3</span>
                <span class="middle">7</span>
                <span>4</span>
            </div>

            <h2>= 374</h2>
        </section>

        <section id="example-2" class="example hidden">
            <p>If the digits add to more than 10:</p>

            <h1>57 x 11</h1>

            <p>Split the digits:</p>

            <div class="digits">
                <span>5</span>
                <span>7</span>
            </div>

            <p>Add them together:</p>

            <div class="addition">
                <span>5</span>
                <span>+</span>
                <span>7</span>
                <span>=</span>
                <span>12</span>
            </div>

            <p>Carry the 1:</p>

            <div class="carry">
                <span>6</span>
                <span>2</span>
                <span>7</span>
            </div>

            <h2>= 627</h2>
        </section>
    `;
} else if (trick === "square-num-ending-in-5") {
    trickName = "Square Numbers Ending in 5";

    activeCategory = "Special"
    min1 = 15;
    max1 = 95;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>35 x 35</h1>

        <p>Take the digit(s) before the 5:</p>

        <div class="digits">
            <span>3</span>
        </div>

        <p>Multiply it by itself plus one:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>12</span>
        </div>

        <p>Put 25 on the end:</p>

        <div class="answer">
            <span>12</span>
            <span class="middle">25</span>
        </div>

        <h2>= 1225</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same for bigger numbers:</p>

        <h1>85 x 85</h1>

        <p>Take the digit(s) before the 5:</p>

        <div class="digits">
            <span>8</span>
        </div>

        <p>Multiply it by itself plus one:</p>

        <div class="addition">
            <span>8</span>
            <span>x</span>
            <span>9</span>
            <span>=</span>
            <span>72</span>
        </div>

        <p>Put 25 on the end:</p>

        <div class="answer">
            <span>72</span>
            <span class="middle">25</span>
        </div>

        <h2>= 7225</h2>
    </section>
    `;
} else if (trick === "multiply-by-15") {
    trickName = "Multiply by 15";

    activeCategory = "Multiply"
    min1 = 2;
    max1 = 99;
    min2 = 15;
    max2 = 15;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>6 x 15</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>6</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>60</span>
        </div>

        <p>Take half of that:</p>

        <div class="addition">
            <span>60</span>
            <span>÷</span>
            <span>2</span>
            <span>=</span>
            <span>30</span>
        </div>

        <p>Add them together:</p>

        <div class="answer">
            <span>60</span>
            <span>+</span>
            <span class="middle">30</span>
        </div>

        <h2>= 90</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same for bigger numbers:</p>

        <h1>24 x 15</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>24</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>240</span>
        </div>

        <p>Take half of that:</p>

        <div class="addition">
            <span>240</span>
            <span>÷</span>
            <span>2</span>
            <span>=</span>
            <span>120</span>
        </div>

        <p>Add them together:</p>

        <div class="answer">
            <span>240</span>
            <span>+</span>
            <span class="middle">120</span>
        </div>

        <h2>= 360</h2>
    </section>
    `;
} else if (trick === "multiply-near-100") {
    trickName = "Multiply Near 100";

    activeCategory = "Multiply"
    min1 = 90;
    max1 = 99;
    min2 = 90;
    max2 = 99;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>97 x 93</h1>

        <p>Find how far each is below 100:</p>

        <div class="digits">
            <span>97 → 3</span>
            <span>93 → 7</span>
        </div>

        <p>Multiply the deficits:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>7</span>
            <span>=</span>
            <span>21</span>
        </div>

        <p>Subtract one deficit from the other number:</p>

        <div class="addition">
            <span>93</span>
            <span>-</span>
            <span>3</span>
            <span>=</span>
            <span>90</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>90</span>
            <span class="middle">21</span>
        </div>

        <h2>= 9021</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same when both numbers are closer to 100:</p>

        <h1>94 x 95</h1>

        <p>Find how far each is below 100:</p>

        <div class="digits">
            <span>94 → 6</span>
            <span>95 → 5</span>
        </div>

        <p>Multiply the deficits:</p>

        <div class="addition">
            <span>6</span>
            <span>x</span>
            <span>5</span>
            <span>=</span>
            <span>30</span>
        </div>

        <p>Subtract one deficit from the other number:</p>

        <div class="addition">
            <span>95</span>
            <span>-</span>
            <span>6</span>
            <span>=</span>
            <span>89</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>89</span>
            <span class="middle">30</span>
        </div>

        <h2>= 8930</h2>
    </section>
    `;
} else if (trick === "make-a-10") {
    activeCategory = "Add"
    min1 = 12;
    max1 = 89;
    min2 = 12;
    max2 = 89;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>38 + 27</h1>

        <p>See how far the first number is from the next 10:</p>

        <div class="digits">
            <span>38 → needs 2</span>
        </div>

        <p>Take that much from the second number:</p>

        <div class="addition">
            <span>38</span>
            <span>+</span>
            <span>2</span>
            <span>=</span>
            <span>40</span>
        </div>

        <p>Add what's left of the second number:</p>

        <div class="addition">
            <span>40</span>
            <span>+</span>
            <span>25</span>
            <span>=</span>
            <span class="middle">65</span>
        </div>

        <h2>= 65</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>56 + 48</h1>

        <p>See how far the first number is from the next 10:</p>

        <div class="digits">
            <span>56 → needs 4</span>
        </div>

        <p>Take that much from the second number:</p>

        <div class="addition">
            <span>56</span>
            <span>+</span>
            <span>4</span>
            <span>=</span>
            <span>60</span>
        </div>

        <p>Add what's left of the second number:</p>

        <div class="addition">
            <span>60</span>
            <span>+</span>
            <span>44</span>
            <span>=</span>
            <span class="middle">104</span>
        </div>

        <h2>= 104</h2>
    </section>
    `;
} else if (trick === "multiply-by-25") {
    activeCategory = "Multiply"
    min1 = 4;
    max1 = 80;
    min2 = 25;
    max2 = 25;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>16 x 25</h1>

        <p>Divide the number by 4:</p>

        <div class="addition">
            <span>16</span>
            <span>÷</span>
            <span>4</span>
            <span>=</span>
            <span>4</span>
        </div>

        <p>Multiply the result by 100:</p>

        <div class="answer">
            <span class="middle">400</span>
        </div>

        <h2>= 400</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>48 x 25</h1>

        <p>Divide the number by 4:</p>

        <div class="addition">
            <span>48</span>
            <span>÷</span>
            <span>4</span>
            <span>=</span>
            <span>12</span>
        </div>

        <p>Multiply the result by 100:</p>

        <div class="answer">
            <span class="middle">1200</span>
        </div>

        <h2>= 1200</h2>
    </section>

    <section id="example-3" class="example hidden">
        <p>If the number isn't divisible by 4, split it:</p>

        <h1>17 x 25</h1>

        <p>Break it into a multiple of 4, plus what's left:</p>

        <div class="digits">
            <span>17 = 16 + 1</span>
        </div>

        <p>Solve the multiple of 4 part:</p>

        <div class="addition">
            <span>16</span>
            <span>÷</span>
            <span>4</span>
            <span>=</span>
            <span>4</span>
            <span>→</span>
            <span>400</span>
        </div>

        <p>Solve the leftover part:</p>

        <div class="addition">
            <span>1</span>
            <span>x</span>
            <span>25</span>
            <span>=</span>
            <span>25</span>
        </div>

        <p>Add them together:</p>

        <div class="answer">
            <span>400</span>
            <span>+</span>
            <span class="middle">25</span>
        </div>

        <h2>= 425</h2>
    </section>`;
} else if (trick === "multiply-by-9") {
    activeCategory = "Multiply"
    min1 = 2;
    max1 = 99;
    min2 = 9;
    max2 = 9;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>7 x 9</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>70</span>
        </div>

        <p>Subtract the original number:</p>

        <div class="addition">
            <span>70</span>
            <span>-</span>
            <span>7</span>
            <span>=</span>
            <span class="middle">63</span>
        </div>

        <h2>= 63</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>34 x 9</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>340</span>
        </div>

        <p>Subtract the original number:</p>

        <div class="addition">
            <span>340</span>
            <span>-</span>
            <span>34</span>
            <span>=</span>
            <span class="middle">306</span>
        </div>

        <h2>= 306</h2>
    </section>
    `;
} else if (trick === "multiply-by-12") {
    activeCategory = "Multiply"
    min1 = 2;
    max1 = 80;
    min2 = 12;
    max2 = 12;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>6 x 12</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>6</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>60</span>
        </div>

        <p>Double the original number:</p>

        <div class="addition">
            <span>6</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>12</span>
        </div>

        <p>Add them together:</p>

        <div class="answer">
            <span>60</span>
            <span>+</span>
            <span class="middle">12</span>
        </div>

        <h2>= 72</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>34 x 12</h1>

        <p>Multiply the number by 10:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>10</span>
            <span>=</span>
            <span>340</span>
        </div>

        <p>Double the original number:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>68</span>
        </div>

        <p>Add them together:</p>

        <div class="answer">
            <span>340</span>
            <span>+</span>
            <span class="middle">68</span>
        </div>

        <h2>= 408</h2>
    </section>
    `;
}

if (activeCategory === 'Add') {
    operator.textContent = '+';
} else if (activeCategory === 'Subtract') {
    operator.textContent = '-';
} else if (activeCategory === 'Multiply' || activeCategory === 'Special') {
    operator.textContent = 'x';
} else if (activeCategory === 'Divide') {
    operator.textContent = '÷';
}

document.title = `${trickName} | Mental Math Lab`;

//Changes the page when the next practice and learn btns are clicked
const sections = document.querySelectorAll(".example");
const sectionsAmount = sections.length;

nextBtn.addEventListener('click', () => {

    if (sectionNum < sectionsAmount) {
        sectionNum++;
    } else {
        showPractice = true;
    }

    window.scrollTo(0, 0);
    switchPage();
})

backBtn.addEventListener('click', () => {

    if (showPractice) {
        showPractice = false;
        switchPage();
    } else if (sectionNum > 1) {
        sectionNum--;
        switchPage();
    } else {
        window.location.href = 'index.html';
    }
})

practiceBtn.addEventListener('click', () => {

    showPractice = true;
    switchPage();
})

learnBtn.addEventListener('click', () => {

    sectionNum = 1;
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
        backBtn.textContent = "back";
    } else {

        learnSection.classList.remove("hidden");
        practiceSection.classList.add("hidden");

        practiceBtn.classList.remove("active")
        learnBtn.classList.add("active")

        nextBtn.classList.remove("hidden");

        sections.forEach((section, index) => {
            section.classList.toggle("hidden", index !== sectionNum-1);
        });

        if (sectionNum > 1) {
            backBtn.textContent = "back";
        } else {
            backBtn.textContent = "exit";
        }
    }
}

//Gets a random number from a min and a max
function getRandomNum(min, max) {

    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;
}

//Gets a random multiple of 10 number, then adds 5
function getRandomEndingIn5(min, max) {

    const lowTens = Math.ceil((min - 5) / 10);
    const highTens = Math.floor((max - 5) / 10);
    const tens = getRandomNum(lowTens, highTens);

    return tens * 10 + 5;
}

//Generates equation
function generateEquation(min1, max1, min2, max2) {

    if (activeCategory === "Special") {
        num1 = getRandomEndingIn5(min1, max1);
        num2 = num1;
    } else {
        num1 = getRandomNum(min1, max1);
        num2 = getRandomNum(min2, max2);
    }

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
        case 'Special':
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