import React from 'react'
import './Hero.css'
import hand_wave from '../assests/hand-wave.png'
import hero_image from '../assests/style.png'


export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>LATEST ARRIVALS</h2>
            <div className="hand_icon">
                <p>New</p> 
                <img src={hand_wave} alt="" /> 
            </div>
            <p>collections for everyone 🔥</p>
        </div>
        <div className="latest-btn">
            <button> New Collection </button>   
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero