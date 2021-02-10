import ItemDetail from "../../components/ItemDetail"
import listaProducto from "../../mocks/listaProducto"
import React, { useState } from 'react'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);

    React.useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(listaProducto[0]), 3000);
        });

        getItems.then((result) => setDetail(result));

    }, [])

    console.log(detail);
    
    return (
        <>
        <ItemDetail detail={detail} />
        </>
    );
};
    
export default ItemDetailContainer