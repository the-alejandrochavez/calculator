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
            case "←":
                if (currentValue.length === 1) {
                    currentValue = "";
                    display.value = currentValue;
                }
                currentValue = currentValue.substring(0, currentValue.length - 1);
                display.value = currentValue;
        }
    }

}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})
