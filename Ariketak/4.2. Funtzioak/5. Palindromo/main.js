function start(){
    let z = prompt("Sartu esaldi bat jakiteko ea den palindromo a la ez");

    z= z.replaceAll(" ", '');
    //z = z.toUpperCase;

    let egi = pal(z);

    if(egi){
        imp(z+" esaldia palindromoa da");
    }else{
        imp(z+" esaldia ez da palindromoa");
    }

}

function pal(z){

    console.log(z.length)
    /*if(z.length %2 !=0){
        return false;
    }*/

    let z1 = z.substring(0, z.length/2);
    let z2 = z.substring(z.length/2, z.length);

    z = tilde(z);
    z = z.toLowerCase();
    

    z1= z1.split('');
    z2=z2.split('');

    console.log(z1);
    console.log(z2);

    for(let i =0;i<z1.length;i++){
        if(z1[i] != z2[z1.length-1]){
            return false;
        }
    }

    return true;

}


function tilde(z){
    return z.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function imp(z){
    document.write(z+"<br>");
}