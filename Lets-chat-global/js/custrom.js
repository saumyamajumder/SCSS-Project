
var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/* Swiper slider for sub contact sign up page */



var mySwiper = new Swiper ('.swiper-sign-up', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
    shadow: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// Tab 
$(function() {
  $('.tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div').hide();
    $(currentTab).show();

    return false;
  });
});



// sidemenu arrow open
/* Nav */
var width = $(window).width();
if ($(window).width() <= 991) {
  $(document).ready(function () {
    $(".left-div-arrow-open-close").click(function () {
      $(".dashboard-left").toggleClass('dd');
      jQuery('.dashboard-right').toggleClass('overflow-hidden');
    });


  });
};


/**  Accordion **/
$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });

});








/* ========================================== 
MENU RESPONSIVE
========================================== */
const header = $('header').outerHeight();
console.log(header);
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");

  if (navbarMenu.classList.contains("is-active")) {
    //   navbarMenu.style.height = 400+ "px";
    $("#menu").css("height", "calc(100vh - " + header + "px)")
    //  navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";

  } else {
    navbarMenu.removeAttribute("style");
  }
});


/*ANIMATION */
AOS.init();











/*screoo bar */

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
  }
});

/**/



