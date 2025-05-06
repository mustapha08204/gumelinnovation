// const filterButtons = document.querySelectorAll(".filter-btn");
// const projects = document.querySelectorAll(".project-card");

// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".filter-btn.active").classList.remove("active");
//     btn.classList.add("active");

//     const filter = btn.getAttribute("data-filter");

//     projects.forEach((card) => {
//       if (filter === "all" || card.classList.contains(filter)) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Portfolio Filter
const filterButtons = document.querySelectorAll(".portfolio-filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("text-gray-700", "hover:bg-gray-100");
    });

    // Add active class to clicked button
    button.classList.remove("text-gray-700", "hover:bg-gray-100");
    button.classList.add("bg-primary", "text-white");

    // Filter logic would go here
  });
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Theme Switch
const themeSwitch = document.querySelector(".theme-switch input");

themeSwitch.addEventListener("change", () => {
  // Theme switching logic would go here
  // This is just a placeholder for demonstration
  document.body.classList.toggle("dark-mode");
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-bar");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (barPosition < screenPosition) {
      bar.style.width = bar.parentElement.getAttribute("data-width");
    }
  });
};

window.addEventListener("scroll", animateSkillBars);

// Initialize skill bars animation
window.addEventListener("load", () => {
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    bar.parentElement.setAttribute("data-width", width);
  });

  setTimeout(animateSkillBars, 500);
});
