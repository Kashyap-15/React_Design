import React from 'react'
import "./Profile.css"
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Feed from '../../Component/Feed/Feed'
import Rightbar from '../../Component/Rightbar/Rightbar'


export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">

                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img src="assets\Mountain_post1.jpg" alt="" className='profileCoverImg' />
                        <img src="assets\ProfileImage.jpg" alt="" className='profileUserImg' />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Lama Dhama</h4>
                            <h4 className='profileInfoDesc'>Hello my Friends.</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar Profile/>
                    </div>
                </div>
            </div>
        </>
    )
}