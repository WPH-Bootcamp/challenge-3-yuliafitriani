"use strict";

console.log("Simple Calculator and A Basic Data Analyzer");
console.log("============================================");

const prompt = require("prompt-sync")({ sigint: true });

//User Input Handling
while (true) {
  const number1 = getValidNumberInput("Enter number: ");

  const operator = getValidOperatorInput(
    "Enter operator (+, -, *, /, %, **): "
  );

  const number2 = getValidNumberInput("Enter number: ");

  const result = calculateInput(number1, number2, operator);

  //Checking result using Nullish Coalescing Operator
  const resultConsole =
    result ?? "Result is undefined or null, something went wrong!";

  console.log("======Data Result===========================");
  console.log("Result : " + resultConsole);
  console.log("======Data Result Analysis==================");

  //Data Type Analysis of Result
  checkTypeAnalysis(result);
  checkNumberType(result);

  console.log("======End===================================");
  const answer = prompt("Do you want to continue? (yes/no)");

  if (answer && answer.toLowerCase() === "no") {
    console.log("Exit application, Bye-bye");
    break;
  }
}

//Validate User Input Handling for Number
function getValidNumberInput(promptMessage) {
  let input = prompt(promptMessage);
  input = parseInt(input);
  if (!isNaN(input) && typeof input === "number") {
    return input;
  } else {
    console.log("Invalid number! Please input a valid number");
    getValidNumberInput(promptMessage);
  }
}

//Validate User Input Handling for Operator
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  const input = prompt(promptMessage);

  if (validOperators.includes(input)) {
    return input;
  } else {
    console.log("Invalid operator! Please enter one of: +, -, *, /, %, **");
    getValidOperatorInput(promptMessage);
  }
}

//Data Type Analysis
function checkTypeAnalysis(number) {
  let resultDesc = "";

  if (typeof number === "number") {
    if (number > 0) {
      resultDesc += "Positive";
    } else if (number < 0) {
      resultDesc += "Negative";
    } else if (number === 0) {
      resultDesc += "Zero";
    }

    if (number % 2 === 0) {
      resultDesc += " and Even";
    } else {
      resultDesc += " and Odd";
    }
  }

  console.log(resultDesc);
}

//Data Number Type Analysis
function checkNumberType(number) {
  if (typeof number !== "number") {
    console.log(`${number} is not a number.`);
  } else if (Number.isInteger(number)) {
    console.log(`${number} is an integer.`);
  } else {
    console.log(`${number} is a floating-point number.`);
  }
}

//Basic Arithmetic Operation
function calculateInput(number1, number2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(number1, number2);

      break;
    case "-":
      result = subtract(number1, number2);

      break;
    case "*":
      result = multiply(number1, number2);

      break;
    case "/":
      result = divide(number1, number2);

      break;
    case "%":
      result = modulo(number1, number2);

      break;
    case "**":
      result = power(number1, number2);

      break;
    default:
      return null;
  }

  return result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    // console.log("Error: Division by zero!");
    return "Error Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}
