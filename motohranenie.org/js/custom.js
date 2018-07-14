(function ($) {

  "use strict";

  $('input[name^="date"]').datepicker({});

  $('nav').localScroll();
  $('header .intro').localScroll();

  $('header .intro button').click(function() {
    $.scrollTo('#pao', 1000);
  })

  $('.pao .order input[name="phone"]').mask('+7 (999) 999-99-99');

  if (matchMedia) {
    const mq = window.matchMedia("(max-width: 765px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      $('.gallery .container').removeClass('grid');
      $('.gallery .container').addClass('owl-carousel owl-theme');
      $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        center: true,
        margin: 20,
        autoWidth: true,
        startPosition: 2,
        items: 2
      });
    } else {
      $('.owl-carousel').owlCarousel('destroy');
      $('.gallery .container').removeClass('owl-carousel owl-theme');
      $('.gallery .container').addClass('grid');
    }

  }

})(jQuery);