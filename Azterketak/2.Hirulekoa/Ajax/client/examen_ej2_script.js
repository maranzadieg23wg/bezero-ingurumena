
let url = '../server/sea_forecast.xml';
let http = new XMLHttpRequest();
let xml = '';



// inicialización (0,5 punto)
function inicio (){
    http.onreadystatechange = function(){
        //console.log(http.status);
        if(http.readyState===4 && http.status ===200){
            //console.log(http.responseText);
            xml = (http.responseXML);
            //console.log(xml);
            cargaForecast();
        }
    
    };
    http.open("GET", url);
    http.send();
}

// carga de datos desde servidor local (1 puntos)
function cargaForecast() {
    let datak = xml.getElementsByTagName("fecha");
    console.log(datak);
    for(let i =0;i<datak.length;i++){
        
        dat = datak[i].textContent;
        console.log(dat);
        document.getElementById("datak").innerHTML+=`
        <button id="${dat}" onclick="muestraForecast(${i*2})">${dat}</button>
        `;
    }
    
}

// explotación de datos recibidos (1,5 punto)
function muestraForecast(data) {
    console.log(data);
    let hizkuntza = document.getElementById("idioma").value;

    
 
    let lekua = xml.getElementsByTagName(hizkuntza)[data].innerHTML;
    console.log(lekua);

    
    
    document.getElementById("prevision_meteo").innerHTML=lekua;


    let weatherIcon = xml.getElementsByTagName("weatherIcon")[data].innerHTML;
    let windIcon = xml.getElementsByTagName("windIcon")[data].innerHTML;
    let moonPhaseIcon = xml.getElementsByTagName("moonPhaseIcon")[data].innerHTML;
    let waveIcon = xml.getElementsByTagName("waveIcon")[data].innerHTML;

    document.getElementById("adicional").innerHTML="";

    console.log(weatherIcon);

    let lekaua = `
        <img src="../images${weatherIcon}">
        <label>Tiempo:</label>
        <img src="../images${windIcon}">
        <label>Viento:</label>
        <img src="../images${moonPhaseIcon}">
        <label>Luna:</label>
        <img src="../images${waveIcon}">
        <label>Olas:</label>
    `;
    document.getElementById("adicional").innerHTML+=lekaua;

    


}

// explotación de datos recibidos (1,5 punto)
function infoForecast () {
    
}

// visibilidad apartado información (0,5 punto)
function muestra_esconde() {
}