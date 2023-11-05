import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cantProducts, setCantProducts] = useState(0);
    const addProduct = (p) => setCantProducts(cantProducts + 1);
    const removeProduct = (p) => setCantProducts(cantProducts - 1);

    return (
        <CartContext.Provider
            value={{ cantProducts, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const { cantProducts, addProduct, removeProduct } = useContext(CartContext);
    return {
        cantProducts,addProduct,removeProduct,
    }
}