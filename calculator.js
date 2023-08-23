const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".input-display");
let c = 0;
let ans = 0;

function handleClick(e) {
    const input = e.target.textContent;

    if (input == "C") {
        clear();
        return;
    }

    if (input == "()") {
        parentheses();
        return;
    }

    if (input == "+") {
        display.value += " + ";
        return;
    }

    if (input == "-") {
        display.value += " - ";
        return;
    }

    if (input == "=") {
        result();
        return;
    }

    display.value += input;
}

function clear() {
    display.value = "";
    c = 0;
}

function parentheses() {
    if (c % 2 == 0) {
        display.value += "(";
    } else {
        display.value += ")";
    }
    c++;
}

function result() {
    if (display.value.includes("-")) {
        ans = subtract();
    }
    if (display.value.includes("+")) {
        ans = add();
    }

    display.value = ans;
}

function add() {
    let sum = 0;
    let numbers = display.value.split(" + ")
    let nums = numbers.map(str => parseInt(str));

    nums.forEach(num => {
        sum += num;
    })

    return sum;
}

function subtract() {
    let difference;
    let numbers = display.value.split(" - ")
    let nums = numbers.map(str => parseInt(str));

    difference = nums.reduce((total, num) => total - num);

    return difference;
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})
