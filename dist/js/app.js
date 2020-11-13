const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    const navLinks = document.querySelectorAll(".nav-links li");
    const links = document.querySelectorAll(".nav-links li a");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                    0.5}s`;
                //console.log(index / 7 + 0.5);

            }

        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });

    $(links).on("click", function () {
        $(burger).click();
    })

};

navSlide();