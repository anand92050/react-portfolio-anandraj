import React from 'react'
import './header.css'
import CtaComponent from './CTA' // Renamed the import to CtaComponent
import ME from '../../assets/Anand_without_bg.png'
import HeaderSocials from './HeaderSocials'
import TwComponent from './TW' // Renamed the import to TwComponent

const Header = () => {
  const words = [
    'Frontend Developer',
    'Competitive Programmer',
    'Problem Solver',
    'Data Structures and Algorithms Enthusiast',
    'Tech Enthusiast'
  ]

  return (
    <section className="header" id="header">
      <div className="container header__container">
        <h5>Hey Myself</h5>
        <h1>Anand Raj</h1>
        <h5 className="text-light">
          I'm a <TwComponent words={words} />
        </h5>
        <CtaComponent />
        <HeaderSocials />
        <div className="me rounded-t-3xl  overflow-hidden">
          <img className="w-[100%] h-[100%] " src={ME} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default Header
