/* Beginner-Level Tasks

    Add Two Numbers
        Goal: Write a function that takes two numbers as arguments and returns their sum.
        Hints:
            Use function or an arrow function to define your logic.
            Make sure the function works for both positive and negative numbers.

    Check Even or Odd
        Goal: Write a function to check if a number is even or odd.
        Hints:
            Use the modulo operator (%).
            Test with both positive and negative numbers.

    Reverse a String
        Goal: Reverse a given string like "hello" to "olleh".
        Hints:
            Use split(), reverse(), and join() methods.
            Alternatively, loop through the string in reverse order.

    Palindrome Checker
        Goal: Write a function that checks if a string reads the same forward and backward.
        Hints:
            Use the string-reversing logic from task 3.
            Compare the reversed string with the original.
*/

// 1. Add Two Numbers

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
// Test the function with positive and negative numbers
// console.log(addTwoNumbers(5, -7));
// console.log(addTwoNumbers(5, 7));

// 2. Check Even or Odd
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return console.log(`Even: ${num}`);
  } else {
    return console.log(`Odd: ${num}`);
  }
}
// checkEvenOrOdd(1);
// checkEvenOrOdd(2);
// checkEvenOrOdd(3);
// checkEvenOrOdd(4);

// 3. Reverse a String

let str = "Hello";
let words = str.split("").reverse().join("");
console.log(words);

// 4. Palindrom Checker

function palindrom(str) {
  let string = str;
  let str;
}

console.log(`Name:`, palindrom("Name"));
console.log(`Name:`, palindrom());
