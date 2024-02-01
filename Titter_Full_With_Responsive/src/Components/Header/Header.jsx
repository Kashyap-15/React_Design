import React from 'react'
import "./Header.css"
import { Dehaze } from '@mui/icons-material'


export default function Header() {

  window.addEventListener("scroll",()=>{
    let navbar=document.getElementById("navbarContainer")
    let content=document.getElementById("navbarContent")
    if(window.scrollY > 100){
      navbar.style.backgroundColor="black";
      content.style.Color="black";
    }else{
      navbar.style.backgroundColor="transparent"
    }
  })

  function ToggleFunction(){
    let navbarDiv = document.getElementById("ToggleDiv")
    if(navbarDiv.style.display === "none" || navbarDiv.style.display === ""){
      navbarDiv.style.display = "flex"
    }
    else{
      navbarDiv.style.display = "none"
    }
  }
  return (
    <>
    <div className='headerContainer' id='navbarContainer'>
        <div className="logoDiv">
          <img className='TitterLogo' fluid="true" src='/Titter_Logo.png' alt='Logo Img' />
        </div>
        <div>

        <div className="navbarDiv" id='navbarContent'>
          <div className="NavDiv">Home</div>
          <div className="NavDiv">Upcoming Treks</div>
          <div className="NavDiv">Destinations</div>
          <div className="NavDiv">About</div>
          <div className="NavDiv">Contact</div>
        </div>
            <div className='NavbarToggleDiv'>
              <span className='ToggleDiv' onClick={ToggleFunction}>
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
