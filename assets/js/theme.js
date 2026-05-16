/**
 * Theme toggle — see docs/DEV_GUIDE.md
 * Storage key: d3k2-theme | values: dark | light
 */
(function () {
  var STORAGE_KEY = "d3k2-theme";

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      /* private browsing */
    }
    return null;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
      btn.textContent = isDark ? "\u2600" : "\u263E";
      btn.title = isDark ? "Light mode" : "Dark mode";
    }
  }

  function initTheme() {
    var theme = getStoredTheme() || getSystemTheme();
    applyTheme(theme);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        if (!getStoredTheme()) {
          applyTheme(e.matches ? "dark" : "light");
        }
      });
  }

  function toggleTheme() {
    var current =
      document.documentElement.getAttribute("data-theme") || "dark";
    var next = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* ignore */
    }
    applyTheme(next);
  }

  window.D3K2Theme = {
    init: initTheme,
    toggle: toggleTheme,
    getStored: getStoredTheme,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      var btn = document.getElementById("theme-toggle");
      if (btn) btn.addEventListener("click", toggleTheme);
    });
  } else {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  }
})();
