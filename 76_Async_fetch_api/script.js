function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

console.log("Loading Module");

console.log("Do something else");

console.log("load data...");
let data = getData();
// callback used below . its an approach
data.then((v) => {
  console.log(data);

  console.log("process data");

  console.log("task 2");
});
