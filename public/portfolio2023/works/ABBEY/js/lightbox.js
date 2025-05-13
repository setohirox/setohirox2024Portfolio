document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery2_list');
  const lightbox = document.querySelector('.lightbox');
  const body = document.querySelector('body');
  const content = lightbox.querySelector('.content');
  const images = gallery.querySelectorAll('.gallery2_list-item');
  const imageArray = Array.from(images);
  const imageData = imageArray.map(item => ({
    imgSrc: item.querySelector('img').src
  }));

  let currentIndex = 0;

  function showImage(index) {
    const { imgSrc } = imageData[index];
    lightbox.querySelector('img').src = imgSrc;
  }

  gallery.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      const index = imageArray.indexOf(e.target.parentElement);
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.add('active');
      lightbox.style.opacity = 0;
      setTimeout(() => {
        lightbox.style.opacity = 1;
      }, 100);
    }
  });

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      lightbox.style.opacity = 0;
      setTimeout(() => {
        lightbox.classList.remove('active');
        lightbox.style.opacity = 1;
      }, 300);
    }
  });

  const prevButton = lightbox.querySelector('.prev-button');
  const nextButton = lightbox.querySelector('.next-button');

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    showImage(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageArray.length;
    showImage(currentIndex);
  });
});