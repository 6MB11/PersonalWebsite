function on(e) {
  var element = overlayIterator(e);
  element.style.display = "block";
  document.getElement.overflow = "none";
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  var element = overlayIterator(e);
  element.style.display = "none";
  document.html.overflow = "auto";
}

function overlayIterator(e) {
  var overlays = document.getElementsByClassName("background-overlay");
  for (var i = 0; i < overlays.length; i++) {
    if (overlays[i].id === e.currentTarget.id) {
      return overlays[i];
    }
  }
}
