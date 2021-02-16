import React from 'react';
import ItemCountComponent from "../../components/ItemCount"

const ItemDetail = ({detail}) => {

    return (
        <>
        <div>
            <h3>{detail.nombre}</h3>
            <img src={detail.url} alt="" width="400" height="550"/>
            <p>Precio: {detail.precio}</p>
            <p>Descripcion: {detail.descripcion}</p>
        </div>
        <div>
            <ItemCountComponent descripcion={"tenemos en Stock"} stock={detail.stock} inicial={1}/>
        </div>
        </>
    )

}

export default ItemDetail