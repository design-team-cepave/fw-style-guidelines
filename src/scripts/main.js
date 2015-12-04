// var _ = require("underscore");
// var jq = require("jquery");

$(document).ready(function() {

  (function ($) {
    $('.tabs').find('> .tab-title:eq(0)').addClass('current');
    $('.tabs .tab-title a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('.tabs > .tab-title').removeClass('current');
      $(this).closest('li').addClass('current');
      tab.find('.tabs-content').find('div.tabs-item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tabs-content').find('div.tabs-item:eq(' + index + ')').slideDown();
      g.preventDefault();
    } );
  })(jQuery);

});
