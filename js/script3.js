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


//Image Slider
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

carouselSlide.style.transform = "translateX(" + -711 * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  const actualSize = carouselImages[0].clientWidth;
  carouselSlide.style.transform = "translateX(" + -711 * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  const actualSize = carouselImages[0].clientWidth;
  carouselSlide.style.transform = "translateX(" + -711 * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  const actualSize = carouselImages[0].clientWidth;
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -711 * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -711 * counter + "px)";
  }
});


//Scroll Animation
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var TimeElapsed = currentTime - startTime;
    var run = ease(TimeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(TimeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}



var section =document.querySelector('.section')
var section2 =document.querySelector('.section2')
section.addEventListener('click',function(){
  smoothScroll(".section2", 1000);
})
section2.addEventListener('click',function(){
  smoothScroll(".section2", 1000);
})













//slider Two

// const carouselSlider = document.querySelector('.carousel-slide-two');
// const carouselImage = document.querySelectorAll('.carousel-slide-two img');
// const previousBtn = document.querySelector('#prevBtnTwo');
// const nextBtnOne = document.querySelector('#nextBtnTwo');

// let count = 1;

// carouselSlider.style.transform ='translateX('+ (-711 * count) + 'px)';

// nextBtnOne.addEventListener('click',()=>{
//   if(count >= carouselImage.length -1) return;
//   carouselSlider.style.transition = "transform 0.4s ease-in-out";
//   count++;
//   const actualSize = carouselImage[0].clientWidth;
//   carouselSlider.style.transform ='translateX('+ (-711 * count) + 'px)';
// });

// previousBtn.addEventListener('click',()=>{
//   if(count <= 0) return;
//   carouselSlider.style.transition = "transform 0.4s ease-in-out";
//   count--;
//   const actualSize = carouselImage[0].clientWidth;
//   carouselSlider.style.transform ='translateX('+ (-711 * count) + 'px)';
// });

// carouselSlider.addEventListener('transitionend',() =>{
//   const actualSize = carouselImage[0].clientWidth;
//   if(carouselImage[count].id ==='lastCloneTwo'){
//       carouselSlider.style.transition = "none";
//       count =carouselImage.length -2;
//       carouselSlider.style.transform ='translateX('+ (-711 * count) + 'px)';
//   }
//   if(carouselImage[count].id ==='firstCloneTwo'){
//       carouselSlider.style.transition = "none";
//       count =carouselImage.length - count;
//       carouselSlider.style.transform ='translateX('+ (-711 * count) + 'px)';
//   }
// })
