import React, { useState } from 'react';
import CInformacion from "./c_informacion/c_informacion";
import { useProvince } from "../c_provincia/DataContext";
import { useData } from "../../ajax";

function CMunicipio() {
  const data = useData(); // Obtener los datos del contexto
  const { selectedProvince } = useProvince();  // Obtener la provincia seleccionada del contexto

  // Asegurarse de que `data` sea un array antes de hacer el filtro
  const filteredTerritory = data && Array.isArray(data.item) 
    ? data.item.filter(item => item.territory === selectedProvince) 
    : [];// Si no es un array, devolver un array vacío
  
  const filteredMunicipality = filteredTerritory
    .map(item => item.municipality);  // Extraer solo los valores de 'municipality'

  // Estado para manejar el municipio seleccionado
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  // Manejador de cambios del select
  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);  // Actualizar el estado con el municipio seleccionado
  };

  console.log('Municipios filtrados:', filteredTerritory);

  return (
    <div>
      <h2>Municipio</h2>

      

      {/* Selección del municipio */}
      <label htmlFor="municipality-select">Selecciona un municipio:</label>
      <select
        id="municipality-select"
        value={selectedMunicipality}
        onChange={handleMunicipalityChange}
      >
        <option value="">--Please choose an option--</option>

        {/* Mapeamos los municipios filtrados a opciones */}
        {filteredMunicipality.map((municipality, index) => (
          <option key={index} value={municipality}>
            {municipality}
          </option>
        ))}
      </select>

      <p>Municipio seleccionado: {selectedMunicipality || 'No seleccionado'}</p>

      {/* Componente de información */}
      <CInformacion />
    </div>
  );
}

export default CMunicipio;
