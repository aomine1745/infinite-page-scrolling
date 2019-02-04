$(window).scroll(function(){
	if($(window).scrollTop() >= $(document).height() - $(window).height() - 500){
		$('.infinite').append('<div></div>');
	}
})