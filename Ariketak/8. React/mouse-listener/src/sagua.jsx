import { useState, useEffect } from "react";

function Sagua() {
    const [kokalekua, setKokalekua] = useState({ x: 0, y: 0 });
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (showText) {
                setKokalekua({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        if (!showText) {
            setKokalekua({ x: 0, y: 0 });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            console.log('Borratu egin da erregistroa');
        };
    }, [showText]); 

    const sakatuta = () => {
        setShowText(!showText); 
    };

    return (
        <div>
            {showText && <p>{kokalekua.x} - {kokalekua.y}</p>} 
            <button onClick={sakatuta}>Presionar</button>
        </div>
    );
}

export default Sagua;
