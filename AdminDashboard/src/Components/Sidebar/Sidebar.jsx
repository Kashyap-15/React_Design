import React from 'react'
import "./Sidebar.css"
import { AttachMoney, BarChart, DynamicFeed, Email, Insights, LineStyle, Message, Person4, Report, Storefront, Timeline, TrendingUp, Work } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidewrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to={"/"}  className='link'>
                            <li className="sidebarListItem">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcon' />
                                Analytics
                            </li><li className="sidebarListItem">
                                <TrendingUp className='sidebarIcon' />
                                Sales
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to="/user" className='link'>
                            <li className="sidebarListItem ">
                                <Person4 className='sidebarIcon' />
                                User
                            </li>
                            </Link>
                            <Link to="/product" className='link'>
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                                <AttachMoney className='sidebarIcon' />
                                Transactions
                            </li>
                            <li className="sidebarListItem">
                                <BarChart className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Email className='sidebarIcon' />
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <DynamicFeed className='sidebarIcon' />
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <Message className='sidebarIcon' />
                                Messages
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Work className='sidebarIcon' />
                                manage
                            </li>
                            <li className="sidebarListItem">
                                <Insights className='sidebarIcon' />
                                Analytics
                            </li><li className="sidebarListItem">
                                <Report className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
