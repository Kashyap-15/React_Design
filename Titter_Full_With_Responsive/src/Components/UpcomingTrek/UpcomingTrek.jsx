import React from 'react'
import "./UpcomingTrek.css"
import TrekCards from '../TrekCards/TrekCards'

export default function UpcomingTrek() {
  return (
    <div className='upcomingTrekcontainer'>
        <div className="upcomingTrekHeadings">
            <span className='upcomingTrekSubHeading'>Our Trek</span>
            <span className='upcomingTrekMainHeading'>Upcoming Treks</span>
        </div>
        <div className="upcomingTrekCardDiv">
            <TrekCards title="Salher Fort Trekking" img="/Salher.png" />
            <TrekCards title="Dal Lake" img="/Dal_lake.png" />
            <TrekCards title="Kedarkantha" img="/Kedarkantha.png" />
        </div>
        <div className="upcomingTrekViewDiv">
            <button className='upcomingViewBtn'>View All</button>
        </div>
    </div>
  )
}
