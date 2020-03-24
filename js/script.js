$(function() {
  //header
  $(document).scroll(function(){
    var scrT = $(this).scrollTop()

    console.log(scrT)

    if(scrT >= 130 ){
      $('.sect1 h1').css({'position':'fixed','top':-'50'})
    }
    
    
    else{
      $('.sect1 h1').css({'position':'absolute','top':'300'})
    }
  })
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

  var swiper3 = new Swiper(".sect3 .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
  })

  $(".sect3_menu").click(function(e) {
    e.preventDefault()

    $(".sect3_menu").removeClass("on")
    $(this).addClass("on")

    var href = $(this).attr('href')

    $(".sect3_box .box").stop().removeClass('on')
    $(href).addClass('on')

  })

  $(".group1").colorbox({rel:'group1'});



  

  //////////////////////////////////// sect4 ///////////////////////////////

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

  $(".sect4").mouseenter(function() {
    $(".sect4_people img").addClass("sect4_people_on")
    $(".sect4_move img").addClass("sect4_move_ko")
    $(".sect4_paper img, .sect4_move img").css("margin","0px")
    $(".sect4_paper_click").css("opacity","1")
  })


  $(".sect4").mouseleave(function() {
    $(".sect4_paper_click").css("opacity","0")
    $(".sect4_paper img").css({
      "width": "200px",
      "height": "200px",
      "z-index":"9990"
    })
    $(".sect4_move img").css("z-index","9980")
    $(".sect4_paper img, .sect4_move img").css("margin","-400px")
  })
    
    


  $(".sect4_paper img").click(function(){
    $(".sect4_paper img").css({
      "width": "400px",
      "height": "400px" ,
      "z-index":"9980"
    })
    $(".sect4_paper_click").css("opacity","0")
    $(".sect4_move img").css("z-index","9990")
  })


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

  $(".sect6_menu6 h6").click(function() {
    $(".sect6_menu6 h3").fadeToggle()
  })

  $(".sect6").mouseenter(function(){
    $(".sect6_menu6 h4, .sect6_menu6 h5").css("margin-left","0px")
  })
  
  $(".sect6").mouseleave(function(){
    $(".sect6_menu6 h4, .sect6_menu6 h5").css("margin-left","-400px")
  })


  //sect7

  var galleryThumbs = new Swiper(".sect7_thumbs", {
    spaceBetween: 15,
    slidesPerView: 5,
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


  $('.sect7_thumbs > div > div').click(function(){
    $('.sect7_thumbs > div > div').removeClass('.swiper-slide-active')
    $(this).addClass('.swiper-slide-active')
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
