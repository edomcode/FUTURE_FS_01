import React from 'react'

export default function Projects() {
  return (
    <div className='Project-p'>
      <div className='projects-grid'>
        <article className='project-card'>
        
          <h2>SafeHaven </h2>
          <h2> Mental Health Platform</h2>
          <p className='project-stack'>React · Django · MongoDB</p>
          <p>
            A supportive digital environment designed to promote mental wellness. SafeHaven integrates journal logging,
            mood tracking, and personalized insights to help users reflect on their emotional journey.
          </p>
        </article>

        <article className='project-card'>
         
          <h2>TradeMaster‑FX </h2>
          <h2>Trading Platform</h2>
          <p className='project-stack'> React · Node.js ·  APIs</p>
          <p>
            A modern trading solution engineered for speed and reliability. TradeMaster‑FX provides real-time market data,
            intuitive charting tools, and secure transaction handling for both novice and professional traders.
          </p>
        </article>
      </div>
    </div>
  )
}
