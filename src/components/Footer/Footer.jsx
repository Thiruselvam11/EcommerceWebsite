import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
       <div className="item">
           <h1>Category</h1>
           <span>Women</span>
           <span>Men</span>
           <span>shoes</span>
           <span>Accessories</span>
           <span>New Arrivals</span>
       </div>
       <div className="item">
           <h1>Links</h1>
           <span>FAQ</span>
           <span>Pages</span>
           <span>Stores</span>
           <span>Compare</span>
           <span>Cookies</span>
 </div>
       <div className="item">
           <h1>About</h1>
           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
       </div>
       <div className="item">
           <h1>Contact</h1>
           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
       </div>
        </div>
        <div className="bottom">
             <div className="left">
                 <span className='logo'>Worldmart</span>
                 <span className='copyright'> © Copyright 2023. All Rights Reserved ❤️</span>
             </div>
             <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer