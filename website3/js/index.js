jQuery(document).ready(function() {
  if (jQuery('.testimonial-slider-rtl').length) {
    const reviewsCarouselOptions = {
      slidesPerView: 3.5,
      spaceBetween: 30,
      loop: true,
      speed: 6500,       
      grabCursor: false,
      pauseOnMouseEnter: false,
      mousewheel: {
        enabled: false,
      },
      keyboard: {
        enabled: false,
      },
      allowTouchMove: false,
      autoHeight: false,
      initialSlide: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    };
    const reviewsCarousel = new Swiper(".testimonial-slider-rtl", reviewsCarouselOptions);
  }
});