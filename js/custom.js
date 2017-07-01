(function ($) {

  "use strict";

  var owlPrice = $(".price-list.owl-carousel");
  owlPrice.owlCarousel({items: 1, touchDrag: false, mouseDrag: false, dots: false, animateOut: 'slideOutLeft', animateIn: 'slideInRight', onTranslated: enablePriceMenu});
  // owlPrice.owlCarousel({items: 1, touchDrag: false, mouseDrag: false, dots: false});

  var owlDoctors = $(".doctor-photo-container.owl-carousel");
  owlDoctors.owlCarousel({items: 1, mouseDrag: true});

  $(".option-list.owl-carousel").owlCarousel({items: 1, mouseDrag: false});
  $(".news-block.owl-carousel").owlCarousel({items: 1, mouseDrag: false, dots: false, nav: true, navText: []});

  enablePriceMenu();

  $(".doctors-list li").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    owlDoctors.trigger('to.owl.carousel', $(this).index());
  })

  function enablePriceMenu() {
    $(".price-menu li").off();
    $(".price-menu li").click(priceTransition);
    console.log("enablePriceMenu");
  }

  function priceTransition() {
    $(".price-menu li").off();
    if (($(this).index() < $(this).siblings(".active").index()) && owlPrice.data('owl.carousel').options.animateOut != 'slideOutRight') {
      owlPrice.data('owl.carousel').options.animateOut = 'slideOutRight';
      owlPrice.data('owl.carousel').options.animateIn = 'slideInLeft';
      owlPrice.data('owl.carousel').settings.animateOut = 'slideOutRight';
      owlPrice.data('owl.carousel').settings.animateIn = 'slideInLeft';
      owlPrice.trigger('refresh.owl.carousel');
      console.log("change to left");
    } else if (($(this).index() > $(this).siblings(".active").index()) && owlPrice.data('owl.carousel').options.animateOut != 'slideOutLeft') {
      owlPrice.data('owl.carousel').options.animateOut = 'slideOutLeft';
      owlPrice.data('owl.carousel').options.animateIn = 'slideInRight';
      owlPrice.data('owl.carousel').settings.animateOut = 'slideOutLeft';
      owlPrice.data('owl.carousel').settings.animateIn = 'slideInRight';
      owlPrice.trigger('refresh.owl.carousel');
      console.log("change to right");
    }
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    owlPrice.trigger('to.owl.carousel', $(this).index());
  }

})(jQuery);