<?php

header('Access-Control-Allow-Origin: *');

if (isset($_POST["subject"])) {


    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $from = $_POST['email'];
    $message = $_POST['message'];
	$to = 'rafael.heard@gmail.com';


	mail($to, $subject, $message, $from);
    

}else{
	echo 'not set';
}
?>