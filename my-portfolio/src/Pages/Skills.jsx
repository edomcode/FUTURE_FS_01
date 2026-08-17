import React from 'react'
import { Link } from 'react-router-dom'

const coreSkills = [
  'Python', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js',
  'Django', 'Django REST Framework', 'React.js', 'HTML', 'CSS', 'Git',
]

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
                <li>PostgreSQL: Advanced Indexing</li>
                <li>MongoDB: Aggregation Pipelines</li>
                <li>Redis: Caching Patterns</li>
              </ul>
            </article>

            <article className='info-card info-card--glow'>
              <div className='info-card-icon'>🔗</div>
              <h3>API Architecture</h3>
              <ul className='skill-list'>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Django REST Framework</li>
              </ul>
            </article>

            <article className='info-card'>
              <div className='info-card-icon'>☁️</div>
              <h3>Cloud &amp; Infrastructure</h3>
              <ul className='skill-list'>
                <li>Docker: Containerization</li>
                <li>Git: Version Control</li>
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
                <li>Mentoring &amp; Teaching</li>
              </ul>
            </article>
          </div>

          <div className='skills-timeline-section'>
            <h2 className='timeline-heading'>Experience &amp; Education</h2>

            <div className='timeline'>

              <div className='timeline-item'>
                <div className='timeline-dot timeline-dot--accent' />
                <div className='timeline-content'>
                  <span className='timeline-badge'>Current</span>
                  <h3>Full Stack Developer (Personal Projects)</h3>
                  <p className='timeline-sub'>Self-directed · 2024 to Present</p>
                  <p>
                    Building <strong>TradeMasterFX</strong>, a backtesting, journaling, and analysis
                    platform for forex traders. Handling full product design, React frontend, and
                    Node.js/Express backend end to end.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-dot timeline-dot--accent' />
                <div className='timeline-content'>
                  <span className='timeline-badge'>Current</span>
                  <h3>Computer Science Student</h3>
                  <p className='timeline-sub'>Infolink University College · 2023 to Present</p>
                  <p>
                    Studying Computer Science with a focus on software engineering, system design,
                    databases, and modern application development.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-dot' />
                <div className='timeline-content'>
                  <span className='timeline-badge'>Experience</span>
                  <h3>Remote Coding Instructor and Intern</h3>
                  <p className='timeline-sub'>EthioHope (ethiohope.com) · 2024</p>
                  <p>
                    Online coding instructor at EthioHope mentoring aspiring developers through
                    remote sessions. Also completed an internship there, participating in a project
                    management role and contributing new features to the <strong>SafeHub</strong> platform.
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
                    Completed a one-month full stack internship. Delivered 3 projects: <strong>FitFlow</strong> (client
                    management system), a <strong>Hotel Reservation Platform</strong> (MERN), and a third full stack
                    application. Received a certificate of completion and letter of recommendation.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-dot' />
                <div className='timeline-content'>
                  <span className='timeline-badge'>Education</span>
                  <h3>ALX Africa Backend Web Development</h3>
                  <p className='timeline-sub'>ALX Africa · Graduate</p>
                  <p>
                    Completed the intensive ALX Backend Web Development program. Gained deep
                    hands-on experience in backend engineering, API development, system design,
                    and scalable architectures. Graduated with the <strong>SafeHaven</strong> mental
                    health support platform as the capstone project.
                  </p>
                </div>
              </div>

            </div>
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
