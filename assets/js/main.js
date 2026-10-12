/* Cafeneaua — interactions */
(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Menu filter */
  var chips = document.querySelectorAll(".chip[data-filter]");
  var dishes = document.querySelectorAll("#menuGrid .dish");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var filter = chip.getAttribute("data-filter");
      dishes.forEach(function (dish) {
        var cat = dish.getAttribute("data-cat");
        var show = filter === "all" || cat === filter;
        dish.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* Reveal on scroll */
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-media, .about-text, .dish, .feature-text, .feature-media, .g-item, .contact-form"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  /* Reservation form validation */
  var form = document.getElementById("reserveForm");
  var note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var date = form.date.value;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !date) {
        note.textContent = "Te rugăm să completezi numele, un email valid și data.";
        note.className = "form-note err";
        return;
      }
      note.textContent = "Mulțumim, " + name + "! Am primit rezervarea pentru " + date + " și o confirmăm în curând.";
      note.className = "form-note ok";
      form.reset();
    });
  }
})();
