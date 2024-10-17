document.addEventListener("DOMContentLoaded", function() {
    
    //lortu link guztiak
    let linkTotal = document.querySelectorAll("a");



    //zenbat link dauden
    console.log(linkTotal.length);

    //azken aurreko linka
    console.log(linkTotal[linkTotal.length-2]);
   

    //zenbat prueba dauden
    let zenbat =0;
    for(let i =0;i<linkTotal.length;i++){
        if(linkTotal[i] == "http://prueba/" ){
            zenbat++;
        }
    }
    console.log(zenbat);


    //Zenbat lotura dauden
    let pGuztiak = document.querySelectorAll("p");

    let pHiru = pGuztiak[2];
    let e =0;
    for (const child of pHiru.children) {
        
        e++;
    }
    console.log(e);

     
});