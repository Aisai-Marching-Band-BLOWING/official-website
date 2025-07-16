function setDetailsOpen() {
  const details = document.getElementById("yearDetails");
  if (details instanceof HTMLDetailsElement) {
    details.open = window.innerWidth >= 640;
  }
}

setDetailsOpen();
window.addEventListener("resize", setDetailsOpen);
