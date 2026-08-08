/* main.js — everything here is optional polish.
   The site works completely with JavaScript disabled. */

(function () {
  "use strict";

  /* ---- Theme toggle ---------------------------------------------------
     No saved choice means the CSS decides from the system setting.
     A saved choice overrides it. */

  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var saved = null;

  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    /* Private browsing can block storage. The site still works. */
  }

  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateLabel() {
    if (!toggle) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
    toggle.textContent = next === "dark" ? "Dark" : "Light";
  }

  if (toggle) {
    updateLabel();
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* Ignore. The choice just will not persist. */
      }
      updateLabel();
    });
  }

  /* ---- Reveal on scroll ----------------------------------------------
     IntersectionObserver tells us when an element enters the viewport. */

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll("[data-reveal]");

  if (!reduced && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
})();
