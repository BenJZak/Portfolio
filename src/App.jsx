import React, { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  
  return (
    <div>
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
