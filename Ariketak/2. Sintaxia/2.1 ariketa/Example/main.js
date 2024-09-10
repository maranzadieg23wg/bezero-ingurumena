function zenbakiak_eskatu (){
    let z1 = prompt("Zartu lehenengo zenbakia");
    let z2 = prompt("Zartu lehenengo zenbakia");

    

    zenbakiaBatu(z1, z2);
}

function zenbakiaBatu(z1, z2){
    z1 = parseInt(z1);
    z2 = parseInt(z2);

    if(z1>z2){
        inprimatu(z1, z2);
    }else{
        inprimatu(z2, z1);
    }
    

    
}

function inprimatu(z1, z2){
    document.getElementById('Hasiera').innerHTML = "Handiena da: "+z1;

}