
const display = document.getElementById("display");
let input1, input2;
let operatorSymbol = "";
function toDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    operatorSymbol = "";
    display.value = "";
    input1 = "";
    input2 = "";
}

function operate(operand) {
    input1 = display.value;
    display.value = "";
    operatorSymbol = operand;
}

function add(input1, input2) {
    return input1 + input2;
}
function minus(input1, input2) {
    return input1 - input2;
}
function divide(input1, input2) {
    return input1 / input2;
}
function multiply(input1, input2) {
    return input1 * input2;
}
function calculate() {
    try {
        input2 = display.value;
        switch (operatorSymbol) {
            case '+':
                display.value = add(parseFloat(input1), parseFloat(input2));
                break;
            case '-':
                display.value = minus(parseFloat(input1), parseFloat(input2));
                break;
            case '/':
                display.value = divide(parseFloat(input1), parseFloat(input2))
                break;
            case '*':
                display.value = multiply(parseFloat(input1), parseFloat(input2))
                break;
        }
    } catch (error) {
        alert("Invalid Input");
    }
}