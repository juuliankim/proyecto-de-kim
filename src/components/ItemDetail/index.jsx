import React from 'react';

const ItemDetail = ({detail}) => {

    return (
        <div>
            <h3>{detail.nombre}</h3>
            <img src={detail.imagen} alt=""/>
            <p>Precio: {detail.precio}</p>
            <p>Descripcion: {detail.descripcion}</p>
        </div>
    )

}

export default ItemDetail