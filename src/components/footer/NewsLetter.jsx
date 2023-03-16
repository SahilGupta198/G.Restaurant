import React from 'react'
import './newsletter.css'
import SubHeading from '../subheading/SubHeading'
const NewsLetter = () => {
  return (
    <div className="app_newsLetter">
      <div className="app_newsLetter-heading">
        <SubHeading title="Newsletter" />
        <h1 className='headtext_cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p_opensans'>And never miss latest update</p>
        <div className="app_newsLetter-input flex_center">
          <input type="email" placeholder='Enter your email address' />
          <button type='button' className='custom_button'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter