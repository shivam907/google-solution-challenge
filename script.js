$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    // $(".kl").toggleClass("nav-el", $(this).scrollTop() > $nav.height() / 3);
    // $(".logo a").toggleClass("chitta", $(this).scrollTop() > $nav.height() / 3);
  });
});
