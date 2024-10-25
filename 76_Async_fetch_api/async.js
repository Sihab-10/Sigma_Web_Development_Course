async function getData() {
  // Simulate getting data from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
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
