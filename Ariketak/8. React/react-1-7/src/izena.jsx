import { useState } from "react";

function IzenaFormulario({ izenaBidali, idat }) {  
    const [izena, setIzena] = useState("");

    const aldatuta = (e) => {
        const nuevoIzena = e.target.value;
        setIzena(nuevoIzena);
        izenaBidali(nuevoIzena);
    }

    return (
        <form>
            <p>Zure {idat}: 
                <input 
                    type="text" 
                    name="izena" 
                    value={izena} 
                    onChange={aldatuta} 
                />
            </p>
        </form>
    );
}

export default IzenaFormulario;
