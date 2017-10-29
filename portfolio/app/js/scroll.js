

$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });
   return false;
});

            $(document).ready(function(){
    var fixmeTop = $('.fix-cont').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            $('.fix-cont').css({
                position: 'fixed',
                top: '0'
            });
        } else {
            $('.fix-cont').css({
                position: 'static'
            });
        }
    });
});


