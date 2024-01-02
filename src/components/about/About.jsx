import React from 'react'
import './about.css'
import ME from '../../assets/Anand_mountain.jpg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdDeveloperMode } from 'react-icons/md'
import { SiCodersrank } from 'react-icons/si'
import { Link } from 'react-router-dom'

const About = () => {
  const cardData = [
    {
      id: 1,
      icon: <BsCodeSlash className="about__icon" />,
      title: 'Coding',
      count: '1000+ Questions'
    },
    {
      id: 2,
      icon: <MdDeveloperMode className="about__icon" />,
      title: 'Projects',
      count: '10+ Projects'
    },
    {
      id: 3,
      icon: <SiCodersrank className="about__icon" />,
      title: 'CP',
      count: '100+ Contests'
    }
  ]

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2 className='text-3xl'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {cardData.map(card => (
              <article className="about__card" key={card.id}>
                {card.icon}
                <h5>{card.title}</h5>
                <small>{card.count}</small>
              </article>
            ))}
          </div>
        </div>
        <div className="about__text">
          <p>
            👋 Hi, my name is Anand Raj, from Nalanda, Bihar, India.
            <br />
            I'm a Btech student in Computer Science & Engineering 🎓 from IEM Kolkata.
            <br />
            I'm a Web developer & Programmer who loves to write clean and
            efficient code.
            <br />
            Apart from web development, I love Problem Solving using Data
            Structures and Algorithms in an Efficient Way.
          </p>
          <Link
            to={window.screen.width > 600 ? '/contact' : '#contact'}
            className="btn btn-primary"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
