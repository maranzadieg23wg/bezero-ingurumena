//let url = "http://10.14.0.2:8080/compruebaDisponibilidadXML.php";
let url = "http://192.168.1.115:8080/compruebaDisponibilidadXML.php";

function libre(){
    
    let login = document.getElementById("login").value;
    console.log(login);
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            console.log("Respuesta del servidor:", this.responseText);
            //alert(this.responseText);
            idatzi(xmlAnalizatu(this.responseText));
            
            
        } else if (this.readyState === 4) {
            // Manejar errores
            console.error("Error en la solicitud:", this.status, this.statusText);
        }

    };


    http.open('POST', url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("login=08&nocache="+Math.random);
}

function idatzi(text) {

    let dockUL = "<ul>";

    for (let i = 0; i < text.length; i++) {
        dockUL += "<li>" + text[i] + "</li>";
    }

    dockUL += "</ul>";

    document.getElementById("disponibilidad").innerHTML = dockUL;
}



function xmlAnalizatu(erantzuna){
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(erantzuna, "text/xml");


    let loginNodes = xmlDoc.getElementsByTagName("login");

    let loginValues = [];
    for (let i = 0; i < loginNodes.length; i++) {
        loginValues.push(loginNodes[i].textContent);
    }

    return loginValues;
}