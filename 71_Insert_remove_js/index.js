console.log(document.querySelector(".box"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container"));
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
console.log((document.querySelector(".box").innerHTML = "Hey I am harry"));
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(
  document.querySelector(".box").setAttribute("style", "display: inline")
);
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").dataset);

// document.designMode = "on";
// create an element div and then insert some text in it. and also set an attribute class and name it with created. then set this in the container
// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by Harry</b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML(
  "afterend",
  "<b> I am under the water . Please help me here too much raining . iuuuuuuuuuuooooooo.........</b>"
);

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
document.querySelector(".container").classList.add("harry");
document.querySelector(".container").classList.remove("harry");
console.log(document.querySelector(".container").classList.toggle("red"));
console.log(document.querySelector(".container").classList.toggle("red"));
