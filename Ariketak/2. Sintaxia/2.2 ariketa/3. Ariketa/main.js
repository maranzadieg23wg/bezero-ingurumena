function zenbakiak_eskatu (){
    
    let z = prompt("Idatzi");

    let lista = z.split('');

    let final=0;

    for(i=0;i<lista.length;i++){
        if(lista[i]=='$'){
            break;
        }

        if(lista[i]=='a' || lista[i]=='A'){
            final++;
        }
    }

    inprimatu(final);

    
}



function inprimatu(z1){

    
    document.getElementById('Hasiera').innerHTML = "zenbakia "+z1;

}