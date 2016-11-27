$(function(){

	console.log('DOM!');

	//Header
	var $header = $('header').find('h1');
	var $line = $('header').find('.line');

	$header.fadeIn(2000);


	//PRESENTS
	var $presents = $('footer').find('.presents').children();
	
	$presents.each(function(){
	 	$(this).draggable();
 	});

 	//Add sounds
 	var $audio = $('header').find('.music').get(0);
 	console.log($audio);

 	$header.on("mouseover", function(){
		$audio.play();
		$header.animate({color: "blue"},0).animate({color:"white"},10000);
 	});





 		
	


});