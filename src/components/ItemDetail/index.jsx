import ItemCountComponent from "../ItemCount"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

const ItemDetailComponent = ({producto, contador}) => {
    
    const[carrito, setCarrito] = useState(false)

    const {addCart, cart} = useContext(CartContext)

    const onAdd = (contador) => {
        console.log ('Ud selecciono ', contador)
        setCarrito(true)
        addCart([...cart, [{producto: producto, quantity: contador}]])
    }
    console.log(cart)
    return (
        <>
            <div>
                <h2>{producto.title}</h2>
                <img src={producto.image} alt="" width="400" height="550"/>
                <p>Precio: {producto.price}</p>
                <p>Descripcion: {producto.description}</p>
            </div>
            <div>
            {carrito ? <Link to={'/carrito'}><button>Ir al Carrito</button></Link> : <ItemCountComponent onAdd={onAdd} descripcion={"tenemos en Stock"} stock={producto.stock} inicial={1} contador={contador}/> }
            </div>
        </>
    )
}

export default ItemDetailComponent