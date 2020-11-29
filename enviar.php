<?php


    $destino= "alexisssevero@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $asunto = $_POST["asunto"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje; . "\nAsunto" . $asunto; 
    mail($destino,$asunto,$contenido);
    header("Location:index.html");

?>
