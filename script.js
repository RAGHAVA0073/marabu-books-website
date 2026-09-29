/* =========================================
   MARABU BOOKS — SCRIPT.JS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     REVEAL SECTIONS
     ========================================= */

  const revealElements = document.querySelectorAll(".reveal");

  // Make all content visible even if IntersectionObserver
  // is unavailable or animation fails.
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

  /* =========================================
     INTERSECTION OBSERVER
     ========================================= */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  }

  /* =========================================
     SMOOTH SCROLL
     ========================================= */

  const storyButton = document.querySelector('a[href="#books"]');

  if (storyButton) {

    storyButton.addEventListener("click", (event) => {

      const target = document.querySelector("#books");

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  }

  /* =========================================
     BOOK IMAGE FALLBACK
     ========================================= */

  const bookImages = document.querySelectorAll(".book-cover");

  bookImages.forEach((image) => {

    image.addEventListener("error", () => {
      image.style.display = "none";
    });

  });

  /* =========================================
     BUTTON ANIMATIONS
     ========================================= */

  const heroLinks = document.querySelectorAll(".hero a");

  heroLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-4px) scale(1.04)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });

  });

  /* =========================================
     PAGE READY
     ========================================= */

  document.body.classList.add("page-ready");

});
