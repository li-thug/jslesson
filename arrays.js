//arrays are special variables that can hold more than one value

let book1 = 'hey'
let book2 = 'heeyy'
//the above is not ideal to list out items. Arrays are better suited

//to create an array
const carBrands = ["Toyota", "Honda", "Lexus", "Ford"];
console.log(carBrands);

const randomThings = [];
randomThings[0] = "Ac";
randomThings[1] = "Bc";
randomThings[2] = "Cc";
console.log(randomThings);

//arrays are Zero indexed meaning the count starts from 

const colors = new Array("red", "black", "blue");
console.log(colors);

//accessing items in an arrey - we call them by their index number
console.log(carBrands[2]);

//modifying an item in an arrey 
carBrands[1] = "Mazda";
console.log(carBrands);

//methods in an arrays 

//converting on array to strings 
console.log(carBrands.toString);

//join method
console.log(carBrands.join("/"));

//adding item to an arrays
//push method - add an item to an array beginning from the end
console.log(carBrands.push("Benz"));
console.log(carBrands);

//pop method -  remove the last item an array 
console.log(carBrands.pop());
console.log(carBrands);

//shit method -  remove the first item an array 
console.log(carBrands.shift());
console.log(carBrands);

//unshit method - add an item to the starting position of an arrey
const myLists = [
    "shoe",
    "ticket",
    {
        colors: "yellow",
        date: new Date().getday,
        number: 7,
    },
];
console.log(myLists);

const movie = {
    title: "John Wick",
    genre: "Action",
    revenue: "30000000"
};

myLists.unshift(movie);//add movie to my list of array at index 0
console.log(myLists);
console.log(myLists.indexOf("shoe"));

//splice method - used to add new items to an array in a specific position
//splice take two arugument - position to insert an item and number of items to delete in the array
const places = ["ikeja", "yaba", "illupaju", "maryland"];
places.splice(1, 0, "Onipanu", "Akoka");
console.log(places);
places.splice(3, 2);//delete an item in an array
console.log(places);

const testNumbers = [1, 2, 3, 4, 5];
let deleteTestNumbers = testNumbers.splice(3, 2);
console.log(deleteTestNumbers);
console.log(testNumbers)

//slice - reterns selected element in arrey as a new arrey
const myFood = ["rice", "beans", "eba", "salad"];
const sliceMyFood = myFood.slice(3, 4);
console.log(sliceMyFood);

//merging arrays - use concat method or spread operator
const myMergedArray = places.concat(myFood)
console.log(myMergedArray)

//using the spread operator - donated by ...
const spreadArray =[...myFood,...places];
console.log(spreadArray);