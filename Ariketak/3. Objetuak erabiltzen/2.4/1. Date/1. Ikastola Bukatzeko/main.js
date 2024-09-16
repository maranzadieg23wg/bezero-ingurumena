gaurkoData = new Date();

ikastolaBukatzeko = new Date(2025,5,30);

faltaEgunak = ikastolaBukatzeko - gaurkoData;

faltaEgunak = faltaEgunak /86400000;

document.write("Egun falta dira kurtsoa bukatzeko: "+faltaEgunak);