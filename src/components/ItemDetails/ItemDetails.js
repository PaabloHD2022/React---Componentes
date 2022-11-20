import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetails = (selectedProduct) => {
    
    return (
        <div className="Card_Item_Selected">
            <Link to={`item/${selectedProduct.id}`}>
                <img alt="Imagenes de productos" src={selectedProduct.Img} />
            </Link>
            <h2>{selectedProduct.Nombre}</h2>
            <p className='p_minima'>Produccion Mínima: {selectedProduct.ProduccionMinima}</p>
            <p className='desc'>Descripción: {selectedProduct.Descripcion}</p>
            <p className='cant'>Cantidad: {selectedProduct.Cantidad}</p>
            <p className='precio'>Precio: ${selectedProduct.Precio}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetails

