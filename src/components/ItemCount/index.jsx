import React, { useState } from "react"

const ItemCountComponent = ({stock, descripcion, inicial}) => {
    const [contador, setContador] = useState(inicial);

    const onAdd = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }else{
            alert("Nos quedamos sin stock")
        }
    }

    const resta = () => {
        if(contador > inicial)
        setContador(contador - 1)
    }

    return (
        <>
        <button onClick={resta}>-</button>
        <b>{contador}</b>
        <button onClick={onAdd}>+</button>
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