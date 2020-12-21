// console.log("Hello, world!");

// console.log("i am a fake error");

// function exampleFunction() {
//     //this is a block
// }
// const name = "Melissa J.";
// console.log(name);

// const rent = 299 + 301;

// console.log(rent);

// console.log(typeof "Sure, Jan");

// const greet = "Hello, Melissa"
// console.log(greet);

const userName = "Melissa";
const greeting = "Hello," + " " + userName;
console.log(greeting);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('What is your name?', name => {
    console.log(`Hello, ${name}!`);
    readline.close();
  });