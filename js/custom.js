(function ($) {

  "use strict";

  var owlPrice = $(".price-list.owl-carousel");
  owlPrice.owlCarousel({items: 1, touchDrag: false, mouseDrag: false, dots: false, animateOut: 'slideOutLeft', animateIn: 'slideInRight'});
  // owlPrice.owlCarousel({items: 1, touchDrag: false, mouseDrag: false, dots: false});
  owlPrice.on('translated.owl.carousel', { owlCarousel: owlPrice}, reEnableAnimation);

  var owlDoctors = $(".doctor-photo-container.owl-carousel");
  owlDoctors.owlCarousel({items: 1, mouseDrag: false});

  $(".option-list.owl-carousel").owlCarousel({items: 1, mouseDrag: false});
  $(".news-block.owl-carousel").owlCarousel({items: 1, mouseDrag: false, dots: false, nav: true, navText: []});
  $(".comments-block.owl-carousel").owlCarousel({items: 1, mouseDrag: false});

  $(".price-menu li").click(function() {
    $(this).off();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    owlPrice.trigger('to.owl.carousel', $(this).index());
  });

  $(".doctors-list li").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    owlDoctors.trigger('to.owl.carousel', $(this).index());
  })

  function reEnableAnimation(event) {
    var owlCarousel = event.data.owlCarousel;
    console.log($(".price-menu li"));
    console.log($(owlCarousel.find("li")));
    console.log(owlCarousel);
    $(".price-menu li").off();

    $(".price-menu li").click({ owlCarousel: event.data.owlCarousel }, priceTransition);
  }

  function priceTransition(event) {
    // console.log(event.data);
    $(".price-menu li").off();
    if (($(this).index() < $(this).siblings(".active").index()) && owlPrice.data('owl.carousel').options.animateOut != 'slideOutRight') {
      owlPrice.data('owl.carousel').options.animateOut = 'slideOutRight';
      owlPrice.data('owl.carousel').options.animateIn = 'slideInLeft';
      owlPrice.data('owl.carousel').settings.animateOut = 'slideOutRight';
      owlPrice.data('owl.carousel').settings.animateIn = 'slideInLeft';
      owlPrice.trigger('refresh.owl.carousel');
    } else if (($(this).index() > $(this).siblings(".active").index()) && owlPrice.data('owl.carousel').options.animateOut != 'slideOutLeft') {
      owlPrice.data('owl.carousel').options.animateOut = 'slideOutLeft';
      owlPrice.data('owl.carousel').options.animateIn = 'slideInRight';
      owlPrice.data('owl.carousel').settings.animateOut = 'slideOutLeft';
      owlPrice.data('owl.carousel').settings.animateIn = 'slideInRight';
      owlPrice.trigger('refresh.owl.carousel');
    }
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    owlPrice.trigger('to.owl.carousel', $(this).index());
  }

})(jQuery);