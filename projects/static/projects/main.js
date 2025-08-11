const exitButton = document.querySelectorAll(".exit-button");
exitButton.forEach(e => {
  e.addEventListener("click", () => {
    let t = elementFromId("background-overlay:" + getSecondPart(e.id));
    t.close()
  }
  )
}
);
const projectButton = document.querySelectorAll(".project-button");

function off(e) {
  if (e.target !== e.currentTarget)
    return;
  let t = elementFromId("background-overlay:" + getSecondPart(e.target.id));
  t.close(),
    document.body.style.overflow = "auto"
}

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

tabButton.forEach(e => {
  e.style.cursor = "pointer",
    e.addEventListener("click", handleClick)
}
);

const dialog = elementFromId("background-overlay:" + getSecondPart(resumeButton.id));

resumeButton.addEventListener("click", () => {
  dialog.showModal(),
    document.body.style.overflow = "hidden"
}
);