$(".sliderblog").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow: false,
            },
        },
    ],
});