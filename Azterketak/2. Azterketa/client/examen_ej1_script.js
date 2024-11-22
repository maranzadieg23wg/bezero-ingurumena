// inicialización (1 punto)


let url = '../server/restaurantes.json';
let http = new XMLHttpRequest();
let json = '';
inicio();

function inicio() {
    http.onreadystatechange = function(){
        //console.log(http.status);
        if(http.readyState===4 && http.status ===200){
            //console.log(http.responseText);
            json = JSON.parse(http.responseText);
            cargaDatos();
        }
    
    };
    http.open("GET", url);
    http.send();
}

// carga de datos desde servidor local (1 puntos)
function cargaDatos() {

    let ana = json.item;
    for(let i =0;i<ana.length;i++){
        let provincia = ana[i].territory;
        let municipio =ana[i].municipality;
        let restaurantes =ana[i].documentName; 
        cargaMunicipios(municipio);
        cargaProvincia(provincia);
    }
}

// explotación de datos recibidos (1 punto)
function cargaMunicipios(municipio) {
    if(ezErrepikatuMuni(municipio)){
        aa = municipio;

        let muni = document.getElementById("municipio");
        muni.addEventListener('change', cargaRetaurantes(1))
        muni.innerHTML +=`
            <option value='${aa}'onclick='cargaRetaurantes(this.value)'>${aa}</option>
        `;
    }
    
}

function cargaProvincia(provincia) {
    if(ezErrepikatuProvinci(provincia)){
        aa = provincia;
        let muni = document.getElementById("provincia");
        muni.addEventListener('change', cargaRetaurantes(1))
        muni.innerHTML +=`
            <option value='${aa}'onclick='cargaRetaurantes(this.value)'>${aa}</option>
        `;
    }
    
}
let muniLista=[];
let provincilista=[];
function ezErrepikatuMuni(texta){
    
    //console.log(texta);

    
    //console.log(texta);
    if(!muniLista.includes(texta)){
        muniLista.push(texta);
        return true;
    }
    
    return false;;
}

function ezErrepikatuProvinci(texta){
    
    //console.log(texta);

    
    //console.log(texta);
    if(!provincilista.includes(texta)){
        provincilista.push(texta);
        return true;
    }
    
    return false;;
}

// explotación de datos recibidos (1 punto)
function cargaRetaurantes(muni) {
    borratuRestaurant();
    let municipio1 = document.getElementById("municipio").value;
    let provincia1 = document.getElementById("provincia").value;

    let ana = json.item;
    for(let i =0;i<ana.length;i++){
        let provincia = ana[i].territory;
        let municipio =ana[i].municipality;
        let restaurantes =ana[i].documentName; 
    
        if(municipio1 ==  municipio && provincia1 == provincia){
            idatziRestaurant(restaurantes);
        }
    
    }

}

function idatziRestaurant(izena){
    aa = izena;
    let muni = document.getElementById("restaurantes");
    muni.addEventListener('change', cargaInformacion(1))
    muni.innerHTML +=`
        <option value='${aa}'onclick='cargaInformacion(this.value)'>${aa}</option>
    `;
}

function borratuRestaurant(){
    let muni = document.getElementById("restaurantes");
    muni.innerHTML ='';
}

// explotación de datos recibidos (1 punto)
function cargaInformacion(restaura) {

    console.log(restaura);

    let ana = json.item;
    for(let i =0;i<ana.length;i++){
        
        let restaurantes =ana[i].documentName; 
    
        if(restaurantes == restaura){
            let direccion = ana[i].address;
            let localidad = ana[i].locality;
            let email = ana[i].tourismEmail;
            let telefono = ana[i].phone;
            let web = ana[i].web;
            let tipo = ana[i].restorationType;
            let capacidad = ana[i].capacity;
            let web_euskadi = ana[i].friendlyUrl;
            let descripcion = ana[i].turismDescription;

            document.getElementById("nombre").value = restaura;
            document.getElementById("direccion").value = direccion;
            document.getElementById("localidad").value = localidad;
            document.getElementById("email").value = email;
            document.getElementById("telefono").value = telefono;
            document.getElementById("web").value = web;
            document.getElementById("tipo").value = tipo;
            document.getElementById("capacidad").value = capacidad;
            document.getElementById("web_euskadi").value = web_euskadi;
            document.getElementById("descripcion").value = descripcion;





        }
    
    }
}