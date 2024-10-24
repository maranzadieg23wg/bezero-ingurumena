//import kontakto from "./objects/kontakto.js";

let agenda=[];

function gehituTel(){
    let te = document.getElementById("formulario").innerHTML;
    let z = document.getElementsByClassName("tel");
    //console.log(z.length);

    if(z.length+1 <=5){
        let base = "Tel:<input type='text' class='tel'  name='tel'><input type='checkbox' class='fink' name='finkoa'><br>";

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
        if(fink[i]===null){
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
            i= agenda.length;
            ezist = true;
        }
    }

    if(!ezist){
        agenda.push(ko);
    }

    


}


function ikusi(){
    for(let i =0;i<agenda.length;i++){
        let temp = agenda[i];
        temp.toString();
    }
}











class kontakto{

    constructor(izena, abizena){
        this.izena = izena;
        this.abizena = abizena;
        
        this.telefono = [];
    }

    telGehi(telefono, egia){
        let lista =[telefono, egia];

        this.telefono.push(lista);
    }

    toString(){
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

    telGehi(telefon){
        this.telefono=telefon;
    }
    
    berbera(izena, abizena){
        if(this.izena === izena && this.abizena === abizena){
            return true;
        }else{
            return false;
        }
    }
}