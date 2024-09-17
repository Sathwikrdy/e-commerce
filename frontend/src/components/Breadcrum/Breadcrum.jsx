import React from 'react'
import './Breadcrum.css'
import arrow_img from '../assests/arrowimage.png'

export const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_img} alt="" style={{width:'10px'}}/> SHOP <img src={arrow_img} alt="" style={{width:'10px'}}/> {product.category} <img src={arrow_img} alt="" style={{width:'10px'}}/> {product.name}
    </div>
  )
}
export default Breadcrum
