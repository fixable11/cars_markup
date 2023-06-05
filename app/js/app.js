// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import "slick-carousel";

window.jQuery = window.$ = $;

$(document).ready(function () {
  $('.header__menu').click(function() {
    $('.header__nav-items').slideToggle(500);
    $('.header__menu-overlay').toggle('slow')
  });
  $(window).resize(function() {
    if ($(window).width() > 960) {
      $('.header__nav-items, .header__menu-overlay').removeAttr('style');
    }
  });

  $('.header__slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  let chooseCarNav = document.querySelectorAll('.choose-car__car-nav-item');
  let cars = document.querySelectorAll('.car-item');

  chooseCarNav.forEach(item => {
    item.addEventListener('click', function (event) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        cars.forEach(item => item.classList.remove('fade'));
        return;
      }
      chooseCarNav.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
      cars.forEach(item => item.classList.remove('fade'));
      cars.forEach(car => {
        if (car.dataset.group !== item.dataset.group) {
          car.classList.add('fade')
        }
      })
    });
  })
});
