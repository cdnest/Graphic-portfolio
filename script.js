// Highlight active section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Fade-in animation on scroll
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
fadeEls.forEach(el => observer.observe(el));

// Toggle menu for mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Click animation for portfolio cards
document.querySelectorAll(".portfolio-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.08)";
    setTimeout(() => (card.style.transform = "scale(1.05)"), 200);
  });
});
