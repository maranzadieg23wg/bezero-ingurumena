function formularioa(event){
    event.preventDefault();
    let form = document.forms["formulario"];

    let izena = form["izena"].value;
    let abizena = form["abizenak"].value;
    let helbidea = form["helbidea"].value;

    console.log(helbidea)
    if (izena !== "" && abizena !== "" && helbidea !== "") {
        alert(izena + " " + abizena + ", Helbidea: " + helbidea);
    } else {
        alert("Eremuren bat ez duzu bete");
    }
    
}