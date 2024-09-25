let taldeak = ["AC⚡DC",["War dogs", "Thunderstruck"],"Halestorm", ["Bad Romance", "I get of"]];
let lista = ["Pikachu", "Mimikyu", "hydreigon", "Rotom", "Torterra"];

let array = [
    "javascriptcode",  // Más de 10 caracteres
    "programmingfun",  // Más de 10 caracteres
    "cat",             // Menos de 10 caracteres
    "tree"             // Menos de 10 caracteres
  ];

function start(){

    lehengoa(taldeak);
    bigarrena(taldeak);
    hirugarrena(taldeak);
    laugarrena(taldeak, "I");
    bostgarrena(taldeak);
    seigarrena(array);

}

function lehengoa(taldeak){
    taldeak[2]= "The Pretty Reckless";
    taldeak[3][0]= "Make my wanna die";
    taldeak[3]
    console.log(taldeak);

    imp(taldeak);
}

function bigarrena(taldeak){
    let list = taldeak.flat();
    console.log(list);

    imp(list)
}

function hirugarrena(taldeak){
    
    //let a1 = taldeak.toSplit();
    //let a2 = taldeak.shift();
    let list = taldeak;

    list= list.toSpliced(0, 2, list[list.length-1], list[list.length]);
    //list.push(a1);
    //list.push(a2);

    console.log(list);
    imp(list);
}

function laugarrena(taldea, letra){
    for(i=1;i<taldea.length;i+=2){
        if(taldea[i]!=null){
            let list=taldea[i];


            for(e=0;e<list.length;e++){
                let a = list[e].charAt(0);

                if (a==letra){
                    console.log(list[e]);
                    imp(list[e]);
                }

            }

        }

    }
}

function bostgarrena(taldea){
    let list=[]
    for(i=1;i<taldea.length;i+=2){
        list.push(taldea[i]);
    }

    list= list.flat();

    list.sort();
    console.log(list);
    imp(list);
}


function seigarrena(taldea){
    let list = taldea.flat();

    for(i=0;i<list.length;i++){
        if(list[i].length>10){
            let a = list[i].substring(0, 9);
            a+="...";
            list[i]=a;
        }
    }

    console.log(list);
    imp(list);
}



function imp (z){
    document.write(z+"<br>");
}
