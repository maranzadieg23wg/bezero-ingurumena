let lista =[];
//let url = "http://php-fpm/generaContenidos.php"; //http://10.14.0.2:8080/generaContenidos.php
let url = "http://10.14.0.2:8080/generaContenidos.php";

let jarraitu = true;

let pos = 0;

function siguiente(){
    if(lista[pos+1] !==undefined){
        pos++;
        idatzi(lista[pos]);
    }

}

function anterior(){
    if(lista[pos-1] !==undefined){
        pos--;
        idatzi(lista[pos]);
    }
    
}

function detener(){
    jarraitu = false;
    clearInterval(temo);
}


function lortuDatuak(){

    
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            console.log("Respuesta del servidor:", this.responseText);
            lista.push(this.responseText);
            idatzi(this.responseText);
            pos++;
            
        } else if (this.readyState === 4) {
            // Manejar errores
            console.error("Error en la solicitud:", this.status, this.statusText);
        }else{
            console.error("Ha petado por todo los lados ")
        }

    };

    http.open('GET', url, true);
    http.send();
}
let temo;
if(jarraitu){
    temo = setInterval(lortuDatuak, 1000);
}


function idatzi (text){

    document.getElementById("ticker").innerHTML = text;
}