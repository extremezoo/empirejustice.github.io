$(document).ready(function(){

	$query = window.location.href.slice(window.location.href.indexOf("?") + 1);
	$query = $query.split("=");
	$q = $query[1];
	$next = parseInt($q)+1;
	$prev = parseInt($q)-1;

	$("#q").val($next);
	
	if($q == 1)
	{
		$(".qnaire-back button").css("display", "none");
		$("#question").html("Have you received the 90-Day Pre-foreclosure Notice?");
	}
	else if($q==2)
	{
		$("#question").html("Have you received the Demand Letter?");
	}
	else if($q==3)
	{
		$("#question").html("Have you received the Summons and Complaint notice?");
	}
	else if($q==4)
	{
		$("#question").html("Have you filed an Answer or the Notice of Appearance?");
	}
	else if($q==5)
	{
		$("#question").html("Did you attend the Settlement Conference?");
	}
	else if($q==6)
	{
		$("#question").html("Did you work out a deal with the bank at the Conference?");
	}
	else if($q < 1)
	{
		window.location.href = "qnaire.html?q=1";
	}

	$(".qnaire-opts button").on("click", function(){

		$a = $(this).attr("class");

			if($a == "y")
			{
				window.location.href = "qnaire.html?q="+$next;
			}
			else if($a == "n")
			{
				//end
			}

	});

	$(".qnaire-back").on("click", function(){
		window.location.href = "qnaire.html?q="+$prev;
	});

});