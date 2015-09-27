<?php
header('Content-type: text/plain; charset=utf-8');
if(isset($_POST['name'])) {
    $name=$_POST['name']; 
    $email=$_POST['email'];
    
    $mess="
    Имя: $name </br>
    Email: $email"; 
    
    // $to - кому отправляем 
    $to = '';

    $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
    $title = 'Заявка на подписку с сайта';
     
    mail($to, $title, $mess, $headers);

    header('Location: success.php');
}
?>
