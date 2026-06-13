import React from 'react'
import { Link } from 'react-router-dom'
import image from './image.png'

export default function About() {
  return (
    <div className='page-wrapper about-page'>

      
      <section className='page-hero'>
        <div className='page-hero-inner'>
          <div className='page-hero-image'>
            <img src={image} alt='Eden Assefa' />
          </div>
          <div className='page-hero-text'>
            <span className='section-label'>Who I am</span>
            <h1 className='page-hero-title'>The Mind Behind<br />the Development</h1>
            <p>
              Hello! I'm <strong>Eden Assefa</strong> — a passionate Full Stack Developer,
              Computer Science student, and Coding Instructor who loves building meaningful
              digital experiences and helping others grow through technology.
            </p>
            <p>
              Currently studying Computer Science at Infolink University College, and a proud
              graduate of the <strong>ALX Backend Web Development Program</strong>, where I gained
              intensive hands-on experience in backend engineering, API development, and scalable systems.
            </p>
            <p>
              My journey started with curiosity — and became a mission: use technology to create
              solutions that positively impact people's lives.
            </p>
          </div>
        </div>
      </section>

      <section className='about-cards-section'>
        <div className='scroll-section-content'>
          <div className='about-cards-grid'>

            <article className='info-card'>
              <div className='info-card-icon'>🚀</div>
              <h2>My Journey</h2>
              <p>
                My path into software development has been shaped by learning, discipline, creativity,
                and a deep passion for solving problems.
              </p>
              <p>
                I enjoy turning ideas into real-world digital products — clean, responsive, scalable,
                and user-focused. Over the years I've grown through projects, teaching, collaboration,
                and relentless self-learning.
              </p>
              <p>
                Beyond development, I work as an Online Coding Instructor at EthioHope, mentoring aspiring
                programmers beginning their tech journey. Teaching has made me a better communicator,
                leader, and problem solver.
              </p>
            </article>

            <article className='info-card info-card--glow'>
              <div className='info-card-icon'>💡</div>
              <h2>What Drives Me</h2>
              <p>
                I believe technology should be meaningful. Coding is more than writing functions —
                it's about creating experiences and building tools that help people.
              </p>
              <p>
                One of my biggest inspirations is creating technology that supports mental health,
                personal growth, and safe digital communities for young people.
              </p>
              <ul className='about-list'>
                <li>Continuous learning</li>
                <li>Building impactful solutions</li>
                <li>Helping others grow</li>
                <li>User-centered experiences</li>
                <li>Technology for positive change</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

     
      <section className='page-bottom-cta'>
        <h2>Want to work together?</h2>
        <p>I'm open to freelance, collaboration, and full-time opportunities.</p>
        <div className='cta-btn-row'>
          <Link to='/Projects' className='cta-btn-primary'>See my work</Link>
          <Link to='/Home' className='cta-btn-secondary'
            onClick={() => setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
            Get in touch
          </Link>
        </div>
      </section>

    </div>
  )
}
