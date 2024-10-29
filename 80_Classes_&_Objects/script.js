// let obj = {
//   a: 1,
//   b: "Harry",
// };
// console.log(obj);

// let animal = {
//   eats: true,
//   sleep: true,
//   hunt: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("Object is created");
  }
  eats() {
    console.log("Kha raha hoon");
  }
  jumps() {
    console.log("jump kar raha hoon");
  }
}
class Lion extends Animal {
  constructor(name, age) {
    super(name, age);
    console.log("Object is created and he is a lion...");
  }
  eats() {
    super.eats();
    console.log("Kha raha hoon roar");
  }
}
let a = new Animal("Sihab", 25);
console.log(a);

let l = new Lion("Shera", 30);
console.log(l);
