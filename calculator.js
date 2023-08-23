const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".input-display");
let ans = 0;

function handleClick(e) {
    const input = e.target.textContent;

    if (input == "C") {
        clear();
        return;
    }

    display.value += input;
}

function clear() {
    display.value = "";
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})
