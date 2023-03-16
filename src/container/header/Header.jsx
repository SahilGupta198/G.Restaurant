import React from 'react'
import './header.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'

const Header = () => {
  return (
    <div className="app_header app_wrapper section_padding" id='home'>
      <div className="app_wrapper-info">
        <SubHeading title="Chase The New Flavour" />
        <h1 className='app_header-h1'>The Key to Fine Dining</h1>
        <p className="p_opensans app_header-p" style={{margin: '2rem 0'}}>
        A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. 
        </p>
        <button className="custom_button">Explore More</button>
      </div>
      <div className="app_wrapper-img app_header-image">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header