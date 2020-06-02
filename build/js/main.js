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

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
    $(".header").addClass("active");
    $(".btnChange").removeClass("btn-dark").addClass("btn-primary");
    $(".icon").removeClass("icon-burger").addClass("icon-burgerWhite");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $(".btnChange").removeClass("btn-primary").addClass("btn-dark");
    $(".icon").removeClass("icon-burgerWhite").addClass("icon-burger");
  }
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
    autoplay: {delay: 3000},
    navigation: {
        nextEl: '#product-gallery-next',
        prevEl: '#product-gallery-prev',
    }
});

var mySwiperProductTwo = new Swiper('#productTwo-gallery', {
  speed: 400,
  loop: true,
  autoplay: {delay: 3000},
  navigation: {
    nextEl: '#productTwo-gallery-next',
    prevEl: '#productTwo-gallery-prev',
  },
  pagination: {
    el: '#productTwo-gallery-pagination',
    clickable: true
  },

});


// Contact Form

(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    })
        .done(done_func)
        .fail(fail_func);
  });

})(jQuery);
