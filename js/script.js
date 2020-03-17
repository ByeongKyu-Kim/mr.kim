$(function() {
  // section1

  var swiper1 = new Swiper(".sect1 .swiper-container", {
    pagination: {
      el: ".sect1 .swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  })

  // section2

  // section3
  var swiper3 = new Swiper(".sect3_wrap .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".sect3_wrap .swiper-pagination",
      clickable: true,
    },
  })

  $(".sect3_menu1").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_bottom").fadeOut()
    $(".sect3_kimbab").fadeIn()
  })

  $(".sect3_menu2").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_bottom").fadeOut()
    $(".sect3_dupbab")
      .css("top", "0px")
      .fadeIn()
  })

  $(".sect3_menu3").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_bottom").fadeOut()
    $(".sect3_noodle")
      .css("top", "0px")
      .fadeIn()
  })

  // section3
  // section4
  // section5
  // section6
  // section7
  // section8
  // section9
})
