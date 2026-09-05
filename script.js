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

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("equal")) {
            if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
                const result = operate(operator, firstNumber, secondNumber);
                resultDiv.textContent = result;

                firstNumber = result;
                secondNumber = "";
                operator = "";
            }
        }
        else {
            if (userNumberInput !== "") {
                operator = button.textContent.trim();
                userNumberInput = "";
            }
        }
    })
})
