


// ------------------------------
// 1. MOBILE MENU TOGGLE
// ------------------------------

const menuToggle = document.querySelector(".header-toggle");
const header = document.querySelector(".header");

if(menuToggle){
menuToggle.addEventListener("click", function(){
header.classList.toggle("header-show");
});
}



// ------------------------------
// 3. SCROLL TO TOP BUTTON
// ------------------------------

const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", function(){

if(!scrollBtn) return;

if(window.scrollY > 400){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

if(scrollBtn){
scrollBtn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});
}
window.addEventListener("DOMContentLoaded", function(){

const bars = document.querySelectorAll(".skill-progress");

function animateSkills(){

bars.forEach(bar => {

const width = bar.getAttribute("data-width");
bar.style.width = width;

});

}

const skillsSection = document.getElementById("skills");

window.addEventListener("scroll", function(){

const position = skillsSection.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
animateSkills();
}

});

});

const bars = document.querySelectorAll('.progress-bar');
window.addEventListener('scroll', () => {
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      bar.style.width = bar.dataset.progress;
    }
  });
});

// project default animations

// demo

// IMAGE LIGHTBOX

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display="flex";
lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click", () => {

lightbox.style.display="none";

});


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let start = 0;
let end = parseInt(counter.textContent);

let duration = 2000;
let step = Math.ceil(end / (duration / 20));

let interval = setInterval(()=>{

start += step;

if(start >= end){
start = end;
clearInterval(interval);
}

counter.textContent = start;

},20);

});