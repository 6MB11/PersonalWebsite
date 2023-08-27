function on() {
  document.getElementsByClassName("background-overlay")[0].style.display =
    "inline";
}

function off() {
  if ( event.target.id === ('background-overlay' or 'exit-button'))
  document.getElementsByClassName("background-overlay")[0].style.display =
    "none";
}
