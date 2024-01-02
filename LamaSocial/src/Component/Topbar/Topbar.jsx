import React from 'react'
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>LamaSocial</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search for Friend, Post or Video' className='searchInput' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">5</span>
                    </div>
                </div>
                <img src="\assets\ProfileImage.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}
