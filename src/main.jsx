import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//SETUP ROUTER
import { BrowserRouter as Router } from "react-router-dom"; // <== IMPORT
const root = ReactDOM.createRoot(document.getElementById("root"));

// Next, wrap the <App /> with the <Router> and </Router> tags
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
