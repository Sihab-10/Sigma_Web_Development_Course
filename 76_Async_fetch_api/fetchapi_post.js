async function getData() {
  // Simulate posting/submiting data from a server

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
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
