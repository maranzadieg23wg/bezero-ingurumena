import React, { createContext, useContext, useState, useEffect } from 'react';

// Context create
const DataContext = createContext();


export const useData = () => useContext(DataContext);

// Proveedor que va a envolver nuestra aplicación y compartir los datos
export function DataProvider({ children }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // console.log("useEffect");
        // Realizamos la solicitud fetch y guardamos los datos en el estado
        fetch('http://192.168.1.115:8000/espacios.php')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.error('Arazo  bat gertatu da:', error);
            });
    }, []);

    return (
        // Pasamos el estado a través del contexto
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}
