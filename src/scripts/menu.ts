const hamburger = document.getElementById("hamburger") as HTMLElement | null;
const hamburgerStatus = document.getElementById("hamburger-status");
const body = document.body;

function setMenuState(isExpanded: boolean) {
  if (!hamburger) return;
  body.classList.toggle("nav-expanded", isExpanded);
  hamburger.setAttribute("aria-label", isExpanded ? "メニューを閉じる" : "メニューを開く");
  hamburger.ariaExpanded = String(isExpanded);
  if (hamburgerStatus) {
    hamburgerStatus.textContent = isExpanded ? "CLOSE" : "MENU";
  }
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const nextExpanded = !body.classList.contains("nav-expanded");
    setMenuState(nextExpanded);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-expanded")) {
      setMenuState(false);
      hamburger.focus();
    }
  });
}
