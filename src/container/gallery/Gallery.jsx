import React from 'react'
import './gallery.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Gallery = () => {

  const scrollRef = React.useRef(null);
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollRef -= 300;
    }
    else{
      current.scrollRef += 300;
    }
  }

  return (
    <div className="app_gallery flex_center section_padding">
      <div className="app_gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext_cormorant'>Photo Gallery</h1>
        <p className='p_opensans' style={{color:"#aaaaaa", marginTop:"2rem"}}>“Eating is so intimate. It's very sensual. When you invite someone to sit at your table and you want to cook for them, you're inviting a person into your life.”</p>
        <button type='button' className='custom_button'>View More</button>
      </div>

      <div className="app_gallery-images">
        <div className="app_gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index)=>(
            <div className="app_gallery-images-card flex_center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery_image-icon' />
            </div>
          ))}
        </div>
        <div className="app_gallery-images-arrows">
          <BsArrowLeftCircleFill className='gallery_arrow-icon' onClick={()=>scroll('left')} />
          <BsArrowRightCircleFill className='gallery_arrow-icon' onClick={()=>scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery