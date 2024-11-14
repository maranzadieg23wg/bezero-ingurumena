let url = "http://10.14.0.2:8080/cargaProvinciasJSON.php";
let url1 = "http://10.14.0.2:8080/proba.php"
//let url = "http://192.168.1.115:8080/compruebaDisponibilidadXML.php";

function libre(){
    
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            //console.log("Respuesta del servidor:", this.responseText);
            //alert(this.responseText);
            idatzi(jsonAnalizatu(this.responseText), "herrialdea");
            
            
        } else if (this.readyState === 4) {
            // Manejar errores
            //console.error("Error en la solicitud:", this.status, this.statusText);
        }

    };


    

    //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //http.send("login=" + login+"&nocache="+Math.random);
    http.open('POST', url, true);
    http.send();
}


function herriaAukeratu(id){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        

       
        
        if (this.readyState === 4 && this.status === 200) {
            //console.log("Respuesta del servidor:", this.responseText);
            //console.log("Respuesta del servidor:", this.responseXML);
            //alert(this.responseText);
            idatzi(jsonAnalizatu(this.responseText), "herria");
            
            
        } else if (this.readyState === 4) {
            // Manejar errores
            //console.error("Error en la solicitud:", this.status, this.statusText);
        }

    };


    http.open('POST', url1, true);

    
    //console.log("id:", id);
    if(id < 10){
        id = "0" +id;
    }
    //console.log("Provincia: "+provincia);
    
    http.setRequestHeader("Content-Type", "application/json");
    //console.log(JSON.stringify({"provincia": id, nocache: Math.random()}));
    http.send(JSON.stringify({"provincia": id, nocache: Math.random()}));

    //http.send();
}


function idatzi(text, non) {

    //console.log(text);
    
    let lista = document.getElementById(non);

    lista.innerHTML = "";

    for (let i = 0; i < text.length; i++) {

        //console.log(text[i]+ " "+(i+1));

        let option = document.createElement("option");
        option.value = i+1;
        option.text = text[i];

        lista.appendChild(option);
    }

    
}



function jsonAnalizatu(erantzuna) {
    console.log(erantzuna);
    let data = JSON.parse(erantzuna);

    let clavesOrdenadas = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b)); 

    let loginValues = clavesOrdenadas.map(key => data[key]);


    
    return loginValues;
}
