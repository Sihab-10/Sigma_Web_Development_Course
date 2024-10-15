function nice(name) {
  console.log("Hey " + name + " you are nice");
  console.log("Hey " + name + " you are good");
  console.log("Hey " + name + " your tshirt is nice");
  console.log("Hey " + name + " your course is good too!");
}

nice("Harry");

function sum(a, b, c = 3) {
  //   console.log(a + b);
  console.log(a, b, c);
  return a + b + c;
}
result1 = sum(3, 5);
result2 = sum(31, 5);
result3 = sum(10, 5, 1);
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);
// reusable of the code

function substraction(c, d) {
  return c - d;
}
result = substraction(19, 9);
console.log("The substraction of these number is: ", result);

//*============ arrow function ================

const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(34);
func1(66);
func1(84);
// using arrow function to multiply two numbers
const multiplication = (r, s) => {
  console.log(r, s);
  return r * s;
};
result = multiplication(3, 4);
console.log("The multiplication of these two number is: ", result);
