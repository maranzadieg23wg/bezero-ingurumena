// DataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
const DataContext = createContext();

// Hook personalizado para acceder al contexto
export const useData = () => useContext(DataContext);

// Proveedor que va a envolver nuestra aplicación y compartir los datos
export function DataProvider({ children }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Realizamos la solicitud fetch y guardamos los datos en el estado
        fetch('http://192.168.1.115:8000/espacios.php')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.error('Hubo un error:', error);
            });
    }, []);

    return (
        // El proveedor hace que los datos estén disponibles para los componentes hijos
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}
