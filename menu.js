document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  if (!openBtn || !closeBtn || !menu) return;

  function toggleMenu() {
    menu.classList.toggle("is-open");
  }

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  // Закриття при кліку на пункт меню (опціонально)
  menu.querySelectorAll(".menu-nav-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("is-open"));
  });
});
