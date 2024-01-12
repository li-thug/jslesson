//javescript has 8 data type which are
//String
//Number
//Boolean
//Undefined
//Null
//Object
//Symbol
//Bigint
//The first 6 are commonly used they are known as primitive datatypes

//strings are written in quotes - used for text outputs
let color = "yellow";
let thisYear = "2023";
// we use typeof to check the javescript datatype
console.log(typeof thisYear);
thisYear =2023;
console.log(typeof thisYear);

//numbers are stored in decimal values but can be written with or without decimals
let length = 45;
let shoeSize=45.6;

//boolean -can only have two values: true or false
let ab = true;
let cd = false;

//undefined - a variable declared without value
let phone;
console.log(phone);
let book = "";// this is undefined data type

//null - can hold only one value - null
let amount = null;
console.log(typeof amount);

//object can be broken down into object, arrays and date 
//objects are written with curly braket {}
const person = {
    firstName: "charles",
    lastName: "Techstudio",
    state: "lagos",
    price: 2000,
}
console.log(person);
//arreys are written with square brackets
const phoneBrands = ["apple", "Ssmsung", "tecno", "infinix"]
console.log(phoneBrands);

const date = new Date()
console.log(date);

let aa = 50 + "Emma";
console.log (aa);
let bb = "Emma" + 20 + 4;
console.log(bb);//this result is because string came before number
let cc = 50 + "Emma" + 4;
console.log(cc);
let dd = 50 + 4 + "Emma";
console.log(dd);