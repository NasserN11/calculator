const modeToggle = document.querySelector(".mode-switch input");
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }
})



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return "Error";
    }
    return a / b;
}



let firstNumber = "";
let operator = "";
let secondNumber = "";


function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            return add(a, b);
            break;

        case "-":
            return subtract(a, b);
            break;

        case "x":
            return multiply(a, b);
            break;

        case "÷":
            return divide(a, b);
            break;

        default:
            console.log("Wrong operator");
    }
}


const resultDiv = document.querySelector(".result");
const operationDiv = document.querySelector(".operation");
const numberButtons = document.querySelectorAll(".numbers .btn");
const operatorButtons = document.querySelectorAll(".operators .btn");
let userNumberInput = "";

numberButtons.forEach((button) => {

    button.addEventListener('click', () => {
        if (userNumberInput.length <= 10) {
            userNumberInput += button.textContent;

            if (operator === "") {
                firstNumber = userNumberInput; 
            }
            else {
                secondNumber = userNumberInput
            }
            
            resultDiv.textContent = userNumberInput;
        }
    })
})

let result = "";

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("equal")) {
            if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
                result = operate(operator, firstNumber, secondNumber);

                if (!Number.isInteger(result)) {
                    result = result.toFixed(2);
                }
                operationDiv.textContent = firstNumber + " " + operator + " " + secondNumber;
                resultDiv.textContent = result;

                firstNumber = result;
                secondNumber = "";
                operator = "";
                userNumberInput = "";
            }
        }
        else {
            if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
                let result = operate(operator, firstNumber, secondNumber);

                if (!Number.isInteger(result)) {
                    result = result.toFixed(2);
                }

                operationDiv.textContent = firstNumber + " " + operator + " " + secondNumber;
                resultDiv.textContent = result;

                firstNumber = result;
                secondNumber = "";
                operator = button.textContent.trim();
                userNumberInput = "";
            }

            else if (userNumberInput !== "") {
                operator = button.textContent.trim();
                operationDiv.textContent = firstNumber + operator;
                userNumberInput = "";
            }
        }
    })
})




const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    userNumberInput = "";

    operationDiv.textContent = "";
    resultDiv.textContent = "0";
})