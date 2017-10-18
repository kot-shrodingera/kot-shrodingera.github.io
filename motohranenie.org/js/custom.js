(function ($) {

  "use strict";

  $('input[name^="date"]').datepicker({
    
  });

  $('nav').localScroll();
  $('header .intro').localScroll();

  $('header .intro button').click(function() {
    $.scrollTo('#pao', 1000);
  })

})(jQuery);