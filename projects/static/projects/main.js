class Tab {
  constructor() {
    this.enabled_tab = null;
  }
  set(e) {
    this.enabled_tab = e.target.id;
  }
}

var tab = new Tab();

/* This is done in JS as if user has JS disabled, button wouldn't work so wouldn't make sense to change cursor
https://css-tricks.com/block-links-the-search-for-a-perfect-solution */
const projectButton = document.querySelectorAll('.project-button');
projectButton.forEach(element => {
  element.style.cursor = "pointer",
  element.addEventListener("click", handleClick)
});

document.addEventListener("DOMContentLoaded", function() {
  onPageLoad();
});

function onPageLoad() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const project = urlParams.get("project");
  const element = iterator("background-overlay:" + getSecondPart(project));
  onProject(element);
}

function handleClick(e) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    on(e);
  }
}

function on(e) {
  if (getFirstSubPart(e.target.id) == "project") {
    const element = iterator("background-overlay:" + getSecondPart(e.target.id));
    onProject(element);
  }
  else {
    onTab(e);
  }
}

function off(e) {
  if (e.target !== e.currentTarget) return;
  const element = iterator("background-overlay:" + getSecondPart(e.currentTarget.id));
  element.style.display = "none";
  document.body.style.overflow = "auto";
}

function iterator(idName) {
  const element = document.getElementById(idName);
  return element;
}

function onProject(element) {
  if (element === null) return;
  element.style.display = "block";
  document.body.style.overflow = "hidden";
}

function onTab(e) {

  if (tab.enabled_tab != null) {
    const element = iterator("tab-text:" + getSecondPart(tab.enabled_tab));
    element.style.display = "none";
  }

  tab.set(e);
  const element = iterator("tab-text:" + getSecondPart(e.target.id));
  element.style.display = "block";
}

function getFirstSubPart(str) {
   return str.split('-')[0];
}

function getSecondPart(str) {
  if (str === null) return;
  return str.split(':')[1];
}
