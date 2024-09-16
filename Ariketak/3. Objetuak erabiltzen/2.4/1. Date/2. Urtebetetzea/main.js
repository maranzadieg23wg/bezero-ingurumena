gaurkoData = new Date();

urtebetetzea = new Date(2005,1,10);


zenbat =0;
lista =[]

for(i=gaurkoData.getFullYear(); i<=2100;i++){

    data = new Date(i, 0, 10);
    eguna = data.getDay();
    //console.log(eguna)
    if(eguna == 0){
        zenbat++;
        lista.push(i)
        console.log(data);
    }
}

//console.log(lista)


document.write(zenbat);
document.write("<br>")
document.write(lista)
