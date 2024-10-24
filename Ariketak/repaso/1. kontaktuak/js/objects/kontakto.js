class kontakto{

    constructor(izena, abizena){
        this.izena = izena;
        this.abizena = abizena;
        
        this.telefono = [];
    }

    telGehi(telefono, egia){
        let lista =[telefono, egia];

        this.telefono.push(lista);
    }
    
}

export default kontakto;

