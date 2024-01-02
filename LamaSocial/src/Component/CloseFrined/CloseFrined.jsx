import React from 'react'

export default function CloseFrined({user}) {
  return (
    <li className="sidebarFriend"><img src={user.profilePicture} alt="" className='sidebarFriendImg' />
    <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
