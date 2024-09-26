const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function start() {
    const input = document.getElementsByName('TxtShort')[0].value;
    let temp = input.toUpperCase();
    imp(temp);
}

function imp(z) {
    document.getElementById("IdatziHemen").innerHTML ="";
    let list = z.split('');
    for(let i=0;i<list.length;i++){
        if(list[i]==" "){
            list[i]= "Hutsik";
        }

        if (!/[A-Z]/.test(list[i])) {
            console.log(list[i]);
            list[i] = "Txuria";
        }
        

        document.getElementById("IdatziHemen").innerHTML +="<img src=./Letrak/"+list[i]+".gif>";
    }
}

window.onload = function() {
    const input = document.querySelector('input[name="TxtShort"]');
    input.addEventListener('input', start);
};


