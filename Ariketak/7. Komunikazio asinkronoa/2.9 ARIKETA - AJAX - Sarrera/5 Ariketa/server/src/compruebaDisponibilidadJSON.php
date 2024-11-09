<?php


$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);
$login = $data["login"] ?? null;




srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);

sleep($numeroAleatorio % 2);

$disponible = ($numeroAleatorio % 2 == 0)? "si" : "no";
if($disponible == "no") {
        $alternativasAutomaticas[] = $login.$login;
        $alternativasAutomaticas[] = "123".$login;
        $alternativasAutomaticas[] = $login."_otro";
        $alternativasAutomaticas[] = $login.".a";
        $alternativasAutomaticas[] = $login."100";
}

if($disponible == "si") {
        echo "{ \n".
                "\t \"disponible\": \"si\" \n".
                "}";
}
else {
        echo "{ \n".
                "\t \"disponible\": \"no\", \n".
                "\t \"alternativas\": [ \"".
                join("\", \"", $alternativasAutomaticas)."\" ] \n".
                "}";
}
