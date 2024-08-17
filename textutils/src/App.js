import React from 'react'
import Navbar from './Components/Navbar'
import Textarea from './Components/Textarea'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState('light');
  function mode() {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
    else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setTheme('light');
    }
  }
  return (
    <>
      <Router>
        <Navbar changeMode={mode} theme={theme}/>
        <Routes>
          <Route path='/' element={<Textarea theme={theme}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}
