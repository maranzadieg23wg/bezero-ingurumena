function zenbakiak_eskatu (){
    

    

    let maximoa=0;
    let minimoa=Number.MAX_VALUE;

    while(true){
        let z = prompt("Idatzi");

        if(z=='0' || z.includes("-")){
            break;
        }

        let z1 = parseInt(z);
        
        if(maximoa<z1){
            maximoa=z1;
        }
        if(minimoa>z1){
            minimoa=z1;
        }


    }

    inprimatu(maximoa, minimoa);

    
}



function inprimatu(maximoa, minimoa){

    
    document.write("Handiena: "+maximoa+"<br>");
    document.write("Txikiena: "+minimoa);


}