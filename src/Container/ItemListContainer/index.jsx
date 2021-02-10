import ItemCountComponent from "../../components/ItemCount"
import listaProducto from "../../mocks/listaProducto"
import React, { useState } from "react";
import ItemListComponent from "../../components/ItemList";

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
        <ItemCountComponent descripcion={"tenemos en Stock"} stock={10} inicial={1}/>
        </>
    )
}

export default ItemListContainer