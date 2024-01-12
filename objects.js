//denoted in key-values pairs- known as property
//properties of an object can be a string, number, array or function

//object literal notation- curly brackets
let empty = {};

let lists = {
    color: "black",
    car: "Honder",
    sneaker: "nike",
    "street" : 34,
};

//if an object has multiple properties, separate them with a comma
console.log(lists);

//accessing properties in an object
//the dot notation and array-like notation

console.log(lists.car);//dot notaton
console.log(lists["sneaker"])//arrey-like notation
console.log(lists.street)
console.log(lists['street'])

//adding a new property to an object 
lists.toothpaste = "close up";
console.log(lists)

//modifying a value in an object
lists.color = "red";
console.log(lists);

//to delete an object properly we call the delete operator
delete lists.street
console.log(lists)

//to check if a property exitsin an object we use in the operator
console.log("dd" in lists);
console.log("car" in lists);