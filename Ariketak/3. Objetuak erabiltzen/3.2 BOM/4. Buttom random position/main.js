function scape(botoia){
    var i = Math.floor(Math.random()*window.innerWidth)+1;
    var j = Math.floor(Math.random()*window.innerHeight)+1;
    botoia.style.left = i+"px";
    botoia.style.top = j+"px";
}