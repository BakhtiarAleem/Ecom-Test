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
            const overlay = btn.querySelector('.overlay');

            // Set color variables from data attributes
            const color = btn.getAttribute("data-color") || "#FFF544";

            overlay.style.setProperty('--color', color);
            const colorSet = (color) => {
            if(color === '#000'){
                btn.style.color = '#fff';
            }
            else{
                btn.style.color = '#000';
            }
            }

            const colorReset = () => {
                btn.style.color = '';
            }
            // Animate on hover
            btn.addEventListener("mouseenter", () => {
                gsap.to(overlay, {
                    x: '100%',
                    duration: 0.5,
                    ease: "power2.out"
                });
                colorSet(color);
            });

            btn.addEventListener("mouseleave", () => {
                gsap.set(overlay, {
                    x: '-100%',
                    duration: 0.5,
                    ease: "power2.out"
                });
                colorReset();
            });
        });
    }

    const modal = document.getElementById("product-modal");
    const closeBtn = modal.querySelector(".product-close");
    const titleEl = document.getElementById("modal-title");
    const priceEl = document.getElementById("modal-price");
    const descriptionEl = document.getElementById("modal-description");
    const imageEl = document.getElementById("modal-image");
    const urlEl = document.getElementById("modal-add-cart");

    document.querySelectorAll(".open-modal-btn").forEach(button => {
      button.addEventListener("click", () => {
        const title = button.dataset.title;
        const price = button.dataset.price;
        const description = button.dataset.description;
        const featured_media = button.dataset.featured_media;
        const url = button.dataset.url;

        titleEl.textContent = title;
        priceEl.textContent = price;
        descriptionEl.textContent = description;
        imageEl.src = featured_media
        urlEl.href = url

        modal.classList.remove("hidden");
      });
    });

    
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });



});