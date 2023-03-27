new Swiper('.swiper', {
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  slidesPerView: 'auto',

  spaceBetween: 16,

  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
