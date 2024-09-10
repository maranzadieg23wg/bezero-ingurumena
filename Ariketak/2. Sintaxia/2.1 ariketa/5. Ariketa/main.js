function zenbakiak_eskatu (){
    let z1 = prompt("Zartu zenbaki bat jakiteko zatigarria den birekin");
    
    z1*=1;

    

    zenbakiaBatu(z1);
}

function zenbakiaBatu(z1){
    
    if (z1%2 ==0){
        inprimatu("Zatitu daiteke");
    }else{
        inprimatu("Ezin da zatitu");
    }

    
}

function inprimatu(z1){
    document.getElementById('Hasiera').innerHTML = z1;

}