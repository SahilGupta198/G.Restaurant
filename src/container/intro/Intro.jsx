import React, { useState } from 'react'
import './intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef()
  const handleVideo = ()=>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo)
    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return (
    <div className="app_video">
      <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      controls={false}
      muted />
      <div className="app_video-overlay flex_center">
        <div className="app_video-overlay-circle flex_center" onClick={handleVideo}>
          {playVideo 
          ? <BsPauseFill color='#ffffff' fontSize="30" /> 
          : <BsFillPlayFill color='#ffffff' fontSize="30" />}
        </div> 
      </div>
    </div>
  )
}

export default Intro