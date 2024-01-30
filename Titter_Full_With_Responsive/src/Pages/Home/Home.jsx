import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'


export default function Home() {
  return (
    <div className='homeContainer'>
        <Header/>
        <HeroSection/>
        <HeroSection/>
    </div>
  )
}
