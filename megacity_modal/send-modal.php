<?php
header('Content-type: text/plain; charset=utf-8');

//var_dump($_POST);

if(isset($_POST['phone'])) {
    
    $date = date("d.m.Y");
    $time = date("H:i:s");
    $category = $_POST['category'];
    $rooms = $_POST['rooms'];
    $district = $_POST['district'];
    $type = $_POST['type'];
    $cost = $_POST['cost'];
    $rcount = $_POST['rcount']; 
    $name=$_POST['name']; 
    $phone=$_POST['phone'];
    $email=$_POST['email'];

    $mess="<table border='1'>
  <tr>
    <th>Дата</th>
    <th>Время</th>
    <th>Категория</th>
    <th>Кол-во комнат</th>
    <th>Район</th>
    <th>Наличие ремонта</th>
    <th>Стоимость</th>
    <th>Количество квартир</th>
    <th>Имя</th>
    <th>Телефон</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>$date</td>
    <td>$time</td>
    <td>$category</td>
    <td>$rooms</td>
    <td>$district</td>
    <td>$type</td>
    <td>$cost</td>
    <td>$rcount</td>
    <td>$name</td>
    <td>$phone</td>
    <td>$email</td>
  </tr>
</table>"; 
    
    // $to - кому отправляем 
    $to = 'meggacity@mail.ru';

    $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
    $title = 'Заявка с сайта';
     
    mail($to, $title, $mess, $headers); 

    header('Location: success.php');
}

?>
