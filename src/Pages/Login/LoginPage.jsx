import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import { login, signUp, } from '../../firebase'

const LoginPage = () => {

  const [signstate, setSignstate] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");



  const user_auth = async (e) => {
    e.preventDefault();
    if (signstate === "Sign In") {
      await login(email, pwd)
    } else {
      await signUp(name, email, pwd)

    }
  }


  return (
    <div className='login'>
      <img className="login-logo" src={logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === 'Sign Up' ?
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter Your Name' /> :
            <></>}
          <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Your E mail' />
          <input type="password" value={pwd} onChange={(e) => { setpwd(e.target.value) }} placeholder='Password' />
          <button type='button' onClick={user_auth} >{signstate}</button>
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