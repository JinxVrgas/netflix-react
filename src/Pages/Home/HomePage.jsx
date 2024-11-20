import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/Titlecards/TitleCards'
import Footer from '../../Components/Footer/Footer'




const HomePage = () => {
  return (
    <div className='home'>

      <div className="hero">
        <Navbar />

        <img className='banner-img' src={hero_banner} alt="" />
        <div className="hero-caption">
          <img className='caption-img' src={hero_title} alt="" />
          <p>
            Discovering his ties to a secret ancient order,
            a young man living in Istanbul embarks a quest
            to save the city from an immortal enemy
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Info</button>

          </div>
          <TitleCards />

        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={'Blockbuster Movies'}/>
        <TitleCards title={' Only On Netflix'}/>
        <TitleCards title={'Upcomming'}/>
        <TitleCards title={'Topics For you'}/>

      </div>
      <Footer/>
    </div>
  )
}

export default HomePage