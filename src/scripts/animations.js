const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initAnimations() {
  // Select all elements that should animate
  const elements = document.querySelectorAll(".animate-on-scroll");

  // Add stagger classes to grid items
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item, index) => {
    const staggerClass = `stagger-${(index % 5) + 1}`;
    item.classList.add(staggerClass);
  });

  // Observe each element
  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initAnimations);

// Re-initialize on Astro page changes
document.addEventListener("astro:page-load", initAnimations);

export { initAnimations };
