function zenbakiak_eskatu (){
    
    let egia = true;

    let impri = [];

    let maximoa =0;


    while(egia){
        let z = prompt("Idatzi");
        

        if(z.includes('$')){
            console.log("gehituta dago");
            egia = false;
            break;
        }

        if(maximoa<z.length){
            maximoa = z.length;
        }


        impri.push(z);
    }



    console.log(maximoa)


    for(i=0;i<impri.length;i++){
        inprimatu(gehitu(impri[i], maximoa));
        
    }


    
}


function gehitu(esaldia, z){

    let t = z/2;

    for(i=0;i<t;i++){
        esaldia='-'+esaldia;
    }

    for(i=t;i>t;i--){
        esaldia+='-';
    }

    console.log(esaldia)
    return esaldia;



}



function inprimatu(z1){

    

    document.write(z1+"<br>");

}