class Tab {
  constructor() {
    this.enabled_tab = null;
  }
  set(e) {
    return e.currentTarget.id;
  }
}

var tab = new Tab();

document.addEventListener("DOMContentLoaded", function() {
  onPageLoad();
});

function onPageLoad() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const project = urlParams.get("project");
  const element = iterator(project, "background-overlay");
  onProject(element);
}

function on(e) {
  const element = iterator(e.currentTarget.id, "background-overlay");
  onProject(element);
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  const element = iterator(e.currentTarget.id, "background-overlay");
  element.style.display = "none";
  document.body.style.overflow = "auto";
}

function iterator(idName, className) {
  const elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === idName) {
      return elements[i];
    }
  }
  return null;
}

function onProject(element) {
  if (element === null) return;
  element.style.display = "block";
  document.body.style.overflow = "hidden";
}

function onTab(e) {
  if (tab.enabled_tab != null) {
    tab.enabled_tab.style.display = "none";
  }
  tab.set(e);
  const element = iterator(e.currentTarget.id, "tab-text");
  element.style.display = "block";
}