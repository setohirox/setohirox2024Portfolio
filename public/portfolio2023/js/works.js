//fadein
$(function () {
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});

const galleries = document.querySelectorAll('.worklist');
const lightbox = document.querySelector('.lightbox');
const body = document.querySelector('body');
const content = lightbox.querySelector('.content');

galleries.forEach(gallery => {
  const images = gallery.querySelectorAll('.workitem');
  const imageArray = Array.from(images);
  const imageData = imageArray.map(item => ({
    imgSrc: item.dataset.img,
    desc: item.querySelector('.desc').innerHTML
  }));

  gallery.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      const index = imageArray.indexOf(e.target.parentElement);
      const { imgSrc } = imageData[index];
      const desc = imageData[index].desc;
      lightbox.querySelector('img').src = e.target.src;
      content.querySelector('.desc').innerHTML = desc;
      lightbox.classList.add('active');
      lightbox.style.opacity = 0;
      setTimeout(() => {
        lightbox.style.opacity = 1;
      }, 100);
    }
  });
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.opacity = 0;
    setTimeout(() => {
      lightbox.classList.remove("active");
      lightbox.style.opacity = 1;
    }, 300);
  }
});




