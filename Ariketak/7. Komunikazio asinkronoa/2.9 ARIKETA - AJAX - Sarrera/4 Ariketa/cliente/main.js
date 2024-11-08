let url = "http://10.14.0.2:8080/compruebaDisponibilidadXML.php";

function libre(){
    
    let login = document.getElementById("login").value;
    //console.log(login);
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            console.log("Respuesta del servidor:", this.responseText);
            //alert(this.responseText);
            idatzi(this.responseText);
            
            
        } else if (this.readyState === 4) {
            // Manejar errores
            console.error("Error en la solicitud:", this.status, this.statusText);
        }

    };


    http.open('POST', url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("login=" + login+"&nocache="+Math.random);
}

function idatzi(text){
    document.getElementById("disponibilidad").innerHTML = text;
}