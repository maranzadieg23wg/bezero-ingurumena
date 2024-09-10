function zenbakiak_eskatu (){
    let z1 = prompt("Zartu zenbaki bat");
    let z2 = prompt("Zartu zenbaki bat");
    let z3 = prompt("Zartu zenbaki bat");

    

    

    zenbakiaBatu(z1, z2, z3);
}

function zenbakiaBatu(z1, z2, z3){
    z1 = parseInt(z1);
    z2 = parseInt(z2);
    z3 = parseInt(z3);

    let lista = [z1, z2, z3];


    for(i=0;i<lista.length;i++){
        for(e=0;e<lista.length-i-1;e++){

            if (lista[i] < lista[i + 1]) {
                
                let temp = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = temp;
            }

        }
    }

    for(i=0;i<lista.length;i++){
        console.log(lista[i]);
    }
    
    inprimatu(lista[0]);

    
}

function inprimatu(z1, z2){
    document.getElementById('Hasiera').innerHTML = "Handiena da: "+z1;

}