import React, { useContext} from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/Shopcontext';

export const ProductDisplay = (props) => {
   const {product} = props;
   const {addToCart} = useContext(ShopContext);
   return(
    <div className="productdisplay">
        <div className="pd_left">
            <div className="pd_left_image_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <img className='pd_left_main_img' src={product.image} alt="" />
        </div>
        <div className="pd_right">
            <h1>{product.name}</h1>
            <div className="pd_right_prices">
                <div className="pd_price_old">${product.old_price}</div>
                <div className="pd_price_new">${product.new_price}</div>
            </div>
            <div className="pd_right_size">
                <h2>SELECT SIZE</h2>
                <div className="pd_right_sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                </div>  
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
   )
}

export default ProductDisplay