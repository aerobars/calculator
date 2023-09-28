let num1;
let operator = "";
let num2;

let displayValue = document.querySelector("#display");

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-"){
    return subtract(num1, num2);
  } else if (operator === "*"){
    return multiply(num1, num2);
  } else if (operator === "/"){
    return divide(num1, num2);
  } else {
    return "Please enter a valid operator";
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return (num2 === 0) ? "You're trying to divide by zero, not cool!": num1 / num2
}

function display(button) {
  if (button.id === "clear") {
    num1 = 0;
    operator = "";
    num2 =0;
    return displayValue.textContent = "0";
  } else if (button.id === "=") {
    num1 = operate(Number(num1), operator, Number(num2));
    operator = "";
    return displayValue.textContent = num1;
  } else {
    //if button is a number and operator has no value, add to num1, else add to num2
    //if button is an operator and operator has an existing value, run operate, else set operator equal to button id
    if (button.class === "operator") {
      if (operator != "") {
        num1 = operate(Number(num1), operator, Number(num2));
        operator = button.id;
        return displayValue.textContent = num1+operator;
      } else {
        operator = button.id;
      }
    } else {
      operator === "" ? num1 += button.id : num2 += button.id
    }
    return displayValue.textContent === "0" ? displayValue.textContent = button.id : displayValue.textContent += button.id;
  }
}

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    display(button);
  })
})