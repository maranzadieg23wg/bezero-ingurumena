function zenbakiak_eskatu (){
    
    let z = prompt("sartu zenbaki bat");

    let z1 = parseInt(z);


    let final =0;

    for(i=0;i<z1;i++){
        if(z1%i ==0){
            final+=i;
            //document.write(i+"<br>");

        }
    }


    if(z1 == final){
        document.write("Sartutako zenbakia perfektua da");
    }else{
        document.write("Sartutako zenbakia ez da perfektua");
    }

    

    

    
}