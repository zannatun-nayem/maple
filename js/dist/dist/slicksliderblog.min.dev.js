"use strict";

$(".sliderblog").slick({
  dots: !1,
  infinite: !0,
  speed: 3e3,
  autoplay: !0,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrow: !1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: !0,
      dots: !1,
      arrow: !1
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: !1,
      arrow: !1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: !1,
      arrow: !1
    }
  }]
});