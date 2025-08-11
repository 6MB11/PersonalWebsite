function onPageLoad() {
  let e = window.location.pathname
    , t = e.split("/")
    , o = t[1]
    , n = elementFromId("background-overlay:" + o);
  null != n && n.showModal()
}

document.addEventListener("DOMContentLoaded", function () {
  onPageLoad()
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