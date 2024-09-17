function start(){
    let pasahitza = prompt("Sartu zure pasahitza");

}



function balidatu(cadena) {
    const zenbakiaDauka = /\d/;          // Expresión regular para encontrar un número
    const maiuskula = /[A-Z]/;    // Expresión regular para encontrar una letra mayúscula
    const minuskula = /[a-z]/;    // Expresión regular para encontrar una letra minúscula

    return zenbakiaDauka.test(cadena) && 
            maiuskula.test(cadena) && 
            minuskula.test(cadena);
}