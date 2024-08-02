let swiper = new Swiper('.swiper__pr', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }

});

