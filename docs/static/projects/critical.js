function onPageLoad() {
  let e = window.location.pathname
    , t = e.split("/")
    , o = t[1]
    , n = elementFromId("background-overlay:" + o);
  if (null != n) {
    n.showModal();
    document.body.style.overflow = "hidden";
  }
}

function loadStyleSheet(src) {
  if (document.createStyleSheet) document.createStyleSheet(src);
  else {
    var stylesheet = document.createElement('link');
    stylesheet.href = '/static/' + src;
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  onPageLoad(), loadStyleSheet('projects/style.css')
});

const resumeButton = elementFromId("footer-box-sub:resume");
resumeButton.style.cursor = "pointer";

function elementFromId(e) {
  let t = document.getElementById(e);
  return t
}

function getSecondPart(e) {
  if (null !== e)
    return e.split(":")[1]
}