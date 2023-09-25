function operate(num1, operator, num2) {
  operator.toString();
  console.log(typeof operator);
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