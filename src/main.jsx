import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/main.css'
import './styles/dark-mode.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)