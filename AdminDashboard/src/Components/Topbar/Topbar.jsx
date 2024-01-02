import React from 'react'
import "./Topbar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';


export default function Topbar() {
  return (
    <>
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className='logo'>LamaAdmin</span>
                </div>
                <div className="topright">
                    <div className="topbaricons">
                        <NotificationsIcon/>
                        <span className='topbarBadge'>5</span>
                    </div>
                    <div className="topbaricons">
                    <LanguageIcon/>
                        <span className='topbarBadge'>4</span>
                    </div>
                    <div className="topbaricons">
                        <SettingsIcon/>
                    </div>
                    <div className="topbarprofile">
                        <img src="\public\Assests\ProfileImage.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
