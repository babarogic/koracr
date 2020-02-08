$(function () {
  $('[data-id=header-up-toggle]').click(function (e) {
    e.preventDefault();
    $('#header-up').toggleClass('show');
  });
  $('[data-id=header-up-close]').click(function (e) {
    e.preventDefault();
    $('#header-up').removeClass('show');
  });
});





var mySwiper11 = new Swiper('#slider-gallery-11', {
  speed: 400,
  navigation: {
    nextEl: '#slider-gallery-11-next',
    prevEl: '#slider-gallery-11-prev',
  },
  pagination: {
    el: '#slider-gallery-11-pagination',
    clickable: true
  },
  slidesPerView: 'auto'
});


var mySwiper = new Swiper('#slider-left-7', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '#slider-left-7-next',
    prevEl: '#slider-left-7-prev',
  },
  pagination: {
    el: '#slider-left-7-pagination',
    clickable: true
  }
});

var mySwiper12 = new Swiper('#slider-gallery-12', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '#slider-gallery-12-next',
    prevEl: '#slider-gallery-12-prev',
  },
  pagination: {
    el: '#slider-gallery-12-pagination',
    clickable: true
  },

});