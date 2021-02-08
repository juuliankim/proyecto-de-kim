import ItemCountComponent from "../../components/ItemCount"
import productList from "../../mocks/productsList"
import ItemList from "../../components/ItemList"
import React, { useState } from "react";

const ItemListContainer = (props) => {

    const [producto, setProducto] = useState([])

    React.useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000);
        });
        
        promesa.then((result) => setProducto(result));
    }, [])

    return (
        <>
        <ItemList producto={producto}/>
        <ItemCountComponent descripcion={"tenemos en Stock"} stock={10} inicial={1}/>
        </>
    )
}

export default ItemListContainer

// useEffect(() => {
//     fetch('https:api.mercadopago.com/checkout/preferences', {
//         method: 'POST',
//         headers: 
//     }
//     ) 
// })