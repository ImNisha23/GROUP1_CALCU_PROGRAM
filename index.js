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