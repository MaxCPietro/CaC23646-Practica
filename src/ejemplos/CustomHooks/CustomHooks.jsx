import { useContador } from './useContador';

function CustomHooks() {
    //llamo al custom hook
    const {count, increment, decrement} = useContador(10);
    
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    )
}

export default CustomHooks