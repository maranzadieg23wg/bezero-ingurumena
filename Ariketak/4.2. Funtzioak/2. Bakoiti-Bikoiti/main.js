function start(){
    let z = prompt("Sartu zenbaki bat");

    z = parseInt(z);



    if (bakoiti(z)){
        imp("Zenbakia Bikoitia da")
    }else{
        imp("Zenbakia Bakoitia da")
    }

}

function bakoiti(z){
    if(z%2 ==0){
        return true;
    }else{
        return false;
    }
}

function imp (z){
    document.write(z+"<br>");
}