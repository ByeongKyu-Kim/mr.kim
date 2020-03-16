$(function () {



    
// section 1

    var swiper = new Swiper('.sect1 .swiper-container', {
        
        pagination: {
            el: '.sect1 .swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        loop: true,
    });


// section 3

    var swiper = new Swiper('.sect3_wrap .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.sect3_wrap .swiper-pagination',
          clickable: true,
        },
      });








})