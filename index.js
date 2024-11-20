const rs = require("readline-sync");

const whatOperation = rs.question("What operation would you like to perform? ");
const firstNumber = rs.questionInt("Please enter the first number ");
const secondNumber = rs.questionInt("Please enter the second number ");

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

if (
  whatOperation === "+" ||
  whatOperation === "-" ||
  whatOperation === "/" ||
  whatOperation === "*"
) {
  if (whatOperation === "+") {
    function runPlus() {
      console.log("The result is", firstNumber + secondNumber);
    }
    runPlus();
  }
  if (whatOperation === "-") {
    function runSub() {
      console.log("The result is", firstNumber - secondNumber);
    }
    runSub();
  }
  if (whatOperation === "/") {
    function runDiv() {
      console.log("The result is", firstNumber / secondNumber);
    }
    runDiv();
  }
  if (whatOperation === "*") {
    function runMulti() {
      console.log("The result is", firstNumber * secondNumber);
    }
    runMulti();
  }
} else if (
  whatOperation != "+" ||
  whatOperation != "-" ||
  whatOperation != "/" ||
  whatOperation != "*"
) {
  console.log("That is not a valid operation");
}
