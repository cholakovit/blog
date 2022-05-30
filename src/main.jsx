import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import { store } from './store/store'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from "./api/apiSlice"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </ApiProvider>
  </React.StrictMode>
)
