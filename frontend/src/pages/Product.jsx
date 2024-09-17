import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Relatedproducts from '../components/Relatedproducts/Relatedproducts'

export const Product = () => {
  const {all_products}= useContext(ShopContext);
  const {productID}=useParams();
  const product = all_products.find((e)=> e.id === Number(productID));
  return (
    <div>
       <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <Relatedproducts/>
    </div>  
  )
}

export default Product
