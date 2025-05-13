//loading
const loader = document.getElementById('loading');
window.addEventListener('load', () => {
  const ms = 500;
  loader.style.transition = 'opacity ' + ms + 'ms';
  const loadermove = function () {
    loader.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
      ],
      {
        duration: 500
      },
    )
  }
  const loaderDisplay = function () {
    loader.style.display = "none";
  }
  setTimeout(loadermove, 3000);
  setTimeout(loaderDisplay, 3000 + ms);
});

//mouse-stalker
const stalker = document.getElementById('mouse-stalker');
document.addEventListener('mousemove', function (e) {
  stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

window.addEventListener('touchmove', function (event) {
  event.preventDefault();
});

//light-theme
const btn = document.querySelector('.theme-btn');
const btncolor = document.querySelector('.theme-btn');
const background = document.querySelector('body');
const about = document.querySelector('.about');
const works = document.querySelector('.works');
const icon = document.querySelector('.icon');
const iconimg = document.querySelector('.icon-img');
const cssart = document.querySelector('.cssart');
const contact = document.querySelector('.contact');
const planet1 = document.querySelector('.planet1');
const planet2 = document.querySelector('.planet2');
const planet3 = document.querySelector('.planet3');
const Rocket = document.querySelector('.M-Rocket');
const nameflag = document.querySelector('.name-flag');
const nameast = document.querySelector('.N-left-arm');

btn.addEventListener('click', function () {
  background.classList.toggle('light-theme');
  btncolor.classList.toggle('light-theme-btn');
  about.classList.toggle('light-theme-menu-text');
  about.classList.toggle('light-theme-menu-text-about');
  works.classList.toggle('light-theme-menu-text');
  icon.classList.toggle('icon-light');
  iconimg.classList.toggle('icon-img-light');
  cssart.classList.toggle('light-theme-menu-text');
  contact.classList.toggle('light-theme-menu-text');
  planet1.classList.toggle('planet1-light');
  planet2.classList.toggle('planet2-light');
  planet3.classList.toggle('planet3-light');
  Rocket.classList.toggle('Rocket-light');
  nameflag.classList.toggle('nameflag-light');
  nameast.classList.toggle('nameast-light');
});

//alien eyes
const eyes = document.querySelectorAll(".eye-in .eye-ball");
window.addEventListener("mousemove", (e) => {
  eyes.forEach((eye) => {
    // get x and y postion of cursor
    var rect = eye.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 80 + "px";
    var y = (e.pageY - rect.top) / 80 + "px";
    eye.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});

//about page
const aboutbtn = document.querySelector('about');
document.querySelector(".about").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "./about/";
  }, 4100);
});

const bpa = document.querySelector('.page-fade');
const foba = document.querySelector('.pagebtnA');
foba.addEventListener('click', function(){
  bpa.classList.toggle('page-fadeout');
});

//works page
const worksbtn = document.querySelector('works');
document.querySelector(".works").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "./works/";
  }, 4100);
});

const bpw = document.querySelector('.page-fade');
const fobw = document.querySelector('.pagebtnW');
fobw.addEventListener('click', function(){
  bpw.classList.toggle('page-fadeout');
});

//art page
const artbtn = document.querySelector('cssart');
document.querySelector(".cssart").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "./art/";
  }, 4100);
});

const bpca = document.querySelector('.page-fade');
const fobca = document.querySelector('.pagebtnCA');
fobca.addEventListener('click', function(){
  bpca.classList.toggle('page-fadeout');
});

//contact page
const contactbtn = document.querySelector('contact');
document.querySelector(".contact").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "./contact/";
  }, 4100);
});

const bpc = document.querySelector('.page-fade');
const fobc = document.querySelector('.pagebtnC');
fobc.addEventListener('click', function(){
  bpc.classList.toggle('page-fadeout');
});