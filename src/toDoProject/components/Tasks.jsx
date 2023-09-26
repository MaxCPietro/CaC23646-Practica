import React,  {useState} from "react"

const Tasks = ({tarea}) => {

const [tachado, setTachado] = useState(false);
const [modoEdicion, setModoEdicion] = useState(false);
const [nuevoTexto, setNuevoTexto] = useState(tarea);

  const handleX = () => {
    setTachado(!tachado); // Alternar entre tachado y no tachado
  };

  const handleEditar = () => {
    setModoEdicion(true);
  };

  const handleGuardar = () => {
    setModoEdicion(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNuevoTexto(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <p>
        <span style={{ textDecoration: tachado ? 'line-through' : 'none' }}>
        {modoEdicion ? (
            <input
              name="TCambiado"
              type="text"
              value={nuevoTexto}
              onChange={handleInputChange}
            />
          ) : (
            tarea
          )}
        </span>

        <button onClick={handleX}>X</button>
        
        {modoEdicion ? (
          <button onClick={handleGuardar}>Guardar</button>
        ) : (
          <button onClick={handleEditar}>Editar</button>
        )}
        
      </p>  
    </div>
  )
}

export default Tasks