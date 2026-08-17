import React from 'react'
import { Link } from 'react-router-dom'
import image from './image.png'

export default function About() {
  return (
    <div className='page-wrapper about-page'>

      <section className='page-hero'>
        <div className='page-hero-inner'>
          <div className='page-hero-image'>
            <img src={image} alt='Eden Yehualashet' />
          </div>
          <div className='page-hero-text'>
            <span className='section-label'>Who I am</span>
            <h1 className='page-hero-title'>The Mind Behind<br />the Development</h1>
            <p>
              Hello! I'm <strong>Eden Yehualashet</strong>, a passionate Full Stack Developer,
              Computer Science student, and Coding Instructor who loves building meaningful
              digital experiences and helping others grow through technology.
            </p>
            <p>
              Currently studying Computer Science at <strong>Infolink University College</strong>, and a proud
              graduate of the <strong>ALX Africa Backend Web Development Program</strong>, where I gained
              intensive hands-on experience in backend engineering, API development, and scalable systems.
            </p>
            <p>
              My journey started with curiosity and became a mission: use technology to create
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
                and a deep passion for solving problems. I enjoy turning ideas into real-world digital
                products that are clean, responsive, scalable, and user-focused.
              </p>
              <p>
                I have grown through shipped projects spanning mental health, fintech, hospitality,
                library systems, and CRM tools, with each one teaching me something new about
                engineering and product thinking.
              </p>
              <p>
                Beyond development, I work as a remote Online Coding Instructor at EthioHope, mentoring
                aspiring programmers beginning their tech journey. Teaching has made me a better
                communicator, leader, and problem solver.
              </p>
            </article>

            <article className='info-card info-card--glow'>
              <div className='info-card-icon'>💡</div>
              <h2>What Drives Me</h2>
              <p>
                I believe technology should be meaningful. Coding is more than writing functions.
                It is about creating experiences and building tools that genuinely help people.
              </p>
              <p>
                One of my biggest inspirations is creating technology that supports mental health,
                personal growth, and safe digital communities for young people.
              </p>
              <ul className='about-list'>
                <li>Continuous learning</li>
                <li>Building impactful solutions</li>
                <li>Helping others grow through teaching</li>
                <li>User-centered experiences</li>
                <li>Technology for positive change</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      <section className='about-timeline-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>Work history</span>
          <h2 className='section-title'>Experience</h2>

          <div className='timeline'>

            <div className='timeline-item'>
              <div className='timeline-dot timeline-dot--accent' />
              <div className='timeline-content'>
                <span className='timeline-badge'>Current</span>
                <h3>Full Stack Developer (Personal Projects)</h3>
                <p className='timeline-sub'>Self-directed · 2024 to Present</p>
                <p>
                  Designing and building <strong>TradeMasterFX</strong>, a backtesting, journaling,
                  and analysis platform for forex traders. Sole developer handling product design,
                  React frontend, and Node.js/Express backend from scratch.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='timeline-dot timeline-dot--accent' />
              <div className='timeline-content'>
                <span className='timeline-badge'>Current</span>
                <h3>Remote Coding Instructor and Intern</h3>
                <p className='timeline-sub'>EthioHope (ethiohope.com) · 2024 to Present</p>
                <p>
                  Working remotely as an online coding instructor at EthioHope, mentoring aspiring
                  developers starting their programming journey. Also gained internship experience
                  there, participating in a project management role where I contributed to adding
                  new features to the <strong>SafeHub</strong> multi-service platform.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='timeline-dot' />
              <div className='timeline-content'>
                <span className='timeline-badge'>Completed</span>
                <h3>Full Stack Intern</h3>
                <p className='timeline-sub'>Future Interns · 1 month</p>
                <p>
                  Completed a one-month full stack internship at Future Interns. Built 3 projects
                  during the program: <strong>FitFlow</strong> (a client management system),
                  a <strong>Hotel Reservation Platform</strong> (MERN stack), and a third full stack
                  project. Received a certificate of completion and a letter of recommendation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='about-timeline-section'>
        <div className='scroll-section-content'>
          <span className='section-label'>Academic background</span>
          <h2 className='section-title'>Education</h2>

          <div className='timeline'>

            <div className='timeline-item'>
              <div className='timeline-dot timeline-dot--accent' />
              <div className='timeline-content'>
                <span className='timeline-badge'>Current</span>
                <h3>Bachelor of Science in Computer Science</h3>
                <p className='timeline-sub'>Infolink University College · 2023 – Present</p>
                <p>
                  Studying core Computer Science fundamentals including algorithms, data structures,
                  software engineering, system design, databases, and modern application development.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='timeline-dot' />
              <div className='timeline-content'>
                <span className='timeline-badge'>Graduate</span>
                <h3>Backend Web Development Program</h3>
                <p className='timeline-sub'>ALX Africa · Completed</p>
                <p>
                  Completed the intensive ALX Backend Web Development program, one of Africa's
                  most rigorous software engineering training tracks. Focused on backend engineering,
                  RESTful API development, Django REST Framework, databases, and scalable system architecture.
                  Graduated with <strong>SafeHaven</strong>, a mental health support platform, as the
                  capstone project.
                </p>
              </div>
            </div>

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
