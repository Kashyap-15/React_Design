import React from 'react'
import "./GradientHero.css"
import UpcomingTrek from '../UpcomingTrek/UpcomingTrek'
import ActivityCom from '../ActivityCom/ActivityCom'

export default function GradientHero() {
  return (
    <>
    <div className='gradientContainer'>
        <div className='upperGradient'></div>
        <div className='upcomingTrekContainer'>
            <UpcomingTrek/>
        </div>  
        {/* ------------------------------------------------ */}
        <div className='activitiesContainer'>
            <ActivityCom/>
        </div>
        <div className='lowerGradient'></div>
    </div>
    </>
  )
}
