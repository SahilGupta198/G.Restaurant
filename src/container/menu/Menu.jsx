import React from 'react'
import './menu.css'
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'

const Menu = () => {
  return (
    <div className="app_menu flex_center section_padding" id='menu'>
      <div className="app_menu-title">
        <SubHeading title="Menu That Fits Your Palette" />
        <h1 className='headtext_cormorant'>Today's Special</h1>
      </div>

      <div className="app_menu-menu">
        <div className="app_menu-menu-wine flex_center">
          <p className='app_menu-menu-heading'>Wine & Beer</p>
          <div className="app_menu-menu-items"> 
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app_menu-menu-img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app_menu-menu-cocktail flex_center">
          <p className='app_menu-menu-heading'>Cocktails</p>
          <div className="app_menu-menu-items">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button className='custom_button' type='button'>View More</button>
      </div>
    </div>
  )
}

export default Menu