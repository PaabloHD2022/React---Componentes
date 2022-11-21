import './ItemListContainer.css'
import { data } from '../../data/DataBase'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
    const {categoryName} = useParams();

    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() =>{ 
            {
                resolve(data);
            };                
        }, 1000)
    });
    
    useEffect(() => {            
        getProducts.then((resolve) => {
            if(categoryName){
                setProducts(resolve.filter((data) => data.Categoria === categoryName))
            }else{
                setProducts(resolve)
            }
        });
        setTimeout(()=>{
        }, 1000)                
    },[categoryName]);

    return (
        <div className="items_list">
            <ItemList products={products} />
        </div>
    );
}


export default ItemListContainer