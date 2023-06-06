$(document).ready(function () {
  // 메뉴
  $('.submenu').hide();
  $('.gnb').hover(function(){
      $('.submenu').stop().slideDown('fast');
  }, function(){
      $('.submenu').stop().slideUp('fast');
  });


  // 슬라이드
	setInterval(slide,3000);

  function slide() {
      $('.slide-images').animate({
      marginLeft: -1200
      },1000,slideNext);
  }

  function slideNext(){
      $('.slide-images > a').eq(0).appendTo('.slide-images');
      $('.slide-images').animate({
        marginLeft: 0
      },0);
  }

  $(function(){
    $('.tabMenu > li > a').click(function(){
      $(this).parent().addClass("active").siblings().removeClass("active")
      return false;
    })
  })


})