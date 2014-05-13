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

		if($a == "y" && $q != 6)
		{
			if($q != 6)
			{
				window.location.href = "qnaire.html?q="+$next;
			}
			else if($q == 6)
			{
				//end
			}
		}
		else if($a == "n")
		{
			$(".qnaire").fadeOut(150, function(){

				$(".qnaire-back").hide();
				$(".qnaire-opts").hide();
				$(this).append("<div class='reason'></div>");

				if($q==1)
				{
					$("#question").html("You are currently on Stage 1");
					$(".reason").text("If you have not received the 90-Day Pre-Foreclosure notice yet, then you have recently fallen behind on mortgage payments.");
					$(".reason").append("<br><br><a href='stage1.html'>Click here to learn more about Stage 1 and to know what you should do at this point</a>");
				}
				else if($q==2)
				{
					$("#question").html("You are currently on Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet, then you have only received the 90-Day Pre-foreclosure notice.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and to know what you should do at this point</a>");
				}
				//work here
				else if($q==3)
				{
					$("#question").html("You are currently on Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet, then you have only received the 90-Day Pre-foreclosure notice.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and to know what you should do at this point</a>");
				}
				else if($q==4)
				{
					$("#question").html("You are currently on Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet, then you have only received the 90-Day Pre-foreclosure notice.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and to know what you should do at this point</a>");
				}
				else if($q==5)
				{
					$("#question").html("You are currently on Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet, then you have only received the 90-Day Pre-foreclosure notice.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and to know what you should do at this point</a>");
				}
				else if($q==6)
				{
					$("#question").html("You are currently on Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet, then you have only received the 90-Day Pre-foreclosure notice.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and to know what you should do at this point</a>");
				}


				$(this).fadeIn(200);

			});
			
		}

	});

	$(".qnaire-back").on("click", function(){
		window.location.href = "qnaire.html?q="+$prev;
	});

});