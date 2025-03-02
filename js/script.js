// Upon page load
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
    document.querySelector(".landingtext").classList.add("loaded");
});

// Testimonials
let slidePosition = 0;
const slides = document.getElementsByClassName('item');
const totalSlides = slides.length;

document.getElementById('carousel_button_next')
.addEventListener("click", function(){
    moveToNextSlide();
});

document.getElementById('carousel_button_prev')
.addEventListener("click", function(){
    moveToPrevSlide();
});

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('item__active');
    }
    slides[slidePosition].classList.add('item__active')
}

function moveToNextSlide(){
    if (slidePosition == totalSlides-1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function moveToPrevSlide(){        
    if (slidePosition == 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}

updateSlidePosition();

// Hamburger menu
const menuContainer = document.querySelector(".menu-container");
const menuItemsContainer = document.querySelector(".menu-items-container");

menuContainer.addEventListener("click", () => {
  menuContainer.classList.toggle("active");

  if (menuContainer.classList.contains("active")) {
    menuItemsContainer.classList.add("active");
  } else {
    menuItemsContainer.classList.remove("active");
  }
});