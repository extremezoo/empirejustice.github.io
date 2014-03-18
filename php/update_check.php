<?php session_start();

	if(isset($_SESSION['email'])){
		
		$email = $_SESSION['email'];
		$cb = $_POST["id"];
		$action = $_POST["action"];

		$checks_file = "../db/checks.txt";

		$checks = json_decode(file_get_contents($checks_file), true);

		if($action === "add")
		{	

			if($checks != NULL)
			{	

				if(array_key_exists($email, $checks)) //email exists
				{

					if(!in_array($cb, $checks[$email]))
					{
						array_push($checks[$email], $cb);
						file_put_contents($checks_file, json_encode($checks));
					}
					else
					{
						//do nothing
					}

				}
				else
				{
					
					$new_checklist = array($email => array($cb));
					$new_checklist = array_merge($checks, $new_checklist);
					file_put_contents($checks_file, json_encode($new_checklist));
				}
			}
			else
			{
				$new_checklist = array($email => array($cb));
				file_put_contents($checks_file, json_encode($new_checklist));
			}

		}
		elseif($action === "remove")
		{
			if(!in_array($cb, $checks[$email]))
			{
				//do nothing
			}
			else
			{
				$key = array_search($cb, $checks[$email]);
				unset($checks[$email][$key]);
				file_put_contents($checks_file, json_encode($checks));
			}
		}

	}

	else{
		//do nothing
	}

?>