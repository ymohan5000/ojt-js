// Artithmetic Operators
// These operators perform basic mathematical operations
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
console.log(a++); // Post-increment         
console.log(a--); // Post-decrement
console.log(++a); // Pre-increment
console.log(--a); // Pre-decrement
// Assignment Operators
// These operators assign values to variables   
let x = 10;
x += 5; // x = x + 5    
console.log(x); // 15
x -= 3; // x = x - 3
console.log(x); // 12
x *= 2; // x = x * 2
console.log(x); // 24
x /= 4; // x = x / 4
console.log(x); // 6
x %= 3; // x = x % 3
console.log(x); // 0
x **= 3; // x = x ** 3
console.log(x); // 0
x &= 1; // Bitwise AND assignment
console.log(x); // 0    
x |= 2; // Bitwise OR assignment
console.log(x); // 2
x ^= 3; // Bitwise XOR assignment
console.log(x); // 1
x <<= 1; // Left shift assignment
console.log(x); // 2
x >>= 1; // Right shift assignment
console.log(x); // 1
x >>>= 1; // Unsigned right shift assignment
console.log(x); // 0
// Comparison Operators
// These operators compare two values and return a boolean result   
let y = 10;
let z = 20;
console.log(y == z); // Equal to
console.log(y != z); // Not equal to
console.log(y === z); // Strict equal to
console.log(y !== z); // Strict not equal to
console.log(y > z); // Greater than
console.log(y < z); // Less than

console.log(y >= z); // Greater than or equal to
console.log(y <= z); // Less than or equal to
// Logical Operators
// These operators perform logical operations and return a boolean result
console.log(y < z && y == 10); // Logical AND
console.log(y < z || y == 5); // Logical OR
console.log(!(y < z)); // Logical NOT   
// Bitwise Operators
// These operators perform bitwise operations on integers
console.log(y & z); // Bitwise AND
console.log(y | z); // Bitwise OR
console.log(y ^ z); // Bitwise XOR
console.log(~y); // Bitwise NOT
console.log(y << 1); // Left shift
console.log(y >> 1); // Right shift
console.log(y >>> 1); // Unsigned right shift
// Ternary Operator
// This operator is a shorthand for an if-else statement
console.log(y < z ? "y is less than z" : "y is greater than or equal to z");    
// Typeof Operator
// This operator returns the type of a variable or expression
console.log(typeof y); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"  

console.log(typeof null); // "object" (this is a known JavaScript quirk)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("id")); // "symbol"   
console.log(typeof BigInt(12345678901234567890)); // "bigint"
// Instanceof Operator
// This operator checks if an object is an instance of a specific class or constructor function
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log(function() {} instanceof Function); // true 
console.log("Hello" instanceof String); // false (string literals are not instances of String)