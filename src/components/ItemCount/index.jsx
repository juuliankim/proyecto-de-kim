const ItemCountComponent = ({stock, descripcion, resta, onAdd, contador}) => {
    return (
        <>
        <button onClick={resta}>-</button>
        <b>{contador}</b>
        <button onClick={() => {onAdd(stock)}}>+</button>
        <div>
        <b>{descripcion}:{stock}</b>
        </div>
        <div>
        <button>Comprar</button>
        </div>
        </>
    )
}

export default ItemCountComponent