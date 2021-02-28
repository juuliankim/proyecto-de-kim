
import listaProducto from "../../mocks/listaProducto"
import React, { useState, useEffect } from "react"
import ItemListComponent from "../../components/ItemList"
import { getFirestore } from "../../firebase"

const ItemListContainer = (props) => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(listaProducto), 2000);
        });
        
        promesa.then((result) => setProducto(result));
    }, [])

    // useEffect(() => {
    //     const baseDeDatos = getFirestore()
    //     const itemColleciton = baseDeDatos.collection('Items')
    //     itemColleciton.get().then((value) => {
    //         let aux = value.docs.map(element => {
    //             return {...element.data(), id: element.id}
    //     })
    //     console.log(aux)
    //     setProducto(aux)
    // }, [])

    return (
        <>
        <ItemListComponent producto={producto}/>
        </>
    )
}

export default ItemListContainer