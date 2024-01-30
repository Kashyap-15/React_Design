import React from 'react'
import "./GradientHero.css"
import UpcomingTrek from '../UpcomingTrek/UpcomingTrek'

export default function GradientHero() {
  return (
    <>
    <div className='gradientContainer'>
        <div className='upperGradient'></div>
        <div className='GradientBackImage'></div>
        <div className='lowerGradient'></div>

        {/* ------------------------------------------------ */}
        <div className='upcomingTrekContainer'>
            <UpcomingTrek/>
        </div>  
        <div className='activitiesContainer'>
          <h1>abcd</h1>
          <h1>abcd</h1>     
        </div>
    </div>
    </>
  )
}
