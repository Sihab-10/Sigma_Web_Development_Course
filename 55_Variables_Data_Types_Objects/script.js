console.log("Hey this is tutorial 55")
var a = 5;
var b = 6;
var c = "Harry"
console.log(a+b+8)
console.log(typeof a, typeof b, typeof c)

// ! Rules for naming variable
/*
* Letters, digits, Underscores & $ Sign allowed.
* Must begin with A $, _ or a letter
* JavaScript reserved words cannot be used as a variable name
* Harry & haRRy are different variable (case sensitive)
*/ 

// ! Var vs let in JavaScript

/*
* var is globally scoped while let & const are block scoped
* var can be updated & re-declared within its scope
* let can be updated but not re-declared
* const can neither be updated nor be re-declared
* var variables are initialized with undefined wheras let and const variables are not initialized.
* const must be initialized during declaration unlike let and var.
*/ 

let num1 = 100;
{
    let num1 = 56;
    console.log(num1);
}
console.log(num1);

//* always use let to declare a variable.


//* Primitive Data Type & Objects
/*
Primitive Data types are a set of basic data types in javascript 
Objects is a non primitive datatypes in javascript
*/ 
/*
* These are the 7 primitive datatypes in javaScript

?NNBBSSU 
* Null 
* Number
* BigInt
* Boolean
* String
* Symbol
* Undefined

*/ 

let x = "Harry bhai"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x,y, z, p, q, r)
console.log(typeof x,typeof y, typeof z, typeof p, typeof q, typeof r)

// object in js
let o = {
    name:"Harry",
    "job code": 5600,
    "is_handsome":true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);

