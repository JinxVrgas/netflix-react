import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import prof_icon from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix" />
        <ul>
          <li>home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New $ Poppular</li>
          <li>My List</li>
          <li>Browse by languages</li>

        </ul>
      </div>
      <div className="navbar-right">
        <img className='icon' src={search_icon} alt="" />
        <p>Children</p>
        <img className='icon' src={bell_icon} alt="" />
        <div className="navbar-profile">
          <img className='profile' src={prof_icon} alt="profile" />
          <img className='icon' src={dropdown} alt="" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Navbar