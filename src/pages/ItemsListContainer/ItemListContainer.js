import { data } from '../../data/DataBase'
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

        const [products, setProducts] = useState ([])
        const {categoryName} = useParams();
        const getProducts = new Promise((resolve, reject) =>{
            
            setTimeout(() =>{ 
                if (categoryName){
                    const filterData = data.filter((product) =>{
                        return product.Categoria === categoryName;
                    });
                    console.log(filterData);
                    resolve(filterData);
                }else{
                    resolve(data);
                };                
                
            }, 1000);
        });
        useEffect(() => {            
            getProducts.then((resolve) => setProducts(resolve));
        }, [categoryName]);

        return (
            <div className="items_list">
                <ItemList products={products} />
            </div>
        );        
    };



export default ItemListContainer