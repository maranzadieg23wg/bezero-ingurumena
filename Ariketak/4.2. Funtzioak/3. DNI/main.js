function start(){
    let z = prompt("Sartu DNI bat");
    z = parseInt(z);


    imp("Zure DNIa da: "+letra(ondarra(z)));


}


function ondarra(z){
    return z%23;
}


function letra(z){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    return letras[z];
}

function imp(z){
    document.write(z+"<br>");
}