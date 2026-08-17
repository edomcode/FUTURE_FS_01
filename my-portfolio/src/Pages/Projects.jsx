import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    tag: 'Mental Health',
    title: 'SafeHaven',
    subtitle: 'Mental Health Support Platform',
    stack: 'React · Django REST Framework · MongoDB',
    desc: 'A mental health support platform built as my ALX Africa graduation project. Integrates journal logging, mood tracking, and personalized insights to help users reflect on their emotional journey.',
    status: 'ALX Graduation Project',
    accent: false,
  },
  {
    tag: 'FinTech',
    title: 'TradeMasterFX',
    subtitle: 'Backtesting, Journaling and Analysis Platform',
    stack: 'React · Node.js · Express · APIs',
    desc: 'A trading companion built for forex traders combining trade journaling, backtesting tools, and performance analytics to help traders track, review, and improve their strategies over time.',
    status: 'In Development',
    accent: true,
  },
  {
    tag: 'CRM',
    title: 'FitFlow',
    subtitle: 'Client Management System',
    stack: 'React · Node.js · MongoDB · Express',
    desc: 'A client relationship and lead management system built during my Future Interns internship. Handles client onboarding, lead tracking, and follow-up workflows to keep business operations running smoothly.',
    status: 'Future Interns Project',
    accent: false,
  },
  {
    tag: 'Hospitality',
    title: 'Hotel Reservation Platform',
    subtitle: 'Fullstack Booking System',
    stack: 'MongoDB · Express · React · Node.js',
    desc: 'A full-featured MERN stack hotel reservation platform covering room browsing, availability checking, booking management, and guest communication from frontend to backend.',
    status: 'Future Interns Project',
    accent: true,
  },
  {
    tag: 'Library',
    title: 'DIY Library Management System',
    subtitle: 'RESTful API Library System',
    stack: 'Python · Django 5.2.4 · Django REST Framework · SQLite · django-filter · environs',
    desc: 'A RESTful API based library management system built with Django and Django REST Framework. Supports full book management (CRUD), borrowing and return tracking, automatic inventory management of available copies, advanced filtering by author, title, genre and year, and popular genre reports based on the book collection.',
    status: 'Completed',
    accent: false,
  },
  {
    tag: 'Portfolio',
    title: 'Personal Portfolio',
    subtitle: 'This Site',
    stack: 'React · Vite · Node.js · Express',
    desc: 'My personal developer portfolio showcasing projects, skills, and experience. Features a custom Node.js backend for the contact form, smooth scroll navigation, and a fully responsive design.',
    status: 'Live',
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
          A collection of projects that reflect my passion for building meaningful, impactful software
          spanning mental health platforms, fintech tools, and business solutions.
        </p>
      </section>

      <section className='projects-main-section'>
        <div className='scroll-section-content'>
          <div className='projects-big-grid'>
            {projects.map((p) => (
              <article key={p.title} className={`big-project-card ${p.accent ? 'big-project-card--accent' : ''}`}>
                <div className='big-card-top'>
                  <span className='project-card-tag'>{p.tag}</span>
                  <span className='project-status'>{p.status}</span>
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
