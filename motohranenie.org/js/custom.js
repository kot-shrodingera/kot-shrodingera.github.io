(function ($) {

  "use strict";

  $('input[name^="date"]').datepicker({
    
  });

  $('nav').localScroll();
  $('header .intro').localScroll();

  $('header .intro button').click(function() {
    $.scrollTo('#pao', 1000);
  })

  $('.pao .order input[name="phone"]').mask('+7 (999) 999-99-99');

})(jQuery);