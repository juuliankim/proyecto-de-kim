import ItemCountComponent from "../../ItemCount"
import React, { useState } from "react";

const ItemListContainer = (props) => {

    const [contador, setContador] = useState (1);

    const onAdd = (stock) => {
        if(contador < stock) {
            setContador(contador + 1);
        }else{
            alert("Nos quedamos sin stock")
        }
        
    }
    const resta = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <ItemCountComponent descripcion={"Tenemos en stock"} stock={10} contador={contador} resta={resta} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer