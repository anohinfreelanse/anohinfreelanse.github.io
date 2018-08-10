$(function() {

$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
});
$(document).ready(function(){
	$('a').click(function(){
	$('.nav__link-menu').css("color","#41445b");
	$(this).css("color","rgb(255,255,255)");
});
});
$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
    
}
else {
    console.log('Scroll down');
}
});
});
