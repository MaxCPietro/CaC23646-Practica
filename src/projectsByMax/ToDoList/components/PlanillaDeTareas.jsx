import React from "react";
import { useState, useEffect } from "react";

//Planilla de tareas es un componente padre.
//Lista las tareas y actualiza el estado.
const PlanillaDeTareas = ({ loQueEnvio }) => {
  //const text = console.log(`Hola ${onListed}`);
  const DATOS_MOCK = [
    { id: 1, title: "Tarea 1", editable: false, completed: false },
    { id: 2, title: "Tarea 2", editable: false, completed: false },
  ];

  //useState actualizacion de tareas
  const [listaDeTareas, setListaDeTareas] = useState(DATOS_MOCK);

  useEffect(() => {
    // Esta función se ejecutará cuando loQueEnvio cambie
    if (loQueEnvio) {
      const nuevaTarea = {
        id: window.crypto.randomUUID(),
        title: loQueEnvio,
        editable: false,
        completed: false,
      };
      // Usamos la función de actualización para asegurarnos de que el estado se actualice correctamente.
      setListaDeTareas((prevTareas) => [...prevTareas, nuevaTarea]);
    }
    
  }, [loQueEnvio]);


  return (
    <div>
      {listaDeTareas.map((tarea) => (
        <div key={tarea.id}>{tarea.title}</div>
      ))}
    </div>
  );
};

export default PlanillaDeTareas;
