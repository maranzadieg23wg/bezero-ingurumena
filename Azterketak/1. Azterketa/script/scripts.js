//import Galdetegia from "./galdetegia.js";
lista =[];
let idGlobal =0;
zenbat =[];

class Galdetegia{

    constructor(id, izena, mota, erantzuna, zuzena){
        this.id = id;
        this.izena =izena;
        this.mota = mota;
        this.erantzuna =erantzuna;
        this.zuzena = zuzena;
    }

    setIzena(izena){
        this.izena = izena;
    }

    setMota(mota){
        this.mota = mota;
    }

    setErantzuna(erantzuna){
        this.erantzuna = erantzuna;
    }

    setZuzena(zuzena){
        this.zuzena = zuzena;
    }

    getIzena(){
        return this.izena;
    }

    getId(){
        return this.id;
    }

    toString(){
        return "ID: "+ this.id+" Izena: "+this.izena+" Mota: "+this.mota+" Erantzuna: "+this.erantzuna+" Zuzena: "+this.zuzena;
    }
}

//let a = new Galdetegia;


//Galdera bat gehitzeko botoia sakatzean
//exekutatu beharreko kodea
function galderaGehitu(){
    console.log(lista)
    //console.log(document.getElementById("galdetegi-izenburua").value)
    if(document.getElementById("galdetegi-izenburua").value ==="" || (document.getElementById("galdetegi-izenburua").value.length <=5 && document.getElementById("galdetegi-izenburua").value <=80)){
        alert("Izenburu bat gehitu behar da")
        return false;
    }

    let id = idGlobal;
    

    if(lista[id] ==null){
        let galder = new Galdetegia(id, "", "", "", "");
        lista.push(galder);
    }else{
        console.log(lista[id].getID());
    }
    idGlobal++;
    
    let forma = `
        <div class="galdera-container" id="G`+id+`">
            <h3>G`+id+`</h3>
            <div class="galdera">
                <label>Galdera:</label>
                <input type="text" id="izena`+id+`" value="`+lista[id].getIzena()+`">
            </div>
            <div class="galdera">
                <label>Mota:</label>
                <select id="" name="mota" onchange="motaAldatu(`+id+`,value)">
                    <option value="">Aukeratu mota</option>
                    <option value="0">Testua</option>
                    <option value="1">Erantzun posible bakarrekoa</option>
                    <option value="2">Erantzun posible anitzekoak</option>
                </select>
            </div>
            <div class="galdera" id="G`+id+`erantzunBakarra">
                <label>Erantzuna:</label>
                <!--<input type="text" id="" name="" class="G_`+id+`erantzunak">-->
            </div>
            <div class="galdera" id="G`+id+`erantzunGehiago">
                
                <div id=""></div>
                <button type='button' onclick='gehituTextuGehiago(`+id+`)'>Erantzun Berria Gehitu</button>
            </div>
            
            <button type="button" onclick="azkenGalderaBalidatu(`+id+`)">Galdera Gorde</button>
            <button type="button" onclick="galderaEzabatu(`+id+`)"> Galdera Ezabatu</button>
        </div>
    `
    
    
    document.getElementById("galdera").innerHTML+=forma;

}

/*  Gorde degun azken galdera ondo beteta dagon balidatuko du */
function azkenGalderaBalidatu(id){

    
    let erantzunak = [];
    let checkErantzunak = [];

    for(let i =0;i<=8;i++){
        if(document.getElementById("G_"+id+"erantzunak"+i)){
            erantzunak[i] =document.getElementById("G_"+id+"erantzunak"+i).value;
        }

        if(document.getElementsByClassName("G_"+id+"erantzunakCheck"+i)){
            checkErantzunak[i] =document.getElementsByClassName("G_"+id+"erantzunakCheck"+i).value;
        }
    }

    console.log("---------------------------------------------------------")
    console.log("ID: "+id);
    console.log("Erantzunak: "+erantzunak);
    console.log("CheckErantzunak: "+checkErantzunak);
    console.log("---------------------------------------------------------")


    lista[id].setIzena(document.getElementById("izena"+id).value);
    lista[id].setErantzuna(erantzunak);
    lista[id].setZuzena(checkErantzunak);


}

//Galdera bakoitzaren HTMLa gehituko du
function sekzioaGehitu() 
{
}

//Galdera gordetzean inprimakiaren informazioa 
//gure "Galdera" objektuan gordeko du
function objetuaArrayeanGehitu()
{
}

//Galdera mota aldatzean, HTMLan egin beharreko 
//aldaketak kudeatzen ditu
function motaAldatu(id, value){

    console.log(id, value);
    zenbat[id] =0;
    
    lista[id].setMota(value);
    

    document.getElementById("G"+id+"erantzunGehiago").innerHTML="";
    document.getElementById("G"+id+"erantzunBakarra").innerHTML=""

    if(value ==0){
        document.getElementById("G"+id+"erantzunGehiago").innerHTML="Erantzuna: <input type='text'  name='' id='G_"+id+"erantzunak"+0+"'>";
        
    }else{
        
        document.getElementById("G"+id+"erantzunBakarra").innerHTML="<button type='button' onclick='gehituTextuGehiago("+id+")'>Erantzun Berria Gehitu</button><br></br>";
        //document.getElementById("G"+id+"erantzunBakarra").innerHTML="";
    }

}

function gehituTextuGehiago(id){
    erantzunaGehitu(id);
}



//Erantzunak gehitzen ditu HTMLan
function erantzunaGehitu(id) 
{

    if(!zenbat[id]){
        zenbat[id] =0;
    }
    
    let er =`
        Erantzuna:
        <input type="text" id="G_`+id+`erantzunak`+zenbat[id]+`">
        <input type ="checkbox" id="G_`+id+`erantzunakCheck`+zenbat[id]+`"><br>
    `;
    //<button type="button">Erantzun Berria Gehitu</button><br></br>

    console.log(zenbat[id])
    if(zenbat[id] <=8){
        document.getElementById("G"+id+"erantzunBakarra").innerHTML+=er;
    }
    zenbat[id] = zenbat[id]+1;
    
}
//Galdera ezabatzen du, bai HTMLan eta bai Array-ean
function galderaEzabatu(id) 
{
    document.getElementById("G"+id).innerHTML="";

    lista[id] ="";
}

//Inprimakiko galderaren balioak objektuan gordetzen ditu, 
//eta objektu hori array-ean
function galderaGorde(id) 
{

}


function imprimatu(){
    let listaOrdenatuta =[];
    console.log(lista.length);
    for(let i =0;i<lista.length;i++){
        listaOrdenatuta.push (lista[i].getIzena());
    }

    listaOrdenatuta.sort();


    let final=[];
    for(let i =0;i<listaOrdenatuta.length;i++){
        for(let e=0;e<lista.length;e++){
            if(listaOrdenatuta[i] == lista[e].getIzena()){
                final.push(lista[e]);
            }
        }
    }

    for(let i =0;i<final.length;i++){
        document.getElementById("imprimaaaaa").innerHTML+=final[i].toString()+"<br>";
    }

}







