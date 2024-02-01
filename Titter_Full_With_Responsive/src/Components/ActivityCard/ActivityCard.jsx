import React from 'react'
import "./ActivityCard.css"

export default function ActivityCard() {
  return (
    <div className='activityCardContainer'>
        <div className="activityCardImgDiv">
            <img src="Activity1.png" alt="" className="activityCardImg" />
            <h1 className="activityCardHeading">
                Activities
            </h1>
        </div>
    </div>
  )
}
