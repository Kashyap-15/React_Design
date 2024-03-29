import React from 'react'
import "./Online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className='rightbarOnline'></span>
            </div>
            <spam className="righbarUserName">{user.username}</spam>
        </li>
    )
}
