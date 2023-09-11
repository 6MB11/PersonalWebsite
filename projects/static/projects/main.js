class Tab {
  constructor() {
    this.enabled_tab = null;
  }
  set(e) {
    return e.currentTarget.id;
  }
}

var tab = new Tab();

function on(e) {
  var element = iterator(e, "background-overlay");
  element.style.display = "block";
  document.body.style.overflow = "hidden";
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  var element = iterator(e, "background-overlay");
  element.style.display = "none";
  document.body.style.overflow = "auto";
}

function iterator(e, className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === e.currentTarget.id) {
      return elements[i];
    }
  }
}

function onTab(e) {
  if (tab.enabled_tab != null) {
    tab.enabled_tab.style.display = "none";
  }
  tab.set(e);
  var element = iterator(e, "tab-text");
  console.log(element);
  console.log(e.currentTarget.id);
  element.style.display = "block";
}
