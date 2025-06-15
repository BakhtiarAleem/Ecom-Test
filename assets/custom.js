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


        const colorOverlap = document.querySelectorAll(".btn-color-overlap");

        colorOverlap.forEach((btn) => {
        const color1 = btn.getAttribute("data-color1") || "#ff4081";
        const color2 = btn.getAttribute("data-color2") || "#40c4ff";

        const hoverTL = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

        hoverTL
            .to(btn, {
            x: 5,
            backgroundColor: color1,
            boxShadow: `0 0 10px ${color1}`,
            duration: 0.1
            })
            .to(btn, {
            x: -5,
            backgroundColor: color2,
            boxShadow: `0 0 10px ${color2}`,
            duration: 0.1
            });

        btn.addEventListener("mouseenter", () => hoverTL.play());
        btn.addEventListener("mouseleave", () => {
            hoverTL.pause();
            gsap.to(btn, {
            x: 0,
            backgroundColor: "",
            boxShadow: "none",
            duration: 0.2
            });
        });
});




    }
  });