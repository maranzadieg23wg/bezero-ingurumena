function start() {
    let pasahitza = prompt("Sartu zure pasahitza");

    document.write(balidatu(pasahitza));
}

function balidatu(pas) {
    const zenbakiaDauka = /\d/;          // Jakiteko ea dagoen zenbakiren bat
    const maiuskula = /[A-Z]/;          // Jakiteko ea dagoen MAIUSKULA bat
    const minuskula = /[a-z]/;          // Jakiteko ea dagoen MINUSKULA bat
    const karaktereBereziak = /[!@#$%^&*(),.?":{}|<>]/; // Jakiteko ea dagoen karaktere ESPECIAL bat

    return zenbakiaDauka.test(pas) && 
           maiuskula.test(pas) && 
           minuskula.test(pas) &&
           karaktereBereziak.test(pas) &&
           (pas.length >= 8 && pas.length <= 16); 
}
