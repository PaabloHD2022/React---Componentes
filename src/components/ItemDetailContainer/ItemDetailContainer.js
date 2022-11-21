import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/DataBase'
import ItemDetails from '../../components/ItemDetails/ItemDetails'

const ItemDetailContainer = () => {
    
    const [selectedProduct, setselectedProduct] = useState();
    const {id} = useParams();

    const getProducts = () => {
        const productFiltered = data.filter((product) => {
            return product.id === id;
        })
        setselectedProduct(productFiltered)
    }

    useEffect (() => {
        getProducts();
    }, [id])

    return (
        <div>
            {selectedProduct && 
            <ItemDetails selectedProduct={selectedProduct} /> 
            }
        </div>
    )
}

export default ItemDetailContainer