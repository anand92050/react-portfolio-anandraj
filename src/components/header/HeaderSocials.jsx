import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiLeetcode,
  SiTwitter
} from 'react-icons/si'

const socials_profile = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/anand92050/',
    icon: <BsLinkedin />
  },
  {
    id: 2,
    name: 'Github',
    link: 'https://github.com/anand92050',
    icon: <FaGithub />
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: <FiInstagram />
  },
  {
    id: 4,
    name: 'Twitter',
    link: 'https://twitter.com/A31AnandRaj1',
    icon: <SiTwitter />
  }
]

const coding_profile = [
  {
    id: 1,
    name: 'Leetcode',
    link: 'https://leetcode.com/anand92050/',
    icon: <SiLeetcode />
  },
  {
    id: 2,
    name: 'Codeforces',
    link: 'https://www.codeforces.com/anand92050',
    icon: <SiCodeforces />
  },
  {
    id: 3,
    name: 'Codechef',
    link: 'https://www.codechef.com/users/apk92050',
    icon: <SiCodechef />
  },
  {
    id: 4,
    name: 'Geeksforgeeks',
    link: 'https://auth.geeksforgeeks.org/user/anandrajrpsraj3236',
    icon: <SiGeeksforgeeks />
  },
  
]

function HeaderSocials() {
  return (
    <div className="header__socials">
      <div className="header__socials__left">
        {socials_profile.map(social => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            alt={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="header__socials__right">
        {coding_profile.map(social => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            alt={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeaderSocials
