import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import GradientHero from '../../Components/GradientHero/GradientHero'


export default function Home() {
  return (
    <div className='homeContainer'>
        <Header/>
        <HeroSection/>
        <GradientHero/>
    </div>
  )
}
