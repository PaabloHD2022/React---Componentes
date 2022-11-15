import './item.css'

const Item = ({product}) => {
  return (
    <div className="Card_Item">
      <img alt="Imagenes de productos" src={product.Img} />
      <h2>{product.Nombre}</h2>
      <p className='p_minima'>ProduccionMinima {product.ProduccionMinima}</p>
      <p className='desc'>Descripcion {product.Descripcion}</p>
      <p className='cant'>Cantidad {product.Cantidad}</p>
      <p className='precio'>Precio {product.Precio}</p>
    </div>
  )
}

export default Item;