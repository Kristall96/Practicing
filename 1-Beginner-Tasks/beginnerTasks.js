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
// console.log(logicalOperator(5, 5));
// console.log(logicalOperator(8, 9));
// console.log(logicalOperator(8, 7));

/**
  11. If-Else Statement
    - Write an `if-else` block to check if a number is positive.
 */

function ifelse(num) {
  if (num > 0) {
    return (num = "positive");
  } else {
    return (num = "negative");
  }
}

// console.log(ifelse(1));

/**
    12. Nested If Statements
    - Create a program to determine if a number is positive, negative, or zero.
 */
function nestedIfElse(num) {
  if (num > 0) {
    return (num = "Positive");
  } else if (num < 0) {
    return (num = "Negative");
  } else {
    return (num = "zero");
  }
}
// console.log(nestedIfElse(1));
// console.log(nestedIfElse(-1));
// console.log(nestedIfElse(0));

/**
    13. Switch Statement
    - Write a switch statement to return the name of a day based on a number (1–7).
 */

let day = 3;
day = 8;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

/**
    14. For Loop
    - Write a `for` loop that prints numbers from 1 to 10.
 */
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

/**
    15. While Loop
    - Create a program that prints numbers from 1 to 5 using a `while` loop.
 */
// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(i);
// }

/**
    16. Do-While Loop
    - Write a `do-while` loop to print numbers from 1 to 3.
 */

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 3);

/**
    17. Break in Loop
    - Write a loop that breaks when a number is divisible by 5.
 */
// for (i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 5 === 0) {
//     break;
//   }
// }

/**
    18. Continue in Loop
    - Create a loop that skips even numbers.
 */
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

/**
    19. Nested Loops
    - Write a program to print a multiplication table for numbers 1–3.
 */

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("");
// }

/**
    20. FizzBuzz
    - Write a program to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.
 */
// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

/**
    21. Create a Function
    - Define a function that logs "Hello!" to the console.
 */

function hello() {
  console.log("hello");
}
// hello();

/**
    22. Function with Parameters
    - Write a function that takes two numbers and logs their sum.
 */

function numbers(a, b) {
  console.log(a + b);
}
// numbers(5, 10);

/**
    23. Return a Value
    - Modify the above function to return the sum instead of logging it.
 */
function numberss(a, b) {
  return a + b;
}
// console.log(numberss(5, 7));

/**
  24. Arrow Function
    - Convert a function to an arrow function.
 */

// let hello1 = (a, b) => {
//   console.log(a + b);
// };

// hello1("hello", " World!");

/**
    25. Default Parameters
    - Write a function with a default parameter.
 */

let hi = function hiya(a, b = 0) {
  return a + b;
};

// console.log(hi(7, 10));

/**
  26. Rest Parameter
    - Use the rest parameter to sum any number of arguments.
 */

function rest(...nums) {
  let total = 0;
  for (const num of nums) {
    total = total + num;
  }
  return total;
}
console.log(rest(1, 2, 4, 5));

// function stringRest(a, b, ...rest) {
//   console.log("A:", `${a},`, "B:", `${b},`, "rest:", ...rest);
// }
// stringRest("one", "two", "three", "four", "five", "six", "!");

/**
    27. Callback Function
    - Write a function that accepts another function as an argument.
 */

// function firstFun(secondFun) {
//   let name = "Erkan";
//   console.log((name = `${name + " " + secondFun()}`));
// }

// function secondFun() {
//   const lastName = "Shakir";
//   return lastName;
// }

// firstFun(secondFun);

/**
    28. Anonymous Function
    - Create an anonymous function and immediately invoke it.
 */

// (function () {
//   console.log("hello");
// })();

/**
  29. Recursion
    - Write a function that calculates the factorial of a number using recursion.
 */

function recursion(num, acc = 1) {
  if (num === 1) return acc;

  return recursion(num - 1, acc * num);
}
// console.log(recursion(4));

/**
  30. Hoisting
    - Experiment with function hoisting by calling a function before its declaration.
 */
// greeting("Bau", "Mau");

function greeting(name, surname) {
  return console.log(`${name} ${surname}`);
}

/**
  31. Create an Array
    - Create an array of your favorite fruits.
 */
// let arr = ["apple", "orange", "banana"];
// console.log(arr);

/*
  32. Access Array Elements
    - Access and log the first element of an array.
*/
// console.log(arr[0]);

/**
  33. Update an Array
    - Change the value of the second element in an array.
 */

// arr[1] = "cherry";
// console.log(arr[1]);

/**
  34. Array Length
    - Find and log the length of an array.
 */
// console.log(arr.length);
/**
  35. Push and Pop
    - Add an item to the end of an array and remove it.
 */

// arr.push("Grape");
// console.log(arr);
// arr.pop();
// console.log(arr);
/**
  36. Shift and Unshift
    - Add an item to the beginning of an array and remove it.
 */

let arr = ["apple", "orange", "banana"];
// arr.unshift("cherry"); // add array
// console.log(arr);
// arr.shift(); // remove array
// console.log(arr);

/**
  37. Loop Through an Array
    - Use a `for` loop to iterate through an array.
 */
for (const arrs of arr) {
  console.log(arrs);
}

/**
  38. Array Methods
    - Use `.map()` to create a new array with the squares of the numbers in an array.
 */
let numArr = [1, 2, 3, 4];
let numArr2 = numArr.map((num) => num ** 2);
console.log(numArr2);

/**
  39. Filter
    - Use `.filter()` to create an array of even numbers.
 */
let arrEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrEven2 = arrEven.filter((even) => even % 2 === 0);
// console.log(arrEven2);

/**
  40. Reduce
    - Use `.reduce()` to find the sum of numbers in an array.
 */
let arrReduce = arrEven.reduce((acc, currVal) => acc + currVal, 0);
console.log(arrReduce);
