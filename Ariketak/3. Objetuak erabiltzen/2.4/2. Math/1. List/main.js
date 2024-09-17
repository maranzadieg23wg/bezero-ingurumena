function potentzia(){

    z1 = prompt("Sartu oinarria")
    z2 = prompt("Sartu potentzia")

    z1 = parseInt(z1);
    z2 = parseInt(z2);

    //Math.pow(z1,z2)
    z3 = z1**z2;

    imp(z3);

}


function erro(){
    
    z1 = prompt("Sartu zenbakia")

    z1 = parseInt(z1);

    imp(Math.sqrt(z1));
    //return Math.sqrt(z1);

}


function biribildu(){

    z1 = prompt("Sartu zenbakia");
    z2 = prompt("Zenbat borobildu nahi den");
    
    z1 = parseFloat(z1);
    z2 = parseInt(z2);

    let final = Number(z1).toFixed(z2);

    imp(final)

}

function trigonometria(){

    z1 = prompt("Sartu angelu bat");
    z1 = parseFloat(z1);

    if(z1<0 || z1>360 ){
        alert("Sartu behar den zenbakia 0º-tik 360º tartean egon behar da")
        trigonometria();
    }else{
        let radiana = z1 *(Math.PI / 180);
        let seno = Math.sin(radiana);
        let coseno = Math.cos(radiana);
        let tangente = Math.tan(radiana);

        imp("Seno: "+seno+"<br>")
        imp("Coseno: "+coseno+"<br>")
        imp("Tangente: "+tangente+"<br>")

    }

}

function imp(z){
    document.write(z)
}