let currentValue = 0;

let currentOperation = "null";

let clickCount = 0;

const closeTime = 13000; // 13 seconds

let currentIndex = 0;

const faces = [":-)", ":-(", ">:-(", "8=D", "T_T", "( ͡° ͜ʖ ͡°)", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠ__ಠ"];

const display = document.querySelector('.equation')
const add = document.querySelector(".add").addEventListener("click", () => setOperation('+'), {});
const sub = document.querySelector(".sub").addEventListener("click", () => setOperation('-'), {});
const mult = document.querySelector(".mult").addEventListener("click", () => setOperation('*'), {});
const divide = document.querySelector(".divide").addEventListener("click", () => setOperation('/'), {});
const equalButton = document.querySelector(".equal").addEventListener("click", () => equal(), {});
const clearButton = document.querySelector(".clear").addEventListener("click", () => {display.textContent = ""});
const one = document.querySelector(".one").addEventListener("click", () => updateValue(1), {});
const two = document.querySelector(".two").addEventListener("click", () => updateValue(2), {});
const three = document.querySelector(".three").addEventListener("click", () => updateValue(3), {});
const four = document.querySelector(".four").addEventListener("click", () => updateValue(4), {});
const five = document.querySelector(".five").addEventListener("click", () => updateValue(5), {});
const six = document.querySelector(".six").addEventListener("click", () => updateValue(6), {});
const seven = document.querySelector(".seven").addEventListener("click", () => updateValue(7), {});
const eight = document.querySelector(".eight").addEventListener("click", () => updateValue(8), {});
const nine = document.querySelector(".nine").addEventListener("click", () => updateValue(9), {});
const zero = document.querySelector(".zero").addEventListener("click", () => updateValue(0), {});



function updateValue(value) {
    currentValue = value;
    display.innerText += value 
};

function setOperation(operation) {
    currentOperation = operation;
    console.log("COOLTIME");
    display.innerText += operation
};

function equal() {
    try {
        const display = document.querySelector('.equation');
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
    const operations = ['+', '-', '*', '/'];
    return operations[Math.floor(Math.random() * operations.length)];
}

function generateEquation() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operation = getRandomOperation();
    let equation;

    if (operation === '/' && num2 === 0) {
        equation = `${num1} ${operation} 1`; // Avoid division by zero
    } else {
        equation = `${num1} ${operation} ${num2}`;
    }

    return equation;
}

    document.querySelector('.random').addEventListener('click', () => {
    const equation = generateEquation();
    document.querySelector('.equation').innerText = equation;
});

document.querySelector('.boom').addEventListener('click', function() {
    const container = document.querySelector('.calc-container');
    container.classList.add('shake');

    setTimeout(() => {
      container.classList.remove('shake');
    }, 500);
  });

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.calc-container');
    const boomButton = document.querySelector('.boom');

    boomButton.addEventListener("click", () => {clickCount++;
        if (clickCount === 1){
            display.innerText += "stop"
        }if (clickCount ===2){
            display.textContent = ""
            display.innerText += "PLEASE"
        }if (clickCount ===3){
            display.textContent = ""
            display.innerText += "I DONT WANNA DIE"
        }if (clickCount ===4){
                display.textContent = ""
                display.innerText += "WHY"
                container.classList.add('shattered');
                document.body.classList.add('black-background');
                document.body.classList.add('red-text')
                setTimeout(() => {document.querySelector('.eyes').style.display = 'block';}, 4000);
                setTimeout(() => {document.querySelector('.godishere').style.display = 'block';}, 6000);
                setTimeout(() => {document.querySelector('.godishere').style.display = 'none';}, 8000);
                setTimeout(() => {document.querySelector('.heiscoming').style.display = 'block';}, 10000);
                setTimeout(closeTab, closeTime);
            }});    
});

// Function to close the tab
function closeTab() {
    window.close();
}

// Function to flip through the array
function flipArray() {
    // Display the current item
    document.querySelector(".equation").innerText = faces[currentIndex];
    
    // Move to the next item, looping back to the start if necessary
    currentIndex = (currentIndex + 1) % faces.length;
}

// Add event listener to the button
document.querySelector(".expressions").addEventListener("click", flipArray);