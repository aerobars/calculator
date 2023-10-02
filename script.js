let displayValue = document.querySelector("#display");

const buttons = document.querySelectorAll('.button');

let num1 = 0;
let operator = "";
let num2 = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    displayUpdate(button);
  })
})

function displayUpdate(button) {
  if (button.id === "clear") {
    num1 = 0;
    operator = "";
    num2 = 0;
    return displayValue.textContent = "0";
  } else if (button.id === "=") {
    num1 = operate(Number(num1), operator, Number(num2));
    operator = "";
    num2 = 0;
    return displayValue.textContent = num1;
  } else {
    if (typeof dataStorage(button) === 'undefined') {
    return displayValue.textContent === "0" && operator === "" ? displayValue.textContent = button.id : displayValue.textContent += button.id;
    }
  }
}

function dataStorage(button) {
  if (button.className === "button operator") {
    if (operator != "") {
      num1 = operate(Number(num1), operator, Number(num2));
      operator = button.id;
      num2 = 0
      return displayValue.textContent = num1+operator;
    } else {
      operator = button.id;
    }
  } else {
    console.log("check")
    operator === "" ? num1 += button.id : num2 += button.id;
  }
  //console.log("num1" + num1);
  //console.log("operator" + operator);
  //console.log("num2" + num2);
}

function operate(num1, operator, num2) {
  return operator === "+" ? add(num1, num2)
    : operator === "-" ? subtract(num1, num2)
    : operator === "*" ? multiply(num1, num2)
    : operator === "/" ? divide(num1, num2)
    : "Please enter an operator";
}

function add(num1, num2) {
  return Math.round((num1 + num2) * 100) / 100;
}

function subtract(num1, num2) {
  return Math.round((num1 - num2) * 100) / 100;
}

function multiply(num1, num2) {
  return Math.round((num1 * num2) * 100) / 100;
}

function divide(num1, num2) {
  return (num2 === 0) ? "You're trying to divide by zero, not cool!": Math.round((num1 / num2) * 100) / 100;
}