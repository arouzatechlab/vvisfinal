const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const mobileOverlay = document.getElementById("mobileOverlay");
const body = document.body;
const dropTriggers = document.querySelectorAll(".mob-drop-trigger");

// Scroll Shrink Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Mobile Menu Toggling
function openMenu() {
  body.classList.add("menu-open");
  mobileOverlay.classList.add("active");
}

function closeMenu() {
  body.classList.remove("menu-open");
  mobileOverlay.classList.remove("active");
  resetDropdowns();
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (body.classList.contains("menu-open")) closeMenu();
  else openMenu();
});

// Mobile Dropdown One-at-a-time
dropTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const list = trigger.nextElementSibling;
    const icon = trigger.querySelector(".mob-dropdown-toggle");
    const wasActive = list.classList.contains("active");

    resetDropdowns();

    if (!wasActive) {
      list.classList.add("active");
      icon.classList.replace("fa-plus", "fa-minus");
    }
  });
});

function resetDropdowns() {
  document
    .querySelectorAll(".mob-dropdown-list")
    .forEach((l) => l.classList.remove("active"));
  document
    .querySelectorAll(".mob-dropdown-toggle")
    .forEach((i) => i.classList.replace("fa-minus", "fa-plus"));
}

// Close on overlay click
mobileOverlay.addEventListener("click", (e) => {
  if (e.target === mobileOverlay) closeMenu();
});

// Resize safety
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
});
