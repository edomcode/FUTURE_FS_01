import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLetsTalk = () => {
    setIsMenuOpen(false)
    if (location.pathname === '/' || location.pathname === '/Home') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/Home')
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const linkClass = (path) => {
    const current = location.pathname
    const isActive = current === path || (path === '/Home' && current === '/')
    return isActive ? 'navlinks active-navlink' : 'navlinks'
  }

  const mobileLinkClass = (path) => {
    const current = location.pathname
    const isActive = current === path || (path === '/Home' && current === '/')
    return isActive ? 'mobile-navlink active-mobile-navlink' : 'mobile-navlink'
  }

  return (
    <nav className='Nav-comp' role='navigation' aria-label='Main navigation'>
      <div className='nav-component'>
        <Link to='/Home' className='nav-logo'>Eden<span className='logo-accent'>.Y</span></Link>
      </div>

      <button
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className='ul-component'>
        <li><Link className={linkClass('/Home')} to='/Home'>Home</Link></li>
        <li><Link className={linkClass('/About')} to='/About'>About</Link></li>
        <li><Link className={linkClass('/Skills')} to='/Skills'>Skills</Link></li>
        <li><Link className={linkClass('/Projects')} to='/Projects'>Projects</Link></li>
      </ul>

      <div className='nav-btn'>
        <button onClick={handleLetsTalk}>Let's Talk</button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link className={mobileLinkClass('/Home')} to='/Home' onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link className={mobileLinkClass('/About')} to='/About' onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link className={mobileLinkClass('/Skills')} to='/Skills' onClick={() => setIsMenuOpen(false)}>Skills</Link>
        <Link className={mobileLinkClass('/Projects')} to='/Projects' onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <button className='mobile-cta' onClick={handleLetsTalk}>Let's Talk</button>
      </div>
    </nav>
  )
}
