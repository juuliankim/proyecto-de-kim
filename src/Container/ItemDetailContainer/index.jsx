import React, { useState } from 'react'
import listaProducto from "../../mocks/listaProducto"
import ItemDetailComponent from "../../components/ItemDetail"

const ItemDetailContainer = (props) => {

    const [producto, setProducto] = useState([])

    React.useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(listaProducto), 2000);
        });
        
        promesa.then((result) => setProducto(result));
    }, [])

    return (
        <>
        <ItemDetailComponent producto={producto}/>
        </>
    )
}
    
export default ItemDetailContainer