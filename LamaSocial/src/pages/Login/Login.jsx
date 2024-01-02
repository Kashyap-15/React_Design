import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">LamaSocial</h3>
                <span className='loginDesc'>Connet With Friends From all Around the World on LamaSocial </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create new Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
