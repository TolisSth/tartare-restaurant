<?php
    try{
        $myPDO = new PDO('sqlite:/home/tolis/Documents/ComputerScience/Homework/webDev3/assets/database/tartaredb.db'); 
    }
    catch(Exception $e){
        echo 'Message: ' .$e->getMessage();
    }

    $nameSurname = $_REQUEST['full-name']; 
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    $myPDO = $myPDO->prepare(
        'INSERT INTO contact (name_surname, email, subject, message) VALUES (?, ?, ?, ?)');
    $myPDO->execute(array($nameSurname, $email, $subject, $message));
?>