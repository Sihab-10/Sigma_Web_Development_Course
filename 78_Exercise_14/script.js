async function getData() {
  // Simulate getting data from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 2000);
  });
}

async function main() {
  console.log("Loading Module");

  console.log("load data...");
  let data = await getData();
  let a = (document.getElementById("first").innerHTML = `<p>
  Initializing Hacking <span class="loader__dot">.</span
            ><span class="loader__dot">.</span><span class="loader__dot">.</span
            ><span class="loader__dot">.</span>
          </p>`);
  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main();
