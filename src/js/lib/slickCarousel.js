function slickCarousel() {
  $('.js-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
	  autoplaySpeed: 2000
  });
}
module.exports = slickCarousel;
