function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
        <div class="img">
          <img src="${thumbnail}" alt="" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewStr} views . ${monthsOld} Months ago</p>
        </div>
      </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma web dev video $2",
  "codeWithHarry",
  560000,
  7,
  "23:20",
  "thumbnail.jpg"
);
createCard(
  "Introduction to Backend | Sigma web dev video $3",
  "codeWithHarry",
  560000,
  7,
  "23:20",
  "thumbnail.jpg"
);
createCard(
  "Introduction to Backend | Sigma web dev video $4",
  "codeWithHarry",
  7200000,
  8,
  "23:20",
  "thumbnail.jpg"
);
