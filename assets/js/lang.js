/**
 * Home page language cycle — see docs/DEV_GUIDE.md
 * Storage key: d3k2-lang | values: vi | en | zh
 */
(function () {
  var STORAGE_KEY = "d3k2-lang";
  var DEFAULT = "vi";
  var ORDER = ["vi", "en", "zh"];

  var LANG_META = {
    vi: { htmlLang: "vi", next: "en", btn: "EN", label: "Switch to English", title: "English" },
    en: { htmlLang: "en", next: "zh", btn: "中文", label: "Switch to Chinese", title: "中文" },
    zh: { htmlLang: "zh-Hans", next: "vi", btn: "VI", label: "切换到越南语", title: "Tiếng Việt" },
  };

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (ORDER.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* ignore */
    }
    return DEFAULT;
  }

  function applyLang(lang) {
    if (ORDER.indexOf(lang) === -1) lang = DEFAULT;
    var meta = LANG_META[lang];
    document.documentElement.setAttribute("data-lang-active", lang);
    document.documentElement.lang = meta.htmlLang;
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = meta.btn;
      btn.setAttribute("aria-label", meta.label);
      btn.title = meta.title;
    }
  }

  function cycleLang() {
    var current =
      document.documentElement.getAttribute("data-lang-active") || DEFAULT;
    var idx = ORDER.indexOf(current);
    var next = ORDER[(idx + 1) % ORDER.length];
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
    if (btn) btn.addEventListener("click", cycleLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }
})();
