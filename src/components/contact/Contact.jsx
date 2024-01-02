import React, { useRef, useState, useEffect } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { IoCallOutline } from 'react-icons/io5'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [feedbackHTML, setFeedbackHTML] = useState('')

  useEffect(() => {
    const feedbackTimer = setTimeout(() => {
      setErrors({})
      setSuccessMessage('')
      setFeedbackHTML('')
    }, 5000)

    return () => clearTimeout(feedbackTimer)
  }, [])

  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    // Validate name
    if (formData.name.length < 3 || formData.name.length > 30) {
      newErrors.name = 'Name should be between 3 and 30 characters'
      isValid = false
    }

    // Validate email
    const emailPattern =
      /^([\w.%+-]+)@((gmail\.com)|(official\.com)|(student\.nitw\.ac\.in))$/
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address'
      isValid = false
    }

    // Validate message
    if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)

    // Update feedback HTML
    setFeedbackHTML(() =>
      Object.keys(newErrors).map((key, index) => (
        <p key={index} className="error">
          {newErrors[key]}
        </p>
      ))
    )

    return isValid
  }

  const sendEmail = async e => {
    e.preventDefault()

    setErrors({}) // Clear previous errors

    if (validateForm()) {
      try {
        const result = await emailjs.sendForm(
          'service_22gmxzk',
          'template_214o2ze',
          form.current,
          'RQp7q0EuoDTdddltl'
        )
        console.log(result.text)
        setSuccessMessage('Message sent successfully!')
      } catch (error) {
        console.log(error.text)
        setErrors({
          general: 'Error sending message. Please try again later.'
        })
      }

      e.target.reset()
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: undefined,
      general: undefined
    })
    setSuccessMessage('')
  }

  const contactOptions = [
    {
      id: 1,
      icon: <MdOutlineEmail className="contact__icon" />,
      title: 'Email Me',
      value: 'anandraj.iem@gmail.com',
      link: 'mailto:anandraj.iem@gmail.com',
      message: 'Send a Mail'
    },
    {
      id: 2,
      icon: <ImWhatsapp className="contact__icon" />,
      title: 'WhatsApp Me',
      value: '+91-9205028192',
      link: 'https://wa.me/+919205028192',
      message: 'Send a Message'
    },
    {
      id: 3,
      icon: <IoCallOutline className="contact__icon" />,
      title: 'Call me',
      value: '+91-9205028192',
      link: 'tel:+919205028192',
      message: 'Call Now'
    }
  ]

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="text-3xl">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map(option => (
            <article className="contact__option" key={option.id}>
              <h4>
                {option.icon}
                {option.title}
              </h4>
              <h5>{option.value}</h5>
              <a href={option.link} target="_blank" rel="noreferrer">
                {option.message}
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            className="py-2 px-2 text-gray-300"
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            name="email"
            className="py-2 px-2 text-gray-300"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            className="py-2 px-2 text-gray-300"
            rows="7"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send Message</button>
          {feedbackHTML && (
            <div className="feedback-container">{feedbackHTML}</div>
          )}
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
