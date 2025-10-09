let name = 'Damon'

console.log(name) 
// Output : Damon

let age = 20

console.log(name, age)
//Output : Damon 20


const account = 1234
console.log(account)
//Output: 1234

// account = 23
//Output: TypeError: Assignment to constant variable.

//old way declare variable 

// var a = 10;
// console.log(a);

// a = 20; // We can change the value 


// var a = 10;
// var a = 20;
// console.log(a);
//same variable can be redeclare

// let age = 20;
// let age = 30;
// SyntaxError: Identifier 'age' has already been declared


// if(true){
//     var a = 20;
// }

// console.log(a) //Output: 20 (Access outside the scope)

function fun(){
    var c = 20
}

// console.log(c) // ReferenceError: c is not defined

// Var keyword respect only global and functional scope 


// if(true){
//     let scope = 20;
// }

// console.log(scope) // ReferenceError: scope is not defined

//=================================== Data Types ==================================

// primitive data types
// number, string, boolean, undefined, null, bigint, symbol

// ================== Number ======================
let a = 10;
let b = 2.36;
console.log(a,b); // 10  2.36

console.log(typeof a) //number
console.log(typeof b) //number

//Javascript understand which type of variable is decalre we don't need to define it like cpp, java

//===================== String ===========================
let c = "String is primitive"
let d = 'Elena' 
console.log(c, d); // String is primitive  Elena
// Can write the string in single quotation

console.log(typeof c) //string

//====================== Boolean ========================
let login = true;
console.log(login) //true

let not_login = false 
console.log(not_login) //false

console.log(typeof login) //boolean

//======================= Undefined =====================
let user;
console.log(user) //undefined

// undefined: declare but not define

console.log(typeof user) //undefned

// const user2;
//SyntaxError: Missing initializer in const declaration
// const should be initialize while declaring

//====================== BigInt ========================
// Number can only store 8 bytes (2^53-1 (highest)) (-2^53-1 (lowest)) 
// - Floating number also store in number 
let num = 23217635168901245797390n;
console.log(num)

console.log(typeof num) //bigint

//======================= Null =======================
let weather = null;
console.log(weather) //null
// intentionally set to have no value

console.log(typeof weather) //object
// famous bug in js

//======================= Symbol =======================
const id1 = Symbol("id")
console.log(id1) //Symbol(id)
// create a unique for each variable 

const id2 = Symbol("id")
console.log(id1 == id2) // false

console.log(typeof id1) //symbol

// non primitive data type
// array object function


//===================== Array =================
// store different kind of datatypes in the same variable
let arr = [10, 20, 'apple', true];
console.log(arr) //[ 10, 20, 'apple', true ]

console.log(typeof arr) //object (this is not a bug)

//===================== Object =====================
// Elena 12312 18 gen (can't understand what is this so we use object to store data in key value pair)
// create a meaning for data

let users = {
    name: "Elena",
    account: 12312,
    age: 18,
    category:'gen'
}

console.log(typeof users) //object

//=================================== Functions =========================

function add(){
    console.log("hello from function");
}

add() //hello from function


// store function in variable

let s = function sub(){
    console.log('Hii from sub');  
}

console.log(s) //[Function: sub]
s() // Hii from sub

console.log(typeof s) // output: function
// its type is also object not a function


// Primitive data types are immutuable
let ab = 10;
ab = 20;

// memory alocation will be different


// Non primitive data types are mutuable
let arr1 = [10, 20, 30, 40]
arr1.push(90)

console.log(arr1)
