//variable hoisting
console.log(a); // undefined
var a = 5;


//function hoisting

greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}
console.log(typeof(greet))
