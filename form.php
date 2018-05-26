<?php
if (isset($_POST["name"]) && isset($_POST["phone"]) ) { 
	// Формируем массив для JSON ответа

    $subject  = 'У вас заявка с сайта camokatit.ru!';
    $message  = '<h3>Новое сообщение</h3>';
    $message .=	'<b>Имя:</b> '.$_POST["name"].'<br />';
    $message .=	'<b>Телефон:</b> '.$_POST["phone"].'<br />';
  
   $to = "v4e@mail.ru"; // "legalaid2005@yandex.ru, zamaletdin@yandex.ru" ;
   $headers  = 'MIME-Version: 1.0' . "\r\n";
   $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
   $headers .= 'From: camokatit.ru <robot@camokatit.ru>' . "\r\n";
   echo mail($to, $subject, $message, $headers);

    $result = array(
    	'name' => $_POST["name"],
    	'phone' => $_POST["phone"]
    ); 
    // Переводим массив в JSON

    echo json_encode($result); 
}

?>