/* 
1. Log a Message
   - Use `console.log` to display a greeting message like "Hello, World!" in the console.
*/
console.log("Hello, World!");

/* 
2. Declare a Variable
   - Create a variable `name` and assign your name as its value.
*/
let name = "Whisp";

/* 
3. Update a Variable
   - Declare a variable `age`, set it to any number, then update it to a new value.
*/
let age = 19;
age = 20;

/* 
4. Data Types
   - Declare variables of type `string`, `number`, and `boolean`.
*/
let str = "String";
let num = 14;
let boolean = true;

/**
   5. Concatenation
   - Combine two strings into a single message.
 */
let strCon = "Hello";
let strCon1 = "World!";
console.log(`${strCon}, ${strCon1}`);

/**
 6. Template Literals
   - Use a template literal to create a sentence that includes a variable.
 */
let strT = "Boom Boom";
// console.log(`Hello, ${strT}`);
/**
  7. Arithmetic Operations
   - Write code to add, subtract, multiply, and divide two numbers.
 */
function calculation(num, num1, Operations) {
  if (Operations === "+") {
    return num + num1;
  } else if (Operations === "-") {
    return num - num1;
  } else if (Operations === "*") {
    return num * num1;
  } else if (Operations === "/") {
    return num / num1;
  }
}
// console.log(calculation(10, 5, "+"));
// console.log(calculation(10, 5, "-"));
// console.log(calculation(10, 5, "*"));
// console.log(calculation(10, 5, "/"));

/**
    8. Modulus Operator
   - Find the remainder of dividing one number by another.
 */
let num1 = 12;
let modulo = num1 % 5;
// console.log(modulo);

/**
    9. Comparison Operators
   - Compare two numbers using `>`, `<`, `===`, and `!==`.
 */
function comparison(num, num1, comp) {
  if (comp === "===") {
    return num === num1;
  } else if (comp === "!==") {
    return num !== num1;
  } else if (comp === ">") {
    return num > num1;
  } else if (comp === "<") {
    return num < num1;
  }
}
// console.log(comparison(10, 10, "==="));
// console.log(comparison(10, 10, "!=="));
// console.log(comparison(10, 10, ">"));
// console.log(comparison(10, 10, "<"));

/**
    10. Logical Operators
    - Create conditions using `&&` and `||`.
 */
function logicalOperator(num, num1) {
  if (num === 5 && num1 === 5) {
    return num + num1;
  } else if (num === num1 || num < num1) {
    return num !== num1;
  } else {
    return "Try again";
  }
}
console.log(logicalOperator(5, 5));
console.log(logicalOperator(8, 9));
console.log(logicalOperator(8, 7));
