let a = [1, 93, 5, 6, 88];
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// for-in loop in js
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (const key in obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

// for-of loop in js
for (const element of a) {
  console.log(element);
}
