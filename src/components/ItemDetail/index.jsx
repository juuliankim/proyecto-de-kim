import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import listaProducto from "../../mocks/listaProducto"

const ItemDetailComponent = () => {

    const {nombreProducto} = useParams()
    const [precio, setPrecio] = useState([])

    useEffect(() => {
        let precios = listaProducto.filter((element) => {
            if(nombreProducto == element.nombre) {
                return element.precio
            }
        })
        setPrecio(precios[0].precio)
    }, [nombreProducto])

    return (
        <div>
            <h2>{nombreProducto}</h2>
            <h3>{precio.precio}</h3>
        </div>
    )
}

export default ItemDetailComponent