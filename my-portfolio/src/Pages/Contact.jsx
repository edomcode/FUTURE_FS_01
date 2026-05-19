import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    
    const formData = { name, email, subject, message }
    console.log('Form submitted:', formData)

  
    setStatus(`Thanks ${name || 'there'}! Your message has been captured (check console).`)

    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className='Contact-p'>
      <div className='contact-left'>
        <h1 className='contact-title'>Get in <span className='home-accent'>touch</span></h1>
        <p className='contact-desc'>Have a project in mind or want to discuss system architecture, backend development,
          or full-stack solutions? I'm always open to collaborating on new ideas, solving technical challenges,
          and exploring opportunities where I can contribute and grow.</p>
        <div className='contact-links'>
          <a href='mailto:edenyehualashet27@gmail.com' className='contact-link'>📧 Email</a>
          <a href='https://www.linkedin.com/in/eden-yehualashet-11644a348/' target='_blank' rel='noreferrer' className='contact-link'>💼 LinkedIn</a>
          <a href='https://github.com/edomcode' target='_blank' rel='noreferrer' className='contact-link'>🐙 GitHub</a>
          <a href='https://t.me/edomiyas27' target='_blank' rel='noreferrer' className='contact-link'>✈️ Telegram</a>
          <a href='https://wa.me/251916775816' target='_blank' rel='noreferrer' className='contact-link'>💬 WhatsApp</a>
        </div>
      </div>

      <form className='contact-form' onSubmit={handleSubmit}>
        <h2 className='contact-form-title'>Send a message</h2>

        <label className='contact-label'>Name
          <input type='text' className='contact-input' value={name}
            onChange={(e) => setName(e.target.value)} placeholder='Your name' required />
        </label>

        <label className='contact-label'>Email
          <input type='email' className='contact-input' value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder='you@example.com' required />
        </label>

        <label className='contact-label'>Subject
          <input type='text' className='contact-input' value={subject}
            onChange={(e) => setSubject(e.target.value)} placeholder='What is this about?' />
        </label>

        <label className='contact-label'>Message
          <textarea className='contact-input contact-textarea' value={message}
            onChange={(e) => setMessage(e.target.value)} placeholder='Tell me about your project...'
            rows={5} required />
        </label>

        <button type='submit' className='contact-submit'>Send Message</button>

        {status && <p className='contact-status'>{status}</p>}
      </form>
    </div>
  )
}
