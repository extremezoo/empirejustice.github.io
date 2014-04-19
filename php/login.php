<?php session_start();
	
	//$file = "../personal/1.txt";
	//file_put_contents($file, "Hello", FILE_APPEND | LOCK_EX);
	
	$log_email = $_POST["email"];
	$log_pass = $_POST["password"];
	
	/*$file = "../db/users.txt";
	$users = file_get_contents($file);
	$users = json_decode($users, true);*/

	//$con = new PDO('mysql:host=localhost;dbname=test','user1','user1pass');
	$con = mysqli_connect("localhost", "user1", "user1pass", "test");

	if($con)
	{

		$row = mysqli_query($con, "SELECT * FROM users WHERE email='$log_email'");

		if(mysqli_num_rows($row) == 1)
		{

			$user = mysqli_fetch_assoc($row);

			if($log_email == $user['email'] && $log_pass == $user['password'])
			{
				$_SESSION['username'] = $log_email;
				echo "Success";
			}
			elseif($log_pass != $user['password'])
			{
				echo "wrong password";
			}

		}
		else
		{
			echo "This email doesn't exist in the database";
		}

	}
	else
	{
		echo "error";
	}

	/*if(array_key_exists($log_email, $users))
	{
		$db_password = $users[$log_email];
		if($log_pass === $db_password){

			$_SESSION['email'] = $log_email;
			echo "success";
			
		}
		else{
			
			echo "wrong pass";
		
		}
	}
	else{

		if($connect)
		{
			echo "Connected";
		}
		else
		{
			echo "Error";
		}
	
	}*/


	//$myArr = array("uahmad7@yahoo.com" => "hello");

	//file_put_contents($file, json_encode($myArr));

?>