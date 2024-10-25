console.log("Harry is hacker");
console.log("Rohan is hecker");

/*
Call backs, promises & async/ await

Asynchronous actions are the actions that we initiate now and they finish later. eg. setTimeout 

Synchronous actions are the actions that initiate and finish one-by-one

*/

// ================ Callback function ==========
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer functoin to complete an action. 

*/
setTimeout(() => {
  console.log("I am inside settimeout");
}, 2000);
setTimeout(() => {
  console.log("I am inside settimeout 2");
}, 2000);

console.log("The End");

// ================Callback example====================================
const sn = () => {
  console.log("Something");
};

const fn = () => {
  console.log("Nothing");
};
const callback = (arg, fn, sn) => {
  console.log(arg);
  fn();
  sn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("Script");
  sc.src = src;
  sc.onload = callback("Harry", fn, sn);
  document.head.append;
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
// callback er kaj hochhe fuction ke as a variable pass korte pari onno ekta function er modhhe .
