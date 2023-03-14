
$(function () {
   'use strict';
   // Menu Fixed...
   $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop();
      
      if (scrollSize > 100) {
         $('#navbar').addClass('menuActive');
      } else {
         $('#navbar').removeClass('menuActive');
      }
   })
   $('.backtoTop').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      })
   })

   // PopUp Js...
   $('#searchForm').on('click', function () {
      $('#spopup').addClass('active');
   })
   $('.removeIcon').on('click', function () {
      $('#spopup').removeClass('active');
   })

   // Side Menu js
    $('#sideBar').on('click', function () {
         $('.sideMenu').show(200);
         $('.sideMenu').addClass('sidemenuActive')
      })
      $('.hide_btn').on('click', function () {
         $('.sideMenu').hide(200)
         $('.sideMenu').removeClass('sidemenuActive')
    })
   
   // Portfolio Slider Initialize...
   $('.insprtnSlider').slick({
      arrows: false,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2500,
   });

   $('.celebrationSlider').slick({
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2500,
   });


})
