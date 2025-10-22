import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/auth.context.jsx'
import BoardPage from './pages/BoardPage.jsx'
import TaskCard from './components/TaskCard.jsx'
import { TaskContextProvider } from './context/task.context.jsx'
import NewBoard from './components/NewBoard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/board/:projectId/:projectName" element={<BoardPage />} />
      </Route>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TaskContextProvider>
      <RouterProvider router={router} />
      </TaskContextProvider>
    </AuthProvider>    
  </StrictMode>,
)
