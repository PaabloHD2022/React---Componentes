import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    
      <div className="card_item">      
        <div className='info_producto'>
          <h2>{product.Nombre}</h2>
          <div className='cant_precio'>
            <p className='p_minima'>Prod. Mínima: {product.ProduccionMinima}</p>
          </div>          
          <Link to={`/item/${product.id}`}>
            <div className='img_producto'>
              <img alt="Imagenes de productos" src={product.Img} />
            </div>
          </Link>          
          <div>        
            <p className='precio'>Precio: ${product.Precio}</p>
          </div>
        </div>      
      </div>
    )
};

export default Item;