let url = "../server/index.php"

let http = new XMLHttpRequest();

http.onreadystatechange=function(){
    if(this.readyState===4 && this.status == 200){
        console.log(this.responseText);
    }
};

http.open("GET", url);
http.send();
