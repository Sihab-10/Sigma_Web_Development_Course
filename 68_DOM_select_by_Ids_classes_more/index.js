console.log("Harry");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "blue";
// boxes[2].style.color = "wheat";

document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";
// console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

console.log((e = document.getElementsByTagName("div")));
console.log("index 4 of div id is redbox", e[4].matches("#redbox"));
console.log("index 3 of div id is redbox", e[3].matches("#redbox"));

/*
element.matches(css) --> to check if element matches the given css selector or not
element.closest(css) --> to look for the nearest ancestor that matches the given css selector. The element itself is also checked
element.contains(elements) --> Return true if elementB is inside elementA (a descendant of elementA) or when elementA === elementB
*/

console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));

console.log(
  "e[2] is in the .container class or not check",
  document.querySelector(".container").contains(e[2])
);

console.log(
  "is body in the container check?",
  document.querySelector(".container").contains(document.querySelector("body"))
);
console.log(
  "is .container in the body check?",
  document.querySelector("body").contains(document.querySelector(".container"))
);
