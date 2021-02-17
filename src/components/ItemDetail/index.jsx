import ItemCountComponent from "../ItemCount"

const ItemDetailComponent = ({producto}) => {

    return (
        <>
            <div>
                <h2>{producto.nombre}</h2>
                <img src={producto.url} alt="" width="400" height="550"/>
                <p>Precio: {producto.precios}</p>
                <p>Descripcion: {producto.descripcion}</p>
            </div>
            <div>
            <ItemCountComponent descripcion={"tenemos en Stock"} stock={producto.stock} inicial={1}/>
            </div>
        </>
    )
}

export default ItemDetailComponent