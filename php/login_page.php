<?php session_start();



?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;">
    <meta name="author" content="Umair Ahmad">
    <link type="text/css" rel="stylesheet" href="css/foundation.css">
    <link type="text/css" rel="stylesheet" href="css/login.css">
    <link type="text/css" rel="stylesheet" href="css/base.css">
    <link type="text/css" rel="stylesheet" href="css/header.css">
    <link type="text/css" rel="stylesheet" href="css/stage.css">
    <link type="text/css" rel="stylesheet" href="css/checklist.css">
</head>
<body>
    
    <div class="nav_bar noSelect">
        <div class="logo">
            <a href="index.html">
                <img alt="Logo" src="images/logo.jpg">
            </a>
        </div>
        <div class="page_title">
            <ul class="header_menu">
                <li>Login</li>
            </ul>
        </div>
    </div>

    <div class="login container">
        <div class="header">
            <h3><b>Login</b></h3>
		</div>
        <div class="form">
            <form method="POST" action="">
                <label><h4>Email:</h4></label>
                <input type="text" class="log_email" placeholder="example@hotmail.com">
                <label><h4>Password:</h4></label>
                <input type="password" class="log_password" placeholder="password">
            </form>
        </div>
        <div class="footer">
            <button class="login_btn">Get my checklist</button>
        </div>
 	</div>


    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/checklist.js"></script>
</body>
</html>