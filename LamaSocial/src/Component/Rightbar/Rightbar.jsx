import React from 'react'
import "./Rightbar.css"
import { Users } from "../../DummyData"
import Online from '../Online/Online'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="\assets\gift_img.png" alt="" className='birthdayImg' />
          <span className="birthdayText"><b> Lola Master</b> and <b> Other 3 friend </b> Have Birthday today</span>
        </div>
        <img className='rightbarAd' src="public\assets\Ad_Img.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = ()=>{
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoVlaue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoVlaue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoVlaue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage8.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage7.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage6.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage9.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage5.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="\assets\ProfileImage2.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">
              John Carter
            </span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightWrapper">
        {
          profile ? <ProfileRightbar/> : <HomeRightbar/>
        }
      </div>
    </div>
  )
}
