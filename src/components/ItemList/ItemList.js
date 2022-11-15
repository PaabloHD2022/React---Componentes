import './itemList.css'
import Item from "../Item/Item";

const ItemList = ({productList = []}) => {
  return (    
      productList.map((data) =>         
        <Item key={data.id} product={data} />)
      );
    }  

export default ItemList; 