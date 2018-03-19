(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {
      // Variable declare
      var navbar      = $('.navbar'),
          home      = $('.home'),
          services      = $('.services'),
          features      = $('.features'),
          contact      = $('.contact'),
          navHeight   = navbar.height(),
          width       = Math.max($(window).width(), window.innerWidth),
          mobileTest  = false;

      // Check mobile device or not
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          mobileTest = true;
      }

      // Initialization
      appInit();
      navbarAnimation(navbar, home, navHeight);
      AOS.init();

      $('#contactForm').submit(function( event ) {
            if (document.getElementById("contactForm").checkValidity()) {
                document.getElementById("contactForm").submit();
            }
            else {
                event.preventDefault();
                console.log($('#contactForm').serializeArray());
            }
      });
        
      // Scroll Triggers
      $(window).scroll(function() {
          navbarAnimation(navbar, home, navHeight);
          detectPassedSection();
          AOS.refresh(true);
      });

      // Resize Triggers
      $(window).resize(function() {
      });

      // Slick
      $('.hero-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        refresh: true
      });

      // Scroll animations
      $('.section-scroll').bind('click', function(e) {
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 50
          }, 1500);
          e.preventDefault();
      });

      $('.nav-link').bind('click', function(e) {
          var anchor = $(this);

          $('.nav-link').each(function(i) {
              $(this).removeClass('active');
          });

          anchor.addClass('active');

          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 50
          }, 1500);
          e.preventDefault();
      });

      $('.service-item').each(function(i) {
          $(this).bind('mouseover', function(e) {
            $(this).find('.service-icon').addClass('animated tada');
          });
          $(this).bind('mouseout', function(e) {
            $(this).find('.service-icon').removeClass('animated tada');
          });
      });

      $('.feature-item').each(function(i) {
          $(this).bind('mouseover', function(e) {
            $(this).find('.feature-icon').addClass('animated tada');
          });
          $(this).bind('mouseout', function(e) {
            $(this).find('.feature-icon').removeClass('animated tada');
          });
      });


      /*
      ===================================================
      methods
      ===================================================
      */
      function appInit() {
        $(document).scrollTop(0);
      }

      function navbarAnimation(navbar, home, navHeight) {
          var topScroll = $(window).scrollTop();
          if (navbar.length > 0 && home.length > 0) {
              if(topScroll >= navHeight) {
                  navbar.removeClass('navbar-transparent');
              } else {
                  navbar.addClass('navbar-transparent');
              }
          }
      }

      function detectPassedSection(){
        var topScroll = $(window).scrollTop();
        var elementHeight = 0;

        $('.nav-link').each(function(i) {
            $(this).removeClass('active');
        });

        $('.section').each(function(i) {
            elementHeight = elementHeight + $(this).innerHeight();
            var elementId = $(this).attr('id');
            if(topScroll <= elementHeight) {
                $('a[href="#' + elementId + '"]').addClass('active');
                return false;
            }
        });
      }
    });
})(jQuery);
