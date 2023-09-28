import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  return (
    <div>
      <Hijo
        saludo={(loQueReciboDelHijo) => {
          console.log("TEXTO DESDE EL COMPO PADRE ", loQueReciboDelHijo);
        }}
      />
    </div>
  );
};

export default Padre;
