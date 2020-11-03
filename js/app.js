/* Theme Name: Medical - Responsive Landing page template
   Author: webmavens
   Version: 1.0.0
   Created: October 2020
   File Description: Main JS file of the template
*/

// SmoothLink
$('.navbar-nav a').on('click', function(event) {
   var $anchor = $(this);
   $('html, body').stop().animate({
     scrollTop: $($anchor.attr('href')).offset().top - 0
   }, 1500, 'easeInOutExpo');
   event.preventDefault();
   });
   
   // scrollspy
   $("#navbarCollapse").scrollspy({
   offset:20
   });

   // scrollspy
   $("#navbarCollapse").scrollspy({
      offset:20
      });
   
     // STICKY
      $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       if (scroll >= 150) {
           $(".sticky").addClass("nav-sticky");
       } else {
           $(".sticky").removeClass("nav-sticky");
       }
      }); 

      $('#inputDate').datepicker({
      });