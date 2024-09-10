function erabil (){
    let z1 = prompt("Zartu esaldi bat");
    


    separatu(z1);
    

   
}

function separatu(z1){
    
    let lista = z1.split('');
    console.log(lista);

    bokalak(lista);
}


function bokalak(lista){
    


    let bokalLista = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let erantzuna=[];

    console.log(lista.length)

    for(i=0;i<lista.length;i++){
        console.log(i)

        console.log(bokalLista.indexOf(lista[i]))
        if (bokalLista.indexOf(lista[i]) != -1){
            erantzuna.push(lista[i]);
        }
    }


    let a = '';
    for (i=0;i<erantzuna.length;i++){
        a+= " "+ erantzuna[i];
    }

    inprimatu(a);
}



function inprimatu(z1){
    document.getElementById('Hasiera').innerHTML = z1;

}