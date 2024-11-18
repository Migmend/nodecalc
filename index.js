var rs = require("readline-sync");
var theNumbers = [];

var whatOperation = rs.question("What operation would you like to perform? ");

if (
  whatOperation === "+" ||
  whatOperation === "-" ||
  whatOperation === "/" ||
  whatOperation === "*"
) {
  if (whatOperation === "+") {
    function runPlus() {
      var firstNumber = rs.questionInt("Please enter the first number ");
      theNumbers.push(firstNumber);
      var secondNumber = rs.questionInt("Please enter the second number ");
      theNumbers.push(secondNumber);
      console.log("The result is", firstNumber + secondNumber);
    }
    runPlus();
  }
  if (whatOperation === "-") {
    function runSub() {
      var firstNumber = rs.questionInt("Please enter the first number ");
      theNumbers.push(firstNumber);
      var secondNumber = rs.questionInt("Please enter the second number ");
      theNumbers.push(secondNumber);
      console.log("The result is", firstNumber - secondNumber);
    }
    runSub();
  }
  if (whatOperation === "/") {
    function runDiv() {
      var firstNumber = rs.questionInt("Please enter the first number ");
      theNumbers.push(firstNumber);
      var secondNumber = rs.questionInt("Please enter the second number ");
      theNumbers.push(secondNumber);
      console.log("The result is", firstNumber / secondNumber);
    }
    runDiv();
  }
  if (whatOperation === "*") {
    function runMulti() {
      var firstNumber = rs.questionInt("Please enter the first number ");
      theNumbers.push(firstNumber);
      var secondNumber = rs.questionInt("Please enter the second number ");
      theNumbers.push(secondNumber);
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
