function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Remove last character
}


document.addEventListener("keydown", function (event) {
    let key = event.key;
    let display = document.getElementById("display");

    // Allow numbers 0-9
    if (!isNaN(key)) {
        display.value += key;
    }

    // Allow basic operators
    if (["+", "-", "*", "/"].includes(key)) {
        display.value += key;
    }

    // Handle Enter key for calculation
    if (key === "Enter") {
        calculate();
    }

    // Handle Backspace for deleting last digit
    if (key === "Backspace") {
        deleteLast();
    }

    // Handle Escape key to clear display (like C button)
    if (key === "Escape") {
        clearDisplay();
    }
});