$(document).ready(function () {


    // TAB 
    $('.tab-module li.tab-link').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab-module li.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


    // FULL WIDTH
    $(".hamburger-menu").click(function () {
        jQuery(this).toggleClass('open-hamburger-menu');
        $(".left-bar-menu").toggleClass("left-decrease");
        $(".right-content-section").toggleClass("right-full-screen");
        $(".single-video-page-menu .left-bar-menu").toggleClass("left-increase");
        $(".single-video-page-menu .left-bar-menu").removeClass("left-decrease");
    });

//  // single  page menu
//  $(".hamburger-menu").click(function () {
//     jQuery(this).toggleClass('open-hamburger-menu');
//     $(".single-video-page-menu .left-bar-menu").toggleClass("left-increase");

// });



    var width = $(window).width();
    //RESPONSIVE VIEW
    if ($(window).width() <= 991) {
        $(".left-bar-menu").addClass("left-decrease");
        // $(".left-bar-menu").removeClass("d-block");

        $(".hamburger-menu").click(function () {
            $(".left-bar-menu").toggleClass("responsive-width-view");
        });

    };






    // SEARCH BUTTON SHOW
    if ($(window).width() <= 767) {
        $('.responsive-view-form-div span').click(function (event) {
            event.stopPropagation();
            $('form').toggle();
        });

        $(document).click(function (event) {
            var formContainer = $("form");
            var btnLink = $(".responsive-view-form-div span");
            if (formContainer.has(event.target).length === 0 && btnLink.has(event.target).length === 0) {
                formContainer.hide();
            }
        });
    };

    
});

// COMMENT TOGGLE
$(".view-all-reply").on("click", function(e) {
    e.preventDefault();
    $(this).siblings('.innter-comment').slideToggle();
});

$(".pubic-commet-content + .view-all-reply").on("click", function(e) {
    e.preventDefault();
    $(this).siblings('.innter-comment').slideToggle();
});


// EYE ICON FORM

function openPassword() {
    const inputItemsList = document.querySelectorAll('.js-input-item')

    for (const item of inputItemsList) {
        const passInput = item.querySelector('.js-pass-input')
        const passIcon = item.querySelector('.js-pass-icon')

        passIcon.addEventListener('click', function () {
            if (passInput.type === 'password') {
                passInput.type = 'text'
                passIcon.classList.add('form__icon_active')
            } else {
                passInput.type = 'password'
                passIcon.classList.remove('form__icon_active')
            }
        })
    }
}
openPassword()