import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContext from './context/UserContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext >
    <App />
  </UserContext>,
)
