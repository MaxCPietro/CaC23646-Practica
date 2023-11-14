import React from 'react'

const OptCarrito = () => {
/*const carrito = [{
    id: 1,
    title: 'Camisa',
    price: 10,
    quantity: 1
    },{
    id: 2,
    title: 'Pantalon',
    price: 20,
    quantity: 1
    }]

    

    const agregarProducto = (p) => {
        const {id} = p;
        const index = carrito.find((p) => p.id === id);
        console.log("encontré esto:", p.title);

        //el Ternario
        index ? index.quantity+=2 : carrito.push(p);

        console.log("Carrito nuevo",carrito);
    }

    const eliminarProducto = (p) => {
        const {id} = p;
        const index = carrito.findIndex((p) => p.id === id);
        console.log("encontré esto:", p.title);
        carrito.splice(index, 1);
    }
    eliminarProducto({id: 1, title: 'camisa', price: 10, quantity: 1}) 

    agregarProducto({id: 3, title: 'corbata', price: 100, quantity: 15})*/

    //Con Map
    const carrito = new Map ([
        [1, {id: 1, title: 'camisa', price: 10, quantity: 1}],
        [2, {id: 2, title: 'pantalon', price: 20, quantity: 1}],
        [3, {id: 3, title: 'corbata', price: 100, quantity: 15}],
    ]);

    console.log(carrito);

    /*const buscarProducto = (p) => {
        const {index}  = carrito.get(p.id); 
        console.log("encontré esto:", p);
    }

    buscarProducto({id: 1, title: 'camisa', price: 10, quantity: 1})*/

    /*const agregarProducto = (p) => {
    const productoActualizar = carrito.get(p.id);
    productoActualizar ? productoActualizar.quantity++ : carrito.set(p.id, p);}

    agregarProducto({id: 1, title: 'camisa', price: 10, quantity: 1})
    agregarProducto({id: 4, title: 'corbata', price: 20, quantity: 19})*/

    /*const eliminarProducto = (p) => {
        const productoAEliminar = carrito.get(p.id);

        if(!productoAEliminar) {console.log("No se encontro el producto"); return;}

        productoAEliminar.quantity === 1 ? carrito.delete(productoAEliminar.id)
                                        : productoAEliminar.quantity--;
    }

    eliminarProducto({id:1});*/

    const funcArrFromMap = (m) => Array.from(m.values());
    
    const totalProductos = funcArrFromMap(carrito).reduce(
        (ac,ele,ind) => ac + ele.quantity, 0
    );
    console.log(totalProductos);
        


    return (
    <div>Redux2</div>
)
}


export default OptCarrito