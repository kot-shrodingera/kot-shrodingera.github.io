(function ($) {

  "use strict";

  $(".option-list.owl-carousel").owlCarousel({items: 1, mouseDrag: false});
  $(".news-block.owl-carousel").owlCarousel({items: 1, mouseDrag: false, dots: false, nav: true, navText: []});
  $(".comments-block.owl-carousel").owlCarousel({items: 1, mouseDrag: false});

  var owlPrice = $(".price-list.owl-carousel");
  owlPrice.owlCarousel({items: 1, touchDrag: false, mouseDrag: false, dots: false, animateOut: 'slideOutLeft', animateIn: 'slideInRight'});
  owlPrice.on('translated.owl.carousel', { owlCarousel: owlPrice}, reEnableAnimation);

  var owlDoctors = $(".doctor-photo-container.owl-carousel");
  owlDoctors.owlCarousel({items: 1, mouseDrag: false, animateOut: 'slideOutLeft', animateIn: 'slideInRight'});
  owlDoctors.on('translated.owl.carousel', { owlCarousel: owlDoctors}, reEnableAnimation);

  var priceMenu = $(".price-menu li");
  var doctorMenu = $(".doctors-list li");

  priceMenu.click(function() {
    console.log("click 1");
    $(this).off();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    owlPrice.trigger('to.owl.carousel', $(this).index());
  });

  doctorMenu.click(function() {
    $(this).off();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    owlDoctors.trigger('to.owl.carousel', $(this).index());
  })

  function reEnableAnimation(event) {
    console.log("reenable");
    var owlCarousel = event.data.owlCarousel;
    if (owlCarousel == owlPrice) {
      var menu = priceMenu;
    }
    else if (owlCarousel == owlDoctors) {
      var menu = doctorMenu;
    }
    var carouselObj = { owlCarousel: owlCarousel, menu: menu};
    menu.off();
    menu.click(carouselObj, transitionDirectionCheck);
  }

  function transitionDirectionCheck(event) {
    if ($(this).hasClass("active"))
      return
    var owlCarousel = event.data.owlCarousel;
    var menu = event.data.menu;
    menu.off();
    if (($(this).index() < $(this).siblings(".active").index()) && owlCarousel.data('owl.carousel').options.animateOut != 'slideOutRight') {
      owlCarousel.data('owl.carousel').options.animateOut = 'slideOutRight';
      owlCarousel.data('owl.carousel').options.animateIn = 'slideInLeft';
      owlCarousel.data('owl.carousel').settings.animateOut = 'slideOutRight';
      owlCarousel.data('owl.carousel').settings.animateIn = 'slideInLeft';
      owlCarousel.trigger('refresh.owl.carousel');
    } else if (($(this).index() > $(this).siblings(".active").index()) && owlCarousel.data('owl.carousel').options.animateOut != 'slideOutLeft') {
      owlCarousel.data('owl.carousel').options.animateOut = 'slideOutLeft';
      owlCarousel.data('owl.carousel').options.animateIn = 'slideInRight';
      owlCarousel.data('owl.carousel').settings.animateOut = 'slideOutLeft';
      owlCarousel.data('owl.carousel').settings.animateIn = 'slideInRight';
      owlCarousel.trigger('refresh.owl.carousel');
    }
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    owlCarousel.trigger('to.owl.carousel', $(this).index());
  }

  $('.top-bar-menu').localScroll()

})(jQuery);