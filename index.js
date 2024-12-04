const rs = require("readline-sync");

const operations = ["+", "-", "*", "/"];
function getOperator() {
  let whatOperation = rs.question("What operation would you like to perform? ");
  if (operations.includes(whatOperation)) {
    console.log(whatOperation);
    return whatOperation;
  } else {
    console.log("That is not a valid operator");
    return getOperator();
  }
}

const operator = getOperator();

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    return num1 / num2;
  }
}

const firstNumber = rs.questionInt("Please enter the first number ");
const secondNumber = rs.questionInt("Please enter the second number ");

console.log("The result is ", calculate(firstNumber, secondNumber, operator));
