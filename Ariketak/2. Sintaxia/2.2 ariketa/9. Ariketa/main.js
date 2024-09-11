function zenbakiak_eskatu (){
    
    let z = prompt("sartu zenbaki bat");
    let z1 = prompt("sartu zatitzaile kopurua");

    let z2 = parseInt(z);
    let z3 = parseInt(z1);


    let final =[];

    for(i=0;i<z2;i++){
        if(z2%i ==0){
            final.push(i);

        }
    }

    if(final.length<z3){
        z3 = final.length;
    }

    for(i=0;i<z3;i++){
        document.write(final[i]+"<br>");

    }

  

    
}