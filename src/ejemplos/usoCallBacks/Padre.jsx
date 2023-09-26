import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <div>
        <Hijo
         saludo={(texto) => {
            console.log("TEXTO DESDE EL COMPO PADRE ",texto);
         }}
        />

    </div>
  )
}

export default Padre