$(function () {
  ////////menu
	$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });

  //slider
  $('.header-slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,    
    arrows: false,
    dots: true,    
  });
       
  
});
