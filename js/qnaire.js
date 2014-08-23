$(document).ready(function(){

	$query = window.location.href.slice(window.location.href.indexOf("?") + 1);
	$query = $query.split("=");
	$q = $query[1];

	if($q == null && location.pathname == '/qnaire.html')
	{
		window.location.href = "qnaire.html?q=1";
	}

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
		$(".qnaire-opts").append("<button class='never'>I\'m not going to</button>");
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
			if($q != 6)
			{
				window.location.href = "qnaire.html?q="+$next;
			}
			else if($q == 6)
			{
				$(".qnaire").fadeOut(150, function(){

					$(".qnaire-back").hide();
					$(".qnaire-opts").hide();
					$(this).append("<div class='reason'></div>");

					$("#question").html("You are currently at Stage 7A");
					$(".reason").text("If you successfully worked out a deal with the bank, you are at Stage 7A");
					$(".reason").append("<br><br><a href='stage7a.html'>Click here to learn more about Stage 7A</a>");

					$(this).fadeIn(200);

				});
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
					$("#question").html("You are currently at Stage 1");
					$(".reason").text("If you have not received the 90-Day Pre-Foreclosure notice yet after falling behind on mortgage payments, you are at Stage 1 of the foreclosure process.");
					$(".reason").append("<br><br><a href='stage1.html'>Click here to learn more about Stage 1 and the options you have</a>");
				}
				else if($q==2)
				{
					$("#question").html("You are currently at Stage 2");
					$(".reason").text("If you have not received the Demand Letter yet after receiving the 90-Day Pre-foreclosure notice, you are at stage 2 of the foreclosure process.");
					$(".reason").append("<br><br><a href='stage2.html'>Click here to learn more about Stage 2 and the options you have</a>");
				}
				else if($q==3)
				{
					$("#question").html("You are currently at Stage 3");
					$(".reason").text("If you have not received the Summons and Complaint notice yet after receiving the Demand Letter, you are at stage 3 of the foreclosure process.");
					$(".reason").append("<br><br><a href='stage3.html'>Click here to learn more about Stage 3 and the options you have</a>");
				}
				else if($q==4)
				{
					$("#question").html("You are currently at Stage 4");
					$(".reason").text("If you have not filed an Answer or the Notice of Appearance after receiving the Summons and Complaint notice, you are at stage 4 of the foreclosure process and should consider filing an Answer or the Notice of Appearance.");
					$(".reason").append("<br><br><a href='stage4.html'>Click here to learn more about Stage 4 and the options you have</a><br><a href='stage5.html'>Click here to learn more about filing an Answer of the Notice of Appearance (Stage 5)</a>");
				}
				else if($q==5)
				{
					$("#question").html("You are currently at Stage 6");
					$(".reason").text("If you did not attend the Settlement Conference yet, you should consider attending it.");
					$(".reason").append("<br><br><a href='stage6.html'>Click here to learn more about the Settlement Conference and the options you have (Stage 6)</a>");
				}
				else if($q==6)
				{
					$("#question").html("You are currently at Stage 7B");
					$(".reason").text("If you could not work out a deal with the bank, you are at Stage 7B");
					$(".reason").append("<br><br><a href='stage7b.html'>Click here to learn more about Stage 7B</a>");
				}

				$(this).fadeIn(200);

			});
			
		}
		else if($a == "never")
		{
			window.location.href = "qnaire.html?q=5";
		}

	});

	$(".qnaire-back").on("click", function(){
		window.location.href = "qnaire.html?q="+$prev;
	});

});
