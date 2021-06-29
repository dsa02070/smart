$(function () {

    // top btn hide
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        if (scTop <= 140) {
            $('.top_btn').hide()
        } else {
            $('.top_btn').show()
        }
    })

    // top btn event
    $('.top_btn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400)
    })

    // menu mouseenter event
    $('header nav').mouseenter(function () {
        $('.submenu').addClass('on')
        $('.submenu_bg').addClass('on')
    })
    $('header nav').mouseleave(function () {
        $('.submenu').removeClass("on");
        $('.submenu_bg').removeClass('on')
    })
})