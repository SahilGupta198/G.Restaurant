import React from 'react'
import './footer.css'
import { FooterOverlay, NewsLetter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className="app_footer section_padding">
      <FooterOverlay />
      <NewsLetter />
      <div className="app_footer-links">
        <div className="app_footer-links-contact">
          <h1 className='app_footer-headtext'>Contact Us</h1>
          <p className='p_opensans'>grindelwaldthechef@gmail.com</p>
          <p className='p_opensans'>+1 212-344-1230</p>
          <p className='p_opensans'>+1 212-555-1230</p>
        </div>

        <div className="app_footer-links-logo">
          <img src={images.gericht} alt="footer-logo" />
          <p className="p_opensans">“The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" style={{marginTop: "1rem"}} />
          <div className="app_footer-links-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app_footer-links-work">
          <h1 className="app_footer-headtext">Working Hours</h1>
          <p className="p_opensans">Monday-Friday</p>
          <p className="p_opensans">08:00am-12:00am</p>
          <p className="p_opensans">Saturday-Sunday</p>
          <p className="p_opensans">07:00am-11:00am</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p className="p_opensans">CopyRight&copy; 2023 | Grindelwald | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer