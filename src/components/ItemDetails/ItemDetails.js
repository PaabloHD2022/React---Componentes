import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetails = (selectedProduct) => {
    
    return (
        <div className="Card_Item_Selected">
            <img alt="Imagenes de productos" src={selectedProduct.Img} />
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