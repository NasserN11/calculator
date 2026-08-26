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


function operate(operator, a, b) {
    switch(operator) {
        case "+":
            add(a, b);
            break;

        case "-":
            subtract(a, b);
            break;

        case "*":
            multiply(a, b);
            break;

        case "/":
            divide(a, b);
            break;

        default:
            console.log("Wrong operator");
    }
}