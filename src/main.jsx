import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './global/globalstyles'
import HeaderWrapper from './components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyle/>
   <HeaderWrapper/>
  </React.StrictMode>,
)
