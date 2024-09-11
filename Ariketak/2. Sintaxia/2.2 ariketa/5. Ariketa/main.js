function zenbakiak_eskatu (){
    
    

    

    let bakoiti=0;
    let bikoiti=0;

    while(true){
        let z = prompt("Idatzi");
        if(z=='0'){
            break;
        }

        let z1 = parseInt(z);
        if(z1%2 ==0){
            bikoiti++;
        }else{
            bakoiti++;
        }

    }

    inprimatu(bakoiti, bikoiti);

    
}



function inprimatu(bakoiti, bikoiti){

    
    document.write("Bakoiti: "+bakoiti+"<br>");
    document.write("Bikoiti: "+bikoiti);


}