let slideIndex = 0;
let slideTimer;
const slideDuration = 4000;

function showSlides(n) {
  const slides = document.getElementsByClassName("slides");

  // Wrap around if out of bounds
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function startSlider() {
  nextSlide();
  slideTimer = setTimeout(startSlider, slideDuration);
}

function plusSlides(n) {
  clearTimeout(slideTimer);         // stop auto
  slideIndex += n;                 // update index
  showSlides(slideIndex);          // show correct slide
  slideTimer = setTimeout(startSlider, slideDuration); // resume auto
}

// Start on page load
window.onload = function () {
  showSlides(slideIndex); // show first slide
  slideTimer = setTimeout(startSlider, slideDuration);
};
