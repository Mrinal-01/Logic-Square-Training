
//This code for hover arrow up and arrow down in Login icon

function hover(element) {
  element.setAttribute('src', './Images/arrow-up.png');
}

function unhover(element) {
  element.setAttribute('src', './Images/down-arrow.png');
}
//-----------------------------------------------------------------------

// script.js
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);
//---------------------------------------------------------------------
function sideHover(element) {
  element.setAttribute('src', './Images/left-arrow.png');
}

function sideUnhover(element) {
  element.setAttribute('src', './Images/right-arrow.png');
}
