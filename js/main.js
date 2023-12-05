(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });

    // Modal Video
      $(document).ready(function () {
         var $videoSrc;
         $('.btn-play').click(function () {
             $videoSrc = $(this).data("src");
         });
         // console.log($videoSrc);

         $('#videoModal').on('shown.bs.modal', function (e) {
           
             $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
         })

         $('#videoModal').on('hide.bs.modal', function (e) {
             $("#video").attr('src', $videoSrc).removeAttr('autoplay');
         })
     });

     // Modal Video 2
     $(document).ready(function () {
        var $videoSrc = "https://www.youtube.com/embed/HpJJceG_2EE?si=2_Wxo2-i-hMCSpOV" ;
        // console.log($videoSrc);

        $('#videoModal-index').on('shown.bs.modal', function (e) {
          
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal-index').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc).removeAttr('autoplay');
        })

        $('#videoModal-index').modal('show');
    });

    
    //audios - reproducción 

    var audioElements = document.getElementsByTagName("audio");

        for (var i = 0; i < audioElements.length; i++) {
            audioElements[i].addEventListener("play", function (event) {
            var currentAudio = event.target;
             for (var j = 0; j < audioElements.length; j++) {
                 if (audioElements[j] !== currentAudio && !audioElements[j].paused) {
                    audioElements[j].pause();
                 }
            }
        });
    }

    //reproduccion lista de audios 

    document.addEventListener("DOMContentLoaded", function () {
        var reproductor = document.getElementById("reproductor");
        var listaCanciones = document.querySelectorAll(".play-button");
      
        listaCanciones.forEach(function (cancion) {
          cancion.addEventListener("click", function () {
            var src = this.getAttribute("data-src");
            reproductor.src = src;
            reproductor.play();
          });
        });
      });


    //     $(function(){
    //        const $botonVentanaModal=$('#btn_modal');
    //        const $ventanaModal = $('#videoModal');
    //        const $iframe = $('#video');

    //        $botonVentanaModal.on('click',function(){
    //            $ventanaModal.modal('show');
    //            $iframe.attr('src', videoSrc);
    //        });

    //   });
    
})(jQuery);

window.addEventListener('touchstart', function(){}, { passive: false });

