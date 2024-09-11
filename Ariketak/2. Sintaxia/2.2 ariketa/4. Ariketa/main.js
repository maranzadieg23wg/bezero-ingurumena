function zenbakiak_eskatu (){
    
    let final=0;


    while(final<200){
        let z = prompt("Idatzi");

        z = parseInt(z);

        final+=z;

    }


    

    
    inprimatu(final);

    
}



function inprimatu(z1){

    
    document.getElementById('Hasiera').innerHTML = "zenbakia "+z1;

}