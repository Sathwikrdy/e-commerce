import React from 'react'
import './popularkids.css'
import kid_data from '../assests/kidpopular'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

export const popularkids = (props) => {
  return (
    <div><Link to={`/product/${props.id}`}><img onClick={(h) => window.scrollTo(0, 0)} src={props.image} alt="" style={{ width: '200px' }} /></Link>
    <div className="popularkid">
    <h1>POPULAR IN KID</h1>
    <hr />
    <div className="popularkid_item">
        {kid_data.map((item,i)=>
        {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
    </div>
    </div>
    </div>
  )
}

export default popularkids
