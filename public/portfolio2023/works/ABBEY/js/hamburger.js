//menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const menuItems = document.querySelectorAll(".header-nav a");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});