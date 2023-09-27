import React from 'react'

const Titulo = ({children}) => {
    const h1Style = {
        color: 'red', // Cambia el color del texto
        textAlign: 'center', // Cambia la alineación del texto
        textDecoration: 'underline', // Agrega subrayado
        margin: 'opx 0px', //
        padding: 'opx 0px', //

        };
  return (
      <div style={h1Style}>
          {children}
      </div>
  );
}

export default Titulo