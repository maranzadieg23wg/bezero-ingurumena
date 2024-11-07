//import kontakto from "./objects/kontakto.js";

let agenda=[];

function gehituTel(){
    let te = document.getElementById("formulario").innerHTML;
    let z = document.getElementsByClassName("tel");
    //console.log(z.length);

    if(z.length+1 <=5){
        let base = "Tel:<input type='text' class='tel'  name='tel'><input type='checkbox' class='fink' name='finkoa'>: Mugikorra<br>";

        document.getElementById("formulario").innerHTML=te+base;
    }

    

}


function gehituKontakt(){
    var te = document.getElementById('formulario');
    var formData = new FormData(te);

    let izena = formData.get('izena');
    let abizena = formData.get('abizena');

    var telValues = [];
    for (var pair of formData.entries()) {
        if (pair[0] === 'tel') {
            telValues.push(pair[1]);
        }
    }

    var finkValue = [];
    for (var pair of formData.entries()) {
        if (pair[0] === 'finkoa') {
            console.log(pair[1]);
            finkValue.push(pair[1]);
        }
    }

    gehituAgendara(izena, abizena, telValues, finkValue);
    
    
    //console.log(formData.get('izena'));
    //console.log(formData.get('abizena'));
    //console.log(telValues); 
    //console.log(finkValue); 
}


 
function gehituAgendara(izena, abizena, tel, fink){
    let ko = new kontakto(izena, abizena);
    for(let i =0;i<tel.length;i++){
        let temp;
        if(fink[i]==="on"){
            temp = false;
        }else{
            temp = true;
        }
        ko.telGehi(tel[i], temp);

        
    }

    //ko.toString();

    let ezist = false;
    for(let i =0;i<agenda.length;i++){
        let temp = agenda[i];
        if(temp.berbera(izena, abizena)){
            agenda[i]=ko;
            i= agenda.length+1;
            ezist = true;
        }
    }

    if(!ezist){
        agenda.push(ko);
    }

    


}


function ikusi(){
    document.getElementById("kontaktuak").innerHTML="";
    for(let i =0;i<agenda.length;i++){
        let temp = agenda[i];
        temp.toString();
        //console.log(temp.getTel());
    }
}











class kontakto{

    constructor(izena, abizena){
        this.izena = izena;
        this.abizena = abizena;
        
        this.telefono = [];
    }

    telGehi(telefonoa, egia){
        let lista =[telefonoa, egia];

        this.telefono.push(lista);
    }

    toString(){
        document.getElementById("kontaktuak").innerHTML+= "izena: "+this.izena+"<br>";
        document.getElementById("kontaktuak").innerHTML+= "abizena: "+this.abizena+"<br>";
        for(let i=0;i<this.telefono.length;i++){
            let tel = this.telefono[i][0];
            let etxe = this.telefono[i][1];

            if(etxe){
                etxe = "etxekoa";
            }else{
                etxe = "mugikorra";
            }
            document.getElementById("kontaktuak").innerHTML+= "Telefono: "+tel+" : "+etxe+"<br>";


        }
        document.getElementById("kontaktuak").innerHTML+= "<hr>";


        console.log("izena: "+this.izena+" abizena: "+this.abizena+" tel: "+this.telefono);
    }

    getIzena(){
        return this.izena;
    }

    getAbizena(){
        return this.abizena;
    }

    getTel(){
        return this.telefono;
    }
    
    berbera(izena, abizena){
        if(this.izena === izena && this.abizena === abizena){
            return true;
        }else{
            return false;
        }
    }
}