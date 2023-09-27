import React, {useState} from "react";
import Titulo from "../components/Titulo";
import AgregarTarea from "../components/AgregarTarea";
import PlanillaDeTareas from "../components/PlanillaDeTareas";

const WhiteBoard = () => {
  const whiteBoardStyle = {
    width: "400px", // Ancho del cuadro
    height: "400px", // Altura del cuadro
    backgroundColor: "#f0f0f0", // Color de fondo del cuadro
    border: "1px solid #ccc", // Borde del cuadro
    margin: "10px 20px", //Establece un margen de 10 píxeles arriba/abajo y 20 píxeles izquierda/derecha
    textAlign: "center", // Centra el contenido dentro del cuadro horizontalmente
    padding: "0px", // Espaciado interno del cuadro
  };

  //useState el estado es lo que recibo por callback y se actualiza cada vez que se recibe un nuevo iD
  const [loQueRecibo,setLoQueRecibo] = useState(null);

  return (
    <div style={whiteBoardStyle}>
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
            console.log("Tipo de recibido", typeof RecibidoAgregarTarea);
            setLoQueRecibo(recibidoAgregarTarea);
          }}
        />
      </section>

      {
        <section>
          <PlanillaDeTareas loQueEnvio={loQueRecibo}/>
        </section>
      }
    </div>
  );
};

export default WhiteBoard;
