import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { UIStatusContextProvider } from './contexts/UIStatusContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <UIStatusContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UIStatusContextProvider>
  
  </React.StrictMode>,
)
