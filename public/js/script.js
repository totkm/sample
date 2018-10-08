$(window).on('scroll', function (){
  if($(window).scrollTop() >= 3){
  	$('.navbar').css('background-color', 'white');
  	$('.navbar .left').css('color', '#189da5');
  	$('.navbar .menu-right li button').css('color', '#189da5');
  }else{
  	$('.navbar').css('background-color', '');
  	$('.navbar .left').css('color', '');
  	$('.navbar .menu-right li button').css('color', '');
  }
});
$('.navbar .menu-right #about-btn').on('click', function () {
  $('html, body').animate({scrollTop: $('.aboutOne').position().top}, 1000);
});
$('.navbar .menu-right #contact-btn').on('click', function () {
  $('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
});

function appear () {
	$('.header .info').animate({'margin-top': 0}, 1000);
}

$(window).on('scroll',function () {
		if($(window).scrollTop() >= $('.contact').position().top - 100){
		$('.contact .vertical-center .contactInfo').animate({'margin-top': 0}, 500);
	}
});

appear();
