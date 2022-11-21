import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/DataBase'
import ItemDetails from '../../components/ItemDetails/ItemDetails'

const ItemDetailContainer = () => {
    
    const [selectedProduct, setselectedProduct] = useState();
    const {id} = useParams();

    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            {
                resolve(data);
            };
        }, 1000)
    });
    
    useEffect(() =>{
        getProducts.then((resolve) => {
            if(id){
                setselectedProduct(resolve.filter((data) => data.id === id))
            }else{
            }
        });
        setTimeout(() =>{
        }, 1000)

    }, [id]);

    return (
        <div className='selected_product'>
            {selectedProduct && <ItemDetails selectedProduct={selectedProduct} />}
        </div>
    )
}

export default ItemDetailContainer