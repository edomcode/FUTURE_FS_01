import React from 'react'
import image from './image.png'

export default function About() {
  return (
    <div className='About-p'>
      <section className='about-hero'>
        <div className='about-hero__image'>
          <img src={image} alt='Eden Assefa' />
        </div>

        <div className='about-hero__text'>
          <h1>The Mind Behind the Development</h1>
          <p>
            Hello! I’m Eden Assefa, a passionate Full Stack Developer, Computer Science student, and Coding Instructor who loves
            building meaningful digital experiences and helping others grow through technology.
          </p>
          <p>
            Currently, I am studying Computer Science at Infolink University College, where I continue expanding my knowledge in
            software engineering, system design, databases, networking, and modern application development. Alongside my academic
            journey, I successfully completed the ALX Backend Web Development Program, where I gained intensive hands-on experience in
            backend engineering, API development, and scalable systems.
          </p>
          <p>
            My journey in technology started with curiosity, but over time it became a mission using technology not only to build
            applications, but also to create solutions that can positively impact people’s lives.
          </p>
        </div>
      </section>

      <section className='about-grid'>
        <article className='about-card'>
          <h2>My Journey</h2>
          <p>
            My path into software development has been shaped by learning, discipline, creativity, and a deep passion for solving problems.
          </p>
          <p>
            As a developer, I enjoy turning ideas into real-world digital products. I love building systems that are clean, responsive,
            scalable, and user-focused. Over the years, I have continued improving myself through projects, teaching, collaboration,
            and self-learning.
          </p>
          <p>
            Beyond development, I also work as an Online Coding Instructor at EthioHope, where I mentor and teach aspiring programmers and
            students who are beginning their tech journey. Teaching programming has helped me become a better communicator, leader, and
            problem solver while allowing me to contribute to the growth of young developers.
          </p>
        </article>

        <article className='about-card about-card--accent'>
          <h2>What Drives Me</h2>
          <p>
            I believe technology should be meaningful. For me, coding is more than writing functions and designing interfaces it is about
            creating experiences, solving real problems, and building tools that can help people.
          </p>
          <p>
            One of my biggest inspirations is creating technology that supports mental health, personal growth, and safe digital communities.
            This vision inspired me to work on projects focused on helping young people facing anxiety, depression, addiction, and social
            pressure through anonymous and supportive digital platforms.
          </p>
          <p>I am passionate about:</p>
          <ul>
            <li>Continuous learning</li>
            <li>Building impactful solutions</li>
            <li>Helping others grow</li>
            <li>Creating user-centered experiences</li>
            <li>Using technology for positive change</li>
          </ul>
        </article>
      </section>
    </div>
  )
}
