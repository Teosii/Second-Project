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

function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".about-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      highlight.src = bigSrc;
      previews.forEach((preview) => preview.classList.remove("about-active"));
      preview.classList.add("about-active");
    });
  });
}

imageGallery();

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.fromTo(".title", 0.5, { y: "140", opacity: 0 }, { y: 0, opacity: 1 });
tl.fromTo(".text", 0.5, { y: "70", opacity: 0 }, { y: 0, opacity: 1 });
tl.fromTo(
  ".about-gallery",
  0.5,
  { x: "100", opacity: 0 },
  { x: 0, opacity: 1 }
);
