var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/* tESTIMONIAL SLIDER */
var mySwiper = new Swiper('#swiper-testimonial', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    

    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
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
          $("#menu").css("height", "calc(100vh - " + header + "px)" )
           //  navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  
	} else {
		navbarMenu.removeAttribute("style");
	}
});


/*ANIMATION */
AOS.init();