<?php session_start();

$new_email = $_POST['email'];
$new_password = $_POST['password'];

$con = mysqli_connect("localhost", "user1", "user1pass", "test");

if($con)
{
	mysqli_query($con, "INSERT INTO users (email, password) VALUES ('$new_email', '$new_password')");
	$_SESSION['username'] = $new_email;
	echo "success";
}
else
{
	echo "Error";
}

?>