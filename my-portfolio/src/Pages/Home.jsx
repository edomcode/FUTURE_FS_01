import React from 'react'

export default function Home() {
  return (
    <div className='Home-p'>
      <p className='home-greeting'>Hello, I'm <span className='home-accent'>Eden</span></p>
      <h1 className='home-headline'>
        Backend Developer <span className='home-accent'>&</span> Computer Science Student
      </h1>
      <p className='home-desc'>
        Passionate about creating technology that helps people feel supported, connected, and understood.
      </p>
      <div className='home-cta'>
        <button className='home-btn-primary'>View My Work</button>
        <button className='home-btn-secondary'>Contact Me</button>
      </div>
    </div>
  )
}
