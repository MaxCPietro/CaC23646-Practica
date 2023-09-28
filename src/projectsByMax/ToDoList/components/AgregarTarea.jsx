import React from "react";
import { useState } from "react";

const AgregarTarea = ({ onSubmitted = () => {}}) => {
  //useState para una nueva tarea
  const [newTask, setNewTask] = useState({ nameNewTask: "" }); //nameNewTask es el array donde se guarda la nueva tarea (id. title)

  //limpieza del formulario
  const resetForm = () => setNewTask({ nameNewTask: "" });

  //Captura de nueva Tarea
  const handleChange = (e) => { setNewTask(e.target.value)};

  //Agregado de Tarea Nueva al listado de tareas
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitted(newTask); //acá le paso por callback la nueva tarea al componente padre
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nameNewTask"
        type="text"
        value={newTask.nameNewTask}
        onChange={handleChange}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AgregarTarea;
