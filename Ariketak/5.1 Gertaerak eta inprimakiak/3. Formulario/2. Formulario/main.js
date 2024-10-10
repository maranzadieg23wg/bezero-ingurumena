function kolorea(){
    let form = document.forms["formulario"];


    let kar = form["karratuak"].value;
    let kol = form["koloreak"].value;


    document.getElementById(kar).style.background=kol;
    
}