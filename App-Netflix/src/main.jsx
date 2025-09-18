import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import pageBakground from './assets/images/pageBackground.jpg';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img src={pageBakground} alt="" className='pageBackground'/>
    <App />
  </StrictMode>,
)
