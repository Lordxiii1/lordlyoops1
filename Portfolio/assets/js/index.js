// Theme toggle
const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});



// Smooth scroll to projects
document.getElementById("scrollProjects")?.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

// Click counter demo
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countSpan = document.getElementById("count");

counterBtn?.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.1s";
      entry.target.classList.add("active");
    }
  });
});

faders.forEach(el => observer.observe(el));
