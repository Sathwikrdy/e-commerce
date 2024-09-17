import React, { createContext, useState } from "react";
import all_products from '../components/assests/all_products'


export const ShopContext = createContext(null);
const getDefaultcart=()=> {
    let cart={};
    for (let index=0;index<all_products.length;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopcontextProvider = (props)=>{
    const [cartItems,setCartItems]=useState(getDefaultcart());
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount=()=> {
        let totalamount=0;
        for (const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let iteminfo = all_products.find((product)=>product.id===Number(item))
                        totalamount += iteminfo.new_price * cartItems[item];
                    }
            }
            return totalamount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    
    const contextValue = {getTotalCartAmount,getTotalCartItems,all_products,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontextProvider;