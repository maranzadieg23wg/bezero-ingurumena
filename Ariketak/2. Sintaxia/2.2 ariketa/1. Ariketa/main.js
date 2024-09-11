function zenbakiak_eskatu (){
     

    

    zenbakiaBatu(100);
}

function zenbakiaBatu(z1){
    z1 = parseInt(z1);
   


    let z = zatituDaiteke(z1);

    inprimatu (z);
   
    

    
}

function zatituDaiteke(z1){

    
    
    let bai= "";

    for(i=z1;i>0;i--){
 
     if(i % 2 ==0){
        
        bai+= i+", "
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