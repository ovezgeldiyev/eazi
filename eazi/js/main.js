$(function () {
  $(".agent__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    fade: false,
    arrows: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
