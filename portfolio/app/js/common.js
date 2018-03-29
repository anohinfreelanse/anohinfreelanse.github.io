$(function() {
	
$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.nav');

  $(touch).click(function(){
    $(menu).animate({
      width: "toggle"
    });
  });

		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 992 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});
$('.m-how').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#m_how').offset().top }, 1000);
  e.preventDefault();
});
$('.m-why').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#m_why').offset().top }, 1000);
  e.preventDefault();
});
$('.m-tar').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#m_tar').offset().top }, 1000);
  e.preventDefault();
});
$('.m-calc').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#m_calc').offset().top }, 1000);
  e.preventDefault();
});
$('.norm-kol').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#norm-kol').offset().top }, 1000);
  e.preventDefault();
});

});
