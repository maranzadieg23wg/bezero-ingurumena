function zenbakiak_eskatu (){
    let z1 = prompt("Zartu lehenengo zenbakia");
    let z2 = prompt("Zartu lehenengo zenbakia");

    

    zenbakiaBatu(z1, z2);
}

function zenbakiaBatu(z1, z2){
    z1 = parseInt(z1);
    z2 = parseInt(z2);
    let z = z1+z2;

    inprimatu(z1, z2, z);
}

function inprimatu(z1, z2, z){
    document.getElementById('Hasiera').innerHTML = z1+" + "+z2+" = "+z;

}
