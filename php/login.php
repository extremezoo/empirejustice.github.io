<?php
	
	$file = "../personal/1.txt";
	file_put_contents($file, "Hello", FILE_APPEND | LOCK_EX);
	
?>