import React from 'react'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Student from './Pages/Student'
import Homepage from './Pages/Homepage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import "./Style.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element = {<Homepage />} />
      <Route path='/homepage' element = {<Home />} />
      <Route path='/student' element = {<Student />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
