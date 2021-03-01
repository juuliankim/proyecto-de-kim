import ItemListContainer from '../../Container/ItemListContainer'
import { row } from './Shop.module.scss'

const ShopComponent = () => {
    return (
        <>
        <h1>Tienda</h1>
        <div className={row}>
            <ItemListContainer/>
        </div>
        </>
    )
}

export default ShopComponent