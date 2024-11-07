let url = "http://10.14.0.2:8080/compruebaDisponibilidad.php";

function libre(){
    
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            console.log("Respuesta del servidor:", this.responseText);
            alert(this.responseText);
            document.getElementById("disponibilidad").innerHTML = this.responseText;
            
            
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