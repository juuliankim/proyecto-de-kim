import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartComponent = () => {

    const {cart, addCart, removeCart} = useContext(CartContext)

    return (
        <>
        <h1>Cart</h1>
        <div>{cart.length === 0 && <div>No hay productos seleccionados</div>}</div>
        {cart.map((item) => ( 
            <div key={item.id} >
                <div>{item.name}</div>
                <div>
                    <button onClick={() => addCart(item)}>+</button>
                    <button onClick={() => removeCart(item)}>-</button>
                </div>
                <div>
                    {item.quantity} x ${item.price}
                </div>
            </div>
        ))}
        </>
    )
}

export default CartComponent