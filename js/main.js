$(document).ready(function(){
    $('.slider-container').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn')
    });
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (nextSlide === 0) {
      $('.prev-btn').addClass('disabled');
    } else {
      $('.prev-btn').removeClass('disabled');
    }
    if (nextSlide === slick.slideCount - 1) {
      $('.next-btn').addClass('disabled');
    } else {
      $('.next-btn').removeClass('disabled');
    }
  });