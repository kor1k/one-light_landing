$(document).ready(function () {
    $('.tabs__example__title_1').on('click', function () {
        $('.tabs__example_1').toggleClass('hide__tab');
    });

    $('.tabs__example__title_2').on('click', function () {
        $('.tabs__example_2').toggleClass('hide__tab');
    });

    $('.tabs__example__title_3').on('click', function () {
        $('.tabs__example_3').toggleClass('hide__tab');
    });

    $('.tabs__example__title_4').on('click', function () {
        $('.tabs__example_4').toggleClass('hide__tab');
    });
});