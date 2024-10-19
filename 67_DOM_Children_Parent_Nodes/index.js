console.log("Hello World");
console.log(document.body.childNodes);
let cont = document.body.childNodes[1];
console.log(cont);
console.log(cont.firstChild);
console.log(cont.lastChild);
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
cont.lastElementChild.style.color = "yellow";
cont.lastElementChild.style.backgroundColor = "green";
console.log(cont.lastElementChild.parentElement);
console.log("document.body.firstElementChild", document.body.firstElementChild);
console.log("childNodes", document.body.firstElementChild.childNodes);
console.log(
  "document.body.firstElementChild.children[0]",
  document.body.firstElementChild.children[0]
);
console.log(
  "document.body.firstElementChild.children[1]",
  document.body.firstElementChild.children[1]
);
console.log(
  "document.body.firstElementChild.children[2]",
  document.body.firstElementChild.children[2]
);
console.log(
  "document.body.firstElementChild.children[3].nextElementSibling",
  document.body.firstElementChild.children[3].nextElementSibling
);
console.log(
  "document.body.firstElementChild.children[1].previousElementSibling",
  document.body.firstElementChild.children[1].previousElementSibling
);
console.log(
  "document.body.firstElementChild.children[1].previousSibling",
  document.body.firstElementChild.children[1].previousSibling
);
console.log(
  "document.body.firstElementChild.children[1].parentElement",
  document.body.firstElementChild.children[1].parentElement
);
console.log("document.body.children", document.body.children);
console.log("document.body.children[1]", document.body.children[1]);
console.log("document.body.children[1].rows", document.body.children[1].rows);
console.log(
  "document.body.children[1].columns",
  document.body.children[1].columns
);
