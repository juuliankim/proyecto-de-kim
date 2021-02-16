
import listaProducto from "../../mocks/listaProducto"
import React, { useState } from "react"
import ItemListComponent from "../../components/ItemList"

const ItemListContainer = (props) => {

    const [producto, setProducto] = useState([])

    React.useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(listaProducto), 2000);
        });
        
        promesa.then((result) => setProducto(result));
    }, [])

    return (
        <>
        <ItemListComponent producto={producto}/>
        </>
    )
}

export default ItemListContainer