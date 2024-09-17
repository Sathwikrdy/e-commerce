import React from 'react'
import './Offers.css'
import exclusiveoffer from '../assests/exclusive.png'

export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers_left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON SELECTED PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers_right">
            <img src={exclusiveoffer} alt="" />
        </div>
    </div>
  )
}

export default Offers