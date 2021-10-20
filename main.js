// js progress bar
const progressbar = document.getElementById('progress-bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 125;
    progressbar.style.width = progressHeight + "%";
};

// js for loading page animation
let loader = document.querySelector('.Loading-banner');
  function fade() 
  {
  setTimeout(()=>
  {
    loader.classList.toggle('fade');
  },2000);
 };

 fade();

//  js for hamburger animation
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-bar-links');
let navlink = document.querySelectorAll('.nav-bar-links a');
let hamburgerLine = document.querySelectorAll('.line');
let body = document.querySelector('body');




hamburger.addEventListener('click',()=> {
    // navlink animation
    navLinks.classList.toggle('open');
    for (item of navlink) {
      item.classList.toggle('open');
    }
    // hamburger animation
    hamburgerLine[0].classList.toggle('open0')
    hamburgerLine[1].classList.toggle('close')
    hamburgerLine[2].classList.toggle('open1')
    body.classList.toggle('open')
});

navLinks.addEventListener('click',()=> {
 // navlink animation
 navLinks.classList.toggle('open');
 for (item of navlink) {
   item.classList.toggle('open');
 }
 // hamburger animation
 hamburgerLine[0].classList.toggle('open0')
 hamburgerLine[1].classList.toggle('close')
 hamburgerLine[2].classList.toggle('open1')
 body.classList.toggle('open')
});

// js for carousel 
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});