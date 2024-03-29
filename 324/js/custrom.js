/* ========================================== 
MENU RESPONSIVE
========================================== */

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("is-active");

	if (navbarMenu.classList.contains("is-active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});




/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 50) {
      jQuery("header").addClass("fixed-header");
    } else {
      jQuery("header").removeClass("fixed-header");
    }
  });