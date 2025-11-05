// ================ Arithmetic Operators =================================
// Used for standard mathematical calculations.
let num1 = 6;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);

// ======================= Assignment Operators ==================================
let val1 = 10;
let val2 = 5;

// Shorthand Notation
val1 += val2; // val1 = val1 + val2
console.log("After += :", val1);

val1 -= val2; // val1 = val1 - val2
console.log("After -= :", val1);

val1 *= val2; // val1 = val1 * val2
console.log("After *= :", val1);

val1 %= val2; // val1 = val1 % val2
console.log("After %= :", val1);

// ============================= Comparison Operators =======================================
let comp1 = 15;
let comp2 = 20;

console.log("Greater than:", comp1 > comp2);
console.log("Less than:", comp1 < comp2);
console.log("Equal (==):", comp1 == comp2);
console.log("Strict Equal (===):", comp1 === comp2);

// ============================== Type Conversion =========================================
let strNum = "120";
let convertedNum = Number(strNum);
console.log("String to Number:", convertedNum);

let invalidNum = "12ab";
console.log("Invalid String to Number:", Number(invalidNum)); // NaN

let boolTrue = true;
let boolFalse = false;
console.log("Boolean to Number (true):", Number(boolTrue));
console.log("Boolean to Number (false):", Number(boolFalse));

let nullValue = null;
let undefinedValue;
console.log("Null to Number:", Number(nullValue));        // 0
console.log("Undefined to Number:", Number(undefinedValue)); // NaN

let numValue = 50;
console.log("Number to String:", String(numValue));
console.log("Type after conversion:", typeof String(numValue));

// ======================== Boolean Conversion =====================================
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean('Hello'):", Boolean("Hello"));

// ========================== Null and Undefined Comparison =================================
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("null >= 0:", null >= 0);
console.log("null <= 0:", null <= 0);
console.log("undefined >= 0:", undefined >= 0);

// ============= String Comparison ======================
console.log("'Rohit' > 'Rahit':", "Rohit" > "Rahit");

// ================= Logical Operators =======================
let valA = 0;
let valB = 20;

console.log("Logical AND (&&):", valA && valB); // Returns first falsy value
console.log("Logical OR (||):", valA || valB);  // Returns first truthy value

// ================= Bitwise Operators ==========================
let bit1 = 2;
let bit2 = 5;

console.log("Bitwise AND (&):", bit1 & bit2); 
