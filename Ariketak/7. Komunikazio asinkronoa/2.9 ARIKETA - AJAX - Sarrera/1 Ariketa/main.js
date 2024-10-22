let url = "";

function start(){
    url = document.getElementById("recurso").value;

    
    ajax();
}



function ajax(){
    //console.log(url);
    let http = new XMLHttpRequest();
    let startTime = Date.now();
    

    http.onreadystatechange = function(){
        let elapsedTime = Date.now() - startTime;

        
        estado(this.status);
        console.log(this.readyState);

        if(this.readyState == 0) {
            timer("("+elapsedTime+"ms) "+"Hasieratu gabe");
        }
        if(this.readyState == 1) {
            timer("("+elapsedTime+"ms) "+"Kargatzen");
        }
        if(this.readyState == 2){
            timer("("+elapsedTime+"ms) "+"Kargatuta");
        }
        if(this.readyState == 3){
            timer("("+elapsedTime+"ms) "+"Interaktibo");
        }
        if(this.readyState == 4){
            timer("("+elapsedTime+"ms) "+"Bukatua");
        }

        if (this.readyState == 4 && this.status == 200){

            getHeader(this.getAllResponseHeaders());
            getBody(this.responseText)

            
        }
    };

    http.open('GET', url);
    http.send();
    


}

function timer(text){
    let estadosElement = document.getElementById("estados");
    let temp = estadosElement.innerHTML;
    if(temp ==null){
        temp=""
    }
    document.getElementById("estados").innerHTML = temp+ text +"<br>";
}

function estado(text){
    document.getElementById("codigo").innerHTML = text;
}

function getHeader(text){
    document.getElementById("cabeceras").innerHTML = text;
}

function getBody(text){
    document.getElementById("contenidos").textContent = text;
}