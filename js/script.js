$(function() {
  // sect1
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

  // sect2

  // $(".sect2_btn li").mouseenter(function() {
  //   $(".sect2_btn li").removeClass("on")
  //   $(this).addClass("on")

  //   var idx = $(this).index()

  //   $(".sect2_box li")
  //     .stop()
  //     .fadeOut(300)
  //   $(".sect2_box li")
  //     .eq(idx)
  //     .stop()
  //     .fadeIn(300)
  // })

  // sect3
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

  //sect4
  //sect5
  //sect6
  //sect7
  //sect8
  //sect9
})
