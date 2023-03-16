import React from 'react'
import './menuitem.css'

const MenuItem = ({title, price, tags}) => {
  return (
    <div className="app_menuitem">
      <div className="app_menuitem-head">
        <div className="app_menuitem-name">
          <p className='p_cormorant' style={{color:"#dcca87"}} >{title}</p>
        </div>
        <div className="app_menuitem-dash"></div>
        <div className="app_menuitem-price">
          <p className='p_cormorant' >{price}</p>
        </div>
      </div>
      <div className="app_menuitem-sub">
        <p className="p_opensa  ns" style={{color:"#aaaaaa"}}>{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem