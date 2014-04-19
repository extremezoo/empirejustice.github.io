$(document).ready(function(){

	$(".home_menu li").click(function(){

		$(this).children("ul").stop().slideToggle(300);

	});
	$(".header_menu li").click(function () {

	    $(this).children("ul").stop().slideToggle(300);

	});

	$(".ques button").on("click", function(){

		if($(".ques_info").length === 0){
			$(".ques").append("<div class='ques_info'>Click on the torch to get back home<br>Click on the title to see the menu</div>");
		}
		
		$(".ques_info").toggle(100);

	});
    /*$(window).bind('DOMMouseScroll', function(e){
    	if(e.originalEvent.detail > 0) {
        	//scroll down
        	$(".nav_bar").fadeOut();
     	}
     	else{
        	//scroll up
         	$(".nav_bar").fadeIn();
     	}
 	});

 	$(window).bind('mousewheel', function(e){
    	if(e.originalEvent.wheelDelta < 0) {
        	//scroll down
        	$(".nav_bar").fadeOut();
     	}
     	else {
        	//scroll up
        	$(".nav_bar").fadeIn();
    	}
 	});*/

	$(window).on("scroll", function(){

		$offset = $(window).scrollTop() - 1;
		$curr = $(window).scrollTop();

		if($curr == $offset)
		{
			$(".nav_bar").fadeOut();
		}

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