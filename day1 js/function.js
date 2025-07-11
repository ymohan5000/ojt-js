// 1.Funciton Declaration
// A function declaration defines a named function that can be called later in the code.
function greet() {
    console.log("Hello, World!");
}
greet(); // Calling the function

// 2.Function Expression
// A function expression defines a function that can be assigned to a variable.
const greet1 = function() {
    console.log("Hello, World!");
};
greet1(); // Calling the function
// 3.Arrow Function
// An arrow function is a concise way to write a function using the arrow syntax.
const greet2 = () => {
    console.log("Hello, World!");
};
greet2(); // Calling the function
// 4.IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is executed immediately after it is defined.
(function() {
    console.log("Hello,IIFE World!");
})(); // Calling the function immediately


// 5.Anonymous Function
// An anonymous function is a function without a name, often used as a callback or in event handlers.
setTimeout(function() {
    console.log("Hello, Anonymous World!");
}, 1000); // Calling the function after 1 second    
// 6.function with Parameters
// A function can accept parameters, which are values passed to the function when it is called. 
function greetWithName(name) {
    console.log(`Hello, ${name}!`);
}
greetWithName("Alice"); // Calling the function with an argument
// 7.Function with Return Value
// A function can return a value using the `return` statement.
function add(a, b) {
    return a + b;
}
const sum = add(5, 3); // Calling the function and storing the return value
console.log(`Sum: ${sum}`); // Output: Sum: 8

// 8.Function with Default Parameters
// A function can have default parameter values that are used if no argument is provided.   
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault(); // Calling the function without an argument
greetWithDefault("Bob"); // Calling the function with an argument
// 9.Function with Rest Parameters
// A function can accept a variable number of arguments using the rest parameter syntax.
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}   
const total = sumAll(1, 2, 3, 4, 5); // Calling the function with multiple arguments
console.log(`Total: ${total}`); // Output: Total: 15                
// 10.Function with Callback
// A function can accept another function as an argument, allowing for callback functionality.
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
});
// Output: Hello, Alice!
// 11.Return Function
// A function can return another function, allowing for higher-order functions.
function outerFunction() {
    return function innerFunction() {
        console.log("Hello from the inner function!");
    };
}
const inner = outerFunction();
inner(); // Calling the inner function