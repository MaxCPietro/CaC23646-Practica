import React , {useRef} from "react";

const AgregarTarea = ({ onSubmitted = () => {}}) => {
  //useRef
  const inputRef = useRef(null);

  //Captura de nueva Tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreTareaNueva = inputRef.current.value; //Obtiene el valor del input
    onSubmitted(nombreTareaNueva); //Llamo al callback con el valor
    inputRef.current.value = ""; //limpia el valor del input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef} //establece la referencia al input
        name="nameNewTask"
        type="text"
        />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AgregarTarea;
