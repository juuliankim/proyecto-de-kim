import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartComponent = () => {

    const CartContextUse = useContext(CartContext)

    return (
        <>
        <h1>Carrito</h1>
        <button>asd</button>
        </>
    )
}

export default CartComponent