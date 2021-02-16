import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import listaProducto from "../../mocks/listaProducto"
import ItemCountComponent from "../ItemCount"

const ItemDetailComponent = () => {

    const {nombreProducto} = useParams()
    const [precios, setPrecio] = useState([])
    const [url, setUrl] = useState([])
    const [descripcion, setDescripcion] = useState([])
    const [stock, setStock] = useState([])

    useEffect(() => {
        listaProducto.filter((element) => {
            return element.name === nombreProducto
        })
        setPrecio(listaProducto[0].precio)
        setUrl(listaProducto[0].url)
        setDescripcion(listaProducto[0].descripcion)
        setStock(listaProducto[0].stock)
    }, [nombreProducto])

    return (
        <>
        <div>
            <h2>{nombreProducto}</h2>
            <img src={url} alt="" width="400" height="550"/>
            <p>Precio: {precios}</p>
            <p>Descripcion: {descripcion}</p>
        </div>
        <div>
        <ItemCountComponent descripcion={"tenemos en Stock"} stock={stock} inicial={1}/>
        </div>
        </>
    )
}

export default ItemDetailComponent