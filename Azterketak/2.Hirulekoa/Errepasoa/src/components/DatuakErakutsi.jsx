import IrudiakAukeratu from "./IrudiakAukeratu";
import { use, useEffect, useState } from "react";


function DatuakErakutsi({datuak}) {

    const [datuak2, setDatuak2] = useState(null);
    const [irudia, setIrudia1 ] = useState(null);

    //console.log(datuak);

    if(!datuak){
        return null;
    }




  return (
    
    <>
        <select onChange={(e) => setDatuak2(e.target.value)}>
            {datuak.item.map(item =>(
                <option key={item.documentName} value={item.documentName} label={item.documentName}></option>
            ))}
        </select>
        
        <IrudiakAukeratu datuak3={datuak2} gordeIrudia={setIrudia1}/>


        {irudia ? (
            <>
                {irudia}

                <img src={`/` + irudia + '.png'} alt="Irudia" />
            </>
                ) : (
            <p>No hay imagen disponible.</p>
        )} 
    </>
  );
}

export default DatuakErakutsi;
