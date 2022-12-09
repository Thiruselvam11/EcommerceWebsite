import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE CONTACT WITH US</span>
            <div className="mail">
                <input type="text" placeholder="Enter the Email..." />
                <button>JOIN US</button>
            </div>
            <div className="icons">
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
              <PinterestIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact