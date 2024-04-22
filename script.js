const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const button = document.querySelector(".inputArea");
const display = document.querySelector(".displayArea");
let displayString = "";

let firstNum = 0;
let operator = "";
let secondNum = 0;

const operate = (num1, op, num2) => {
    switch(op) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        default:
            return divide(num1, num2);
    }
}

button.addEventListener("click", element => {
    if (element.target.className !== "inputArea") {
        if (element.target.innerText === "Clear") {
            displayString = "";
            display.innerText = displayString;
        } else {
            displayString += element.target.innerText;
            display.innerText = displayString;
        }
    }
})