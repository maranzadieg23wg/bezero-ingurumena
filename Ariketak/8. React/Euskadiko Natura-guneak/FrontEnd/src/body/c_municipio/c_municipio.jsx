import React, { useState, useEffect } from 'react';
import CInformacion from "./c_informacion/c_informacion";
import { useProvince } from "../c_provincia/DataContext";
import { useData } from "../../ajax";

function CMunicipio() {
  const data = useData(); // Datuak kontestuetatik eskuratzen ditugu
  const { selectedProvince } = useProvince();  // Aukeratutako probintzia kontestuetatik eskuratzea

  // Estatuak kudeatzeko
  const [filteredMunicipality, setFilteredMunicipality] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [marksOptions, setMarksOptions] = useState([]);  // Marken aukeren estatoa
  const [selectedMark, setSelectedMark] = useState('');  // Aukeratutako markaren estatoa
  const [filteredData, setFilteredData] = useState([]); // Datuak filtra daitezen

  // useEffect erabili datuak eskuratu eta probintzia hautatua aldatu ondoren ekintza bat egiteko
  useEffect(() => {
    if (data && data.item && Array.isArray(data.item)) {
      // Territorioak probintzia hautatuaren arabera filtratzen dugu
      const filteredTerritory = data.item.filter(item => item.territory === selectedProvince);

      // Udalerriak ateratzen ditugu, eta errepikapenak ezabatzeko Set erabiltzen dugu
      const municipalities = Array.from(new Set(filteredTerritory.map(item => item.municipality)));

      // Filtratutako udalerriekin estatoa eguneratzen dugu
      setFilteredMunicipality(municipalities);
    }
  }, [data, selectedProvince]);  // Dependentziak: datuak edo probintzia hautatua aldatu ondoren exekutatuko da

  // Udalerriaren hautapenaren aldaketa kudeatzailearen funtzioa
  const handleMunicipalityChange = (event) => {
    const municipality = event.target.value;
    setSelectedMunicipality(municipality);  // Hautatutako udalerria eguneratzen dugu

    // Datuak filtratzen ditugu udalerri hautatuarekin erlazionatutako markak eskuratzeko
    if (municipality) {
      const selectedItem = data.item.filter(item => item.municipality === municipality);

      // Markak ateratzen ditugu (documentName izan daiteke marken izena)
      const marks = selectedItem.map(item => item.documentName).flat();
      
      // Markak errepikapenik gabe uzteko, Set erabiltzen dugu
      const uniqueMarks = Array.from(new Set(marks));
      setMarksOptions(uniqueMarks);  // Marken aukerak eguneratzen ditugu
    }
  };

  // Marken hautapenaren aldaketa kudeatzailearen funtzioa
  const handleMarkChange = (event) => {
    const selectedMark = event.target.value;
    setSelectedMark(selectedMark);  // Hautatutako markaren estatoa eguneratzen dugu

    // Datuak filtratzen ditugu `selectedMark`-rekin bat datozenak lortzeko
    if (selectedMark) {
      const selectedData = data.item.filter(item => item.documentName === selectedMark);
      setFilteredData(selectedData);  // Eguneratzen dugu datuak
    }
  };

  return (
    <div>
      

      {/* Solo mostramos el select de Municipio si hay una provincia seleccionada */}
      {selectedProvince && (
        <>
          <h2>Municipio</h2>
          {/* Udalerriaren hautapena */}
          <label htmlFor="municipality-select">Tipo:</label>
          <select
            id="municipality-select"
            value={selectedMunicipality}
            onChange={handleMunicipalityChange}
          >
            <option value="">--Please choose an option--</option>

            {/* Filtratutako udalerriak aukera gisa agertzen ditugu */}
            {filteredMunicipality.map((municipality, index) => (
              <option key={index} value={municipality}>
                {municipality}
              </option>
            ))}
          </select>
          {/* Marken hautapena */}
          <label htmlFor="marks-select">Localidad:</label>
          <select
            id="marks-select"
            value={selectedMark}
            onChange={handleMarkChange}
          >
            <option value="">--Please choose an option--</option>
            {marksOptions.map((mark, index) => (
              <option key={index} value={mark}>
                {mark}
              </option>
            ))}
          </select>
        </>
      )}

      

      {/* Pasamos los datos filtrados a CInformacion como props */}
      <CInformacion 
        filteredData={filteredData}  // Hautatutako markarekin filtratutako datuak
      />
    </div>
  );
}

export default CMunicipio;
