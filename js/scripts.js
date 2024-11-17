/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 



// create video slide
let slideIndex = 1;
showSlides(slideIndex);

// Next and Previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Create Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   for (i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += "active";
}  




//add iconify 
import 'iconify-icon'; 

// Toggle profile's image to fullscreen 

function toggleFullscreen(id){
    document.getElementById(id).requestFullscreen();
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//Call owl-carousel plugin
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
