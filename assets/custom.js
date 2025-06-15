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
        const btn = document.querySelector(".btn-shake");

        const hoverTL = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
          .to(btn, { x: 5, duration: 0.1 })
          .to(btn, { x: -5, duration: 0.1 });

        btn.addEventListener("mouseenter", () => hoverTL.play());
        btn.addEventListener("mouseleave", () => {
          hoverTL.pause();
          gsap.to(btn, { x: 0, duration: 0.2 }); // reset position
        });

    }
  });