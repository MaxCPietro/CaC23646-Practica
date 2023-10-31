import { useState } from "react";

export const useContador = (valorInicial) => {
    const [count, setCount] = useState(valorInicial);

    const increment = () => {
        setCount(count + 1);    
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return {
        count,
        increment,
        decrement
    }
}