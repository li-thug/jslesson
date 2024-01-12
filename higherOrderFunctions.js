//functions can be assigned to a variable, they can passed to the other function as parameters and returned as a value
//higher order fuctions is a fuction that accepts functions as parameters and return them as values

let plusFive = (number) => {
  return number + 5;
};

console.log(plusFive(3));

let opp = plusFive; //opp has a funtion value and so can be involed
console.log(opp(8));

function callMe() {
  console.log("Call me");
}

function higherOrder(func) {
  func();
}

higherOrder(callMe);

//we have 4 higher functions in js - map, filter, reduce and for each method
//map method iterate over datas and return back your data in an array. it does not alter the original array, the result you see in map is served in a new array. it is non-mutating

const arr = [1, 2, 3, 4, 5];
const output = arr.map(function nnn(num) {
  return num + 4;
});
const outputB = arr.map((num) => num * 2);
console.log(outputB);

const myStudents = ["Emma", "kenny", "Esther", "Titi"];
const getMyStudentsNames = myStudents.map((names) => names);
console.log(getMyStudentsNames);

//using the map method, create a function triNumber that takes in a parameter and returns values of parameter in tripled

function triNumbers(num) {
  return num.map((tri) => tri * 3);
}
console.log(triNumbers([3, 4, 5]));

const actors = [
  { name: "keatu", networth: 500000 },
  { name: "Denzel", networth: 400000 },
  { name: "Sandra", networth: 700000 },
];

//using the map method, print out the actor names
const actorNames = actors.map((actor) => actor.name);
console.log(actorNames);

//filter method take an array and returns a new array with only the values that match the condition specified. it does not alter the original array.

const filterActorNetworth = actors.filter((actor) => actor.networth >= 470000);
console.log(filterActorNetworth);

const filterNums = [1, 2, 3, 4, 5, 6];
//filter numbers greater than 3 or less than 2
const filterNumResult = filterNums.filter((num) => num > 3 || num < 2);
console.log(filterNumResult);

//using the fillerNums data, filter out numbers that are only odd numbers - numbers not divided by 2
const filterOddNum = filterNums.filter((num) => num % 2);
console.log(filterOddNum);

//Create a funtion that 2 params - number, greaterThan. the number params should be an array of numbers, while greaterThan params should be the condition that filters the values in the number. put the result of filtered condition in a new array. use the for loop and filter method
const fNumberGreaterThan = (number, greaterThan) => {
  let filteredNumbers = [];
  for (const num of number) {
    if (num > greaterThan) {
      filteredNumbers.push(num);
    }
  }
};
console.log(fNumberGreaterThan([2, 3, 4, 5, 6, 7, 8], 6));

const fNumberGreater = (number, greaterThan) => {
  let filteredNumbers = [];
  const getNum = number.filter((num) => num > greaterThan);
  filteredNumbers.push(getNum);
  return filteredNumbers;
};
console.log(fNumberGreater([4, 5, 6, 7, 8], 5));

//the ruduce method iterates over an array and return a single value. it takes in a call back function with two parameters (accumulator, currentValue). on each iteration, the accumulator is the value returned by the last iteration while the currentvalue is the current element in the array.
//additionally, a second argument can be passed which acts as initial value of the accumulator

const getSumOfNums = [5, 7, 8, 10];
const sumOfGetNums = getSumOfNums.reduce((acc, cv) => acc + cv);
console.log(sumOfGetNums);

function mm(a, b) {
  return a * b;
}
const getMultipliedValue = getSumOfNums.reduce(mm);
console.log(getMultipliedValue);

const sumActorsNetworth = actors.reduce(
  (prev, curr) => prev + curr.networth,
  0
);
console.log(sumActorsNetworth);

const minNum = [30, 40, 65, 70];
const minValue = minNum.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
});

console.log(minValue);
//here the reduce method start by 30 as the accumulator and 40 as the current value. it will check if 40 is greater than 30, if so, it updates teh accumulator to 40. it will once again set 40 as the currentvalue and check if 85 is greater than 40.
//it does this until it get to 70 where the 70 as the current value is not greater than 70 as the accumulator and so therefore return back 70 as the maximum value

//for each method loops through an array and provides a callback function on each array element

const weather = ["cloudy", "sunny", "humid"];
weather.forEach((item, index) => console.log(`${index} ${item}`));
minNum.forEach((num) => console.log(num + 4));
//it takes up to 3 argument - the current element, index -the index of the array elements, and the array itselfs. the index and the array element is optional

actors.forEach((actorNames, index) => {
  let word = `${index}: i am an actor my name is ${actorNames.name}`;
  console.log(word);
});

//using the actors array and for each method, get actor whose networth is greater than 600000
actors.forEach(({ name, networth }) => {
  if (networth > 600000) {
    console.log(name);
  }
});
