// js progress bar
const progressbar = document.getElementById('progress-bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.width = progressHeight + "%";
};



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

// js for booking page
const checkbox = document.querySelector('#checkbox  ');
const car_services = document.querySelectorAll('.car');
const bike_services = document.querySelectorAll('.bike');


car_services.forEach((item)=>
{
    item.classList.toggle('off')
})

checkbox.addEventListener('click',()=>
{
   if(checkbox.checked)
   {
    car_services.forEach((item)=>
    {
        item.classList.toggle('off')
    })
    bike_services.forEach((item)=>
    {
        item.classList.toggle('off')
    })
   }
   else
   {
    car_services.forEach((item)=>
    {
        item.classList.toggle('off')
    })
    bike_services.forEach((item)=>
    {
        item.classList.toggle('off')
    })
   }
})
