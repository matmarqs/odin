function round(x) {
  const factor = 10 ** 6;
  return Math.round(factor * x) / factor;
}

// notice that Number('') === 0 is JavaScript
function operate(a, op, b) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return String(round(a + b));
    case "*":
      return String(round(a * b));
    case "/":
      return String(round(a / b));
    case "-":
      return String(round(a - b));
    default:
      console.error("operator: Not an operator");
  }
}

function populateDisplay(button) {
  // disables the "." button if the user already typed "."
  if (button === '.' && display.textContent.includes('.'))
    return;
  displayText(a);
  if (firstOperand) {
    if (button === '.' || !isNaN(button)) { // number
      a += button;
    }
    else {  // symbol
      firstOperand = false;
      op = button;
    }
    displayText(a);
  }
  else {
    if (button === '.' || !isNaN(button)) { // number
      b += button;
      displayText(b);
    }
    else {  // symbol
      if (b !== '') { // in case there is no "b", we just update "op"
        a = operate(a, op, b);
        displayText(a);
        b = '';
      }
      op = button;
    }
  }
}

function equal() {  // when "=" is pressed
  if (!firstOperand) {
    a = operate(a, op, b);
    displayText(a);
    b = '';
    firstOperand = true;
  }
}

function displayText(text) {
  if (text === '')  // Number('') === 0 in JavaScript
    display.textContent = '0';
  else
    display.textContent = text;
}

function clearDisplay() {
  display.textContent = '0';
  firstOperand = true;
  a = '';
  op = '';
  b = '';
}

function invert() {
  let string = display.textContent;
  let ch = string.at(0);
  if (ch === '-') {
    displayText(string.replace('-', ''));
    if (firstOperand)
      a = a.replace('-', '');
    else
      b = a.replace('-', '');
  }
  else {
    displayText(display.textContent = '-' + string);
    if (firstOperand)
      a = '-' + a;
    else
      b = '-' + b;
  }
}

function percentage() {
  if (firstOperand) {
    a = a / 100;
    displayText(a);
  }
  else {
    b = b / 100;
    displayText(b);
  }
}

let firstOperand = true;

const display = document.querySelector("#display");
let a = '';
let op = '';
let b = '';
