// numbers can be written with or without decimals

let xp = 3.13;
let yx = 3;

console.log(xp + yx);

let xo = "10";
let yo = "20";
console.log(xo = yo);
//this will out put as a string if added or concatenated
//but

console.log(yo / xo);
//Nan - not a number - performing arithemetic operation on non-numeritic will
// give you a Nan
console.log(yo / "book");

//converting a number to a string 
let po = 200;
let kk = po.toString();
console.log(typeof kk)

// to fixed method - returns a number written with decimals 
let uu = 7.456
console.log(uu.toFixed(0))
console.log(uu.toFixed(2))

//number - returns a number converted from its argument
console.log(Number("12.55"));
console.log(Number("Emma"));

// the parse float -  parses a string and returns a whole number. space are allowed amd only the first number returned
console.log(parseFloat("10"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("20 years"));
