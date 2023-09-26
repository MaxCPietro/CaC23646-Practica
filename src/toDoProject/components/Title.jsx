import React from 'react'

const Title = ({children}) => {
    const h1Style = {
          color: 'red', // Cambia el color del texto
          textAlign: 'center', // Cambia la alineación del texto
          textDecoration: 'underline', // Agrega subrayado
          };
    return (
        <div style={h1Style}>
            {children}
        </div>
    );
};

export default Title