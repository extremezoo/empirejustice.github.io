<?php session_start();
	
	//$file = "../personal/1.txt";
	//file_put_contents($file, "Hello", FILE_APPEND | LOCK_EX);
	
	$log_email = $_POST["email"];
	$log_pass = $_POST["password"];
	
	$file = "../db/users.txt";
	$users = file_get_contents($file);
	$users = json_decode($users, true);

	
	
	if(array_key_exists($log_email, $users))
	{
		$db_password = $users[$log_email];
		if($log_pass === $db_password){

			$_SESSION['email'] = $log_email;
			//header("Location: //localhost/team4/checklist.php");
			echo "success";
			
		}
		else{
			
			echo "wrong pass";
		
		}
	}
	else{

		echo "no email";
	
	}


	//$myArr = array("uahmad7@yahoo.com" => "hello");

	//file_put_contents($file, json_encode($myArr));

?>