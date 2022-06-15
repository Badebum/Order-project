"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const swiperAsside = new Swiper(".swiper-asside", {
    slidesPerView: 4,
    spaceBetween: 8,
    loopedSlides: 4,
    freeMode: true,
    autoHeight: false,
    loop: false,
    direction: "vertical",
    slideToClickedSlide: false,
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
      1025: {
        spaceBetween: 8,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
  const swiper = new Swiper(".swiper-big", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 1,
    loop: false,
    thumbs: {
      swiper: swiperAsside,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperOffers = new Swiper(".swiper__offers", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 2,
    loop: true,
    simulateTouch: true,
    breakpoints: {
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      1025: {
        slidesPerView: 3,
        direction: "vertical",
        spaceBetween: 38,
        loopedSlides: 4,
        loop: false,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperAnalog = new Swiper(".swiper__analog", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 2,
    // loop: true,
    simulateTouch: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 22,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 19,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
