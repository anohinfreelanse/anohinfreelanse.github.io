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

$(document).ready(function(){
$('a[href^="descrip.html#about1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);
$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
return window.location.hash = target || window.location = || "http://localhost:3000/descrip.html#about1"
});
});
$('a[href^="descrip.html#infra1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});
$('a[href^="descrip.html#aktiv1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});
$('a[href^="descrip.html#komunik1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});
$('a[href^="descrip.html#shema1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});
$('a[href^="promotion.html#koncep1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});

$('a[href^="promotion.html#blago1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});

$('a[href^="action.html#acs1"]').bind('click.smoothscroll',function (e) {
e.preventDefault();

var target = this.hash,
$target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 600, 'swing', function () {
window.location.hash = target;
});
});



















});

});
