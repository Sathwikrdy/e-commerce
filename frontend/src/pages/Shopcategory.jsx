import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/Shopcontext'
import Item from '../components/Item/Item'

export const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className="shop_category">
      <img className='shopcategorybanner' src={props.banner} alt="" />
      <div className="shop_category_indexsort">
      </div>
        <div className="shop_category_sort">
        </div>
        <div className="shop_categorry_products">
          {all_products.map((item,i)=>{
            if(props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>        
    </div>
  )
}

export default ShopCategory
