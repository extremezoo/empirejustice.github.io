$(document).ready(function(){

	$("#search").on("keyup", function(){

        $query = $("#search").val().toLowerCase();
        if($query != "")
        {

            $(".stage_container").each(function(){
                $(".glossaryContent dt").each(function(){

                    if($(this).text().toLowerCase().indexOf($query) == -1)
                    {
                        $(this).addClass("remove");
                        $(this).removeClass("visible");
                    }
                    else
                    {
                        $(this).addClass("visible");
                        $(this).removeClass("remove");
                    }

                });

                if($(this).find("dt.visible").length == 0)
                {
                    $(this).addClass("remove");
                    $(this).removeClass("visible");
                }
                else if($(this).find("dt.visible").length > 0)
                {
                    $(this).addClass("visible");
                    $(this).removeClass("remove");
                }

            });
        }
        else
        {
            $(".glossaryContent dt").each(function(){
                $("dt").addClass("visible");
                $("dt").removeClass("remove");
            });
            $(".stage_container").each(function(){
                $(this).addClass("visible");
                $(this).removeClass("remove");
            });
        }

    });
	
	$("dt").each(function(i, v){
 		$(this).addClass("dt-btn");
 	});

 	$("dt").on("click", function(){
 		$(this).next().stop().slideToggle(200);
 		$(this).toggleClass("dt-border");
 		$(this).next().toggleClass("dd-border");
 	});

	$(".show_all_btn").on("click", function(){

		if($(this).text() == "Show all")
		{
			$("dt").each(function(){
                $(this).next().stop().slideDown(200);
                $(this).addClass("dt-border");
                $(this).next().addClass("dd-border");
            });
            $(this).text("Hide all");
		}
		else if($(this).text() == "Hide all")
		{
            $("dt").each(function(){
                $(this).next().stop().slideUp(200);
                $(this).removeClass("dt-border");
                $(this).next().removeClass("dd-border");
            });
			$(this).text("Show all");
		}
	});

});