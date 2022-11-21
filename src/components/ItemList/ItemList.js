import './ItemList.css'
import Item from "../Item/Item";
import { Link } from 'react-router-dom'

const ItemList = ({ products }) => {
    
    return (
      <>
      {products.map ((product) =>(
        <Item key={product.id} product={product}/>
      ) )}
      </>
    )
  }  

export default ItemList; 