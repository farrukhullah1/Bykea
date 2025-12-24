/* TOGGLE MOBILE MENU */
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

/* SLIDER FUNCTION */
var currentIndex = 0;
var slider = document.getElementById('slider');
var totalSlides = 2;

function moveSlide(direction) {
  currentIndex += direction;
  if(currentIndex < 0) currentIndex = totalSlides - 1;
  if(currentIndex >= totalSlides) currentIndex = 0;
  slider.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}