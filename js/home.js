$(document).ready(function(){

	$(".home_menu li").click(function(){

		$(this).children("ul").slideToggle(300);

	});
	$(".header_menu li").click(function () {

	    $(this).children("ul").slideToggle(300);

	});

});