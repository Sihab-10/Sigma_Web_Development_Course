let num = parseInt(prompt("Enter a Number: "));
let array = [];
for (let i = 1; i <= num; i++) {
  array.push(i);
}
console.log(array);

const red = (a, b) => {
  return a * b;
};
console.log("The factorial of these numbers is: ", array.reduce(red));
