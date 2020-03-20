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

  $(".sect2_btn li").click(function() {
    $(".sect2_btn li").removeClass("on")
    $(this).addClass("on")

    var idx = $(this).index()

    $(".sect2_box li")
      .stop()
      .fadeOut()
    $(".sect2_box li")
      .eq(idx)
      .stop()
      .fadeIn()
  })

  //////////////////////////////////// sect3 /////////////////////////////////

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

  //////////////////////////////////// sect4 ///////////////////////////////

  // 김밥 메뉴 페이드인, 페이드 아웃
  $(".sect3_menu1").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_dupbab, .sect3_noodle").removeClass("sect3_ko")
    $(".sect3_kimbab").addClass("sect3_ko")

    $(".sect3_bottom").fadeOut()
    $(".sect3_kimbab").fadeIn()
  })
  // 덮밥 메뉴 페이드인, 페이드 아웃
  $(".sect3_menu2").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_kimbab, .sect3_noodle").removeClass("sect3_ko")
    $(".sect3_dupbab").addClass("sect3_ko")

    $(".sect3_bottom").fadeOut()
    $(".sect3_dupbab").fadeIn()
  })

  // 면 메뉴 페이드인, 페이드 아웃
  $(".sect3_menu3").click(function() {
    $(".sect3_menu").removeClass("sect3_on")
    $(this).addClass("sect3_on")

    $(".sect3_kimbab, .sect3_dupbab").removeClass("sect3_ko")
    $(".sect3_noodle").addClass("sect3_ko")

    $(".sect3_bottom").fadeOut()
    $(".sect3_noodle").fadeIn()
  })

  // 음식 이미지 클릭하면 1.15배로 확대

  $(".sect3_swiper").mouseenter(function() {
    $(".sect3_swiper").removeClass("sect3_form")
    $(this).addClass("sect3_form")
  })

  var s3q
  s3q = 0

  $(".sect3_next").click(function() {
    s3q++
    if (s3q < 9) {
      alert(s3q)
      $(".sect3_scroll").animate({ "margin-left": "-=410px" })
    } else {
      alert(s3q)
      s3q = 8
      $(".sect3_scroll").animate({ "margin-left": "-=0px" })
    }
  })

  $(".sect3_prev").click(function() {
    s3q--

    if (s3q > -1) {
      alert(s3q)
      $(".sect3_scroll").animate({ "margin-left": "+=410px" })
    } else {
      alert(s3q)
      s3q = 0
      $(".sect3_scroll").animate({ "margin-left": "+=0px" })
    }
  })

  // 섹트4의 오토바이 그림위 배달안내 스크립트 / 아직 css하지 않은 상황. 수정 중에 있음 /

  $(document).scroll(function() {
    var scrT = $(this).scrollTop()

    if (scrT >= 900) {
      $(".sect4_effact1").fadeIn(600)
      $(".sect4_effact2").fadeIn(2000)
      $(".sect4_effact3").fadeIn(3200)
    } else {
      $(".sect4_effact").fadeOut(100)
    }
  })

  // $(document).scroll(function() {
  //   var scrT = $(this).scrollTop()

  //   if (scrT >= 400) {
  //     $("").addClass("scroll_header")
  //   } else {
  //     $("").removeClass("scroll_header")
  //   }
  // })

  //sect5

  var swiper5 = new Swiper(".sect5 .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  //sect6

  var swiper6 = new Swiper(".sect6 .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  //sect7

  var galleryThumbs = new Swiper(".sect7_thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })
  var galleryTop = new Swiper(".sect7_top", {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  })

  //sect8

  $(".sect8_menu_l li").click(function(e) {
    e.preventDefault()

    $(".sect8_menu li").removeClass("on")
    $(this).addClass("on")

    var idx = $(this).index()

    $(".sect8_con li").fadeOut()
    $(".sect8_con li")
      .eq(idx)
      .fadeIn()
  })

  $(".sect8_menu_r li").click(function(e) {
    e.preventDefault()

    $(".sect8_menu li").removeClass("on")
    $(this).addClass("on")

    var idx = $(this).index()

    $(".sect8_con li").fadeOut()
    $(".sect8_con li")
      .eq(idx + 3)
      .fadeIn()
  })

  //sect9
})
