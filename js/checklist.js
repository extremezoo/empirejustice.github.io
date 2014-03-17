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

	$(".login").on("click", ".login_btn", function(){

		$email = $(".log_email").val();
		$password = $(".log_password").val();
		$data = {"email": $email, "password": $password};

		$.ajax({

			url: "php/login.php",
			method: "POST",
			data: $data,
			success: function(res){
				
				if(res === "success"){
					$(".cover").remove();
				}

			}

		});

	});

	$(".cb input[type='checkbox']").on("click", function(){

		$cb_id = $(this).attr("id");

		$data = {"id": $cb_id};
		$.ajax({

			url: "php/update_data.php",
			method: "POST",
			data: $data,
			success: function(res){

				

			}

		});

	});

});