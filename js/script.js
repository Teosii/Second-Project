const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
 navSlider();


 const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

 tl.to(".logo", { y: "0%", duration: 1.5, stagger: 0.25 });
 tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1.75});
 tl.to(".intro", { y: "-100%", duration: 0.5 }, "-=1");








