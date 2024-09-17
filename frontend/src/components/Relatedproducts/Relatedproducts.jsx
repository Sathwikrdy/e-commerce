import React from 'react'
import './Relatedproducts.css'
import popularmen from '../assests/menpopular'
import Item from '../Item/Item'

export const Relatedproducts = ({}) => {

  return (
    <div className="relatedproducts">
        <h1>RELATED PRODUCTS</h1>
        <hr />
        <div className="relatedproducts_item">
            {popularmen.map((item,i)=>(
            < Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
    </div>
  )
}

export default Relatedproducts