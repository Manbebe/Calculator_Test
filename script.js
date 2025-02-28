let currentValue = 0;

let currentOperation = "null";



const display = document.querySelector('.equation')
const add = document.querySelector(".add").addEventListener("click", () => setOperation('+'), {});
const sub = document.querySelector(".sub").addEventListener("click", () => setOperation('-'), {});
const mult = document.querySelector(".mult").addEventListener("click", () => setOperation('*'), {});
const divide = document.querySelector(".divide").addEventListener("click", () => setOperation('/'), {});
const equal = document.querySelector(".equal").addEventListener("click", () => setOperation(" "), {});
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