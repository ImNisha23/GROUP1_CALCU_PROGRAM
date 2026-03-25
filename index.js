let display = document.getElementById("display");

function appendToDisplay(value) {
    let current = display.value;
    if (/[\+\-\*\/]$/.test(current) && /[\+\-\*\/]/.test(value)) {
        return;
    }
    if (current === "Error") {
        return;
    }
    display.value += value;
}

function appendDecimal() {
    let current = display.value;
    let lastNumber = current.split(/[\+\-\*\/]/).pop();

    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let answer = display.value;

        if (/[\+\-\*\/\.]$/.test(answer)) {
            answer = answer.slice(0, -1);
        }

        if (!/^[0-9+\-*/.]+$/.test(answer)) {
            display.value = "Error";
            return;
        }

        let result = new Function('return ' + answer)();

        display.value = Number.isFinite(result) ? result : "Error";
    } catch (error) {
        display.value = "Error";
    }
}