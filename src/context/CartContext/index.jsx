import React, { useState } from 'react'

export const CartContext = React.createContext([])

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addCart = (item) => {
        setCart(item)
    }

    return <CartContext.Provider value={{cart, addCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider

//const { listProduct, setListProducts } = useContext(ProductContext)