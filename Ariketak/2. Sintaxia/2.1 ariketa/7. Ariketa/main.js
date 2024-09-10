function zenbakiak_eskatu (){
    let z1 = prompt("Zartu lehenengo zenbakia");
    

    

    zenbakiaBatu(z1);
}

function zenbakiaBatu(z1){
    z1 = parseInt(z1);
   


    let z = zatituDaiteke(z1);

    inprimatu (z);
   
    

    
}

function zatituDaiteke(z1){
    let lista = [2, 3, 5, 7];


    for(i=0;i<lista.length;i++){
 
     if(z1 % lista[i] ==0){
        
        return lista[i];
     }
 
    }

    return -1
}

function inprimatu(z1){

    if (z1 != -1){
        document.getElementById('Hasiera').innerHTML = z1+ " zenbakiaren gatik zatigarria da.";
    }else{
        document.getElementById('Hasiera').innerHTML = "Hemandako zenbakia ezin da zatitu zenbaki hauen artean";

    }

}