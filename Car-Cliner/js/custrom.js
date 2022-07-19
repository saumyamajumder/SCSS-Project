// sidemenu arrow open
/* Nav */
jQuery('header .menu-icon').click(function () {
  jQuery(this).toggleClass('open');
  jQuery(this).parents('body').find('.menu').toggleClass('open-menu');
  jQuery('body').toggleClass('menu-open');
});


// SWIPER JS HOME PAGE BANNER SLIDER

var swiper = new Swiper('.banner-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});


// slider

var swiper = new Swiper('.testimonial-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});


