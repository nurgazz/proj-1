let displayValue = "0";

function addToDisplay(value) {
  const display = document.getElementById("result");
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearAll() {
  document.getElementById("result").value = "0";
}

function clearEntry() {
  const display = document.getElementById("result");
  display.value = "0";
}

function backspace() {
  const display = document.getElementById("result");
  display.value = display.value.slice(0, -1) || "0";
}

function performOperation(operator) {
  const display = document.getElementById("result");
  if (!isNaN(display.value.slice(-1))) {
    display.value += operator;
  }
}

function calculate() {
  const display = document.getElementById("result");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}