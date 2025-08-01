// Page load functions

document.addEventListener("DOMContentLoaded", function () {
  onPageLoad();
});

function onPageLoad() {
  const queryString = window.location.pathname;
  const parts = queryString.split('/');
  const project = parts[1];
  const dialog = elementFromId("background-overlay:" + project);
  if (dialog == null) return;
  dialog.showModal();
}

/* Project functions
Cancel button closes the dialog box */
const exitButton = document.querySelectorAll('.exit-button');
exitButton.forEach(element => {
  element.addEventListener("click", () => {
    const dialog = elementFromId("background-overlay:" + getSecondPart(element.id))
    dialog.close();
  });
});

// Project button opens a modal dialog
const projectButton = document.querySelectorAll('.project-button');
projectButton.forEach(element => {
  element.style.cursor = "pointer" // This is done in JS as if user has JS disabled, button wouldn't work so wouldn't make sense to change cursor
  const dialog = elementFromId("background-overlay:" + getSecondPart(element.id))
  element.addEventListener("click", () => {
    dialog.showModal();
    document.body.style.overflow = "hidden";
  });
});

// So clicking outside of dialog closes it
function off(e) {
  if (e.target !== e.currentTarget) return; // Prevent function from running when clicking on a child element
  const dialog = elementFromId("background-overlay:" + getSecondPart(e.target.id));
  dialog.close();
  document.body.style.overflow = "auto";
}

/* Tab functions
https://css-tricks.com/block-links-the-search-for-a-perfect-solution */

class Tab {
  constructor() {
    this.enabled_tab = null;
  }
  set(e) {
    this.enabled_tab = e.target.id;
  }
}

var tab = new Tab();

const tabButton = document.querySelectorAll('.tab-button');
tabButton.forEach(element => {
  element.style.cursor = "pointer",
  element.addEventListener("click", handleClick)
});

function handleClick(e) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    onTab(e);
  }
}

function onTab(e) {
  if (tab.enabled_tab != null) {
    const tabText = elementFromId("tab-text:" + getSecondPart(tab.enabled_tab));
    tabText.style.display = "none";
    const tabButton = elementFromId("tab-button:" + getSecondPart(tab.enabled_tab));
    tabButton.style.border = "none";
  }

  tab.set(e);

  const tabText = elementFromId("tab-text:" + getSecondPart(e.target.id));
  tabText.style.display = "block";
  const tabButton = elementFromId("tab-button:" + getSecondPart(e.target.id));
  tabButton.style.border = "solid";

  tabText.focus(); // For accessiblity
}

// Helper functions
function elementFromId(idName) {
  const element = document.getElementById(idName);
  return element;
}

function getSecondPart(str) {
  if (str === null) return;
  return str.split(':')[1];
}
