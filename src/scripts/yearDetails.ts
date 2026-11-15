const mediaQuery = window.matchMedia("(640px <= width)");
const details = document.getElementById("yearDetails");

if (details instanceof HTMLDetailsElement) {
  const setDetailsOpen = (e: MediaQueryList | MediaQueryListEvent) => {
    details.open = e.matches;
  };

  setDetailsOpen(mediaQuery);
  mediaQuery.addEventListener("change", setDetailsOpen);
}
