$(document).ready(function(){
	
	$(".mark").mouseover(function(){
		$curr = $(this).css("background");
		$(this).css("background", "#2ABCB9");
	});

	$(".mark").mouseout(function(){
		$(this).css("background", $curr);
	});

	$(".main").on("click", ".mark", function(){

		if($(".info").length !== 0)
		{
			$(".info").remove();
		}
		$(this).append("<div class='info'>sdfdsf</div>");

	});

});