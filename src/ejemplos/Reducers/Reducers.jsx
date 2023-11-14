import React, {useReducer} from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state, //copia profunda
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        default: //si no cumple ningun case devuelve el state
            return state;
    }
}

const Reducers = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

return (
<div>    
    {state.count} {/*//nuestra el estado (el contrador)*/}
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
</div>
)
}

export default Reducers