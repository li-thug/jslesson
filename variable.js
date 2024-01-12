console.log("hello javascript");

//a variable is used to store informatoin so that it can be used or manipulaed later on

lastName = "charles";

// a js variable name must begin with-
//a lettrt (A-Z or a-z)
//a doller sign ($)
// or an underscore (_)

// do not start a variable name with a number

//javascript variable names are case sensitive 
lastname = "emmanuel";

//js camelcase
firstName = "peter";
//pascal case = begin each word with a capital letter
FirstName = "toyo";

//js variable can be declared in 4 ways 
//Automatically
//using "var" keywords
//using "let" keywords
//using "var" keywords

ourName = "today"; // - bad practise
var today = "mondey"; // - old way of declaring variables prior to 2015
let tomorrow = "tuesday"; // - new way post 2015
const nextTomorrow = "wednesday"; // - new post 2015

// when do we use var, let or const?
//var - only use if you want to support old browsers
//let - use if you know the value might be changed 
//const - use if the value should not be changed

//redeclaring variables
//you cannot redeclare a variable started with let or const
let year = 2023;
console.log(year);
year = 2024;
console.log(year);

const day = "monday";
console.log(day);

var car = "Toyota";
var car;
console.log(car);

//block scope
// variables declared inside a block scope cannot be accessed from outside
{
    let a = 20;
    console.log(a);
}