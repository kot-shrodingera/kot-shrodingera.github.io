(function ($) {

  "use strict";

  // Menu items in sticky menu
  var menuItems = $('.sticky-menu a');

  // Sections, menu items are linked to
  var scrollItems = menuItems.map(function() {
    var item = $(this).attr('href');
    if (item.length) { return $(item); }
  })

  // Update sticky menu active item
  function updateMenu() {
    var scroll = $(document).scrollTop();
    if (scroll > 60) {
      $('.sticky-menu').removeClass('hidden');
    } else {
      $('.sticky-menu').addClass('hidden');
    }

    var scrolledItems = scrollItems.map(function() {
      if ($(this).offset().top <= scroll) {
        return $(this);
      }
    });

    var id = scrolledItems.last()[0] ? scrolledItems.last()[0][0].id : '';

    menuItems.removeClass('active').filter('[href="#' + id + '"]').addClass('active');

  };

  // Deactivate scroll handler (when clicking a link)
  function scrollOff() {
    $(window).off('scroll');
  }

  // Reactivate scroll handler (at the end of scrolling after clicking a link)
  function scrollOn() {
    updateMenu();
    $(window).scroll(updateMenu);
  }

  // Init scroll handler
  $(window).scroll(updateMenu);

  // Init localScroll plugin (for items in nav tags)
  $('nav').localScroll({ onBefore: scrollOff, onAfter: scrollOn });

  // Site logo in sticky menu
  var stickyMenuLogo = $('.sticky-menu .logo');

  // Clicking logo scrolls page to the top
  stickyMenuLogo.click(function() {
    $(window).off('scroll');
    $.scrollTo('body', 1000, { onAfter: scrollOn });
  });



  // Modals

  $('button:contains("Оставить заявку")').click(function() {
    $('.modal').removeClass('hidden');
    $('body').css('width', $('body').innerWidth()).css("overflow", "hidden");
    $('.sticky-menu').css('width', $('body').innerWidth());
    $(window).click(function(e) {
      if (e.target == $('.modal')[0]) {
        $('.modal').addClass('hidden');
        $('body').css('width', '').css("overflow", "auto");
        $('.sticky-menu').css('width', '100%');
        $(window).off('click');
      }
    })
  });

})(jQuery);