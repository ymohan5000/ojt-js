// 1.primitive data types
// primitive type are immutable and stored by value
// string
let str = "Hello, World!";
console.log( typeof str); // "string"

// number
let num = 42;
console.log(typeof num); // "number"

// boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"

// null
let emptyValue = null;
console.log(typeof emptyValue); // "object"

// undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// symbol
const uniqueID = Symbol("id");
console.log(typeof uniqueID); // "symbol"

// bigint
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // "bigint"    




// 2. reference data types
// strored by reference not by value.They are mutable
// object   
let person = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log (typeof person); // "object"
// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // "object"

// function
function greet() {
    console.log("Hello!");
}
console.log(greet); // "function"    