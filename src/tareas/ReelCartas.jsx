import React, {useState} from "react"
import { Usuario } from "../ejemplos/Usuario";

//Aprox 1 -> Usando el indice como estado
/*const ReelCartas = ({users}) => {

    const [index,setIndex] = useState(0);

    const handleNextUser = () => {
        //Operador ternario para evitar el desbordamiento del Array
        const newIndex = (index + 1 > users.length -1) ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div>
            <button onClick={handleNextUser}>{"->"}</button>
            <p>{JSON.stringify(users[index])}</p>
            <button onClick={() => {}}>{"<-"}</button>
        </div>
    );
}*/

//Aprox 2: Usando usuario como índice y la función findIndex
/*const ReelCartas = ({users}) => {

    const [user,setUser] = useState(users[0]);
    
    const handleNextUser = () => {
        console.log(user.id);
        const newIndex = users.findIndex((u)=> u.id === user.id) + 1; 
        console.log(newIndex);
        setUser(users[newIndex]);
    };

    return (
        <div>
            <button onClick={handleNextUser}>{"->"}</button>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => {}}>{"<-"}</button>
        </div>
    );
}*/


//Aprox 3 -> Usando el indice como estado y la info que se muestra como componente separado.
const ReelCartas = ({propsUsers}) => {

    const [index,setIndex] = useState(0);

    const handleNextUser = () => {
        //Operador ternario para evitar el desbordamiento del Array
        const newIndex = (index + 1 > propsUsers.length -1) ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div>
            <p>{console.log(index)}</p>
            <button onClick={() => {handleNextUser(); 
                            console.log(index)}}>
                    {"->"}
            </button>
            {/*Inserto componente Usuario*/}
            {/*Paso por props lo que quiero que muestre*/}
            <Usuario 
                nombre={propsUsers[index].name}
                edad={propsUsers[index].age}
            />
            <button onClick={() => {}}>{"<-"}</button>
        </div>
    );
}
export default ReelCartas

