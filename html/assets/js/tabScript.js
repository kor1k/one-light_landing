$('.tabs > ul > li').on('click', function () {
    $('.tab__item').addClass('animate__tab');
})


var image;

window.onload = function () {
    function modal(image) {
        /* Shows modal if it was hidden and hides it if it was visible*/
        if ($(".modal-overlay").css("display") === "block") {
            /* Modal was visible. Time to hide it */
            $(".modal__tabss").animate({opacity: 0}, 250, function () {
                $(".modal-overlay").animate({opacity: 0}, 250, function () {
                    $(".modal-overlay").css("display", "none");
                    $('.image-in-modal').css("display", "none");
                });
            });

        } else {
            /* Modal was hidden. Time to make it visible */
            $('.image-in-modal').attr("src", image);
            $(".modal-overlay").css("display", "block");
            $(".modal-overlay").animate({opacity: 0.8}, 250, function () {
                $(".modal-overlay").css("display", "block");
                $('.image-in-modal').css("display", "block");
                $(".modal__tabss").animate({opacity: 1}, 250, function () {
                    /* Do something */
                });
            });
        }
    }

    /* When a thumbnail is clicked.. */
    $(".img-link").click(function (e) {
        e.preventDefault();
        image = this.href;
        modal(image);
    });

    /* When the modal is clicked.. */
    $(".modal-overlay").click(function () {
        modal();
    });
};


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


    // ___________________________
    // ___________________________
    // ___________________________

    $('.price_1_info__title').on('click', function () {
        $('.price_1_info').toggleClass('hide__tab_2')
    });
    $('.price_2_info__title').on('click', function () {
        $('.price_2_info').toggleClass('hide__tab_2')
    });
    $('.price_3_info__title').on('click', function () {
        $('.price_3_info').toggleClass('hide__tab_2')
    });
    $('.price_4_info__title').on('click', function () {
        $('.price_4_info').toggleClass('hide__tab_2')
    });


});