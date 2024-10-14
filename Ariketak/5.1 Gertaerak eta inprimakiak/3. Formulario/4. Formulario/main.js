document.addEventListener('DOMContentLoaded', () => {
    let datuak = document.querySelectorAll('.datuak');

    
    if (datuak.length > 0) {
        datuak[0].focus();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            let focusedElement = document.activeElement;
            let index = Array.from(datuak).indexOf(focusedElement);

            if (index >= 0 && index < datuak.length - 1) {
                datuak[index + 1].focus();

                if(datuak[index].value ===null){
                    console.log(datuak[index.value])
                }
                
            }
        }
    });
});
