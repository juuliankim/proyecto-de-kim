
const ItemComponent = ({producto}) => {
    return (
        <div>
            <h3>{producto.name}</h3>
            <p>Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </div>
    )
}

export default ItemComponent