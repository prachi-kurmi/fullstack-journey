// ==================== Number in JS ==============================

let a = 10;
let b = 345.6821;

// toFixed(n): Rounds the number to 'n' decimal places and returns a string
let c = b.toFixed(1);
console.log(typeof c); // Output: string

// toPrecision(n): Formats a number to have a total of 'n' significant digits
console.log(b.toPrecision(4)); // Output: 345.7

// toString(): Converts a number to a string
console.log(b.toString()); // Output: "345.6821"


let num1 = new Number(20);
let num2 = new Number(20);

// Objects are compared by reference, not by value
console.log(num1 == num2); // Output: false

// Primitive comparison (copy by value)
let x = 10;
let y = x;
console.log(x == y); // Output: true


console.log(Boolean(null)); // Output: false


let obj1 = { name: "Rohit" };
let obj2 = obj1; // obj2 refers to the same object

console.log(obj1 == obj2); // Output: true

let obj3 = { name: "Rohit" };
console.log(obj1 == obj3); // Output: false (different memory references)


// ===================== Math In JS ==================================

console.log(Math.abs(-4));       // 4 - absolute value
console.log(Math.PI);            // 3.141592653589793
console.log(Math.LN10);          // 2.302585092994046
console.log(Math.SQRT2);         // 1.4142135623730951
console.log(Math.ceil(6.3));     // 7  - rounds up
console.log(Math.floor(6.3));    // 6  - rounds down
console.log(Math.log10(20));     // 1.30102999566 - log base 10
console.log(Math.max(20,11,3421,12)); // 3421


console.log(Math.random());      
// Random number between [0,1): It will generate value between 0 and 1, where 0 is included but 1 is not included


// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Simulate dice roll (1 to 6)
console.log(Math.floor(Math.random() * 6) + 1);

//  Math.floor(Math.random()*totalNumberOfOutcome)+shift

// General formula: Math.floor(Math.random() * (max - min + 1)) + min

// Random number between 15 and 25 (There are 11 different number and shift is 15)
console.log(Math.floor(Math.random()*11)+15);
console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);

// OTP generator (4-digit, 1000–9999)
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
