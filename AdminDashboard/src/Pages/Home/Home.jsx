import React from 'react'
import "./Home.css"
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import { userdata } from "../../DummyData"
import SmWidgets from '../../Components/SmWidgets/SmWidgets'
import LgWidget from '../../Components/LgWidget/LgWidget'

export default function Home() {
  return (
    <>
    <div className="home">
        <FeaturedInfo/>
        <Chart datas={userdata} title={"User Analytics"} datakey={"Active_User"} grid/>
        <div className="homewidgets">
            <SmWidgets/>
            <LgWidget/>
        </div>
    </div>
    </>
  )
}
