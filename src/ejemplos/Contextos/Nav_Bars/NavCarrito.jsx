import React, { useContext } from 'react'
import { useCartContext } from '../Contexts/CartContext';

const NavCarrito = () => {

    const {cantProducts} = useCartContext();

    const navStyle ={
        backgroundColor: "#f0f0f0",
        padding: "10px",
        textAlign: "center",
        margin: "10px", // Agrega un margen de 10px en todos los lados
        border: "2px solid #000", // Agrega un borde de 2px de ancho y color negro
    };

return (
    <nav style={navStyle}>
        <div>
            <span>🌀 Hay <b>{cantProducts}</b> Productos</span>
        </div>
    </nav>
)
}

export default NavCarrito