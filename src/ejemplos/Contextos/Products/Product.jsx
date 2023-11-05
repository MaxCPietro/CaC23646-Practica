import React from 'react'
import { useCartContext } from '../Contexts/CartContext';

const Product = ({producto}) => {
    const productStyle = {
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
        height: "200px",
        border: "2px solid #000", // Agrega un borde de 2px de ancho y color negro
        borderRadius: "5px",
    };

    const {addProduct, removeProduct} = useCartContext();
    
return (
    <div style={productStyle}>
        <div style={{border: "1px solid yellow"}}><span>{producto.title}</span></div>
        <div style={{border: "1px solid red"}}><img src={producto.imagen} width="70" height="70"/></div>
        <div>
            <button style={{border: "1px solid green"}} onClick={() => {removeProduct()}}>-</button>
            <button style={{border: "1px solid green"}} onClick={() => {addProduct()}}>+</button>
        </div>
    </div>
)
}

export default Product