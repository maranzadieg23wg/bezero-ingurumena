import React from 'react';

function CInformacion({ filteredData }) {
  return (
    <div>
      {filteredData && filteredData.length > 0 ? (
        <div>
          <h2>Información Adicional</h2>
          {filteredData.map((item, index) => (
            <div key={index}>
              <p>Tipo: {item.marks}</p>
              <p>Turismo Euskadi: <a href={item.friendlyUrl}>{item.friendlyUrl}</a></p>
              <p>Descripcion:</p>
              <div dangerouslySetInnerHTML={{ __html: item.turismDescription }} />
              
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default CInformacion;
