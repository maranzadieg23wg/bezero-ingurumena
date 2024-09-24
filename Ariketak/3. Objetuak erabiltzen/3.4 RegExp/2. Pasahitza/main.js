function start(){
    let erabiltzailea = prompt("Sartu zure erabiltzailea");
    let jaiotzeData = prompt("Sartu zure jaiotze data (uuuu-hh-ee)")
    let pasahitza = prompt("Sartu zure pasahitza");

    let list = jaiotzeData.split("-")


    let eraJaio = "(?!.*(" + erabiltzailea + "|" + list[0] + "|" + list[1] + "|" + list[2] + "))";    
    let balidatu = new RegExp(eraJaio+"[A-Z]*[a-z]{3,}(?=.*[#$@!%&*?])", "i");

    console.log(balidatu);

    if (balidatu.test(pasahitza)) {
        document.write("Korreoa ondo dago: " + pasahitza);
    }else{
        document.write("Errorea: Pasahitza ez da zuzena.");
    }

}