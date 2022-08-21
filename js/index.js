AOS.init();

// progress circle js

let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: { gradient: ["#a445b2", "#fa4299"] },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".html .bar").circleProgress({
  value: 0.8,
});
$(".js .bar").circleProgress({
  value: 0.5,
});
$(".laravel .bar").circleProgress({
  value: 0.8,
});

// landing page js

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", {  y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", {  y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", {  y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


// acheivement js
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
