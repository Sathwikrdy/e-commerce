import React from 'react'
import './Footer.css'
import logo from '../assests/logo.png'
import insta_logo from '../assests/instalogo.png'
import fb_logo from '../assests/facebooklogo.png'
import whatsapp_logo from '../assests/whatsapplogo.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>Your Choice</p>
            <ul className="links">
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="socialmedia">
            <img src={insta_logo} alt="" style={{ width: '95px',height:'75px'}}  />
            <img src={fb_logo} alt="" style={{ width: '95px',height:'65px'}} />
            <img src={whatsapp_logo} alt="" style={{ width: '67px',height:'65px'}}/>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>CCopyright @2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer