const hamburger = document.getElementById("hamburger") as HTMLElement | null;
const hamburgerStatus = document.getElementById("hamburger-status");
const menu = document.getElementById("menu") as HTMLElement | null;
const body = document.body;
const mobileQuery = window.matchMedia("(width < 960px)");

function syncMenuInert(isExpanded: boolean) {
  if (!menu) return;
  menu.inert = mobileQuery.matches && !isExpanded;
}

function setMenuState(isExpanded: boolean) {
  if (!hamburger) return;
  body.classList.toggle("nav-expanded", isExpanded);
  hamburger.setAttribute("aria-label", isExpanded ? "メニューを閉じる" : "メニューを開く");
  hamburger.ariaExpanded = String(isExpanded);
  if (hamburgerStatus) {
    hamburgerStatus.textContent = isExpanded ? "CLOSE" : "MENU";
  }
  syncMenuInert(isExpanded);
}

if (hamburger) {
  syncMenuInert(body.classList.contains("nav-expanded"));

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

  document.addEventListener("click", (event) => {
    if (
      body.classList.contains("nav-expanded") &&
      event.target instanceof Node &&
      !hamburger.contains(event.target) &&
      !menu?.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches && body.classList.contains("nav-expanded")) {
      setMenuState(false);
    } else {
      syncMenuInert(body.classList.contains("nav-expanded"));
    }
  });
}
