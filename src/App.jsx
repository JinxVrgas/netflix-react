import React from 'react'
import HomePage from './Pages/Home/HomePage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login/LoginPage'
import PlayerPage from './Pages/Player/PlayerPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/player/:id' element={<PlayerPage />} />     


      </Routes>
    </div>
  )
}

export default App