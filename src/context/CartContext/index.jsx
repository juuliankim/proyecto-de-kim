import { createContext, useState } from "react"

export const cartContex = createContext();

function CartContext({children}) {

    const [product, setProduct] = useState([]);

    return (
        <>
        <cartContex.Provider value={{product, setProduct}}>
            {children}
        </cartContex.Provider>
        </>
    )
}

export default CartContext