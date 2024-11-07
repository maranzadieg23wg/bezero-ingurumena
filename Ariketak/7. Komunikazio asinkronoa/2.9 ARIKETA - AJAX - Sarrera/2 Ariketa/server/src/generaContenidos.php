<?php
// Agregar las cabeceras CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Responder a las solicitudes OPTIONS y detener el script
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Frases de contenido de las que se selecciona aleatoriamente una de ellas
$frases = array(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Integer augue. Maecenas vel arcu.",
    "Nunc ipsum enim, pretium vel, blandit quis, rutrum sit amet, mauris.",
    "Proin at lectus mattis elit facilisis aliquam.",
    "Sed accumsan, neque in luctus egestas, ipsum enim hendrerit massa, at venenatis felis purus sed velit.",
    "Mauris sit amet magna ut leo ullamcorper semper.",
    "Vivamus venenatis consequat massa.",
    "Praesent erat justo, varius eu, porta at, sollicitudin in, nibh.",
    "Aenean ligula ante, vehicula sit amet, vestibulum eu, mattis non, mauris.",
    "Ut suscipit fermentum eros. Nullam ut mauris vel eros placerat cursus.",
    "Praesent non lectus. Nam condimentum nisi nec felis.",
    "Sed tincidunt ullamcorper pede.",
    "Curabitur facilisis, quam sed egestas tincidunt, justo nisl tempor odio, non auctor metus sapien sed risus.",
    "Fusce risus lectus, consequat at, molestie sit amet, auctor tristique, massa.",
    "Mauris vitae nisi. Aliquam tempus.",
    "Etiam eu neque sit amet nibh tempus lacinia.",
    "Nunc rutrum lorem eu erat. Proin ac felis. Fusce commodo leo."
);

// Generar un número aleatorio para seleccionar una frase
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, count($frases)-1);

// La respuesta del script es una frase seleccionada aleatoriamente
echo $frases[$numeroAleatorio];
?>
