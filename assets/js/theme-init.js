/* Inline in <head> before CSS — prevents theme flash. See docs/DEV_GUIDE.md */
(function () {
  var k = "d3k2-theme";
  var t;
  try {
    t = localStorage.getItem(k);
  } catch (e) {}
  if (t !== "dark" && t !== "light") {
    t = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  document.documentElement.setAttribute("data-theme", t);
})();
