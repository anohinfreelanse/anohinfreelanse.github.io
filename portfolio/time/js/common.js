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
        $('.a_remove').on('click', function(e){
  menu.removeAttr('style');
        $(".container-button").removeClass('change');
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
$('.tarif').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#tarif').offset().top }, 1000);
  e.preventDefault();
});


$(document).ready(function () {
  $('.sl').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
   window.logo_pn = $('.logo_pn');
   window.logo_vt = $('.logo_vt');
   window.logo_sr = $('.logo_sr');
   window.logo_cht = $('.logo_cht');
   window.logo_pt = $('.logo_pt');
   window.pn = $('.pn_a');
   window.vt = $('.vt_a');
   window.sr = $('.sr_a');
   window.cht = $('.cht_a');
   window.pt = $('.pt_a');
   window.day_m = $('.day_m');
   window.m_logotips = $('.logotips')
  $(vt).on('click', function(e) {
            m_logotips.removeClass('logo-active-pn'); 
            day_m.removeClass('list_active');
            logo_vt.addClass('logo-active-pn');
            vt.addClass('list_active');
            
        });
  $(pn).on('click', function(e) {
            m_logotips.removeClass('logo-active-pn'); 
            day_m.removeClass('list_active');
            logo_pn.addClass('logo-active-pn');
            pn.addClass('list_active');
            
        });
  $(sr).on('click', function(e) {
            m_logotips.removeClass('logo-active-pn'); 
            day_m.removeClass('list_active');
            logo_sr.addClass('logo-active-pn');
            sr.addClass('list_active');
            
        });
  $(cht).on('click', function(e) {
            m_logotips.removeClass('logo-active-pn'); 
            day_m.removeClass('list_active');
            logo_cht.addClass('logo-active-pn');
            cht.addClass('list_active');
            
        });
  $(pt).on('click', function(e) {
            m_logotips.removeClass('logo-active-pn'); 
            day_m.removeClass('list_active');
            logo_pt.addClass('logo-active-pn');
            pt.addClass('list_active');
            
        });

});
window.container = $(".sent-message-right");
window.global_container = $(".contact-wrapper");
global_container.hide();
$(".connect").click(function(){
  global_container.show();
  container.show();
});
$(".b-exit").click(function(){
  global_container.hide();
  container.hide();
});
$(document).mouseup(function (e) {
    if (global_container.has(e.target).length === 0){
        global_container.hide();
        container.hide();
    }
});
});
