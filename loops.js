//loops are used to execute a code a number of times. they are usefull if you want to get a different result each time with a different value based on condition specified

// we have 5 types of loops
//for loop
//for of loop
// for in loop
//while loop
//do-while loop

// for loop iterates the element for a fixed number of times - it takes in 3 things - initialization, condition and the increment

const clubNames = ["Chelsea", "Liverpool", "Man City"];
//if i were to print out the names
// console.log(clubNames[0])
// console.log(clubNames[1])
// console.log(clubNames[2])

for (let i = 0; i < clubNames.length; i++) {
  console.log(clubNames[i]);
}

const testScore = [2, 3, 4, 5, 6];
for (let i = 0; i < testScore.length; i++) {
  console.log(testScore[i] * 2);
}

for (let i = 1; i < 10; i++) {
  console.log(i);
}

//for of loop iterates on value one by one in sequential order.
for (let number of testScore) {
  console.log(number * 3);
}

const iterableData = [10, 20, 30];
for (let number of iterableData) {
  number += 1;
  console.log(number);
}

//for in loop - loops through properties of an object/arrays
const myObject = {
  today: "Monday",
  tomorrow: "Tuesday",
  number: 10,
};

let text = "";
for (let p in myObject) {
  text += myObject[p];
  console.log(text);
}

const letterCount = (constLetter) => {
  let result = 0;
  for (const letter in letterCount) {
    result = Number(letter) + 1;
  }
  return result;
};

const phrase = "can you please give me a book";
console.log(letterCount(phrase));
console.log(phrase.length);

const numObject = {
  1: 2,
  2: 40,
  3: 50,
  4: 55,
};

for (const num in numObject) {
  console.log(numObject[num] * 2);
}

//while loop - loops over a data if the condition is true
const anotherNum = [34, 44, 54, 64];
let qq = 0;

while (qq < anotherNum.length) {
  console.log(anotherNum[qq] + 10);
  qq++;
}

//dowhile loop - it will be exected once before checking if the specified conditon is true

let numberText = "";
let i = 0;

do {
  numberText += "The number is " + i;
  i++;
} while (i < 10);

console.log(numberText);

//using the for loop. write a function that triple number, you are to send the result of tripled number into an array

const tripleNumbers = (numbers) => {
    let result = [];
    for (let num of numbers) {
        result.push(num * 3);
    }
    return result;
};

console.log(tripleNumbers([9, 12, 18, 25]))

const sumAllNumbers = (books) => {
    let result = 0;
    for (const laptop of books) {
        result = result + laptop;
    }
    return result;
};
console.log(sumAllNumbers([2, 4, 6, 8]));
