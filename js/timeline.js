$(document).ready(function(){
	
	if($("#page_id").val("s1"))
	{
		$(".s1").css("background", "");
	}

	$(".mark").mouseover(function(){
		$curr = $(this).css("background");
		$(this).css("background", "#2ABCB9");
	});

	$(".mark").mouseout(function(){
		$(this).css("background", $curr);
	});

	$(".main").on("click", ".mark", function(){

		if($(".overview").length !== 0)
		{
			$(".overview").remove();
		}
		$(".tl_bar").append("<div class='overview'><div class='info'></div></div>");
		$selection = $(this).attr("class");

		if($selection == "mark s1")
		{
			$(".info").append("<input type='hidden' val='s1_vis'><b>Stage 1</b>");
			$(".overview").css("top", "350px");
			$("#vis_id").val("s1");
		}
		else if($selection == "mark s2")
		{
			$(".info").append("<b>Stage 2</b>");
			$(".overview").css("top", "300px");
			$("#vis_id").val("s2");
		}
		else if($selection == "mark s3")
		{
			$(".info").append("<b>Stage 3</b>");
			$(".overview").css("top", "250px");
		}
		else if($selection == "mark s4")
		{
			$(".info").append("<b>Stage 4</b>");
			$(".overview").css("top", "200px");
		}
		else if($selection == "mark s5")
		{
			$(".info").append("<b>Stage 5</b>");
			$(".overview").css("top", "150px");
		}
		else if($selection == "mark s6")
		{
			$(".info").append("<b>Stage 6</b>");
			$(".overview").css("top", "100px");
		}
		else if($selection == "mark s7")
		{
			$(".info").append("<b>Stage 7</b>");
			$(".overview").css("top", "50px");
		}
		else if($selection == "mark s8")
		{
			$(".info").append("<b>Stage 8</b>");
		}


	});
	
	$(document).click(function(event) {

    	if($(event.target).parents().index($('.tl_bar')) == -1) {
        	if($('.overview').is(":visible")) {
            	$('.overview').hide();
        	}
    	}

    	
	});


});