function start(){
    let z = prompt("Sartu esaldi bat jakiteko ea den palindromo a la ez");

    za= z.replaceAll(" ", '');
    //z = z.toUpperCase;

    let egi = pal(za);

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

   
    z = tilde(z);
    z = z.toLowerCase();

    z1= z.split('');

    console.log(z1);

    for(let i =0;i<z1.length/2;i++){
        if(z1[i] !== z1[z1.length-i-1]){
            console.log(z1[i]);
            console.log(z1[z1.length-i-1]);
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