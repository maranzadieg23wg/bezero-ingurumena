import React from 'react';
import { useProvince } from './DataContext';  // Importamos el hook

function CProvincia() {
    const { selectedProvince, handleProvinceChange } = useProvince();  // Accedemos al valor y la función de cambio

    return (
      <div>
        <form>
            <legend>Provincia</legend>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div>
                <input 
                  type="radio" 
                  id="contactChoice1" 
                  name="contact" 
                  value="Araba/Álava" 
                  checked={selectedProvince === 'Araba/Álava'} 
                  onChange={handleProvinceChange}
                />
                <label htmlFor="contactChoice1">Araba/Álava</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  id="contactChoice2" 
                  name="contact" 
                  value="Bizkaia" 
                  checked={selectedProvince === 'Bizkaia'} 
                  onChange={handleProvinceChange}
                />
                <label htmlFor="contactChoice2">Bizkaia</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  id="contactChoice3" 
                  name="contact" 
                  value="Gipuzkoa" 
                  
                  onChange={handleProvinceChange}
                />
                <label htmlFor="contactChoice3">Guipuzkoa</label>
              </div>
            </div>

            
        </form>
      </div>
    );
}

export default CProvincia;
