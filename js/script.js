$(function() {
  //header
  $(document).scroll(function(){
    var scrT = $(this).scrollTop()

    // console.log(scrT)

    if(scrT >= 170 ){
      $('.sect1 h1').css({'position':'fixed','top':-170})
      $('header').addClass('on')
      $('header li a').addClass('on')
    }
    
    else{
      $('.sect1 h1').css({'position':'absolute','top':100})
      $('header').removeClass('on')
      $('header li a').removeClass('on')
    }
  })
  // sect1

  var swiper1 = new Swiper(".sect1 .swiper-container", {
    pagination: {
      el: ".sect1 .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  })


  //   sect2

  var swiper2 = new Swiper(".sect2 .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
  })

  $(".sect2_menu").click(function(e) {
    e.preventDefault()

    $(".sect2_menu").removeClass("on")
    $(this).addClass("on")

    var href = $(this).attr("href")

    $(".sect2_box .box")
      .stop()
      .removeClass("on")
    $(href).addClass("on")
  })

  $(".group1").colorbox({ rel: "group1" })



  // sect3

  $(".sect3_btn li").click(function() {
    $(".sect3_btn li").removeClass("on")
    $(this).addClass("on")

    var idx = $(this).index()

    $(".sect3_box li")
      .stop()
      .fadeOut()
    $(".sect3_box li")
      .eq(idx)
      .stop()
      .fadeIn()
  })

  //sect4

  var swiper4 = new Swiper(".sect4 .swiper-container", {
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

  
//sect5

var galleryThumbs = new Swiper(".sect5_thumbs", {
  spaceBetween: 15,
  slidesPerView: 5,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
})
var galleryTop = new Swiper(".sect5_top", {
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


$('.sect5_thumbs > div > div').click(function(){
  $('.sect5_thumbs > div > div').removeClass('.swiper-slide-active')
  $(this).addClass('.swiper-slide-active')
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

  $(".sect6_menu6 p").click(function() {
    $(".sect6_menu6 h2").fadeToggle(200,function(){
      $(".sect6_menu6 h3").fadeToggle(300)
    })
  })



  $(".sect6").mouseenter(function(){
    $(".sect6_menu6 h4, .sect6_menu6 h5").css("margin-left","0px")
  })
  
  $(".sect6").mouseleave(function(){
    $(".sect6_menu6 h4, .sect6_menu6 h5").css("margin-left","-400px")
  })

  $(".sect6").mouseleave(function() {
    $(".sect6_menu6 h4, .sect6_menu6 h5").css("margin-left", "-400px")
  })



  //////////////////////////////////// sect7 ///////////////////////////////

  // 섹트4의 오토바이 그림위 배달안내 스크립트 / 아직 css하지 않은 상황. 수정 중에 있음 /

  $(document).scroll(function() {
    var scrT = $(this).scrollTop()

    if (scrT >= 900) {
      $(".sect7_effact1").fadeIn(600)
      $(".sect7_effact2").fadeIn(2000)
      $(".sect7_effact3").fadeIn(3200)
    } else {
      $(".sect7_effact").fadeOut(100)
    }
  })



  $(".sect7").mouseenter(function() {
    $(".sect7_people img").addClass("sect7_people_on")
    $(".sect7_move img").addClass("sect7_move_ko")
    $(".sect7_paper img, .sect7_move img").css("margin", "0px")
    $(".sect7_paper_click").css("opacity", "1")
  })

  $(".sect7").mouseleave(function() {
    $(".sect7_paper_click").css("opacity", "0")
    $(".sect7_paper img").css({
      width: "200px",
      height: "200px",
      // "z-index": "2",
    })
    // $(".sect7_move img").css("z-index", "5")
    $(".sect7_paper img, .sect7_move img").css("margin", "-400px")
  })

  $(".sect7_paper img").click(function() {
    $(".sect7_paper img").css({
      width: "400px",
      height: "400px",
      // "z-index": "2",
    })
    $(".sect7_paper_click").css("opacity", "0")
    // $(".sect7_move img").css("z-index", "6")
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
