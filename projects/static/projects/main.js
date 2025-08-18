const projectButton = document.querySelectorAll(".project-button");

projectButton.forEach(e => {
  e.style.cursor = "pointer";
  let t = elementFromId("background-overlay:" + getSecondPart(e.id));
  e.addEventListener("click", () => {
    t.showModal(),
      document.body.style.overflow = "hidden"
  }
  )
}
);

class Tab {
  constructor() {
    this.enabled_tab = null
  }
  set(e) {
    this.enabled_tab = e.target.id
  }
}

var tab = new Tab;
const tabButton = document.querySelectorAll(".tab-button");

tabButton.forEach(e => {
  e.style.cursor = "pointer",
    e.addEventListener("click", handleClick)
}
);

function handleClick(e) {
  let t = window.getSelection().toString();
  t || onTab(e)
}

function onTab(e) {
  if (null != tab.enabled_tab) {
    let t = elementFromId("tab-text:" + getSecondPart(tab.enabled_tab));
    t.style.display = "none";
    let o = elementFromId("tab-button:" + getSecondPart(tab.enabled_tab));
    o.style.border = "none"
  }
  tab.set(e);
  let n = elementFromId("tab-text:" + getSecondPart(e.target.id));
  n.style.display = "block";
  let r = elementFromId("tab-button:" + getSecondPart(e.target.id));
  r.style.border = "solid"
}

var backgroundOverlay = document.querySelectorAll(".background-overlay");
var exitButton = document.querySelectorAll(".exit-button");

backgroundOverlay = Array.from(backgroundOverlay);
exitButton = Array.from(exitButton);

const overlaysButtons = backgroundOverlay.concat(exitButton);

overlaysButtons.forEach(e => {
  e.addEventListener("click", (event) => {
    off(event)
  }
  )
}
);

function off(e) {
  if (e.target !== e.currentTarget)
    return;
  let t = elementFromId("background-overlay:" + getSecondPart(e.target.id));
  t.close();
  document.body.style.overflow = "auto";
}

const dialog = elementFromId("background-overlay:" + getSecondPart(resumeButton.id));

resumeButton.addEventListener("click", () => {
  dialog.showModal(),
    document.body.style.overflow = "hidden"
}
);

const embeds = document.getElementsByTagName("embed");

embeds.forEach(e => {
e.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) { // Check for multi-touch (pinch)
    event.preventDefault(); // Prevent default browser zoom
  }
}, { passive: false });
});
Array.from(embeds).forEach(e => {
  e.addEventListener("touchmove", (event) => {
    if (event.touches.length > 1) { // Check for multi-touch (pinch)
      event.preventDefault(); // Prevent default browser zoom
    }
  }, { passive: false });
});
