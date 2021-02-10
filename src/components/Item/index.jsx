const ItemComponent = ({producto}) => {
    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </div>
    )
}

export default ItemComponent