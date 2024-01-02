import React from 'react'
import "./NewUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <div className="newUserTitle">
            <h1>New User</h1>
        </div>
        <div className="newUserForm">
            <div className="inputdiv">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Your UserName' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Full Name</label>
                <input type="text"  placeholder='Your Full Name' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Email</label>
                <input type="email"  placeholder='Your Email' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Password</label>
                <input type="password"  placeholder='Your Password' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Phone</label>
                <input type="text"  placeholder='Your Phone Number' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Address</label>
                <input type="text"  placeholder='YOur Address' />
            </div>
            <div className="inputdiv">
                <label htmlFor="">Gender</label>
                <div className='genderinput'>
                <input type="radio" name='gen'/>
                <label htmlFor="">Male</label>
                <input type="radio" name='gen'/>
                <label htmlFor="">Female</label>
                <input type="radio" name='gen' />
                <label htmlFor="">Other</label>
                </div>
            </div>
            <div className="inputdiv">
                <label htmlFor="">Active</label>
                <select className='selectinput' name="active" id="active"> 
                    <option value="0">---Select---</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>
        </div>
        <button className='newUserButton'>Create</button>
    </div>
  )
}
