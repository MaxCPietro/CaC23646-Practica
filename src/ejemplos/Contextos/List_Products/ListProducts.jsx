import React from 'react'
import Product from '../Products/Product'

const ListProducts = ({listaDeProductos}) => {
return (
    <div style={{display:"flex", gap:"10px"}}>
        {
            listaDeProductos.map((p) => (
                <Product
                    key={p.id}
                    producto={p}
                />
            ))
        }
    </div>
)
}

export default ListProducts