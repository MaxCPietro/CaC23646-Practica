import React from 'react'

const Tasks = ({tarea, estado}) => {
  return (
    <div>
      <p>
        <span>{tarea}</span>
        <span>{estado ? "completada" : "Pendiente"}</span>
      </p>  
    </div>
  )
}

export default Tasks