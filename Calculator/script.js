let display = document.getElementById('display');


let expression = '';

function appendValue(value) {

    if (value === '*') {
        display.value += '×';
        expression += '*';
    } else if (value === '/') {
        display.value += '÷';
        expression += '/';
    } else {
        display.value += value;
        expression += value;
    }
}

function clearDisplay() {
    display.value = '';
    expression = '';
}

function deleteLast() {
    const lastChar = display.value.slice(-1);


    display.value = display.value.slice(0, -1);


    if (lastChar === '×') {
        expression = expression.slice(0, -1);
    } else if (lastChar === '÷') {
        expression = expression.slice(0, -1);
    } else {
        expression = expression.slice(0, -1);
    }
}

function calculate() {
    display.value = eval(expression);
    expression = display.value;
}