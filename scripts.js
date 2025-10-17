// Simple mobile menu toggle (expand later if needed)
const navToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}
