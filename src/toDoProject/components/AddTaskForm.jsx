import React from 'react'
import {useState} from "react"

const AddTaskForm = ({onSubmitted} = (tareaNueva) => {}) => {
  //Form Entry New Task
  const [newTask,setNewTask] = useState({nameNewTask: ""});
  
   //Captura de nueva Tarea
   const handleChange = (e) => {
    //desestructura el evento y captura la entrada de datos
    const {name,value} = e.target;
    setNewTask({
        ...newTask,
        [name]: value
    });
  };

  //Nuevas Tareas
  //1- Creacion de Tarea Nueva
  

    //2-limpieza del formulario
    const resetForm = () => setNewTask({nameNewTask: ""});

    //Agregado de Tarea Nueva al listado de tareas
    const handleSubmit = (e) => {
    e.preventDefault();
    //limpieza del formulario
    resetForm();
    onSubmitted(newTask)

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