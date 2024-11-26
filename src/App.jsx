import React, { useEffect } from 'react'
import HomePage from './Pages/Home/HomePage'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginPage from './Pages/Login/LoginPage'
import PlayerPage from './Pages/Player/PlayerPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate();



  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate('/')
      } else {
        console.log("logged out")
        navigate('/login');

      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark'/>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/player/:id' element={<PlayerPage />} />


      </Routes>
    </div>
  )
}

export default App