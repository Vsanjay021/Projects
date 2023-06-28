import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Submenu from './Submenu'

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  )
}

export default App
