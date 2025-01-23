import { useEffect, useState } from "react";
import DatuakErakutsi from "./DatuakErakutsi";  

function Eskaera() {

    const [datos, setDatos] = useState(null);

    const botoiklik = () => {
        fetch('/espacios-naturales.json')
        .then(response => response.json())
        .then(data => {
            setDatos(data);
            //console.log(data);
        })
    };

    useEffect(() => {
        fetch('/espacios-naturales.json')
        .then(response => response.json())
        .then(data => {
            // setDatos(data);
            console.log(data);
        })
    }, []);


  return (
    <>
        <button onClick={botoiklik}>Klik egin</button>

        <DatuakErakutsi datuak = {datos}/>
    </>
    

  );
}

export default Eskaera;
