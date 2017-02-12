<?php

//Paramètrage de l'email
require_once 'PHPMailer/PHPMailerAutoload.php';
require_once 'config.php';

//vérification des entrés
if(!$_POST['email']) { exit('Merci de renseigner votre e-mail');}
if(!$_POST['message'] || $_POST['message'] == ''){ exit('Vous n\'avez pas rédigé de message');}
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){ exit('Votre e-mail est mal formé');}


//envoi du mail à lucien
$mail = new PHPMailer;
$mail->CharSet = "UTF-8";

$mail->isSMTP();
$mail->Host = SMTP_HOST;
$mail->SMTPAuth = SMTP_AUT;
$mail->Username = SMTP_USERNAME;
$mail->Password = SMTP_PASSWORD;
$mail->SMTPSecure = SMTP_SECURE;
$mail->Port = SMTP_PORT;

$mail->setFrom($_POST['email'], $_POST['email']);
$mail->addAddress('chastanlucien@gmail.com', 'Lucien CHASTAN');
$mail->addReplyTo($_POST['email'], $_POST['email']);
$mail->isHTML(true);

$mail->Subject = $_POST['sujet'];
$mail->Body    = $_POST['message'] . '<p> message de : ' . $_POST['email'] . '</p>';
$mail->AltBody = $_POST['message'] . '; message de : ' . $_POST['email'];

if(!$mail->send()){
    exit('Une erreur inattendue s\'est produite, retentez dans quelques instants');
}else{
    
    
    //envoi d'un email de confirmation
    $mail = new PHPMailer;
    $mail->CharSet = "UTF-8";

    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = SMTP_AUT;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;

    $mail->setFrom('chastanlucien@gmail.com', 'Lucien Chastan');
    $mail->addAddress($_POST['email'], $_POST['email']);
    $mail->addReplyTo(SMTP_USERNAME, 'reply');
    $mail->isHTML(true);

    $mail->Subject = 'Confirmation d\'envoi';
    $mail->Body    = 'Bonjour, <br><p>J\'ai bien reçu votre message, je vous répondrez le plus rapidement possible.</p><p>Bien cordialement</p><p>Lucien Chastan<br>chastanlucien@gmail.com<br>06 77 94 14 35</p>';
    $mail->AltBody    = 'Bonjour, J\'ai bien reçu votre message, je vous répondrez le plus rapidement possible. Lucien Chastan, chastanlucien@gmail.com, 06 77 94 14 35';
    
    $mail->send();
    
    exit('ok');
} 