const images = document.querySelectorAll(".staffimg");
const staffname = document.querySelectorAll(".staffname");

images.forEach(function(image, name) {
    image.addEventListener("click", function() {
        staffname[name].classList.add("staffnameon");
        image.classList.add("staffnamebg");
        setTimeout(function() {
            staffname[name].classList.remove("staffnameon");
            image.classList.remove("staffnamebg");
        }, 2000);
    });
});