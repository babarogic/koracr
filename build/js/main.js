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

$(function () {
  $('[data-id=header-right-toggle]').click(function (e) {
    e.preventDefault();
    $('#header-right').toggleClass('show');
  });
  $('[data-id=header-right-close]').click(function (e) {
    e.preventDefault();
    $('#header-right').removeClass('show');
  });
});





var mySwiperHome = new Swiper('#home-gallery', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '#home-gallery-next',
    prevEl: '#home-gallery-prev',
  },
  // pagination: {
  //   el: '#home-gallery-pagination',
  //   clickable: true
  // },
  slidesPerView: 'auto'
});


var mySwiperProduct = new Swiper('#product-gallery', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '#product-gallery-next',
    prevEl: '#product-gallery-prev',
  }
});

var mySwiperProductTwo = new Swiper('#productTwo-gallery', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '#productTwo-gallery-next',
    prevEl: '#productTwo-gallery-prev',
  },
  pagination: {
    el: '#productTwo-gallery-pagination',
    clickable: true
  },

});