import React from 'react'
import './aboutus.css'
import { images } from '../../constants'

const AboutUs = () => {
  return (
    <div className="app_aboutus app_bg flex_center section_padding" id='about'>
      <div className="app_aboutus-overlay flex_center">
        <img src={images.G} alt="g-letter" />
      </div>
      <div className="app_aboutus-content flex_center">
        <div className="app_aboutus-content-about">
          <h1 className="headtext_cormorant">About Us</h1>    
          <img src={images.spoon} alt="about spoon" className='spoon_image' />
          <p className="p_opensans">We realize numerous individuals love Indian cuisine, yet a large number of them are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.</p> 
          <button type='button' className='custom_button'>Know More</button>
        </div>

        <div className="app_aboutus-content-knife">
          <img src={images.knife} alt="knife about" />
        </div>

        <div className="app_aboutus-content-history">
          <h1 className="headtext_cormorant">Our History</h1>
          <img src={images.spoon} alt="about spoon" className='spoon_image' />
          <p className="p_opensans">Since our modest beginnings in 2005 with a little space in Yorkville locale, GRINDELWALD's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.</p>
          <button type='button' className='custom_button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs