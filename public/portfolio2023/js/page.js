window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};
//menu
const menubtn = document.querySelector('#checkbox1');
const menubr = document.querySelector('.menu');
const html = document.documentElement;
menubtn.addEventListener('click', function(){
  menubr.classList.toggle('menu-active');
  html.classList.toggle('fixed');
});

//top page
const topbtn = document.querySelector('header-logo');
document.querySelector(".header-logo").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "../";
  }, 4100);
});

const bpt = document.querySelector('.page-fade');
const fobt = document.querySelector('.pagebtnT');
fobt.addEventListener('click', function(){
  bpt.classList.toggle('page-fadeout');
});

//home page
const homebtn = document.querySelector('home');
document.querySelector(".home").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "../";
  }, 4100);
});

const bph = document.querySelector('.page-fade');
const fobh = document.querySelector('.pagebtnH');
fobh.addEventListener('click', function(){
  bph.classList.toggle('page-fadeout');
});


//about page
const aboutbtn = document.querySelector('about');
document.querySelector(".about").addEventListener('click', function () {
  setTimeout(() => {
    window.location = "../about/";
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
    window.location = "../works/";
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
    window.location = "../art/";
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
    window.location = "../contact/";
  }, 4100);
});

const bpc = document.querySelector('.page-fade');
const fobc = document.querySelector('.pagebtnC');
fobc.addEventListener('click', function(){
  bpc.classList.toggle('page-fadeout');
});