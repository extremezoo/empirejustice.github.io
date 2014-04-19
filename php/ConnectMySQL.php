<?php

try{

$connection = new PDO('mysql:host=localhost;dbname=landmarks','user1','user1pass');
//$connection = new PDO('mysql:host=localhost;dbname=Landmark','user1','user1pass');

if($connection)

print ("You are now connected to the database");

}

catch (PDOException $e){

print ("Failed to connect!");

die();

}


?>
