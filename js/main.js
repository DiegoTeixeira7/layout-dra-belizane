(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var menuButton = document.getElementById("menuButton");
  var mobileNav = document.getElementById("mobile-nav");
  var iconOpen = document.getElementById("menuIconOpen");
  var iconClose = document.getElementById("menuIconClose");

  function setHidden(el, isHidden) {
    if (isHidden) {
      el.setAttribute("hidden", "");
    } else {
      el.removeAttribute("hidden");
    }
  }

  function setMenuOpen(isOpen) {
    setHidden(mobileNav, !isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    setHidden(iconOpen, isOpen);
    setHidden(iconClose, !isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  }

  menuButton.addEventListener("click", function () {
    setMenuOpen(mobileNav.hasAttribute("hidden"));
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !mobileNav.hasAttribute("hidden")) {
      setMenuOpen(false);
    }
  });

  // Scroll reveal: mirrors the React site's useScrollReveal hook —
  // one-shot fade/slide-in the first time each .reveal element enters
  // the viewport, skipped entirely when the browser lacks support or
  // the user prefers reduced motion.
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
})();
