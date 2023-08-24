const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".input-display");
let currentValue = "";
let firstValue = null;
let operator = null;
// × − +÷

function handleClick(e) {
    const input = e.target.textContent;

    if (!isNaN(input)) {
        currentValue += input;
        display.value = currentValue;
    } else {
        switch (input) {
            case "C":
                currentValue = "";
                firstValue = null;
                operator = null;
                display.value = "";
                break;

            case "←":
                if (currentValue.length === 1) {
                    currentValue = "";
                    display.value = currentValue;
                }
                currentValue = currentValue.substring(0, currentValue.length - 1);
                display.value = currentValue;
                break;

            case "×":
            case "÷":
            case "+":
            case "−":
                if (currentValue !== "") {
                    if (firstValue === null) {
                        firstValue = parseInt(currentValue);
                        operator = input;
                        currentValue = "";
                    }
                }
                break;

            case "=":
                if (currentValue !== "" && firstValue !== null && operator !== null) {
                    const secondValue = parseInt(currentValue);
                    let result;
                    switch (operator) {
                        case "×":
                            result = firstValue * secondValue;
                            break;
                        case "÷":
                            result = firstValue / secondValue;
                            break;
                        case "+":
                            result = firstValue + secondValue;
                            break;
                        case "−":
                            result = firstValue - secondValue;
                            break;
                    }
                    display.value = result;
                    firstValue = null;
                    operator = null;
                    currentValue = display.value;
                }
        }
    }

}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})
