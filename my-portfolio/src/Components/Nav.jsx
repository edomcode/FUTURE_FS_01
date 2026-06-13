import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div className='Nav-comp'>
        <div className='nav-component'>
          <h1>Eden<span className='logo-accent'>.Y</span></h1>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className='hamburger-menu' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <ul className='ul-component'>
          <li><Link className='navlinks' to='/Home'>Home</Link></li>
          <li><Link className='navlinks' to='/Contact'>Contact</Link></li>
          <li><Link className='navlinks' to='/Skills'>Skills</Link></li>
          <li><Link className='navlinks' to='/About'>About</Link></li>
          <li><Link className='navlinks' to='/Projects'>Projects</Link></li>
        </ul>

        <div className='nav-btn'>
          <button onClick={() => handleNavClick('/Contact')}>Let's Talk</button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link className='mobile-navlink' to='/Home' onClick={() => handleNavClick('/Home')}>Home</Link>
          <Link className='mobile-navlink' to='/Contact' onClick={() => handleNavClick('/Contact')}>Contact</Link>
          <Link className='mobile-navlink' to='/Skills' onClick={() => handleNavClick('/Skills')}>Skills</Link>
          <Link className='mobile-navlink' to='/About' onClick={() => handleNavClick('/About')}>About</Link>
          <Link className='mobile-navlink' to='/Projects' onClick={() => handleNavClick('/Projects')}>Projects</Link>
          <button className='mobile-cta' onClick={() => handleNavClick('/Contact')}>Let's Talk</button>
        </div>
      </div>
    </div>
  )
}
