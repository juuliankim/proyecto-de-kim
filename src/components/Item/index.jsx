import { Link } from "react-router-dom"
import { card } from "./Item.module.scss"

const ItemComponent = ({producto}) => {
    return (
        <div className={card}>
            <h3>{producto.nombre}</h3>
            <img src={producto.url} alt="" width="300" height="300"/>
            <p>Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link to={`/tienda/${producto.nombre}`} >Ver mas</Link>
        </div>
    )
}

export default ItemComponent