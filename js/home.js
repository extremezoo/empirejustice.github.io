$(document).ready(function(){

    // $(".nav_bar .foundicon-home").hover(function(){
    //     $(".ejc_logo").addClass("logo-hover");
    // });
    // $(".nav_bar .foundicon-home").on("mouseout", function(){
    //     $(".ejc_logo").removeClass("logo-hover");
    // });

    $("#search_stage").on("keyup", function(){

        $query = $("#search_stage").val().toLowerCase();
        if($query != ""){

            $(".stage_container, .faqs_container").each(function(){
                // $("div", this).each(function(){

                    if($(this).text().toLowerCase().indexOf($query) == -1){
                        $(this).addClass("remove");
                        $(this).removeClass("visible");
                    }else{
                        $(this).addClass("visible");
                        $(this).removeClass("remove");
                    }

                // });

                // if($(this).find("div.visible").length == 0)
                // {
                //     $(this).addClass("remove");
                //     $(this).removeClass("visible");
                // }
                // else if($(this).find("div.visible").length > 0)
                // {
                //     $(this).addClass("visible");
                //     $(this).removeClass("remove");
                // }

            });
        }else{
            
            $(".stage_container,faqs_container div").each(function(){
                $(this).addClass("visible");
                $(this).removeClass("remove");
            });
            $(".stage_container,faqs_container").each(function(){
                $(this).removeClass("remove");
                $(this).addClass("visible");
            });
        }

    });

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

	$(document).click(function(e){
    	var elem = $(e.target).attr('id'); //this should give you the clicked element's id attribute
    	if(elem !== 'menu-1'){
        	$('.list-1').slideUp(200); //or however you want to hide it
    	}
    	if(elem !== 'menu-2'){
        	$('.list-2').slideUp(200); //or however you want to hide it
    	}
    	if(elem !== 'menu-3'){
        	$('.list-3').slideUp(200); //or however you want to hide it
    	}
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

});
