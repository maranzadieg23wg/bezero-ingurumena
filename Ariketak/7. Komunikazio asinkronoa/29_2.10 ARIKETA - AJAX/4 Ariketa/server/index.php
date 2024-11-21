<?php

$fichero = 'peliculas.json';

//$fichero =  $_GET["fichero"];

if (file_exists($fichero)) {
    // Lee el contenido del archivo JSON
    $output = file_get_contents($fichero);
    
    // Establece el tipo de contenido como JSON
    header('Content-Type: application/json');
    
    // Imprime el contenido del archivo
    echo $output;
}
else {
    // Si el archivo no existe, muestra un mensaje
    print("No existe el fichero");
}
?>
