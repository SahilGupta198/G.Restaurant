import React from 'react'
import { SubHeading } from '../../components'
import  AwardCard  from './AwardCard.jsx'
import { images, data } from '../../constants'
import './laurels.css'

const Laurels = () => {
  return (
    <div id='awards' className="app_bg app_wrapper section_padding">
      <div className="app_wrapper-info">
        <SubHeading title="Awards & Recognition"/>
        <h1 className="headtext_cormorant">Our Laurels</h1>
        
        <div className="app_laurels-awards">
          {data.awards.map((award)=> <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className="app_wrapper-img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
}

export default Laurels