console.log("This is promises");
/*
promises is method where code executed like .then and .catch method
using .then and .catch method after settlement either it resove or rejected
*/

// kono ekta network request ekta condition er upor succeess hote pare othoba reject hote pare

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("Promise 1:No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("Promise 2 : No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

/*
Promise API 

There are 6 static mehtodes of Promise Class:

1. Promise.all(promises) ->  Waits for all promises to resolve and returns the array of their results If any one fails, it becomes the error & all other results are ignored.

2. Promise.allSettled(promises) -> Waits for all the promises to settle and returns their results as an array of objects with status and value.(কোন মেটার করে না resolve হচ্ছে নাকি reject হচ্ছে আমার program run হবে আর reject হলে তার কারন সহ বলে দিবে status and value দিয়ে দিবে)

3. Promise.race(promises)-> Waits for the first promise to settle and its result/error becomes the outcome.(এখানে promise এর মধ্যে একটা race লাগানো ত এখানে যে প্রথমে কাজ করবে সেই প্রথমে execute হবে আর পরের টা পরে । এখানে আমরা api এর অথবা network এর performance দেখে থাকি)

4. Promise.any (promises)-> Waits for the first promise to fulfill (& not rejected), and its reult becomes the outcome. Throws AggregateError if all the promises are rejected. (শুধুমাত্র resolve promises return করবে rejected promises যদি সবগুলো হয় তাহলে AggreagateError through করবে। )

5. Promise.resolve(value)-> Makes a resolved promise with the given value

6. Promise.reject(error) -> Makes a rejected promise with the given error

*/
