import React from 'react'

const AddTaskForm = ({agregar, tarea, captura}) => {
  return (
    <form onSubmit={agregar}>
      <input
        name="nameNewTask"
        type="text"
        value={tarea}
        onChange={captura}
        />
      <button type="submit">Agregar Tarea</button>
    </form>
    );
  };

export default AddTaskForm