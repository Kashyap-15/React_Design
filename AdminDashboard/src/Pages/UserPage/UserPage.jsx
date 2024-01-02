import React from 'react'
import "./UserPage.css"
import { CalendarToday, Email, FileDownload, LocationSearching, Person, PhoneAndroid } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function UserPage() {
  return (
    <>
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to={"/newUser"}>
            <button className='userAddButton'> Create </button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userLeft">
                <div className="userLefttop">
                    <img className='userImg' src="\public\Assests\NewUser1.jpg" alt="" />
                    <div>
                    <h5>Anna Becker</h5>
                    <span>Software Engineer</span>
                    </div>
                </div>

                <div className="userLeftBottom">
                    <div className='userLeftTitle'>Account Details</div>
                    <div className="userDetails">
                        <span><Person/></span> 
                        <span> annabeck99</span></div>
                    <div className="userDetails">
                        <span> <CalendarToday/> </span>
                        <span>10.12.1999</span>
                        </div>
                </div>
                <div className="userLeftBottom">
                    <div className='userLeftTitle'>Contact Details</div>
                    <div className="userDetails">
                        <span> <PhoneAndroid/> </span>
                        <span>+91 8306726922</span>
                    </div>
                    <div className="userDetails">
                        <span> <Email/> </span>
                        <span>annabcekcc@gmail.com</span>
                    </div>
                    <div className="userDetails">
                        <span> <LocationSearching/> </span>
                        <span>New York | USA </span>
                    </div>
                </div>
            </div>
            <div className="userRight">
                <h2 className='userRightTitle'>Edit</h2>
                <div className="userEdit">
                    <div className="userEditLeft">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='annabeck99' />
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='Anna Becker' />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='annabcekcc@gmail.com' />
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='+91 8306726922' />
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='New York | USA'/>
                    </div>
                    <div className="userEditRight">
                        <div className="userEditImg">
                            <img src="\public\Assests\NewUser1.jpg" alt="" />
                            <span>  <FileDownload/>  </span>
                        </div>
                        <div>
                            <button className="userEditButton">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
