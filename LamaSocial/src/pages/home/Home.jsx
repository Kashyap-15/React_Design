import React from 'react'
import "./Home.css"
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Feed from '../../Component/Feed/Feed'
import Rightbar from '../../Component/Rightbar/Rightbar'

export default function Home() {
  return (
    <>
     <Topbar/>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
    </>
  )
}
