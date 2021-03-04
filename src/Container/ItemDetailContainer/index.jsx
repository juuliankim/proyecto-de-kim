import ItemDetailComponent from "../../components/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getFirestore } from "../../firebase"


const ItemDetailContainer = (props) => {

    const [producto, setProducto] = useState({})

    //const {nombreProducto} = useParams()
   
    // useEffect(() => {
    //     listaProducto.then((resp) => {
    //         setProducto(resp.find((li) => li.nombre === nombreProducto))
    //     })
    // }, [])

    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();

        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('ITEMS');

        // Tomando los datos
        itemCollection.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Llamar otra vez a la bd tomando la categoriaID del element
                const CategoriasCollection = baseDeDatos.collection('CATEGORIAS');

                // Tomamos el documento la id de la categoria
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryId).get()
                return { ...product.data(), categoria:auxCategorias.data() }
            }))
            console.log(aux)
            setProducto(aux);
        })
    }, [])

    return (
        <>
        <ItemDetailComponent producto={producto}/>
        </>
    )
}
    
export default ItemDetailContainer