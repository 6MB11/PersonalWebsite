function on() {
  document.getElementsByClassName("background-overlay")[0].style.display =
    "inline";
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  document.getElementsByClassName("background-overlay")[0].style.display =
    "none";
}
