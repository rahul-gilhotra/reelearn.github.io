$(function () {
    $('.hd-nav-hamburger').on('click', function () {
        $('.hamburger-dwr').addClass('open');
    });
    $('.dwr-close').on('click', function () {
        $(this).closest('.drawer').removeClass('open');
    });
    $('.get-started-btn').on('click', function () {
        $('html,body').animate({
            scrollTop: $(".hp-form-section").offset().top
        },
            'slow');
    });
});