$(document).ready(function(){

	$(".cl_btn").click(function(){

		$.ajax({

			url: "php/login.php",
			method: "POST",
			data: "",
			success: function(){

			}

		});

	});

});