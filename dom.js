// dom - document object model
//its allows you to manipulate html documents
//it is a tree of nodes that allow you to add, remove and parts of the hmtl document

//how to select element in the dom

//getElementById method - this allows to target element by their id's. the id sare case sensitive id should be use per element
const helloId = document.getElementById("hello");
console.log(helloId);

//getElementByName method - every  element on html can hve a name attribute
//multiple element can be share the same name
let coding = document.getElementsByName("coding");
console.log(coding);

let btn = document.getElementById("btnRate");
let output = document.getElementsByName("output");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((item) => {
    if (item.checked) {
      output.innerText = `You selected: ${item.value}`;
    }
  });
});

//getElementByTagName method
// this accepts a tag name and return a collection of html element with the mactching tag name

let elementsByTag = document.getElementsByTagName("h1");
console.log(elementsByTag);
console.log((elementsByTag[1].textContent = "i am in class"));

//getElementsByClassName method
//terget element by their className
const domClass = document.getElementsByClassName("domClass");
console.log(domClass);
console.log((elementsByTag[0].textContent = "i am"));

console.log([].map.call(domClass, (item) => item.textContent));

//css querySelectors method
//querySelector - this allows you to get the first element that mactches the css selector
//querySelectorAll - all element that matches the css selector

//universal selector *
let selectOne = document.querySelector("*");
console.log(selectOne);

//quarying by type
let firstHeader = document.querySelector("h1");
console.log(firstHeader);
let allHeader = document.querySelectorAll("h1");
console.log(allHeader);

//css classname by query
let queryClass = document.querySelector(".domClass");
console.log(queryClass);
let queryAllClass = document.querySelectorAll(".domClass");
console.log(queryAllClass);

//id query
let queryId = document.querySelector("#hello");
console.log(queryId);

//settings css styles
helloId.style.color = "red";
helloId.style.padding = "10px";
helloId.style.backgroundColor = "teal";

//iterate over elements
queryAllClass.forEach((b) => (b.style.color = "green"));

const displayImg = document.getElementById("myImg");
displayImg.src =
  "https://media.istockphoto.com/id/1354939778/photo/close-up-of-a-roaring-lion.jpg?s=612x612&w=0&k=20&c=pEPRlwNwzj2vPTXvqA9WxNV7QSSBDe9kPfWxjyqLSgc=";


//nod tree
const lastChild = document.getElementById("parent").lastElementChild;
console.log(lastChild);
const indexChild = document.getElementById("parent").children[2];
console.log(indexChild);

const secondChild = document.getElementById("second-child");
console.log(secondChild.nextElementSibling);
console.log(secondChild.previousElementSibling);


//creating elements
const createDiv = document.createElement("div");
console.log(createDiv);
//innerhtml is used to write html elements in js dom
createDiv.innerHTML = "<p>I am the child of the div</p>";

//append element used to put something in a div 
const parentDiv = document.getElementById("parent");
parentDiv.appendChild(createDiv);
console.log(parentDiv);

//how to insert element before another
const firstChild = document.getElementById("first-child");
parentDiv.insertBefore(createDiv, firstChild);
console.log(parentDiv);


//event listeners - thing happen on html element, it can be the click of a button, input in a area and other, event listeners are js function that occur when an event happens on an element.
//they takes 2 params - type of event to listen to and the function to be executed on it 

const buttonElement = document.getElementById("stylebutton")

function addBtn () {
    buttonElement.classList.toggle("btn");
}

function removeBtn () {
    buttonElement.classList.remove("btn");
}

buttonElement.addEventListener('click', addBtn)

const alertButton = document.getElementById("alertme");
alertButton.addEventListener("click", function () {
    alert("Hello dom");
});

function changeColor(color) {
    const changeMyColor = document.getElementById("abcd");
    changeMyColor.style.color = "orange"
}

