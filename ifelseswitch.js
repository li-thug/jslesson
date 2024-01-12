// if statement evaluates a condition inside a bracket
//use if statement if the code to br excuted is true, while else is used if the same code to be executed is false
//use elseif - to specify a new condition to test if the first condition is false

//structure of the if statement

//if (condition to be tested) {execute code if condition is true}
//else {execute code if condition is false}

const checkAmount = 1000;

if (checkAmount > 600) {
  console.log("yes");
} else {
  console.log("no");
}
if (checkAmount >= 1200) {
  console.log("kk");
} else if (checkAmount >= 500) {
  console.log("ll");
} else {
  console.log("oo");
}

//else if - if no condition are met we us3e the else command as the final option for the code

//using ternary operator
const yy = checkAmount > 600 ? "yes" : "no";
console.log(yy);

//swith statement perform a series of actions on diff conditions
// switch statement is evaluated once
// the value is compared with the value of each case
// if there is a match, the associated block of code is executed

//ai=2 is expression result to be evaluated by each case. case 1 ia false because 1 !==2. the swicth goes to the second case and here 2 ==== case 2 giving us the output value, the break statement terminates the execution once the condition is matched.

let ai = 2;

switch (ai) {
  case 1:
    ai = "one";
    break;
  case 2:
    ai = "two";
    break;
  case 3:
    ai = "three";
    break;
}
console.log(`the value is ${ai}`); //template literals or strings

switch (new Date().getDay()) {
  case 0:
    console.log("it is sunday");
    break;
  case 1:
    console.log("it is monday");
    break;
  case 2:
    console.log("it is tuesday");
    break;
  case 3:
    console.log("it is wednesday");
    break;
  case 4:
    console.log("it is thurday");
    break;
  case 5:
    console.log("it is friday");
    break;
  case 6:
    console.log("it is saturday");
    break;
}

// const operator = prompt("Enter operator (either +, -, *, or /");

// let ourResult;

// const number1 = parseFloat(prompt("Enter first number"));
// const number2 = parseFloat(prompt("Enter second number"));

// switch (operator) {
//   case "+":
//     ourResult = number1 + number2;
//     console.log(`${number1} + ${number2} = ${ourResult}`);
//     break;
//   case "-":
//     ourResult = number1 - number2;
//     console.log(`${number1} - ${number2} = ${ourResult}`);
//     break;
//   case "*":
//     ourResult = number1 * number2;
//     console.log(`${number1} * ${number2} = ${ourResult}`);
//     break;
//   case "/":
//     ourResult = number1 / number2;
//     console.log(`${number1} / ${number2} = ${ourResult}`);
//     break;
//   default:
//     console.log("invalid operator");
// }

//excercise
//write a code that ask for a question using the prompt method
//the question should say "who is there?"
//if the question reply is 'Dami', it should prompt for a password
//if the question reply is not 'Dami', alert('I don't know you')
//if the password is 'javascript', alert ('welcome')
//if the password is not 'javascript', alert ('wrong password')
//if there is no question, alert (cancelIed)

// alert ()

// let question = prompt ('who is there?')
// if (question === "Dami") {
//   let password = prompt("Enter password");
//   if (password === "Javascript") {
//     alert("Welcome");
//   } else if (password !== "Javascript") {
//     alert("Wrong pasword");
//   }
// } else if (!question) {
//   alert("Cancelled");
// } else if (question !== "Dami") {
//   alert("I don't know you");
// }
