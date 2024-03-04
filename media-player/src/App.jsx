import { useState } from 'react'
import './bootstrap.min.css'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
// import { ToastContainer } from 'react-toastify'


import './App.css'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route path='/' Component={Landing} />
        {/* http://localhost:5173/dashboard */}
        <Route path='/dashboard' Component={Dashboard} />
        {/* http://localhost:5173/history */}
        <Route path='/history' Component={History} />
      </Routes>
      <Footer/>
    {/* <ToastContainer/> */}


    </>
  )
}

export default App
