function zenbakiak_eskatu (){
    let z1 = prompt("Zartu lehenengo zenbakia");
    let z2 = prompt("Zartu bigarren zenbakia");
    

    

    zenbakiaBatu(z1, z2);
}

function zenbakiaBatu(z1, z2){
    z1 = parseInt(z1);
   

    let final= [];

    let z = zatituDaiteke(z1);

    let s = zatituDaiteke(z2);

    for(i =0;i<z.length;i++){
        let a = z[i];
        if (s.includes(a)){
            final.push(a);
        }
    }

    inprimatu (final);
   
    

    
}

function zatituDaiteke(z1){

    let lista = [];

    for(i =0;i<=z1;i++){
        lista.push(i);
    }
    
    let bai= [];

    for(i=0;i<lista.length;i++){
 
     if(z1 % lista[i] ==0){
        
        //bai+= lista[i]+", "
        bai.push(lista[i]);
     }
 
    }

    
    return bai;
}

function inprimatu(z1){

    
    if (z1 != ""){
        document.getElementById('Hasiera').innerHTML = z1+ " zenbakiaren gatik zatigarria da.";
    }else{
        document.getElementById('Hasiera').innerHTML = "Hemandako zenbakia ezin da zatitu zenbaki hauen artean";

    }

}