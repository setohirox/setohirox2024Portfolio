//midnight.js
$(function () {
  $('#title').midnight();
});

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    reverseDirection: true, // 逆方向有効化
  },
  loop: true,
  spaceBetween: 0,
  // loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 1,
  speed: 8000,
  allowTouchMove: false, // スワイプ無効,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    1200: {
      slidesPerView: 4,
      spaceBetween: 100
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 100
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 100
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    reverseDirection: false, // 逆方向有効化
  },
  loop: true,
  spaceBetween: 0,
  // loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 1,
  speed: 8000,
  allowTouchMove: false, // スワイプ無効,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    1200: {
      slidesPerView: 4,
      spaceBetween: 100
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 100
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 100
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});