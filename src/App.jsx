import React from 'react'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import SignupPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import NavBar from './components/NavBar.jsx'
import BoardPage from './pages/BoardPage.jsx'
import TaskCard from './components/TaskCard.jsx'

function App() {

  return (
    <>
      {/* <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold bg-gray-900 text-white'>Hello React JS</h1>
      </div> */}
      {/* <LandingPage /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      {/* <DashBoard /> */}
      {/* <NavBar/> */}
      {/* <BoardPage /> */}
      <TaskCard />
    </>
  )
}

export default App
