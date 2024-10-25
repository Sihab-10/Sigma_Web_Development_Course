// promise এ
/*
settle means resolve or reject 

resolve means promise has settled successfully

reject means promise has not settled 

*/
// here we use async function যেটা আমাদেরকে background এ data কে আনবে।
async function getData() {
  // Simulate getting data from a server

  //   first get the data from server using fetch which is a promise
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   after that parse that data into json which is also a promise
  //   let data = await x.text();
  let data = await x.json();
  //   console.log(data);
  return data;
}
async function main() {
  console.log("Loading Module");

  console.log("Do something else");

  console.log("load data...");
  let data = await getData();
  console.log(data);

  console.log("process data");

  console.log("task 2");
}

main();
