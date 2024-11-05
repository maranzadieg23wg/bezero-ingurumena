let lista =[];
let url = "http://php-fpm:8080/generaContenidos.php" //http://10.14.0.2:8080/generaContenidos.php

function siguiente(){

}

function anterior(){
    
}

function detener(){
    
}


function lortuDatuak(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        


        
        console.log(this.responseText);

    };

    http.open('GET', url);
    http.send();
}