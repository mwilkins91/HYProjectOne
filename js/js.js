$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	 if (target.length) {
		  $('html, body').animate({
			   scrollTop: target.offset().top
		  }, 1000);
	 return false;
	 }
	}
  });

	 $('.toTop').click(function(event) {
		  $("html, body").animate({ scrollTop: 0 }, 500);
	 });

	 $('.downButton').click(function(event) {
		  $("html, body").animate({ scrollTop: $("#aboutUs").offset().top }, 500);
	 });
	 $('.resBtn').click(function(event) {
		  $("html, body").animate({ scrollTop: $("#reservations").offset().top }, 500);
	 });
	 
	 $('.openMenu').click(function(event) {
	 	$('.navMainLi').toggleClass('open');
	 	if($('.openMenu').text() == 'Menu') {
		 	$('.openMenu').css({
		 		top: '10%',
		 		left: '80%',
		 		position: 'fixed',
		 		'z-index': '99999999999999'
		 	});
		 	$('.openMenu').text('X');
		 }
		 else if($('.openMenu').text() == 'X'){
		 	$('.openMenu').text('Menu');
		 	$('.openMenu').removeAttr('style');
		 }
	 });
	 $('.navMain a').click(function(event) {
	 	/* Act on the event */
	 	$('.navMainLi').removeClass('open');
	 	$('.openMenu').text('Menu');
		$('.openMenu').removeAttr('style');
	 });

});