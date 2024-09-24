function start(){
    let  izenAbizena = prompt("Sartu zure izen-abizena");
    let  email = prompt("Sartu zure korreoa");
    
    let list = izenAbizena.split(" ");
    
    
    let inizial = list[0].charAt(0);
    let abizen1 = list[1];
    let abizen21 = list[2].charAt(0);
    let abizen22 = list[2].charAt(1);
    
    let email1 = "@ikzubirimanteo.com";
    let email2 = "@zubirimanteo.com ";
    
    let balidatu = new RegExp(inizial+abizen1+"(\\d*)("+email1+"|"+email2+")$", "i");
    let balidatu1 = new RegExp(inizial+abizen1+abizen21+abizen22+"(\\d*)("+email1+"|"+email2+")$", "i");

    
    if (balidatu.test(email)) {
        document.write("Korreoa ondo dago: " + email);
    } else if (balidatu1.test(email)) {
        document.write("Korreoa ondo dago: " + email);

    }else{
        document.write("Errorea: Korreoa ez da zuzena.");
    }
}


