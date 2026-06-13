import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    tag: 'Mental Health',
    title: 'SafeHaven',
    subtitle: 'Mental Health Platform',
    stack: 'React · Django · MongoDB',
    desc: 'A supportive digital environment designed to promote mental wellness. SafeHaven integrates journal logging, mood tracking, and personalized insights to help users reflect on their emotional journey.',
    accent: false,
  },
  {
    tag: 'FinTech',
    title: 'TradeMaster‑FX',
    subtitle: 'Trading Platform',
    stack: 'React · Node.js · APIs',
    desc: 'A modern trading solution engineered for speed and reliability. TradeMaster‑FX provides real-time market data, intuitive charting tools, and secure transaction handling for novice and professional traders.',
    accent: true,
  },
]

export default function Projects() {
  return (
    <div className='page-wrapper projects-page'>

      
      <section className='page-header'>
        <span className='section-label'>What I've built</span>
        <h1 className='page-header-title'>Featured Projects</h1>
        <p className='page-header-desc'>
          A selection of projects that reflect my passion for building meaningful, impactful software.
        </p>
      </section>

   
      <section className='projects-main-section'>
        <div className='scroll-section-content'>
          <div className='projects-big-grid'>
            {projects.map((p) => (
              <article key={p.title} className={`big-project-card ${p.accent ? 'big-project-card--accent' : ''}`}>
                <div className='big-card-top'>
                  <span className='project-card-tag'>{p.tag}</span>
                  <span className='project-status'>In Development</span>
                </div>
                <h2>{p.title}</h2>
                <h3>{p.subtitle}</h3>
                <p className='project-stack'>{p.stack}</p>
                <p className='big-card-desc'>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='page-bottom-cta'>
        <h2>Have a project idea?</h2>
        <p>I'm always open to building something new and meaningful together.</p>
        <div className='cta-btn-row'>
          <Link to='/Home' className='cta-btn-primary'
            onClick={() => setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
            Let's Talk
          </Link>
          <Link to='/About' className='cta-btn-secondary'>About me</Link>
        </div>
      </section>

    </div>
  )
}
