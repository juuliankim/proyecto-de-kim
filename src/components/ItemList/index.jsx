import ItemComponent from "../Item"

const ItemListComponent = ({producto}) => {
    return (
        <div>
            {producto.map((producto) => {
                return <ItemComponent key={producto.id} producto={producto}/>
            })}
        </div>
    )
};

export default ItemListComponent;