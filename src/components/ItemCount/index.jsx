import { AddShoppingCart } from "@material-ui/icons";
import React, { useState } from "react"

const ItemCountComponent = ({onAdd, stock, descripcion, inicial, producto}) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }else{
            alert("Nos quedamos sin stock")
        }
    }

    const decrementar = () => {
        if(contador > inicial)
        setContador(contador - 1)
    }
   
    const handlerOnAdd = () => {
        onAdd(contador)
    }

    return (
        <>
        {/* <button onClick={decrementar}>-</button>
        <b>{contador}</b>
        <button onClick={incrementar}>+</button> */}
        <div>
        <b>{descripcion}:{stock}</b>
        </div>
        <div>
        <button onClick={handlerOnAdd}>Comprar</button>
        </div>
        </>
    )
}

export default ItemCountComponent