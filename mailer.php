<?php
	$sender_name = $_POST['InputName'];
	$sender_email = $_POST['InputEmail'];
	$phone = $_POST['InputPhone'];
	
	$mail_body = $_POST['InputMessage'];
	
	$body = $sender_name." sent a new message for you<br><br> Name: ".$sender_name."<br>Email: ".$sender_email."<br>Phone: ".$phone."<br>Message: ".$mail_body;
	
	sendMail($sender_name , $sender_email, $body);
	
	function sendMail($sender, $sender_mail, $body) {
		$to = 'zannatsumaiya.official@gmail.com'; // Set Receiver Email Here
		$myemail = 'sender@domain.com'; // Set Sender Email Here
		$subject = "New MapleBPO Client"; // Set Subject Here
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";            
		$headers .= "From: MapleBPO <sender@domain.com>\r\n"; // Set Header Here
		
		$message = $body;
		
		$sentmail = mail($to,$subject,$message,$headers);
		if($sentmail) { 
			 echo "Thank you for your submission. We will reply you very soon."; 
			header("location:index.php?success");}
		else { echo "Mail not sent"; }
	}

?>

