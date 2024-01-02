import React from 'react'
import "./SmWidget.css"
import { Visibility } from '@mui/icons-material'

export default function SmWidgets() {
  return (
    <div className='smWidget'>
      <span className="smWidgetTitle">New joined Members</span>
      <ul className="smWidgetList">
        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>

        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>

        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>

        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>

        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>

        <li className="smWidgetListItem">
          <img src="Assests\NewUser1.jpg" alt="" className="smwidgetImg" />
          <div className="smWidgetUser">
            <span className="smWidgetUserName">Apsara Aali</span>
            <span className="smWidgetJobTitle">Software Enginner</span>
          </div>
          <button className="smWidgetButton">
            <Visibility className='icon'/> Display
          </button>
        </li>
      </ul>
    </div>
  )
}
