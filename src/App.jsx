import React from "react";
//import Tarea1 from "./tarea/Tarea1";
//import Contador from "./tarea/Contador";
//import Estados from "./temario/Estados";
//import ReelCartas from "./tareas/ReelCartas";
import ToDo from "./tareas/ToDo";

//Defino un array de objetos usuarios con 3 propiedades: id, name y age
const users = [
  {id: 1,name: "User 1",age: 20,},
  {id: 2,name: "User 2",age: 30,},
  {id: 3,name: "User 3",age: 40,},
];


const App = () => {
  return (
    <>
      {/*<ReelCartas propsUsers={users}/>*/}
      <ToDo />
    </>
  );
};

export default App;
