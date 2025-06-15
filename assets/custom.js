  document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap !== 'undefined') {
      gsap.from('.animate-fade-in', {
        opacity: 0,
        y: 50,
        duration: 3,
        ease: 'power2.out',
      });
      gsap.from('.animate-from-top', {
        opacity: 0,
        y: -50,
        duration: 3,
        ease: 'power2.out',
      });
      gsap.from('.animate-from-right', {
        opacity: 0,
        x: 50,
        duration: 3,
        ease: 'power2.out',
      });

        //button shake
        const buttons = document.querySelectorAll(".btn-shake");

        buttons.forEach((btn) => {
        const hoverTL = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
            .to(btn, { x: 5, duration: 0.1 })
            .to(btn, { x: -5, duration: 0.1 });

        btn.addEventListener("mouseenter", () => hoverTL.play());
        btn.addEventListener("mouseleave", () => {
            hoverTL.pause();
            gsap.to(btn, { x: 0, duration: 0.2 }); // reset position
        });
        });


document.querySelectorAll('.btn-color-fill').forEach((btn) => {
  const color1 = btn.getAttribute("data-color1") || "#ff4081";
  const color2 = btn.getAttribute("data-color2") || "#40c4ff";
  const beforeEl = btn;

  // Set CSS vars for gradient
  btn.style.setProperty('--color1', color1);
  btn.style.setProperty('--color2', color2);

  // Animate on hover
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn.querySelector("::before"), {
      x: "100%",
      duration: 0.5,
      ease: "power2.out"
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.set(btn.querySelector("::before"), {
      x: "-100%"
    });
  });
});
    }
  });