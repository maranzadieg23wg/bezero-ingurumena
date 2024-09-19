function start(){
    let izena = prompt("Izena eta Abizenak");
    
    let list = izena.split(" ");

    if(list.length ==3){
        let iz = list[0];
        let ab = list[1];
        let ab2 = list[2];
    
        document.write(iz.charAt(0).toUpperCase()+" "+iz.length+" "+ab+" "+ab.length+" "+ab2.charAt(0).toUpperCase()+" "+ab2.length);
    }else{
        document.write(izena);
    }

    

}