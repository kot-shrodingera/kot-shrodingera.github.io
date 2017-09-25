(function ($) {

  "use strict";

$(window).scroll(function(){
  var docscroll = $(document).scrollTop();
  console.log(docscroll);
  if (docscroll > 60) {
    $('.sticky-menu').removeClass('hidden');
  } else {
    $('.sticky-menu').addClass('hidden');
  }
});

})(jQuery);