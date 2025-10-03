import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import SignupPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/dashboard' element={<ProtectedRoute>
        <DashBoard />
      </ProtectedRoute>} />
    </>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
