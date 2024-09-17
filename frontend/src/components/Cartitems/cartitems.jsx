import React, { useContext } from 'react'
import './cartitems.css'
import{ShopContext} from '../../context/Shopcontext'
import remove_icon from '../assests/remove_icon.png'

export const Cartitems = () => {
    const {all_products,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems_format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e)=>{
                if(cartItems[e.id]>0)
                    {
                        return <div>
                        <div className="cartitems_format cartitems_format_main">
                            <img src={e.image} alt="" className='cartitems_product_icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems_removeicon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" style={{width:'100px'}}/>
                        </div>
                        <hr />
                    </div>
                    }
                    return null;
            })}
            <div className="cartitems_all">
                <div className="cartitems_total">
                    <h1>CART TOTALS</h1>    
                    <div>
                        <div className="cartitems_total_items">
                            <p>SUB-TOTAL</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />   
                <div className="cartitems_total_items">
                    <h3>TOTAL</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
        </div>
        </div>
    )
}


export default Cartitems
