import React from 'react'
import './TrekCards.css'
import { Blind, CalendarMonth, LineAxis } from '@mui/icons-material'

export default function TrekCards({title,img}) {
  return (
    <div className='trekCardsContainer'>
        <div className="trekCarImgDiv">
            <img src={img} alt="salher Picture" className="trekCardImg" />
        </div>
        <div className="trekCardContentDiv">
            <h3 className='trekCardHeading'>{title}</h3>
            <div className="trekCardInfo">
                <div className="trekCardDuration"> <span><CalendarMonth/></span> 3 Days - 2 Nights</div>
                <span>|</span>
                <div className="trekCardDifficulties"> <span><Blind/></span> Moderate</div>
            </div>
            <div className="trekCardPriceBuyDiv">
                <div className="trekCardPrice">₹ 2399</div>
                <div className="trekCardBuyBtn">Book Now</div>
            </div>
        </div>
    </div>
  )
}
