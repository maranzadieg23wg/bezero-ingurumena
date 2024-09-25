function start(){
    let i = prompt("Sartu esaldi bat");

    console.log(i)

    
    imp("Luzeera: "+zenbatLerro(i));
    imp("Maiuskula: "+maiuskula(i));
    imp("Minuskula: "+minuskula(i));

}


function zenbatLerro(letra){
    //console.log(letra.lenght)
    return letra.length;
}

function maiuskula(letra){
    return letra.length - letra.replace(/[A-Z]/g, '').length;
}

function minuskula(letra){
    return letra.length - letra.replace(/[a-z]/g, '').length;
}


function imp(z){
    document.write(z+"<br>");
}