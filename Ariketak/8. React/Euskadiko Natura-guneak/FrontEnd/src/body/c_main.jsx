import React from "react";
import { ProvinceProvider } from "./c_provincia/DataContext"; // Asegúrate de importar el Provider
import CProvincia from "./c_provincia/c_provincia";
import CMunicipio from "./c_municipio/c_municipio";

function CMain() {
  return (
    <ProvinceProvider>  {/* Envolvemos CMain con ProvinceProvider */}
      <div>
        <CProvincia />
        <CMunicipio />
      </div>
    </ProvinceProvider>
  );
}

export default CMain;
