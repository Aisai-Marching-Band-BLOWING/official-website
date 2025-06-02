const hamburger = document.getElementById("hamburger");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  body.classList.toggle("nav-expanded");

  if (body.classList.contains("nav-expanded")) {
    hamburger.title = "メニューを閉じる";
    hamburger.ariaExpanded = true;
  } else {
    hamburger.title = "メニューを開く";
    hamburger.ariaExpanded = false;
  }
});
