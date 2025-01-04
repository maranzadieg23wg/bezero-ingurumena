import React, { useEffect, useState } from 'react';


function Ajax() {

    const [data, setData] = useState(null);

  useEffect(() => {
    // Hacemos la solicitud usando la API fetch
    fetch('http://localhost:3000/espacios.php')  // La URL de tu archivo PHP
      .then((response) => response.json())  // Convertimos la respuesta en formato JSON
      .then((data) => {
        setData(data);  // Guardamos los datos recibidos en el estado
      })
      .catch((error) => {
        console.error('Hubo un error:', error);  // Manejamos el error si ocurre
      });
  }, []);



  return (
    <div>
      
    </div>
  );
}

export default Ajax;
