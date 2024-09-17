function start (){
    let radio = prompt ("Sartu radio bat");

    radio = parseFloat(radio);

    let zir = zirkuferentzia(radio);
    let di = diametro(radio);
    let az = azalera(radio);
    let bol = bolumena(radio);

    imp ("Zirkunferentzia: "+zir+"<br>");
    imp ("Diametroa: "+di+"<br>");
    imp ("Azalera: "+az+"<br>");
    imp ("Bolumena "+bol+"<br>");

}


function zirkuferentzia (radio){
    return 2*Math.PI*radio;
}


function diametro (rad){
    return 2*rad;
}

function azalera(rad){
    return Math.PI * (rad**2);
}

function bolumena(rad){
    return (4/3)*Math.PI * (rad**3);
}


function imp(z){
    document.write(z)
}