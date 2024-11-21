let url = "../server/index.php"
let url1 = "../server/sinopsis.php"


let http = new XMLHttpRequest();

http.onreadystatechange=function(){
    if(this.readyState===4 && this.status == 200){
        //console.log(this.responseText);
        jsonAnalizatu(this.responseText);
    }
};

http.open("GET", url);
http.send();



function jsonAnalizatu(text){
    let ana = JSON.parse(text);

    let lista = ana.Peliculas;

    for(let i =0;i<lista.length;i++){
        //console.log(lista[i].Director);
        eskatuSinopsis(lista[i].sinopsis);
    }
}


function eskatuSinopsis(fitxategia){
    console.log(fitxategia);
    http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState ===4 && this.status ===200){
            console.log(this.responseText);
        }
    };

    http.open("GET", url1 + "?fichero=" + fitxategia, true);
    http.send("fichero:"+fitxategia);
}