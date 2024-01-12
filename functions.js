//function is a block of code designed to perform a particular task  or is a reuseable piece of code that performs some logic and gives you a result
//it is executed when called upon

// function are written in different ways
function MyfunctionName() {
  console.log("Hi Emmanuel");
}

MyfunctionName(); //invoking a function

//arrow function - es6 module -2015
const arrowfunction = () => {
  console.log("Hi arrow function");
};
arrowfunction;
// a function is made up of - function keyword, parenthesis, curly braces, return keyword

//the return keyword is used to gove thr result of the function and it can only be used inside a function

function addMe() {
  return 2 + 2; //nothing should be written after the return statement
}
console.log(addMe());

//parameters and aruguments
//parameters are like palaceholder that receives variable. Thay are used when defining a function.aruguments
//arguments are the values the function recieves from each parameter

function greetMe(name) {
  console.log(`Hello $(name)`);
}
greetMe["Kenny"]; //kenny is the arguments
greetMe["Ken"]; //kenny is the arguments
greetMe["K"]; //kenny is the arguments

//parameters can also be accessed inside function
function sunMe(a, b, c) {
  return a + b + c;
}
console.log(sunMe(2, 3, 4));

//write a funtoin that doubles a number

function double(e) {
  return e * 2;
}
console.log(double(30));

//with the arrow function, functions can be written in a single line if its not much
const add = (a, b) => a + b;

//calc total amount of money spent on a food
const calcFoodTotal = (food, tip) => {
  const tipPercent = tip / 100; //find percentage tip
  const tipAmount = food * tipPercent; //actual tip
  const total = add(food, tipAmount);
  return total;
};

//function are first class citizens - they can be treated as values to a variable
console.log(calcFoodTotal(600, 6));

let getTotalFoodAmt = calcFoodTotal(700, 10); //calcFoodTotal passed to a variable
console.log(getTotalFoodAmt);

//refer to our calFoodTotal, write a function that splits the bills among users. if the user is less than or equal to 1, the bill should return the total. but if the user is more than 1, the bill should be split among the user

function splitBill(getTotalFoodAmt, user) {
  if (user <= 1) {
    return getTotalFoodAmt;
  } else if (user > 1) {
    const bill = getTotalFoodAmt / user;
    return bill;
  }
}
console.log(getTotalFoodAmt, 3);

//write a function that takes a parameter- "stringArr" -whose value should be an array of strings and returns back the value of the array in uppercased. the result should be put in a new array.

function UpperCase(stringArr) {
  let result = [];
  result.push(stringArr[0].toUpperCase());
  result.push(stringArr[1].toUpperCase());
  return result;
}
console.log(UpperCase(["i want to eat", "i am hungry"]));

//write a function carTotal that takes in a parameter - cart
//the parameter should  multiply the value of each items in it
//the parameter should be an array. the array should have 2 object in it
//the object should have the properties- price and quantity
//the value of each of the properties should be a number
// the function cartTotalshould sum up the value of the objects

function cartTotal(cart) {
  let total;
  const cartA = cart[0].price * cart[0].quantity;
  const cartB = cart[1].price * cart[1].quantity;
  total = add(cartA, cartB);
  return total;
}
console.log(
  cartTotal([
    { price: 4000, quantity: 4 },
    { price: 2000, quantity: 2 },
  ])
);

//create an array name todos - which should be an arrey of object whose properties should be - title, duadate and id. their value should in string
//write a function that lets you add a new items to the todos arrey
//for the value of duedate, you are to use date get time method and output it as a string.

const todos = [
  {title: "Book", duedate: "10-12-23", id: "1"},
  {title: "Chair", duedate: "11-12-23", id: "2"},
]

function addTodo(a, b, c) {
  todos.push ({title: a, duedate: b, id: c});
}
addTodo("it is monday", new Date().getTime().toString, "3")
console.log(todos);