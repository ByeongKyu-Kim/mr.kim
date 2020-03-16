$(function () {


    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
})



var swiper = new Swiper('.sect3_wrap .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.sect3_wrap .swiper-pagination',
      clickable: true,
    },
  });