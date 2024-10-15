console.log("I am a tutorial on loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// console.log(a+3)

/*
We use loops to perform repeated actions

Types of loops in JavaScript

? for loop --> loop a block  of code no of times
? for in loop --> loops through the Keys of an Object
? for of loop --> looops through the values of an object
? while loop --> loops a block based on a specific condition
? do-while loop --> Whiel loop variant which runs atleast once.

*/ 
//*============== for loop ====================
// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }
// console.log("Finished")


// *============ for in loop =================
let obj = {
    name : "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}


for(const key in obj){
    const element = obj[key];
    console.log(key,element)
}

// for of loop
/* 
    The syntax of for of loop looks like this
    variable = for every iteration
    iterable = iterable data structure like arrays strings etc
    for(variable of iterable){
        code ...
    }
*/ 

for (const element of "Harry") {
    console.log(element)
}

//* ===============  While loop in js ==========
let i = 0;
while (i<6) {
    console.log(i);
    i++;
}
console.log("iteration complete")


// * ================= do while loop in js =======
let p = 11
do {
    console.log(p)
    p++;
} while (p<11);

// but we dont use do while loop so much