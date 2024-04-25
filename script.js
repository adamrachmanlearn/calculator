const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const button = document.querySelector(".inputArea");
const display = document.querySelector(".displayArea");
const isOp = /[^0-9]/;
let num1 = "";
let num2 = "";
let op = "";

const operate = (num1, op, num2) => {
    switch(op) {
        case "+":
            return add(+num1, +num2);
            break;
        case "-":
            return subtract(+num1, +num2);
            break;
        case "*":
            return multiply(+num1, +num2);
            break;
        default:
            return divide(+num1, +num2);
    }
}

button.addEventListener("click", element => {
    if (element.target.className !== "inputArea") {
        const btn = element.target.innerText;
        if (btn === "Clear") {
            num1 = "";
            num2 = "";
            op = "";
            display.innerText = num1;
        } else if (btn === "=") {
            if (num2 !== "") {
                if (op === "/" && num2 === "0") {
                    display.innerText = "jdon"
                    num1 = "";
                    num2 = "";
                    op = "";
                } else {
                    num1 = operate(num1, op, num2);
                    num2 = "";
                    op = "";
                    display.innerText = num1;
                }
            }
        } else {
            if (isOp.test(btn)) {
                if (num2 !== "") {
                    if (op === "/" && num2 === "0") {
                        display.innerText = "jdon"
                        num1 = "";
                        num2 = "";
                        op = "";
                    } else {
                        num1 = operate(num1, op, num2);
                        num2 = "";
                        display.innerText = num1;
                    }
                }
                op = btn;
            } else {
                if (op !== "") {
                    num2 += btn;
                    display.innerText = num2;
                } else {
                    num1 += btn;
                    display.innerText = num1;
                }
            }
        }
    }
});