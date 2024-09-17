import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/product_cart_logo.png'
import list_product_icon from '../../assets/item_list.png.png'

const Sidebar = () => {
  return (
    <div className='sibebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar_item">
                <img src={add_product_icon} style={{width:'100px'}} alt="" />
                <p>ADD PRODUCT</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar_item">
                <img src={list_product_icon} style={{width:'100px'}} alt="" />
                <p>PRODUCT LIST</p>
            </div>
        </Link>


    </div>
  )
}

export default Sidebar