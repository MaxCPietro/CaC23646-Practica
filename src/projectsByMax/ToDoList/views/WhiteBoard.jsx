import React, { useState } from "react";
import Titulo from "../components/Titulo";
import AgregarTarea from "../components/AgregarTarea";
import PlanillaDeTareas from "../components/PlanillaDeTareas";

const WhiteBoard = () => {
 //useState el estado es lo que recibo por callback y se actualiza cada vez que se recibe un nuevo iD
  const [loQueRecibo, setLoQueRecibo] = useState(null);

  return (
    <div>
      <section>
        <Titulo>
          <h2>Lista de Tareas</h2>
          <p>Agregar Tarea</p>
        </Titulo>
      </section>

      <section>
        <AgregarTarea
          onSubmitted={(recibidoAgregarTarea) => {
            console.log("Valor recibido:", recibidoAgregarTarea);
            console.log("Tipo de recibido", typeof recibidoAgregarTarea);
            setLoQueRecibo(recibidoAgregarTarea);
          }}
        />
      </section>

      {
        <section>
          <PlanillaDeTareas loQueEnvio={loQueRecibo} />
        </section>
      }
    </div>
  );
};

export default WhiteBoard;
