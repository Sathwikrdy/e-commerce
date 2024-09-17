import React from 'react'
import './popularmen.css'
import menpopular from '../assests/menpopular'
import Item from '../Item/Item'

export const popularmen = () => {
  return (
    <div className="popularmen">
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className="popularmen_item">
            {menpopular.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default popularmen