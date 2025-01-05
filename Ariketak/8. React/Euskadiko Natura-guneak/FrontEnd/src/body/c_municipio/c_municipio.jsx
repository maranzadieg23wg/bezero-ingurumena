import React, { useState, useEffect } from 'react';
import CInformacion from "./c_informacion/c_informacion";
import { useProvince } from "../c_provincia/DataContext";
import { useData } from "../../ajax";

function CMunicipio() {
  const data = useData(); // Obtener los datos del contexto
  const { selectedProvince } = useProvince();  // Obtener la provincia seleccionada del contexto

  // Estado para manejar los municipios filtrados
  const [filteredMunicipality, setFilteredMunicipality] = useState([]);

  // Usamos useEffect para realizar la acción una vez que los datos estén disponibles
  useEffect(() => {
    if (data && data.item && Array.isArray(data.item)) {
      // Filtrar los territorios según la provincia seleccionada
      const filteredTerritory = data.item.filter(item => item.territory === selectedProvince);

      // Extraer solo los municipios y eliminar duplicados utilizando Set
      const municipalities = Array.from(new Set(filteredTerritory.map(item => item.municipality)));

      // Actualizar el estado con los municipios filtrados y sin duplicados
      setFilteredMunicipality(municipalities);
    }
  }, [data, selectedProvince]);  // Dependencias: se ejecuta cada vez que cambian los datos o la provincia seleccionada

  // Estado para manejar el municipio seleccionado
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  // Manejador de cambios del select
  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);  // Actualizar el estado con el municipio seleccionado
  };

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
