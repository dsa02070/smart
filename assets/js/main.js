$(function () {

    $(document).ready(function () {
        $('.slick_wrap').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
        });
    });


    var swiper01 = new Swiper(".slide01", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var swiper02 = new Swiper(".slide02", {
        slidesPerView: 6,
        spaceBetween: 24,
        freeMode: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

})