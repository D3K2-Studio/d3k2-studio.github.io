/**
 * Home page language toggle — see docs/DEV_GUIDE.md
 * Storage key: d3k2-lang | values: vi | en
 */
(function () {
  var STORAGE_KEY = "d3k2-lang";
  var DEFAULT = "vi";

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "vi" || stored === "en") return stored;
    } catch (e) {
      /* ignore */
    }
    return DEFAULT;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang-active", lang);
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "vi" ? "EN" : "VI";
      btn.setAttribute(
        "aria-label",
        lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"
      );
      btn.title = lang === "vi" ? "English" : "Tiếng Việt";
    }
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
  }

  function toggleLang() {
    var current =
      document.documentElement.getAttribute("data-lang-active") || DEFAULT;
    var next = current === "vi" ? "en" : "vi";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* ignore */
    }
    applyLang(next);
  }

  function initLang() {
    applyLang(getStoredLang());
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggleLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }
})();
