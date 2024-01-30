import React from 'react'
import "./HeroSection.css"
import { ArrowRightAlt } from '@mui/icons-material'

export default function HeroSection() {
  return (
    <>
    <div className='heroSectionContainer'>
      <div className='heroSectionContent'>
        <span className="heroSectionSubHeading" > | Explore The Beauty Of Our Planet | </span>
        <span className='heroSectionHeading'>The Best Way to Experience This Life is to Explore</span>
        <div className='heroSectionButtonDiv'>
          <button className='heroSectionBtn'>Explore <span><ArrowRightAlt/></span></button> 
        </div >
      </div>
    </div>
    </>
  )
}
