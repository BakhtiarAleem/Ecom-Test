document.addEventListener('DOMContentLoaded', function () {

    // Animation on Gift Guide

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



        // Button Color on Hover

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



    // Custom Grid Modal Data

    const modal = document.getElementById("product-modal");
    const closeBtn = modal.querySelector(".product-close");
    const titleEl = document.getElementById("modal-title");
    const priceEl = document.getElementById("modal-price");
    const descriptionEl = document.getElementById("modal-description");
    const imageEl = document.getElementById("modal-image");
    const urlEl = document.getElementById("modal-add-cart");
     const variantsEl = document.getElementById("modal-variants");

    document.querySelectorAll(".open-modal-btn").forEach(button => {
      button.addEventListener("click", () => {
        const title = button.dataset.title;
        const price = button.dataset.price;
        const description = button.dataset.description;
        const featured_media = button.dataset.image;
        const url = button.dataset.url;
        const variantsData = JSON.parse(button.dataset.variants);
        variantsEl.innerHTML = '';

        titleEl.textContent = title;
        priceEl.textContent = price;
        descriptionEl.innerHTML = description;
        imageEl.src = featured_media
        urlEl.href = url

 variantsData.forEach(variant => {

      if (variant.name.toLowerCase() === "color") {
        const colorWrapper = document.createElement("div");
        colorWrapper.classList.add("variant-color-wrapper");

        const label = document.createElement("p");
        label.textContent = "Color:";
        colorWrapper.appendChild(label);

        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("color-button-group");

        variant.values.forEach((value, index) => {
            const id = `color-${value}-${index}`;

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "color";
            radio.value = value;
            radio.id = id;
            if (index === 0) radio.checked = true; // Optional: preselect first

            const label = document.createElement("label");
            label.htmlFor = id;
            label.className = "color-option";
            label.textContent = value;

            buttonGroup.appendChild(radio);
            buttonGroup.appendChild(label);
        });

        colorWrapper.appendChild(buttonGroup);
        variantsEl.appendChild(colorWrapper);
      }


      if (variant.name.toLowerCase() === "size") {
        const select = document.createElement("select");
        select.name = "size";
        select.classList.add("variant-select");

        variant.values.forEach(value => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });

        const label = document.createElement("label");
        label.textContent = "Size:";
        label.appendChild(select);
        variantsEl.appendChild(label);
      }
    });


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