import React from 'react'
import {useState} from "react"

const AddTaskForm = ({onSubmitted} = (tareaNueva) => {}) => {
  //useState para una nueva tarea
  const [newTask,setNewTask] = useState({nameNewTask: ""}); //nameNewTask es el array donde se guarda la nueva tarea (id. title)
  
  //Captura de nueva Tarea
  const handleChange = (e) => {
    //desestructura el evento y captura la entrada de datos
    const {name,value} = e.target;
    setNewTask({
        ...newTask,
        [name]: value
    });
  };

  //limpieza del formulario
  const resetForm = () => setNewTask({nameNewTask: ""});

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

export default AddTaskForm