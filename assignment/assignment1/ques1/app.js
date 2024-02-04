// Import the calculator module
const calculator = require('./calculator');
// arithmetic operations
const num1 = 10;
const num2 = 5;
try {
  console.log(`Addition: ${calculator.add(num1, num2)}`);
  console.log(`Subtraction: ${calculator.subtract(num1, num2)}`);
  console.log(`Multiplication: ${calculator.multiply(num1, num2)}`);
  console.log(`Division: ${calculator.divide(num1, num2)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);}
