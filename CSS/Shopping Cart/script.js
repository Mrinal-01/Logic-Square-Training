
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



function showProducts(anchor){
  menu=JSON.parse(localStorage.getItem("menuClicked"))
  // The key of the menuClicked is related to the categories(name of categories and key of menuclicked is same.)
  const value = anchor.getAttribute("data-value");
  for(key in menu){
    if(value===key){
      menu[key]=true
    }
    else{
      menu[key]=false
    }
  }
  console.log(menu);

   localStorage.setItem('menuClicked',JSON.stringify(menu))
   window.location.href="./ProductPage/products.html"
}


// Profile Picture updation
currentUser=JSON.parse(localStorage.getItem("currentUser"))
document.getElementById("profile-image").setAttribute('src',currentUser.image)



function updateCartCount(email) {
  let userCart = JSON.parse(localStorage.getItem('userCart')) || {};
  let cartCount = userCart[email] ? userCart[email].reduce((acc, item) => acc + item.quantity, 0) : 0;
  document.getElementById('cartCount').textContent = cartCount;
}



document.addEventListener('DOMContentLoaded', function() {
  let currentUser=JSON.parse(localStorage.getItem('currentUser'))
let email=currentUser.email;
  updateCartCount(email);
})








// ---------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
  
// });

// ---------------------------------------------------------------------------
//If isAdmin true the admin option will show


document.addEventListener('DOMContentLoaded',()=>{
  currentUser=JSON.parse(localStorage.getItem('currentUser'))
  if(currentUser.isAdmin){
    const arrow = document.getElementById('arrow');
  const profileLink = document.getElementById('profileLink');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  profileLink.addEventListener('mouseover', function() {
      dropdownMenu.style.display = 'block';
  });
  
  profileLink.addEventListener('mouseout', function() {
      setTimeout(function() {
          if (!dropdownMenu.matches(':hover')) {
              dropdownMenu.style.display = 'none';
          }
      }, 2000);
  });

  dropdownMenu.addEventListener('mouseover', function() {
      dropdownMenu.style.display = 'block';
  });

  dropdownMenu.addEventListener('mouseout', function() {
      dropdownMenu.style.display = 'none';
  });
  }
  
})


