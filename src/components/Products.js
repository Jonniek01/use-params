import React, {useContext, useState} from 'react'
import Product from './Product'
import { shopContext } from "../context/Shop";


const Products = () => { 
    const {products} = useContext(shopContext)
    return (
        <div className='products'>
                    <h4>Products</h4>


            <> 
            {products? products.map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}
            </> 
        
        </div>
    )
}

export default Products