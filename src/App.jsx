import React from "react";
import Reducers from "./ejemplos/Reducers/Reducers";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./ejemplos/Pr_Routers/core/routes/AppRouters";
import RootProviders from "./ejemplos/Pr_Routers/core/providers/RootProviders";

//import Tarea1 from "./tarea/Tarea1";
//import Contador from "./tarea/Contador";
//import Estados from "./temario/Estados";
//import ReelCartas from "./tareas/ReelCartas";
//import ToDoViewPpal from "./toDoProject/toDoViews/ToDoViewPpal";
//import Formulario from "./ejemplos/Formulario";
//import WhiteBoard from "./projectsByMax/ToDoList/views/WhiteBoard";
//import Padre from "./ejemplos/usoCallBacks/Padre"
//import Fomularios2 from "./ejemplos/Fomularios2";
//import Guardado from "./ejemplos/locaStorage";
//import Api_Gatitos from "./tareas/Api_Gatitos";
//import Api_Gatitos_Axios from "./tareas/Api_Gatitos_Axios";
//import CustomHooks from "./ejemplos/CustomHooks/CustomHooks";
//import VariasPromesas from "./ejemplos/VariasPromesas/VariasPromesas";
//import AcuBilletes from "./ejemplos/Reduce/AcuBilletes";
//import RootLayout from "./ejemplos/Contextos/RootLayout";
//import ListProducts from "./ejemplos/Contextos/List_Products/ListProducts";
//import { CartProvider } from "./ejemplos/Contextos/Contexts/CartContext";
//import OptCarrito from "./ejemplos/OptCarrito/OptCarrito";

const App = () => {
  //Mock con Lista de productos
  const mockListaProducts = [
    {
      id: crypto.randomUUID(),
      title: "Marmite NZ",
      imagen: "../src/ejemplos/Contextos/Img/Marmite_NZ.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Marmite UK",
      imagen: "../src/ejemplos/Contextos/Img/Marmite_UK.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Vegemite",
      imagen: "../src/ejemplos/Contextos/Img/Vegemite.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Jugo",
      imagen: "../src/ejemplos/Contextos/Img/Jugo_NZ.jpg",
    },
  ]

  const datos = {
    saludo: "Hola Max Power, estás muy loco",
  }

  return (
    <>
      {/*<ReelCartas propsUsers={users}/>*/}
      {/*<ToDoViewPpal />*/}
      {/*<Formulario />*/}
      {/*<WhiteBoard />*/}
      {/*<Padre />*/}
      {/*<Fomularios2 />*/}
      {/*<Guardado />*/}
      {/*<Api_Gatitos />*/}
      {/*<Api_Gatitos_Axios />*/}
      {/*<CustomHooks />
      <CustomHooks />*/}
      {/*<VariasPromesas />*/}
      {/*<AcuBilletes/>*/}

      {/*<CartProvider>
        <RootLayout>
          <ListProducts listaDeProductos={mockListaProducts}/>
        </RootLayout>
      </CartProvider>*/}
      {/*<OptCarrito />*/}
      {/*<Reducers />*/}
      
      <RootProviders>
        <RouterProvider router={AppRouter}/>
      </RootProviders>

    </>
  );
};

export default App;
