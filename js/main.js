// Mobile navigation toggle — shared across all pages.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.addEventListener("click", function (event) {
    if (event.target.tagName === "A" && window.innerWidth <= 760) {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
