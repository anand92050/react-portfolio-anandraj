import React from 'react'
import './footer.css'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/'
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: 'https://twitter.com/A31AnandRaj1'
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/anand92050/'
  },
  {
    id: 4,
    icon: <FaGithub />,
    link: 'https://github.com/anand92050/'
  }
]

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__logo">AR</div>
      <div className="footer__socials">
        {socialLinks.map(socialLink => (
          <a
            key={socialLink.id}
            href={socialLink.link}
            target="_blank"
            rel="noreferrer"
          >
            {socialLink.icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>© Anand Raj. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
