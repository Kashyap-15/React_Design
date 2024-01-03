import React from 'react'
import "./Sidebar.css"
import { RssFeed ,VideoCameraFront,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import CloseFrined from '../CloseFrined/CloseFrined';
import {Users} from "../../DummyData"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sideWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem"><RssFeed className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Feed</span></li> <li className="sidebarListItem"><ChatIcon className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Chats</span></li>
                <li className="sidebarListItem"><VideoCameraFront className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Videos</span></li>
                <li className="sidebarListItem"><Group className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Groups</span></li>
                <li className="sidebarListItem"><Bookmark className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Bookmarks</span></li>
                <li className="sidebarListItem"><HelpOutline className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Questions</span></li>
                <li className="sidebarListItem"><WorkOutline className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Jobs</span></li>
                <li className="sidebarListItem"><Event className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Events</span></li>
                <li className="sidebarListItem"><School className='sidebarListIcon'/>
                <span className='sidebarListItemText'>Courses</span></li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">
              {Users.map(u=>(
              <CloseFrined key={u.id} user={u} />
              ))}
            </ul>
        </div>
    </div>
  )
}
