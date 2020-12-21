 /*
 1. Operator
 2. Data Types
 3. Short code snippet
 4. Thinking like a programmer
 5. Questions
 */

 //String data type
 //Initializing a variable "x" to contain string "hello world"

//  let x = "Hello, world!"
// console.log(x);

// //print to screen artithmetic examples

// //addition
// console.log(num+deci);

//print to screen logical evaluations
// = assignment operator
// equality operator

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

let sum = 0

for(i = 0; i < numbers.length; i++){
    sum = sum + i;
    console.log(sum);
} if (sum%2 === 0) {
    console.log( sum + " is an even number.")
} else {
    console.log(sum + " is an odd number.")
}

for(let i = 0; i < 1200; i++) {
    console.log("if you see this it means your javascript/node.js works :)");
  }