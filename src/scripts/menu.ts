const hamburger = document.getElementById("hamburger") as HTMLElement | null;
const body = document.querySelector("body") as HTMLBodyElement | null;

if (hamburger && body) {
  hamburger.addEventListener("click", () => {
    body.classList.toggle("nav-expanded");

    if (body.classList.contains("nav-expanded")) {
      hamburger.title = "メニューを閉じる";
      hamburger.ariaExpanded = "true";
    } else {
      hamburger.title = "メニューを開く";
      hamburger.ariaExpanded = "false";
    }
  });
}
