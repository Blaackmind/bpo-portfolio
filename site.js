/* Amanda Kelory — interações (vanilla) */
(function () {
  "use strict";

  /* ano */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- TYPING ---------- */
  var roles = [
    "Full Stack Developer",
    "QA & Automação de Testes",
    "Java · Spring Boot · Angular",
    "Construo. Testo. Garanto.",
  ];
  var typed = document.getElementById("typed");
  if (typed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ri = 0, ci = 0, deleting = false;
    function tick() {
      var word = roles[ri];
      typed.textContent = word.slice(0, ci);
      if (!deleting) {
        if (ci < word.length) { ci++; setTimeout(tick, 62); }
        else { deleting = true; setTimeout(tick, 1500); }
      } else {
        if (ci > 0) { ci--; setTimeout(tick, 28); }
        else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 320); }
      }
    }
    tick();
  } else if (typed) {
    typed.textContent = roles[0];
  }

  /* ---------- NAV sticky + burger ---------- */
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("is-stuck", window.scrollY > 10);
  }, { passive: true });

  var burger = document.getElementById("burger");
  var navlinks = document.getElementById("navlinks");
  if (burger && navlinks) {
    burger.addEventListener("click", function () {
      navlinks.classList.toggle("open");
    });
    navlinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navlinks.classList.remove("open");
    });
  }

  /* ---------- REVEAL on scroll ---------- */
  var revs = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revs.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      io.observe(el);
    });
  } else {
    revs.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- FILTRO de projetos ---------- */
  var filters = document.getElementById("filters");
  var projects = document.querySelectorAll("#projects .project");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      filters.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      projects.forEach(function (p) {
        var cats = p.getAttribute("data-cat") || "";
        var show = f === "all" || cats.indexOf(f) !== -1;
        p.classList.toggle("is-hidden", !show);
      });
    });
  }

  /* ---------- COPIAR email ---------- */
  var mail = document.getElementById("mailbtn");
  var hint = document.getElementById("copyhint");
  if (mail && hint && navigator.clipboard) {
    mail.addEventListener("click", function (e) {
      e.preventDefault();
      navigator.clipboard.writeText("manda.lemes72@gmail.com").then(function () {
        var prev = hint.textContent;
        hint.textContent = "✓ copiado";
        setTimeout(function () { hint.textContent = prev; }, 1600);
      }).catch(function () { window.location.href = "mailto:manda.lemes72@gmail.com"; });
    });
  }
})();
