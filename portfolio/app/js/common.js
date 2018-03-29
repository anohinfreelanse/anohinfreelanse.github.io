$(function() {

$('.glavn1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#glavn1').offset().top }, 1000);
  e.preventDefault();
});
$('.action1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#action1').offset().top }, 1000);
  e.preventDefault();
});
$('.adventage1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#adventage1').offset().top }, 1000);
  e.preventDefault();
});
$('.galerey1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#galerey1').offset().top }, 1000);
  e.preventDefault();
});
$('.nature1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#nature1').offset().top }, 1000);
  e.preventDefault();
});




});
