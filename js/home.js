$(document).ready(function(){

	$(".home_menu li").click(function(){

		$(this).children("ul").stop().slideToggle(300);

	});
	$(".header_menu li").click(function () {

	    $(this).children("ul").stop().slideToggle(300);

	});

	$(".test_btn").click(function(){

		$.ajax({

			url: "php/login.php",
			success: function(){
				alert("success");
			}

		});

	});

});