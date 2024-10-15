/*
Create a faulty calculatro using javascript 

This faulty calculator does following:

1. It takes two numbers as input from the user
2. It performs wrong oeprations as follows

+ -------> -
* -------> +
- -------> /
/ -------> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);
function sum(a, b) {
  return a + b;
}
result = sum(5, 3);
if (random > 0.1) {
  console.log(result);
} else {
  function sub(a, b) {
    return a - b;
  }
  c = sub(5, 3);
  console.log(c);
}
