function start(){
    let z = prompt("Sartu esaldi bat");


    let zen = bokal(z);

    imp(z+" esaldiak ditu: "+zen+" bokal");
}


function bokal(z){

    let zenbat=0;
    let list = z.split('');

    for(let i=0;i<list.length;i++){
        if(bokalaDa(list[i])){
            zenbat++;
        }
    }

    return zenbat;

}

function bokalaDa(z){
    let list =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for(let i=0;i<list.length;i++){
        if(z===list[i]){
            return true;
        }
    }

    return false;
}


function imp(z){

    document.write(z+"<br>");

}