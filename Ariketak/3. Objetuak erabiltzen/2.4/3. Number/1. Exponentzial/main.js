function start(){
    let z1 = prompt("Sartu zenbaki bat");
    z1 = parseFloat(z1);

    let ex = Math.exp(z1);
    let koma = Number(ex).toFixed(4);

    document.write(ex+"<br>")
    document.write(koma+"<br>")
}