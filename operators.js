//operators are used to perform actions

//assigment operators - assigns a value to the variable

let de = 4;

//arithemetic operators - (+,-,*,/,**,%)
//addition, subtraction/ mutiplication, modulus, exponential division
let ee = 5;
console.log(dd + ee); //addition
console.log(ee - dd); //subtraction
console.log(dd * ee); //mutiplication
console.log(5 ** 2); //exponential or riased to power
console.log(dd / ee); //division
console.log(ee % dd); //modulus - remainder of
console.log(dd++); //increment - increases by addition of 1
console.log(dd--); //decrement - decreases by a subtraction of 1

//comparison operators - are used to determine the difference between variables

let ff = 30;

//equal to - == - checks if they are of the same values
console.log(ff == 20); //false
console.log(ff == 30); //true
console.log(ff == "30"); //true

//strict equal === to - checks if they are of same value and of same datatypes
console.log(ff === "30"); //false
console.log(ff === 30); //true

//not equal to - != checks if they are of the same values
console.log(ff != 30); //false
console.log(ff != "30"); //true

// > greater than
console.log(ff > 50); //false

// >= greater than or equal to
console.log(ff >= 30); //true

// < less than
console.log(ff < 50); //true

// <=  than or equal to
console.log(ff <= 30); //true

// logical oprators - OR, AND, NOT
// logical OR - ||
// logical AND - &&
// logical NOT - !

let result = dd || ee;
console.log(result);

// logical or evaluates the operand from left to right
// for each operand it converts it to a boolean and if the result is true, it stop and returns the original value of that operand
// if all the operands are false, it returns the last operand
console.log(1 || 0); //1
console.log(null || 1); //1
console.log(undefined || null || 0); //0

//logical and &&
//retures true if both operands are truthy and false if otherwise
result = dd && ee;
console.log(result);
// if the result ia false, its stop and returns the original value of that operand. if all operand are true, it returns the last operand.

console.log(1 && 0); //0
console.log(null && 5); //null
console.log(1 && 2 && 3); //3

console.log(null || 2 || undefined); //2
console.log(1 && null && 2); //null cos it's the first value
console.log(0 && "today"); //0
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

//logical NOT !
console.log(!true); // false
console.log(!false); //true
console.log(!20); //false

//terminary operator is a conditional operator that assigns a value is variable
//based on certain conditions
const score = 80;
const scoreboard = score > 100 ? "Excellent" : "Do more";
console.log(scoreboard);

const pen = true,
  biro = false,
  eraser = 10;
console.log(pen || biro); //true
console.log(biro || biro); //false
console.log(eraser > 5 || eraser < 5); //true

let rr = 2;
console.log(rr > 2 && rr < 2); //false
console.log(!pen); //false
console.log(!biro); //true
