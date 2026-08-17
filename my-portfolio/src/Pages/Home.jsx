import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from './image.png'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      const data = await response.json()
      if (!response.ok || !data.ok) throw new Error(data.error || 'Submission failed')
      setStatus(`Thanks ${name || 'there'}! Your message was sent.`)
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } catch {
      setStatus('Sorry, there was a problem sending your message.')
    }
  }

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='scrollable-home'>

      <section className='home-hero-section'>
        <div className='hero-profile-circle'>
          <img src={image} alt='Eden Yehualashet' className='hero-profile-img' />
        </div>
        <p className='home-greeting'>Hello, I'm <span className='home-accent'>Eden</span></p>
        <h1 className='home-headline'>
          Fullstack Developer <span className='home-accent'>&amp;</span> Computer Science Student
        </h1>
        <p className='home-desc'>
          Passionate about creating technology that helps people feel supported, connected, and understood.
        </p>
        <div className='hero-actions'>
          <button className='hero-cta-primary' onClick={scrollToContact}>Let's Talk</button>
          <Link className='hero-cta-secondary' to='/Projects'>View Projects</Link>
        </div>
        <button className='scroll-indicator' onClick={scrollToContact} aria-label='Scroll down'>
          <span className='scroll-arrow'>↓</span>
          <span>Scroll to explore</span>
        </button>
      </section>

      <section className='scroll-about-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>About me</span>
          <h2 className='section-title'>The Mind Behind the Development</h2>
          <div className='about-scroll-grid'>
            <div className='about-scroll-text'>
              <p className='section-text'>
                I'm Eden Yehualashet, a passionate Full Stack Developer, Computer Science student, and Coding Instructor
                who loves building meaningful digital experiences.
              </p>
              <p className='section-text'>
                Currently studying Computer Science at Infolink University College and a proud graduate of the
                <strong> ALX Africa Backend Web Development Program</strong>, with hands-on experience teaching
                coding at EthioHope and building platforms that make a real difference.
              </p>
              <p className='section-text'>
                My mission: use technology not just to build apps, but to create solutions that positively
                impact people's lives.
              </p>
              <Link className='section-link' to='/About'>Read full story →</Link>
            </div>
            <div className='about-scroll-stats'>
              <div className='stat-card'>
                <span className='stat-number'>2+</span>
                <span className='stat-label'>Years Building</span>
              </div>
              <div className='stat-card'>
                <span className='stat-number'>6+</span>
                <span className='stat-label'>Projects Shipped</span>
              </div>
              <div className='stat-card'>
                <span className='stat-number'>ALX</span>
                <span className='stat-label'>Backend Certified</span>
              </div>
              <div className='stat-card'>
                <span className='stat-number'>∞</span>
                <span className='stat-label'>Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='scroll-projects-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>What I've built</span>
          <h2 className='section-title'>Featured Projects</h2>
          <div className='scroll-projects-grid'>
            <article className='scroll-project-card'>
              <div className='project-card-tag'>Mental Health</div>
              <h3>SafeHaven</h3>
              <p className='project-stack'>React · Django REST Framework · MongoDB</p>
              <p>
                A mental health support platform built as my ALX Africa capstone project. Integrates
                journal logging, mood tracking, and personalized insights to help users reflect on their
                emotional journey.
              </p>
              <div className='project-card-footer'>
                <span className='project-status'>ALX Graduation Project</span>
              </div>
            </article>

            <article className='scroll-project-card project-card-accent'>
              <div className='project-card-tag'>FinTech</div>
              <h3>TradeMasterFX</h3>
              <p className='project-stack'>React · Node.js · Express · APIs</p>
              <p>
                A trading platform for backtesting strategies, journaling trades, and analyzing performance.
                Built to help forex traders track and improve their decision-making over time.
              </p>
              <div className='project-card-footer'>
                <span className='project-status'>In Development</span>
              </div>
            </article>

            <article className='scroll-project-card'>
              <div className='project-card-tag'>CRM</div>
              <h3>FitFlow</h3>
              <p className='project-stack'>React · Node.js · MongoDB · Express</p>
              <p>
                A client relationship and lead management system built during my Future Interns
                internship. Handles client onboarding, lead tracking, and follow-up workflows.
              </p>
              <div className='project-card-footer'>
                <span className='project-status'>Future Interns Project</span>
              </div>
            </article>

            <article className='scroll-project-card project-card-accent'>
              <div className='project-card-tag'>Hospitality</div>
              <h3>Hotel Reservation Platform</h3>
              <p className='project-stack'>MongoDB · Express · React · Node.js</p>
              <p>
                A fullstack MERN hotel booking system covering room browsing, availability,
                reservations, and guest management end to end.
              </p>
              <div className='project-card-footer'>
                <span className='project-status'>Future Interns Project</span>
              </div>
            </article>

            <article className='scroll-project-card'>
              <div className='project-card-tag'>Library</div>
              <h3>DIY Library Management System</h3>
              <p className='project-stack'>Python · Django 5.2.4 · Django REST Framework · SQLite · django-filter · environs</p>
              <p>
                A RESTful API library system with full book management, borrowing and return
                tracking, automatic inventory management of available copies, advanced filtering
                by author, title, genre and year, and popular genre reports.
              </p>
              <div className='project-card-footer'>
                <span className='project-status'>Completed</span>
              </div>
            </article>
          </div>
          <div className='section-cta-row'>
            <Link className='section-link' to='/Projects'>See all projects →</Link>
          </div>
        </div>
      </section>

      <section className='scroll-skills-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>Technical expertise</span>
          <h2 className='section-title'>Skills &amp; Stack</h2>
          <div className='skills-grid'>
            <div className='skill-category'>
              <h3>Core Languages</h3>
              <div className='skill-buttons'>
                {['Python','Node.js','Express.js','Django','Django REST Framework','React.js','TypeScript','JavaScript','HTML','CSS','Git'].map(s => (
                  <span key={s} className='skill-btn'>{s}</span>
                ))}
              </div>
            </div>
            <div className='skill-category'>
              <h3>Databases</h3>
              <ul className='skill-list'>
                <li>PostgreSQL: Advanced Indexing</li>
                <li>MongoDB: Aggregation Pipelines</li>
                <li>Redis: Caching Patterns</li>
              </ul>
            </div>
            <div className='skill-category'>
              <h3>API Architecture</h3>
              <ul className='skill-list'>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Django REST Framework</li>
              </ul>
            </div>
            <div className='skill-category'>
              <h3>Cloud &amp; Infrastructure</h3>
              <ul className='skill-list'>
                <li>Docker</li>
                <li>Git: Version Control</li>
              </ul>
            </div>
          </div>
          <div className='section-cta-row'>
            <Link className='section-link' to='/Skills'>Full skills breakdown →</Link>
          </div>
        </div>
      </section>

      <section className='scroll-contact-section' id='contact-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>Let's collaborate</span>
          <h2 className='section-title'>Get in <span className='home-accent'>Touch</span></h2>
          <div className='scroll-contact-inner'>
            <div className='scroll-contact-left'>
              <p className='section-text'>
                Have a project in mind or want to discuss system architecture, backend development,
                or full-stack solutions? I'm always open to new ideas and opportunities.
              </p>
              <div className='contact-social-grid'>
                <a href='mailto:edenyehualashet27@gmail.com' className='social-card'>
                  <span className='social-icon'>📧</span>
                  <span>Email</span>
                </a>
                <a href='https://www.linkedin.com/in/eden-yehualashet-11644a348/' target='_blank' rel='noreferrer' className='social-card'>
                  <span className='social-icon'>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href='https://github.com/edomcode' target='_blank' rel='noreferrer' className='social-card'>
                  <span className='social-icon'>🐙</span>
                  <span>GitHub</span>
                </a>
                <a href='https://t.me/edomiyas27' target='_blank' rel='noreferrer' className='social-card'>
                  <span className='social-icon'>✈️</span>
                  <span>Telegram</span>
                </a>
                <a href='https://wa.me/251938952148' target='_blank' rel='noreferrer' className='social-card'>
                  <span className='social-icon'>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <form className='contact-form' onSubmit={handleSubmit}>
              <h3 className='contact-form-title'>Send a message</h3>
              <label className='contact-label'>Name
                <input type='text' className='contact-input' value={name}
                  onChange={e => setName(e.target.value)} placeholder='Your name' required />
              </label>
              <label className='contact-label'>Email
                <input type='email' className='contact-input' value={email}
                  onChange={e => setEmail(e.target.value)} placeholder='you@example.com' required />
              </label>
              <label className='contact-label'>Subject
                <input type='text' className='contact-input' value={subject}
                  onChange={e => setSubject(e.target.value)} placeholder='What is this about?' />
              </label>
              <label className='contact-label'>Message
                <textarea className='contact-input contact-textarea' value={message}
                  onChange={e => setMessage(e.target.value)} placeholder='Tell me about your project...'
                  rows={4} required />
              </label>
              <button type='submit' className='contact-submit'>Send Message</button>
              {status && <p className='contact-status'>{status}</p>}
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
