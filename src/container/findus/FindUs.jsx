import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => {
  return (
    <div className="app_bg app_wrapper section_padding" id='contact'>
      <div className="app_wrapper-info">
        <SubHeading title="Contact" />
          <h1 className="headtext_cormorant"style={{marginBottom: '3rem'}}>Find Us</h1>
          <div className="app_wrapper-content">
            <p className="p_opensans" style={{color:"#AAAAAA"}}>4 Privet Drive, Little Whinging Surrey, London</p>
            <p className="p_cormorant" style={{color:"#DCCA87", margin:"2rem 0"}}>Opening Hours</p>
            <p className="p_opensans" style={{color:"#AAAAAA"}}>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p_opensans" style={{color:"#AAAAAA"}}>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button className="custom_button" style={{marginTop:"2rem"}}>Visit Us</button>
      </div>
      <div className="app_wrapper-img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}

export default FindUs