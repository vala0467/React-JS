import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import pagebackground from './assets/pageBg.jpg';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  
    {/* <img src={pagebackground} alt="" /> */}
    <App />
  
  </>
)

