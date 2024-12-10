import { useState } from "react";
import IzenaFormulario from "./izena";

function App() {
    const [izena, setIzena] = useState("");
    const [abizena, setAbizena] = useState("");

    function izenaBidali(nuevoIzena) {
        setIzena(nuevoIzena);
    }

    function abizenaBidali(nuevoIzena) {
        setAbizena(nuevoIzena);
    }

    return (
        <div className="App">
            <IzenaFormulario izenaBidali={izenaBidali} idat="izena" />
            <IzenaFormulario izenaBidali={abizenaBidali} idat="abizena" />
            {izena && <p>{izena} {abizena}</p>}
        </div>
    );
}

export default App;
