import React, { useState } from 'react'
import ItemListComponent from '../../components/ItemList'

export const CartContext = React.createContext([])

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addCart = (item) => {
        const exist = cart.find((x) => x.id === item.id)
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === item.id ? { ...exist, quantity: exist.quantity + 1} : x
                )
            )
        }else{
            setCart([...cart, {...item, quantity:1}])
        }
    }
    
    const removeCart = (item) => {
        const exist = cart.find((x) => x.id === item.id)
        if(exist.quantity === 1) {
            setCart(cart.filter((x) => x.id !== item.id))
        }else{
            setCart(
                cart.map((x) =>
                x.id === item.id ? {...exist, quantity: exist.quantity - 1} : x
                )
            )
        }
    }

    return <CartContext.Provider value={{cart, addCart, removeCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider

//const { listProduct, setListProducts } = useContext(ProductContext)