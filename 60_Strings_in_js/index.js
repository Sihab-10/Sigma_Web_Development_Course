// *================= String =================
/*
    String are used to store and manupulate text string can be created using the following syntax


    let name = "Harry"
    name.length -> this property prints length of the string

    String can also be created using single quotes

*/

let a = "Harry";
console.log("The value of a is ", a);
console.log("The length of a is ", a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

let real_name = "Harry";
let friend = "Rohan";
console.log("His name is " + real_name + " and his friend name is " + friend);
// using template literals
// we can insert variable directly in template literal. this is called string interpolation.
console.log(`His name is ${real_name} and his friend name is ${friend}`);

// Escape Sequence Characters

// If you try to print the following string, javaScript will misunderstand it. So we can use \" inside a string with double quotes.

// Other escape sequence characters are as follows
/*
    \n --> Newline
    \t --> Tab
    \r --> Carriage Return
*/

// let name = 'Adom D\'Angelo';
// let name = "Adom D'Angelo";

let b = "  sIHab  ";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 5));
console.log(b.slice(1));
console.log(b.replace("sI", 98));
console.log(b.concat(a, " ", 99, " Sifat", " Rahul"));
console.log(b.trim());
// string is immutable in js. We can not change the string, we can modify it by using some function but we can not change the value of our string. Inorder to access the character at an index we use the following syntax
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);
console.log(b[4]);
console.log(b[5]);
console.log(b[6]);
console.log(b[7]);
//
