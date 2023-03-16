import React from 'react'
import './chef.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'

const Chef = () => {
  return (
    <div className="app_bg app_wrapper section_padding">
      <div className="app_wrapper-img app_wrapper-img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app_wrapper-info">
        <SubHeading title="Chef's World" />
        <h1 className='headtext_cormorant'>What We Beleive In</h1>

        <div className="app_chef-content">
          <div className="app_chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p_opensans">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring </p>
          </div>
          <p className="p_opensans">everyone together. No matter what culture, everywhere around the world, people eat together.</p>
        </div>
        <div className="app_chef-sign">
          <p className='headtext_cormorant'>Kevin Luo</p>
          <p className='p_opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  )
}

export default Chef