function OnTab() {
    this.on_tab = None;
}

OnTab.prototype.set = function(e) {
    return e.currentTarget.id;
};

var on_tab = new OnTab();

function on(e) {
  var element = overlayIterator(e);
  element.style.display = "block";
  document.body.style.overflow = "hidden";
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  var element = overlayIterator(e);
  element.style.display = "none";
  document.body.style.overflow = "auto";
}

function overlayIterator(e) {
  var overlays = document.getElementsByClassName("background-overlay");
  for (var i = 0; i < overlays.length; i++) {
    if (overlays[i].id === e.currentTarget.id) {
      return overlays[i];
    }
  }
}

function tab(e) {
  on_tab.style.display = "none";
  OnTab.set(e);
  var element = document.getElementByID(e.currentTarget.id);
  element.style.display = block;

