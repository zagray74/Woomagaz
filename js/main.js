$(function(){
        $(window).scroll(function(){
          var slidePhotoContainerHeight = $('.slide__foto').height();
          if($(this).scrollTop() > 0){
            $(".header").css("background-color", "#fff");
          } else {
            $(".header").css("background-color", "transparent");
          }
        });

    });
$(document).ready(function(){
	$('.header__burger').click(function(event){
$('.header__burger,.menu__mag').toggleClass('active');
	});
});