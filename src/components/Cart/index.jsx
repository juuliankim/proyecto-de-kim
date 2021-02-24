import { useContext } from 'react'
import cartContex from '../../context/CartContext'

const CartComponent = () => {

    const CartContextUse = useContext(cartContex)

    return (
        <h1>Carrito</h1>
    )
}

export default CartComponent