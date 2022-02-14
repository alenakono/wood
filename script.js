$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        loop: true,
    });

});

