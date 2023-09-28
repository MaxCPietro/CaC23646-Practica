import React from "react";

const Hijo = ({ saludo } = () => {}) => {
    const handleClick = (e) => {
    saludo("Hola Max Power, estás muy loco!");
    };

return (
    <div>
        <button onClick={handleClick}>SALUDAR</button>
    </div>
);
};

export default Hijo;
