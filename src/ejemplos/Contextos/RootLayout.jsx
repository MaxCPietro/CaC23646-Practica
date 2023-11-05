import React from 'react'
import NavCarrito from './Nav_Bars/NavCarrito'

const RootLayout = ({children}) => {
return (
    <div>
        <header>
            <h1 style={{border: "2px solid #000"}}>HEADER</h1>
            <NavCarrito />
        </header>
        <hr/>
        {children}
        <hr/>
        <footer><h1 style={{border: "2px solid #000"}}>FOOTER</h1></footer>
    </div>
    )
}

export default RootLayout