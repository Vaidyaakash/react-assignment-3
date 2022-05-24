import React from 'react'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import Student from './Pages/Student'
import "./Style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element = {<Nav />} />
      <Route path='/homepage' element = {<Home />} />
      <Route path='/student' element = {<Student />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App