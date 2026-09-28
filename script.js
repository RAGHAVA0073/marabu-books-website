document.addEventListener("DOMContentLoaded", () => {

  // Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);

        }

      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach((element) => {
    observer.observe(element);
  });

});
