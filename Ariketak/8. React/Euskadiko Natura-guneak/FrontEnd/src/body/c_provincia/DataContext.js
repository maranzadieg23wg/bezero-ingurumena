import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ProvinceContext = createContext();

// Hook para acceder al contexto
export const useProvince = () => useContext(ProvinceContext);

// Componente Proveedor que envolverá la aplicación y compartirá el valor de la provincia
export function ProvinceProvider({ children }) {
    const [selectedProvince, setSelectedProvince] = useState('');

    // Actualiza el valor cuando el usuario selecciona una provincia
    const handleProvinceChange = (event) => {
        setSelectedProvince(event.target.value);
    };

    return (
        <ProvinceContext.Provider value={{ selectedProvince, handleProvinceChange }}>
            {children}
        </ProvinceContext.Provider>
    );
}
