/*
 * Array
 * Collection of multiple data types
 * Arrays are variables wchich can hold more than one value
 * Array is mutable but string is immutable
 */
let arr = [1, 2, 4, 5, 7];
// index   0  1  2  3  4
arr[0] = 566;
console.log(arr, typeof arr);
console.log("The length of this array is ", arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

/*
*============== Array Methods ==============

* There are some important array methods in js . some of them are as follows:
1. toString() --> Convets an array to a string of comma seperated values.
2. join() --> joins all the array elements using a sperateor
3. pop() --> removes last element from the array
*/

console.log(arr.toString());
console.log(arr.join(" and "));
let a = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(a.pop());
console.log("using pop() method", a);
console.log(a.push("Sihab"));
console.log("using push() method", a);
console.log(a.shift());
console.log("using shift() method", a);
console.log(a.unshift("Sifat"));
console.log("using unshift() method", a);
console.log(delete a[6]);
console.log("using delete method", a);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
a4 = a1.concat(a2, a3);
console.log("using concat() method", a4);

let b = [7, 9, 8, 10, 13, 11, 12];
c = b.sort();
console.log("using sort() method", c);

/*
splice () --> Splice can be used to add new items to an array

*/
// splice(arrya এর যেখান থেকে শুরু করবো তার আগের number(position to add), যতটা number তারপর থেকে ততটা পর্যন্ত যাবে (No of elements to remove), elements to be added)
let numbers = [1, 2, 3, 4, 5, 6];
numbers = numbers.splice(3, 2);
console.log("using splice() method", numbers);
// slice () -->  slices out a piece from an array It creates a new array
// slice(index no theke suru hobe, jei index thakbe tar ager index porjonto nibe)

let num = [1, 2, 3, 4, 5, 6];
num = num.slice(2);
console.log("using slice() method", num);
num = num.slice(1, 3);
console.log("using slice() method", num);
