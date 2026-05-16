import React from 'react'
import { Link } from 'react-router-dom' 

export default function Nav() {
  return (
    <div>
      <div className='Nav-comp'>
       <div className='nav-component'>
      
        <h1>SafeHaven</h1>
      </div>

      <div className='ul-component'>
   
        <li><Link className='navlinks' to='/Home'>Home</Link></li>
       <li><Link className='navlinks' to='/Contact'>Contact</Link></li>
      <li><Link className='navlinks' to='/Skills'>Skills</Link></li>
        <li><Link className='navlinks' to='/About'>About</Link></li>
       <li><Link className='navlinks' to='/Projects'>Projects</Link></li>
       
      </div>
      </div>
    </div>
  )
}
