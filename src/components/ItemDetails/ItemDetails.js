import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetails = ({selectedProduct}) => {
    
    return (
        <div className="Card_Item_Selected">
            <div className='Img2'>
                <img alt="Imagenes de productos" src={selectedProduct.Img} />
            </div>
            <div className='info_card2'>
                <h2 className='titulo2'>{selectedProduct.Nombre}</h2>
                <p className='p_minima2'>Produccion Mínima: {selectedProduct.ProduccionMinima}</p>
                <p className='desc2'>Descripción: {selectedProduct.Descripcion}</p>
                <p className='cant2'>Cantidad: {selectedProduct.Cantidad}</p>
                <p className='precio2'>Precio: ${selectedProduct.Precio}</p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetails