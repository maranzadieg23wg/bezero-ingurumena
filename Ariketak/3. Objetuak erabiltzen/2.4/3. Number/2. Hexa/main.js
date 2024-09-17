function start(){
    let bin = prompt("Binario");
    let okt = prompt("Oktalean");
    let hex = prompt("Hexadezimalean");

    bin = bin_hamar(bin);
    okt = okt_hamar(okt);
    hex = hex_hamar(hex);

    let list = [bin, okt, hex];
    let max = Math.max(...list); 
    let min = Math.min(...list); 
    let medium;

   
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== max && list[i] !== min) {
            medium = list[i];
            break;
        }
    }

    inp("1. " + max + "<br>");
    inp("2. " + medium + "<br>");
    inp("3. " + min + "<br>");
    inp("<hr><br>");

    datuak(max);
    datuak(medium);
    datuak(min);
}

function bin_hamar(bin){
    return parseInt(bin, 2);
}

function okt_hamar(okt){
    return parseInt(okt, 8);
}

function hex_hamar(hex){
    return parseInt(hex, 16);
}

function hamar_bin(hamar){
    return hamar.toString(2);
}

function hamar_okt(hamar){
    return hamar.toString(8);
}

function hamar_hex(hamar){
    return hamar.toString(16);
}

function datuak(max){
    inp("Dezimal: " + max + "<br>");
    inp("Binario: " + hamar_bin(max) + "<br>");
    inp("Oktalean: " + hamar_okt(max) + "<br>");
    inp("Hexadezimalean: " + hamar_hex(max) + "<br>");
    inp("<hr><br>");
}

function inp(z){
    document.write(z);
}
