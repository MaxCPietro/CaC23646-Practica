import React from 'react'

const Title = () => {
    const h1Style = {
          color: 'blue', // Cambia el color del texto
          fontSize: '24px', // Cambia el tamaño de la fuente
          textAlign: 'center', // Cambia la alineación del texto
          textDecoration: 'underline', // Agrega subrayado
        };
    return (<h1 style={h1Style}>TO DO LIST</h1>);
};

export default Title