import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" style={{width: '200px'}} /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="new-price">
                ${props.new_price}
            </div>
            <div className="old-price">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
