const mediaQuery = window.matchMedia("(min-width: 640px)");

function setDetailsOpen(e: MediaQueryList | MediaQueryListEvent) {
  const details = document.getElementById("yearDetails");
  if (details instanceof HTMLDetailsElement) {
    details.open = e.matches;
  }
}

setDetailsOpen(mediaQuery);
mediaQuery.addEventListener("change", setDetailsOpen);
