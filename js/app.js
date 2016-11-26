$(function(){

	console.log('DOM!');

	//Snow effect
	// var $body = $('body');
	

	//Header
	var $header = $('header').find('h1');
	var $line = $('header').find('.line');

	$header.fadeIn(5000);

	//PRESENTS
	var $presents = $('footer').find('.presents').children();
	
	$presents.each(function(){
	 	$(this).draggable();
 	});
		


});