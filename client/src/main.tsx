import React from 'react'
import ReactDOM from 'react-dom/client'
import Approuter from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position="top-center"
  reverseOrder={false} toastOptions={{
    className: '',
    duration: 3000,
    style: {
      background: '#363636',
      color: '#fff',
    },
  }}/>
    <RouterProvider router={Approuter}/>
  </React.StrictMode>,
)
