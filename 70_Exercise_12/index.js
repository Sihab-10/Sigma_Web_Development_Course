const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "#" + randomColor;
  });
  color.innerHTML =
    "The backgroundcolor code of the boxes is : " + "#" + randomColor;
};
const setcol = () => {
  const randomTextColor = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelectorAll(".box2").forEach((e) => {
    e.style.color = "#" + randomTextColor;
  });
  color2.innerHTML =
    "The text color code of the boxes is : " + "#" + randomTextColor;
};
genNew.addEventListener("click", setcol);
genNew.addEventListener("click", setBg);
