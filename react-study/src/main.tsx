import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './router/index.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} future={{ v7_startTransition: true }} /> */}
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
)
