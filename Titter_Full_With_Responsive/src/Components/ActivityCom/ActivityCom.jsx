import React from 'react'
import "./ActivityCom.css"
import { ArrowDownward } from '@mui/icons-material'
import ActivityCard from '../ActivityCard/ActivityCard'

export default function ActivityCom() {
  return (
    <>
    <div className='activityComContainer'>
        <div className='activityComSubheading'>
            Explore Something New
        </div>
        <div className="activityComHeading">
            Activities Highlights
        </div>
    </div>
    <div className="activityCardsCom">
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
    </div>
    <div className="activitySeeMoreDiv">
        <div className="activitySeeMoreBtn">
            See More <ArrowDownward fontSize='small'/>
        </div>
    </div>
    </>
  )
}
