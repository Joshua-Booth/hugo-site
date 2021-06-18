(function ($) {
  "use strict";

  // Preloader js
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });

  // Navigation
  $(window).scroll(function () {
    if ($(".navigation").offset().top > 1) {
      $(".navigation").addClass("nav-bg");
    } else {
      $(".navigation").removeClass("nav-bg");
    }
  });
})(jQuery);
