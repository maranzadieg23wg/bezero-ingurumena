import React from "react";
import { ProvinceProvider } from "./c_provincia/DataContext";
import CProvincia from "./c_provincia/c_provincia";
import CMunicipio from "./c_municipio/c_municipio";

function CMain() {
  return (
    <ProvinceProvider>  {/* Envolvemos CMain con ProvinceProvider para pasarle los datos */}
      <div>
        <CProvincia />
        <CMunicipio />
      </div>
    </ProvinceProvider>
  );
}

export default CMain;
