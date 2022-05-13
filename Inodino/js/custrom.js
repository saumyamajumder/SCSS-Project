var quoteSwiper = new Swiper('.home-banner-slider', {
  direction: "vertical",
  // direction: "horizontal",
  effect: "slide",
  //autoHeight: true,
  loop: true, // Not recommended to enable!!!
  allowTouchMove: false,

});


var $Speed = 1000;

var imageSwiper = new Swiper('.image-slider', {
  // mousewheel: true,
  speed: $Speed,
  loop: true, // Not recommended to enable!!!
  // longSwipesRatio: 0.01,
  // followFinger: false,
  // grabCursor: true, 
  // watchSlidesProgress: true,
  // parallax: true,
  lazy: {
    loadPrevNext: true,
  },
  // autoplay: 
  // {
  //   delay: 2000,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

imageSwiper.controller.control = this.quoteSwiper;




// sidemenu arrow open
/* Nav */
jQuery('header .menu-icon').click(function () {
  jQuery(this).toggleClass('open');
  jQuery(this).parents('body').find('.menu').toggleClass('open-menu');
  jQuery('body').toggleClass('menu-open');
});


/* Product slider  */
var swiper = new Swiper(".project-swiper", {
  // slidesPerView: 1,
  // spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
 autoplay: 
  {
    delay: 2000,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});