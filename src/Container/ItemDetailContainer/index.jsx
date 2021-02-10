import ItemDetail from "../../components/ItemDetail"
import listaProducto from "../../mocks/listaProducto"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(listaProducto[0]), 3000);
        });

        getItems.then((result) => setDetail(result));

    }, [])

    console.log(detail);
    
    return (
        <>
        <ItemDetail detail={detail} />
        </>
    );
};
    
export default ItemDetailContainer