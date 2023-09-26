import React from 'react'

const TasksList = ({tarea}) => {
  return (
    <div>
      {tarea}
      <button>E</button>
      <button>X</button>
    </div>
  )
}

export default TasksList