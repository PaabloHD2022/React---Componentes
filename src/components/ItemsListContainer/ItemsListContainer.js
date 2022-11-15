import './ItemsListContainer.css'
import { useEffect, useState } from 'react';
import { data } from '../../data/DataBase';
import ItemList from '../ItemList/ItemList';
/* import { resolvePath } from 'react-router-dom'; */

const ItemsListContainer = () => { 
    
    const [productList, setproductList] = useState([]);

        useEffect(() => {
            const getProductList = new Promise(resolve => {

                setTimeout(() => {
                    resolve(data)
                }, 3000);
            });
            
            getProductList.then(response => setproductList(response));
            
        }, []);

        

        return(
        <div className='items'>
            <ItemList productList={productList} />
        </div>
        )
    };

    export default ItemsListContainer;