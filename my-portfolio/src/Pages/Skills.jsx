import React from 'react'
import { Link } from 'react-router-dom'

const coreSkills = ['Python', 'Node.js', 'Django', 'React.js', 'HTML', 'CSS', 'JavaScript']

export default function Skills() {
  return (
    <div className='page-wrapper skills-page'>

     
      <section className='page-header'>
        <span className='section-label'>Technical expertise</span>
        <h1 className='page-header-title'>Skills &amp; Stack</h1>
        <p className='page-header-desc'>
          Full-stack developer passionate about building scalable backend systems, responsive web applications,
          and seamless digital experiences that solve real-world problems.
        </p>
      </section>

     
      <section className='skills-main-section'>
        <div className='scroll-section-content'>

        
          <div className='skills-feature-card'>
            <div className='skills-feature-header'>
              <span className='skills-feature-icon'>⚡</span>
              <h2>Core Languages &amp; Frameworks</h2>
            </div>
            <div className='skill-buttons'>
              {coreSkills.map(s => (
                <span key={s} className='skill-btn'>{s}</span>
              ))}
            </div>
          </div>

       
          <div className='skills-cards-grid'>
            <article className='info-card'>
              <div className='info-card-icon'>🗄️</div>
              <h3>Databases</h3>
              <ul className='skill-list'>
                <li>PostgreSQL — Advanced Indexing</li>
                <li>MongoDB — Aggregation Pipelines</li>
                <li>Redis — Caching Patterns</li>
              </ul>
            </article>

            <article className='info-card info-card--glow'>
              <div className='info-card-icon'>🔗</div>
              <h3>API Architecture</h3>
              <ul className='skill-list'>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </article>

            <article className='info-card'>
              <div className='info-card-icon'>☁️</div>
              <h3>Cloud &amp; Infrastructure</h3>
              <ul className='skill-list'>
                <li>Docker — Containerization</li>
              </ul>
            </article>

            <article className='info-card info-card--glow'>
              <div className='info-card-icon'>🎯</div>
              <h3>Focus Areas</h3>
              <ul className='skill-list'>
                <li>Scalable Backend Systems</li>
                <li>Responsive UI/UX</li>
                <li>Clean Architecture</li>
                <li>Performance Optimization</li>
              </ul>
            </article>
          </div>

        </div>
      </section>


      <section className='page-bottom-cta'>
        <h2>Looking for these skills on your team?</h2>
        <p>I'm open to exciting projects and new opportunities.</p>
        <div className='cta-btn-row'>
          <Link to='/Home' className='cta-btn-primary'
            onClick={() => setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
            Let's Talk
          </Link>
          <Link to='/Projects' className='cta-btn-secondary'>View Projects</Link>
        </div>
      </section>

    </div>
  )
}
