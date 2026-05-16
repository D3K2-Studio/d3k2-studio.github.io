/**
 * Home page language select — see docs/DEV_GUIDE.md
 * Storage key: d3k2-lang | values: vi | en | zh
 */
(function () {
  var STORAGE_KEY = "d3k2-lang";
  var DEFAULT = "vi";
  var LANGS = ["vi", "en", "zh"];

  var HTML_LANG = {
    vi: "vi",
    en: "en",
    zh: "zh-Hans",
  };

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* ignore */
    }
    return DEFAULT;
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT;
    document.documentElement.setAttribute("data-lang-active", lang);
    document.documentElement.lang = HTML_LANG[lang] || lang;
    var select = document.getElementById("lang-select");
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  function onLangChange() {
    var select = document.getElementById("lang-select");
    if (!select) return;
    var lang = select.value;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
    applyLang(lang);
  }

  function initLang() {
    var lang = getStoredLang();
    var select = document.getElementById("lang-select");
    if (select) {
      select.value = lang;
      select.addEventListener("change", onLangChange);
    }
    applyLang(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }
})();
