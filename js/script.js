$('.header__slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 770,
        settings: {
            autoplay: false,
        }
    }],
});


$('.footer__slider').slick({
    asNavFor: '.img-slider',
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dots: true,
});

$('.img-slider').slick({
    asNavFor: '.footer__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
});


$(document).ready(function () {
    $('.main__video-click').click(function (event) {
        $($(this)).toggleClass('click-block');
    });
});

var section = $('li');

function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);

