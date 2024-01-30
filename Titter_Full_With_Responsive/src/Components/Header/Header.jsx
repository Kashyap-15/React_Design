import React from 'react'
import "./Header.css"
import { Dehaze } from '@mui/icons-material'


export default function Header() {
  function ToggleFunction(){
    let navbar = document.getElementById("ToggleDiv")
    if(navbar.style.display === "none" || navbar.style.display === ""){
      navbar.style.display = "flex"
    }
    else{
      navbar.style.display = "none"
    }
  }
  return (
    <>
    <div className='headerContainer'>
        <div className="logoDiv">
          <img className='TitterLogo' fluid="true" src='/Titter_Logo.png' alt='Logo Img' />
        </div>
        <div>

        <div className="navbarDiv">
          <div className="NavDiv">Home</div>
          <div className="NavDiv">Upcoming Treks</div>
          <div className="NavDiv">Destinations</div>
          <div className="NavDiv">About</div>
          <div className="NavDiv">Contact</div>
        </div>
            <div className='NavbarToggleDiv'>
              <span className='ToggleDiv'  onClick={ToggleFunction}>
                <Dehaze />
              <div className="HiddenNavbarDiv" id='ToggleDiv'>
                <div className="NavDiv">Home</div>
                <div className="NavDiv">Upcoming Treks</div>
                <div className="NavDiv">Destinations</div>
                <div className="NavDiv">About</div>
                <div className="NavDiv">Contact</div>
              </div>
              </span>
            </div>
        </div>
    </div>
    </>
  )
}
