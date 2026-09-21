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
    trickName = "Make a 10";
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
    trickName = "Multiply by 25";

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
    trickName = "Multiply by 9";
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
} else if (trick === "multiply-by-99") {
    trickName = "Multiply by 99";
    activeCategory = "Multiply"
    min1 = 2;
    max1 = 80;
    min2 = 99;
    max2 = 99;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>7 x 99</h1>

        <p>Multiply the number by 100:</p>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>100</span>
            <span>=</span>
            <span>700</span>
        </div>

        <p>Subtract the original number:</p>

        <div class="addition">
            <span>700</span>
            <span>-</span>
            <span>7</span>
            <span>=</span>
            <span class="middle">693</span>
        </div>

        <h2>= 693</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>34 x 99</h1>

        <p>Multiply the number by 100:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>100</span>
            <span>=</span>
            <span>3400</span>
        </div>

        <p>Subtract the original number:</p>

        <div class="addition">
            <span>3400</span>
            <span>-</span>
            <span>34</span>
            <span>=</span>
            <span class="middle">3366</span>
        </div>

        <h2>= 3366</h2>
    </section>
    `;
} else if (trick === "add-left-to-right") {
    trickName = "Add Left to Right";
    activeCategory = "Add"
    min1 = 12;
    max1 = 89;
    min2 = 12;
    max2 = 89;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>47 + 35</h1>

        <p>Add the tens first:</p>

        <div class="addition">
            <span>40</span>
            <span>+</span>
            <span>30</span>
            <span>=</span>
            <span>70</span>
        </div>

        <p>Add the ones:</p>

        <div class="addition">
            <span>7</span>
            <span>+</span>
            <span>5</span>
            <span>=</span>
            <span>12</span>
        </div>

        <p>Add the two results together:</p>

        <div class="answer">
            <span>70</span>
            <span>+</span>
            <span class="middle">12</span>
        </div>

        <h2>= 82</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>68 + 57</h1>

        <p>Add the tens first:</p>

        <div class="addition">
            <span>60</span>
            <span>+</span>
            <span>50</span>
            <span>=</span>
            <span>110</span>
        </div>

        <p>Add the ones:</p>

        <div class="addition">
            <span>8</span>
            <span>+</span>
            <span>7</span>
            <span>=</span>
            <span>15</span>
        </div>

        <p>Add the two results together:</p>

        <div class="answer">
            <span>110</span>
            <span>+</span>
            <span class="middle">15</span>
        </div>

        <h2>= 125</h2>
    </section>
    `;
} else if (trick === "subtract-by-rounding") {
    trickName = "Subtract by Rounding";
    activeCategory = "Subtract"
    min1 = 30;
    max1 = 99;
    min2 = 12;
    max2 = 29;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>82 - 29</h1>

        <p>Round the second number up to the nearest 10:</p>

        <div class="digits">
            <span>29 → 30</span>
        </div>

        <p>Subtract the rounded number:</p>

        <div class="addition">
            <span>82</span>
            <span>-</span>
            <span>30</span>
            <span>=</span>
            <span>52</span>
        </div>

        <p>Add back the extra you rounded up:</p>

        <div class="addition">
            <span>52</span>
            <span>+</span>
            <span>1</span>
            <span>=</span>
            <span class="middle">53</span>
        </div>

        <h2>= 53</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>156 - 38</h1>

        <p>Round the second number up to the nearest 10:</p>

        <div class="digits">
            <span>38 → 40</span>
        </div>

        <p>Subtract the rounded number:</p>

        <div class="addition">
            <span>156</span>
            <span>-</span>
            <span>40</span>
            <span>=</span>
            <span>116</span>
        </div>

        <p>Add back the extra you rounded up:</p>

        <div class="addition">
            <span>116</span>
            <span>+</span>
            <span>2</span>
            <span>=</span>
            <span class="middle">118</span>
        </div>

        <h2>= 118</h2>
    </section>
    `;
} else if (trick === "divide-by-5") {
    trickName = "Divide by 5";
    activeCategory = "Divide"
    min1 = 20;
    max1 = 990;
    min2 = 5;
    max2 = 5;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>140 ÷ 5</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>140</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>280</span>
        </div>

        <p>Divide by 10:</p>

        <div class="answer">
            <span class="middle">28</span>
        </div>

        <h2>= 28</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>860 ÷ 5</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>860</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>1720</span>
        </div>

        <p>Divide by 10:</p>

        <div class="answer">
            <span class="middle">172</span>
        </div>

        <h2>= 172</h2>
    </section>

    <section id="example-3" class="example hidden">
        <p>Also works if it doesn't divide evenly:</p>

        <h1>47 ÷ 5</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>47</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>94</span>
        </div>

        <p>Divide by 10:</p>

        <div class="answer">
            <span class="middle">9.4</span>
        </div>

        <h2>= 9.4</h2>
    </section>
`;
} else if (trick === "multiply-by-101") {
    trickName = "Multiply by 101";
    activeCategory = "Multiply"
    min1 = 2;
    max1 = 80;
    min2 = 101;
    max2 = 101;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>7 x 101</h1>

        <p>Multiply the number by 100:</p>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>100</span>
            <span>=</span>
            <span>700</span>
        </div>

        <p>Add the original number:</p>

        <div class="addition">
            <span>700</span>
            <span>+</span>
            <span>7</span>
            <span>=</span>
            <span class="middle">707</span>
        </div>

        <h2>= 707</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>34 x 101</h1>

        <p>Multiply the number by 100:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>100</span>
            <span>=</span>
            <span>3400</span>
        </div>

        <p>Add the original number:</p>

        <div class="addition">
            <span>3400</span>
            <span>+</span>
            <span>34</span>
            <span>=</span>
            <span class="middle">3434</span>
        </div>

        <h2>= 3434</h2>
    </section>
    `;
} else if (trick === "divide-by-25") {
    trickName = "Divide by 25";
    activeCategory = "Divide"
    min1 = 50;
    max1 = 5000;
    min2 = 25;
    max2 = 25;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>300 ÷ 25</h1>

        <p>Multiply the number by 4:</p>

        <div class="addition">
            <span>300</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>1200</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">12</span>
        </div>

        <h2>= 12</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>1800 ÷ 25</h1>

        <p>Multiply the number by 4:</p>

        <div class="addition">
            <span>1800</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>7200</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">72</span>
        </div>

        <h2>= 72</h2>
    </section>

    <section id="example-3" class="example hidden">
        <p>Also works if it doesn't divide evenly:</p>

        <h1>230 ÷ 25</h1>

        <p>Multiply the number by 4:</p>

        <div class="addition">
            <span>230</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>920</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">9.2</span>
        </div>

        <h2>= 9.2</h2>
    </section>
    `;
} else if (trick === "make-a-100") {
    trickName = "Make a 100";
    activeCategory = "Add"
    min1 = 120; 
    max1 = 890;
    min2 = 120;
    max2 = 890;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>380 + 265</h1>

        <p>See how far the first number is from the next 100:</p>

        <div class="digits">
            <span>380 → needs 20</span>
        </div>

        <p>Take that much from the second number:</p>

        <div class="addition">
            <span>380</span>
            <span>+</span>
            <span>20</span>
            <span>=</span>
            <span>400</span>
        </div>

        <p>Add what's left of the second number:</p>

        <div class="addition">
            <span>400</span>
            <span>+</span>
            <span>245</span>
            <span>=</span>
            <span class="middle">645</span>
        </div>

        <h2>= 645</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>560 + 480</h1>

        <p>See how far the first number is from the next 100:</p>

        <div class="digits">
            <span>560 → needs 40</span>
        </div>

        <p>Take that much from the second number:</p>

        <div class="addition">
            <span>560</span>
            <span>+</span>
            <span>40</span>
            <span>=</span>
            <span>600</span>
        </div>

        <p>Add what's left of the second number:</p>

        <div class="addition">
            <span>600</span>
            <span>+</span>
            <span>440</span>
            <span>=</span>
            <span class="middle">1040</span>
        </div>

        <h2>= 1040</h2>
    </section>
    `;
} else if (trick === "divide-by-50") {
    trickName = "Divide by 50";
    activeCategory = "Divide"
    min1 = 100;
    max1 = 1600;
    min2 = 50;
    max2 = 50;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>600 ÷ 50</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>600</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>1200</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">12</span>
        </div>

        <h2>= 12</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger numbers:</p>

        <h1>1400 ÷ 50</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>1400</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>2800</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">28</span>
        </div>

        <h2>= 28</h2>
    </section>

    <section id="example-3" class="example hidden">
        <p>Also works if it doesn't divide evenly:</p>

        <h1>430 ÷ 50</h1>

        <p>Multiply the number by 2:</p>

        <div class="addition">
            <span>430</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>860</span>
        </div>

        <p>Divide by 100:</p>

        <div class="answer">
            <span class="middle">8.6</span>
        </div>

        <h2>= 8.6</h2>
    </section>
    `;
} else if (trick === "close-together-multiplication") {
    trickName = "Close Together Multiplication";
    activeCategory = "Special"
    min1 = 10;
    max1 = 40;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>23 x 27</h1>

        <p>Find the average of the two numbers:</p>

        <div class="digits">
            <span>(23 + 27) ÷ 2 = 25</span>
        </div>

        <p>Square the average:</p>

        <div class="addition">
            <span>25</span>
            <span>x</span>
            <span>25</span>
            <span>=</span>
            <span>625</span>
        </div>

        <p>Find how far each number is from the average, and square that:</p>

        <div class="addition">
            <span>2</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>4</span>
        </div>

        <p>Subtract it from the squared average:</p>

        <div class="answer">
            <span>625</span>
            <span>-</span>
            <span class="middle">4</span>
        </div>

        <h2>= 621</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with bigger gaps:</p>

        <h1>47 x 53</h1>

        <p>Find the average of the two numbers:</p>

        <div class="digits">
            <span>(47 + 53) ÷ 2 = 50</span>
        </div>

        <p>Square the average:</p>

        <div class="addition">
            <span>50</span>
            <span>x</span>
            <span>50</span>
            <span>=</span>
            <span>2500</span>
        </div>

        <p>Find how far each number is from the average, and square that:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>3</span>
            <span>=</span>
            <span>9</span>
        </div>

        <p>Subtract it from the squared average:</p>

        <div class="answer">
            <span>2500</span>
            <span>-</span>
            <span class="middle">9</span>
        </div>

        <h2>= 2491</h2>
    </section>
    `;
} else if (trick === "two-digit-by-one-digit") {
    trickName = "Two-Digit by One-Digit";
    activeCategory = "Multiply"
    min1 = 11;
    max1 = 99;
    min2 = 2;
    max2 = 9;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>47 x 8</h1>

        <p>Split the two-digit number into tens and ones:</p>

        <div class="digits">
            <span>47 = 40 + 7</span>
        </div>

        <p>Multiply each part:</p>

        <div class="addition">
            <span>40</span>
            <span>x</span>
            <span>8</span>
            <span>=</span>
            <span>320</span>
        </div>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>8</span>
            <span>=</span>
            <span>56</span>
        </div>

        <p>Add the two results:</p>

        <div class="answer">
            <span>320</span>
            <span>+</span>
            <span class="middle">56</span>
        </div>

        <h2>= 376</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with any two-digit number:</p>

        <h1>63 x 6</h1>

        <p>Split the two-digit number into tens and ones:</p>

        <div class="digits">
            <span>63 = 60 + 3</span>
        </div>

        <p>Multiply each part:</p>

        <div class="addition">
            <span>60</span>
            <span>x</span>
            <span>6</span>
            <span>=</span>
            <span>360</span>
        </div>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>6</span>
            <span>=</span>
            <span>18</span>
        </div>

        <p>Add the two results:</p>

        <div class="answer">
            <span>360</span>
            <span>+</span>
            <span class="middle">18</span>
        </div>

        <h2>= 378</h2>
    </section>
    `;
} else if (trick === "square-numbers-near-100") {
    trickName = "Square Numbers Near 100";
    activeCategory = "Special"
    min1 = 90;
    max1 = 110;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>97 x 97</h1>

        <p>Find how far it is below 100:</p>

        <div class="digits">
            <span>97 → 3</span>
        </div>

        <p>Subtract the deficit from the number:</p>

        <div class="addition">
            <span>97</span>
            <span>-</span>
            <span>3</span>
            <span>=</span>
            <span>94</span>
        </div>

        <p>Square the deficit for the last two digits:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>3</span>
            <span>=</span>
            <span>09</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>94</span>
            <span class="middle">09</span>
        </div>

        <h2>= 9409</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same above 100, add instead of subtract:</p>

        <h1>104 x 104</h1>

        <p>Find how far it is above 100:</p>

        <div class="digits">
            <span>104 → 4</span>
        </div>

        <p>Add the excess to the number:</p>

        <div class="addition">
            <span>104</span>
            <span>+</span>
            <span>4</span>
            <span>=</span>
            <span>108</span>
        </div>

        <p>Square the excess for the last two digits:</p>

        <div class="addition">
            <span>4</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>16</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>108</span>
            <span class="middle">16</span>
        </div>

        <h2>= 10816</h2>
    </section>
    `;
} else if (trick === "two-digit-by-two-digit") {
    trickName = "Two-Digit by Two-Digit";
    activeCategory = "Multiply"
    min1 = 11;
    max1 = 99;
    min2 = 11;
    max2 = 99;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>34 x 27</h1>

        <p>Split the second number using a nearby multiple of 10:</p>

        <div class="digits">
            <span>27 = 30 - 3</span>
        </div>

        <p>Multiply by the easy number:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>30</span>
            <span>=</span>
            <span>1020</span>
        </div>

        <p>Subtract the correction:</p>

        <div class="addition">
            <span>34</span>
            <span>x</span>
            <span>3</span>
            <span>=</span>
            <span>102</span>
        </div>

        <div class="answer">
            <span>1020</span>
            <span>-</span>
            <span class="middle">102</span>
        </div>

        <h2>= 918</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>If the nearby ten is below instead, add the correction:</p>

        <h1>46 x 32</h1>

        <p>Split the second number using a nearby multiple of 10:</p>

        <div class="digits">
            <span>32 = 30 + 2</span>
        </div>

        <p>Multiply by the easy number:</p>

        <div class="addition">
            <span>46</span>
            <span>x</span>
            <span>30</span>
            <span>=</span>
            <span>1380</span>
        </div>

        <p>Add the correction:</p>

        <div class="addition">
            <span>46</span>
            <span>x</span>
            <span>2</span>
            <span>=</span>
            <span>92</span>
        </div>

        <div class="answer">
            <span>1380</span>
            <span>+</span>
            <span class="middle">92</span>
        </div>

        <h2>= 1472</h2>
    </section>
    `;
} else if (trick === "multiply-near-1000") {
    trickName = "Multiply Near 1000";
    activeCategory = "Multiply"
    min1 = 970;
    max1 = 999;
    min2 = 970;
    max2 = 999;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>997 x 993</h1>

        <p>Find how far each is below 1000:</p>

        <div class="digits">
            <span>997 → 3</span>
            <span>993 → 7</span>
        </div>

        <p>Multiply the deficits:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>7</span>
            <span>=</span>
            <span>021</span>
        </div>

        <p>Subtract one deficit from the other number:</p>

        <div class="addition">
            <span>993</span>
            <span>-</span>
            <span>3</span>
            <span>=</span>
            <span>990</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>990</span>
            <span class="middle">021</span>
        </div>

        <h2>= 990021</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with other pairs near 1000:</p>

        <h1>976 x 982</h1>

        <p>Find how far each is below 1000:</p>

        <div class="digits">
            <span>976 → 24</span>
            <span>982 → 18</span>
        </div>

        <p>Multiply the deficits:</p>

        <div class="addition">
            <span>24</span>
            <span>x</span>
            <span>18</span>
            <span>=</span>
            <span>432</span>
        </div>

        <p>Subtract one deficit from the other number:</p>

        <div class="addition">
            <span>982</span>
            <span>-</span>
            <span>24</span>
            <span>=</span>
            <span>958</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>958</span>
            <span class="middle">432</span>
        </div>

        <h2>= 958432</h2>
    </section>
    `;
} else if (trick === "mental-division") {
    trickName = "Mental Division";
    activeCategory = "Divide"
    min1 = 24;
    max1 = 96;
    min2 = 3;
    max2 = 9;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>84 ÷ 4</h1>

        <p>Split the number into an easy multiple of the divisor, plus what's left:</p>

        <div class="digits">
            <span>84 = 80 + 4</span>
        </div>

        <p>Divide each part:</p>

        <div class="addition">
            <span>80</span>
            <span>÷</span>
            <span>4</span>
            <span>=</span>
            <span>20</span>
        </div>

        <div class="addition">
            <span>4</span>
            <span>÷</span>
            <span>4</span>
            <span>=</span>
            <span>1</span>
        </div>

        <p>Add the results:</p>

        <div class="answer">
            <span>20</span>
            <span>+</span>
            <span class="middle">1</span>
        </div>

        <h2>= 21</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with other numbers:</p>

        <h1>96 ÷ 6</h1>

        <p>Split the number into an easy multiple of the divisor, plus what's left:</p>

        <div class="digits">
            <span>96 = 90 + 6</span>
        </div>

        <p>Divide each part:</p>

        <div class="addition">
            <span>90</span>
            <span>÷</span>
            <span>6</span>
            <span>=</span>
            <span>15</span>
        </div>

        <div class="addition">
            <span>6</span>
            <span>÷</span>
            <span>6</span>
            <span>=</span>
            <span>1</span>
        </div>

        <p>Add the results:</p>

        <div class="answer">
            <span>15</span>
            <span>+</span>
            <span class="middle">1</span>
        </div>

        <h2>= 16</h2>
    </section>
    `;
} else if (trick === "multiply-by-12") {
    trickName = "Multiply by 12";
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
} else if (trick === "multiply-near-100-pt2") {
    trickName = "Multiply Near 100 Pt. 2";
    activeCategory = "Multiply"
    min1 = 101;
    max1 = 110;
    min2 = 101;
    max2 = 110;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>107 x 104</h1>

        <p>Find how far each is above 100:</p>

        <div class="digits">
            <span>107 → 7</span>
            <span>104 → 4</span>
        </div>

        <p>Multiply the excesses:</p>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>28</span>
        </div>

        <p>Add one excess to the other number:</p>

        <div class="addition">
            <span>104</span>
            <span>+</span>
            <span>7</span>
            <span>=</span>
            <span>111</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>111</span>
            <span class="middle">28</span>
        </div>

        <h2>= 11128</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with other pairs above 100:</p>

        <h1>103 x 106</h1>

        <p>Find how far each is above 100:</p>

        <div class="digits">
            <span>103 → 3</span>
            <span>106 → 6</span>
        </div>

        <p>Multiply the excesses:</p>

        <div class="addition">
            <span>3</span>
            <span>x</span>
            <span>6</span>
            <span>=</span>
            <span>18</span>
        </div>

        <p>Add one excess to the other number:</p>

        <div class="addition">
            <span>106</span>
            <span>+</span>
            <span>3</span>
            <span>=</span>
            <span>109</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>109</span>
            <span class="middle">18</span>
        </div>

        <h2>= 10918</h2>
    </section>
    `;
} else if (trick === "multiply-near-1000-pt2") {
    activeCategory = "Multiply"
    min1 = 1001;
    max1 = 1030;
    min2 = 1001;
    max2 = 1030;

    main.innerHTML = `
    <section id="example-1" class="example">
        <h1>1007 x 1004</h1>

        <p>Find how far each is above 1000:</p>

        <div class="digits">
            <span>1007 → 7</span>
            <span>1004 → 4</span>
        </div>

        <p>Multiply the excesses:</p>

        <div class="addition">
            <span>7</span>
            <span>x</span>
            <span>4</span>
            <span>=</span>
            <span>028</span>
        </div>

        <p>Add one excess to the other number:</p>

        <div class="addition">
            <span>1004</span>
            <span>+</span>
            <span>7</span>
            <span>=</span>
            <span>1011</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>1011</span>
            <span class="middle">028</span>
        </div>

        <h2>= 1011028</h2>
    </section>

    <section id="example-2" class="example hidden">
        <p>Works the same with other pairs above 1000:</p>

        <h1>1018 x 1012</h1>

        <p>Find how far each is above 1000:</p>

        <div class="digits">
            <span>1018 → 18</span>
            <span>1012 → 12</span>
        </div>

        <p>Multiply the excesses:</p>

        <div class="addition">
            <span>18</span>
            <span>x</span>
            <span>12</span>
            <span>=</span>
            <span>216</span>
        </div>

        <p>Add one excess to the other number:</p>

        <div class="addition">
            <span>1012</span>
            <span>+</span>
            <span>18</span>
            <span>=</span>
            <span>1030</span>
        </div>

        <p>Put them together:</p>

        <div class="answer">
            <span>1030</span>
            <span class="middle">216</span>
        </div>

        <h2>= 1030216</h2>
    </section>
    `;
}

document.title = `${trickName} | Mental Math Lab`;

//Changes the operator based on the category
if (activeCategory === 'Add') {
    operator.textContent = '+';
} else if (activeCategory === 'Subtract') {
    operator.textContent = '-';
} else if (activeCategory === 'Multiply' || activeCategory === 'Special') {
    operator.textContent = 'x';
} else if (activeCategory === 'Divide') {
    operator.textContent = '÷';
}

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

//Gets a number thats close together with another number
function getRandomCloseTogetherPair(min, max) {

    const avg = getRandomNum(min, max);
    const gap = getRandomNum(1, 6);

    return [avg - gap, avg + gap];
}

//Generates equation
function generateEquation(min1, max1, min2, max2) {

    if (activeCategory === "Special") {
        if (trick === "square-num-ending-in-5") {
            num1 = getRandomEndingIn5(min1, max1);
            num2 = num1;
        } else if (trick === "close-together-multiplication") {
            const pair = getRandomCloseTogetherPair(min1, max1);
            num1 = pair[0];
            num2 = pair[1];
        }  else if (trick === "square-numbers-near-100") {
            num1 = getRandomNum(min1, max1);
            num2 = num1;
        }
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
            let num = num1 / num2;
            let rounded = +num.toFixed(2);
            return rounded;
        default:
            return 0;
    }
}

//sees if correct
const userAnswerInput = document.getElementById('user-answer');
const feedbackDisplay = document.getElementById('feedback');

userAnswerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

        const userAnswer = Number(e.target.value);
        const correctAnswer = getAnswer(num1, num2, activeCategory);

        e.target.value = '';

        if (userAnswer === correctAnswer) {
            generateEquation(min1, max1, min2, max2);
            feedbackDisplay.textContent = 'Correct!';
            feedbackDisplay.classList.remove('incorrect');
            feedbackDisplay.classList.add('correct');
        } else {
            feedbackDisplay.textContent = `Incorrect. Try again.`;
            feedbackDisplay.classList.remove('correct');
            feedbackDisplay.classList.add('incorrect');
        }
    }
});

generateEquation(min1, max1, min2, max2);