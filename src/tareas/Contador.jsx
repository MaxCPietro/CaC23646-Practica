import React, {useState} from "react";

const Contador = () => {

  //ValorInicial
  const VALOR_INICIAL = 0;

  //useState
  const [contador, setContador] = useState(VALOR_INICIAL);

  //handler Functions
  const handleIncrement = () => {
    setContador(contador+1);
    setContador((maxi) => maxi*3);
  };
  const handleDecrement = () => {
    setContador(contador-1);
  };
  
  const handlerReset = () => {
    setContador(VALOR_INICIAL);
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{contador}</h1>
      <button onClick={handleDecrement}>-</button>

      <hr />

      <button onClick={handlerReset}>RESET</button>
    </div>
  );
};

export default Contador;
