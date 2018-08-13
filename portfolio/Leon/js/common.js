$(function() {

$(document).ready(function () {
 
    function Scroll_block(){
        var scroll_top = $(document).scrollTop();
        $(".nav__header-li-menu a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(".right-fixed-menu li.active").parent().removeClass("active");
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
    }
 
 
    $(document).on("scroll", Scroll_block);
 
    $(".nav__link-menu").click(function(){
 		$('.nav__header-li-menu').removeClass("active");
        $(document).off("scroll");
        $(".nav__header-li-menu.active").parent().removeClass("active");
        $(this).parent().addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 1200, function(){
            window.location.hash = hash;
            $(document).on("scroll", Scroll_block);
        });
 
    });
 
});
$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
    window.scrollBy(0, -window.innerHeight)
}
else {
    window.scrollBy(0, window.innerHeight)
}
});
$(document).ready(function(){
	$(".questions__punct").click(function(){
		$('.questions__punct').removeClass('questions__active');
		$(this).addClass('questions__active');
	})
})
$(document).ready(function(){
	$(".change-point__big-circle").click(function(){
		$('.change-point__big-circle').removeClass('active-circle');
		$(this).addClass('active-circle');
	})
})
$(document).ready(function(){
	var wid = $(window).width()
	if(wid > 480){
	$('.questions__punct-three').click(function(){
		$('.change-text-questions').css('display', 'none');
		$('.change-text-questions3').css('display', 'block');
	});
	$('.questions__punct-one').click(function(){
		$('.change-text-questions').css('display', 'none');
		$('.change-text-questions1').css('display', 'block');
	});
	$('.questions__punct-two').click(function(){
		$('.change-text-questions').css('display', 'none');
		$('.change-text-questions2').css('display', 'block');
	});
	$('.questions__punct-four').click(function(){
		$('.change-text-questions').css('display', 'none');
		$('.change-text-questions4').css('display', 'block');
	});} else if (wid <= 480){
	$('.questions__punct-three').click(function(){
		$('.questions__toggle-text3').toggle();
	});
	$('.questions__punct-one').click(function(){
		$('.questions__toggle-text1').toggle();
	});
	$('.questions__punct-two').click(function(){
		$('.questions__toggle-text2').toggle();
	});
	$('.questions__punct-four').click(function(){
		$('.questions__toggle-text4').toggle();
	});
	}
})

$(document).ready(function(){
	$('.change-point__big-circle-one').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work1').css('display', 'block');
		$('.wrapper-text-how1').css('display', 'block')
	})
	$('.change-point__big-circle-2').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work2').css('display', 'block');
		$('.wrapper-text-how2').css('display', 'block')
	})
	$('.change-point__big-circle-3').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work3').css('display', 'block');
		$('.wrapper-text-how3').css('display', 'block')
	})
	$('.change-point__big-circle-4').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work4').css('display', 'block');
		$('.wrapper-text-how4').css('display', 'block')
	})
	$('.change-point__big-circle-5').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work5').css('display', 'block');
		$('.wrapper-text-how5').css('display', 'block')
	})
	$('.change-point__big-circle-6').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work6').css('display', 'block');
		$('.wrapper-text-how6').css('display', 'block')
	})
	$('.change-point__big-circle-7').click(function(){
		$('.how-it-work-img').css('display', 'none');
		$('.wrapper-text-how').css('display', 'none');
		$('.how-it-work7').css('display', 'block');
		$('.wrapper-text-how7').css('display', 'block')
	})
})
$(document).ready(function(){
	$('.button-solutions').click(function(){
		$('.button-solutions').css('background-color', '#9194a5');
		$('.problem-solution').css('display', 'none');
		$(this).css('background-color', '#f5f5f5');
	})
	$('.traditional-system').click(function(){
		$('.problem-solution1').css('display', 'block')
	})
	$('.CyptoLoan').click(function(){
		$('.problem-solution2').css('display', 'block')
	})
})
$(document).ready(function(){
$('.sl-team').slick({
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "10%",
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.about-us').slick({
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "10%"
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.grafic').slick({
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: "10%",
        infinite: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
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
		        if(wid > 1025 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
        $('.a_remove').on('click', function(e){
  menu.removeAttr('style');
        $(".container-button").removeClass('change');
});});
});
