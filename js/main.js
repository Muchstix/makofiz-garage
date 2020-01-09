/* First Slider */
$('.center').slick(
  
    {
    infinite: true,
    autoplay: false,
    speed: 300,
    centerMode: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  }
);

$('.single-item').slick({
    infinite: true,
    autoplay: false,
    speed: 300,
    centerMode: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
    centerPadding: '60px',
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    nfinite: true,
    autoplay: false,
    speed: 300,
    centerMode: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
    centerPadding: '60px',
    slidesToScroll: 3
});