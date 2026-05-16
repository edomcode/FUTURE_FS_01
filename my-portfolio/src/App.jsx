import Nav from './Components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Skills from './Pages/Skills'

import './App.css'

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills />} />
    </Routes>
    </>
  )
}

export default App
