//js strings are used for storing and manipulating text
// use strings in double or single qoutes
let xl = "mac";

// strings methods 

//the length
let longTest = "today is tuesday";
console.log(longTest.length);
console.log(longTest);

let ourText = 'we are the best "club" in the world'
console.log(ourText);

//extracting part of the strings
//slice
//slice menthod extracts a part of a string and returns the extracted parts in a new strings
//it takes in 2 parameters: start position and the end position 

let fruits = "Apple, Banana, pear";
console.log(fruits.slice(7, 13));
//if you omit the second parameter, the slice method will slice out the rest of the strings
console.log(fruits.slice(7));

console.log(fruits.slice(-7));

//the replace method
//this repalce a specified value with another value is a string

let newText = "i have a laptop"
let replaceNewText = newText.replace("have", "own");
console.log(replaceNewText)

newText = "I have a laptop and a book";
let replaceNewTextB = newText.replace("a","own")
console.log(replaceNewTextB);

//replace method only replace the first match

//replace method is case sensitive 
console.log(newText.replace("a", "own"))

// to makw it case insensitive, we use the /i flag
console.log(newText.replace(/a/i, "pp"));

//replaceAll replaces all secleted strings where they appear
let food = "i love rice. Rice is sweet. rice is my best food";
console.log(food.replaceAll("Rice", "beans"));

//converting to upper and lower case
let textUpper = "Hello tuesday"
console.log(textUpper.toUpperCase());
console.log(textUpper.toLowerCase());

//concat method joins two or moew strings- we can join two strings using concat method 
let text1="i own a laptop";
let text2= "and a shoe";
console.log(text1.concat(" ", text2));

let text3 = "Hello";
let text4 = "World";
console.log(text3 + " " + text4);

//template literal - this is denoted with backtricks and used to reference variables as part of a text
let phoneMaker = "Google"
let phoneModel = "pixel 8"
let myFullText = `I have a phone ${phoneMaker} amd the model is ${phoneModel}`
console.log(myFullText)

//trim method - removes space from both side of the string
 let text5 = "hey young world    "
 console.log(text5);
 console.log(text5.trim());
 console.log(text5.trimStart());
 console.log(text5.trimEnd());

 //the indexOf returns the index position of the first occurence of a string in a string
let findAText = "pls find me where find happens";
console.log(findAText.indexOf("find"));

//last indexOf finds the last occurence
console.log(findAText.lastIndexOf("find"));

//includes method - return true if a string contain a specified value
console.log(findAText.includes("where"))


//excercise - strings menthods 
//output a list and check its length
//slice your string variable and extract the third word
//find the index of the fourth word

let foods = "rice, beans, spag, yam, garri"
console.log(foods.slice(13, 17))
console.log(foods.indexOf("yam"))