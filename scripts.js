// Subtle parallax effect
function handleParallax() {
  const isMobile = window.innerWidth < 768;
  const scrolled = window.scrollY;

  document.querySelectorAll("[data-speed]").forEach(el => {
    const speed = parseFloat(el.getAttribute("data-speed"));
    const yPos = isMobile ? 0 : scrolled * speed;
    el.style.transform = `translateY(${yPos}px)`;
  });
}
window.addEventListener("scroll", handleParallax);
window.addEventListener("resize", handleParallax);

// Responsive mobile nav toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Optional: change burger icon to “X”
menuToggle.addEventListener('click', () => {
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
