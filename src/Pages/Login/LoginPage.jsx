import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'

const LoginPage = () => {

  const [signstate, setSignstate] = useState("Sign In");


  return (
    <div className='login'>
      <img className="login-logo" src={logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form action="#">
          {signstate === 'Sign Up' ? <input type="text" placeholder='Enter Your Name' /> : <></>}

          <input type="email" placeholder='Enter Your E mail' />
          <input type="password" placeholder='Password' />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === 'Sign In' ?
            <p>new to Netflix?
              <span onClick={() => {
                setSignstate('Sign Up')
              }}>
                Sign Up
              </span>
            </p>
            :
            <p>Already have an account
              <span onClick={() => {
                setSignstate('Sign In')
              }}>
                Sign In
              </span>
            </p>}


        </div>
      </div>
    </div>
  )
}

export default LoginPage