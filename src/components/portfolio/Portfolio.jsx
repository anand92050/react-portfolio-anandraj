import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project_image/img1.jpg'
import IMG2 from '../../assets/project_image/img2.jpg'
import IMG3 from '../../assets/project_image/img3.jpg'
import IMG4 from '../../assets/project_image/img4.jpg'
import IMG5 from '../../assets/project_image/img5.jpg'
import IMG6 from '../../assets/project_image/img6.jpg'
import IMG7 from '../../assets/project_image/img7.jpg'
// import IMG9 from '../../assets/projects_images/project-9.png'
// import IMG10 from '../../assets/projects_images/project-10.png'
// import IMG11 from '../../assets/projects_images/project-11.png'
// import IMG12 from '../../assets/projects_images/project-12.png'
// import IMG13 from '../../assets/projects_images/project-13.jpg'

import PortFolioItem from './portfolioitem'

const datas = [
  {
    id: "1",
    image: IMG3,
    title: 'Portfolio-React',
    description:
      'This is my portfolio website which is made using ReactJS. It shows my skills, projects, and other details.',
    tools_tech: ['React', 'React-Routers', 'React-Icons', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Single Page Application For Mobile View',
      'Multi Page Application For Desktop View',
      ' Awesome UI Pages',
      'Smooth Scrolling'
    ],
    github: '#',
    live: '#'
  },
  {
    id: "2",
    image: IMG5,
    title: 'React-Weather-App',
    description:
      'This is a weather web app which is made using ReactJS. It is used to show the information about current weather.',
    tools_tech: [
      'React',
      'hooks',
      'Open weather map API',
      'Tailwind',
      'CSS',
      'JavaScript'
    ],
    features: [
      'Responsive',
      'Single Page Application',
      'Search Feature'
    ],
    github: 'https://github.com/anand92050/react-weather-app',
    live: 'https://react-weather-app-nu-gray.vercel.app/'
  },
  {
    id: "3",
    image: IMG1,
    title: 'Portfolio',
    description:
      'This is my portfolio website which is made using HTML, CSS, and JavaScript. It shows my skills, projects, and other details.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Deifferent Themes',
      'Dark-Mode',
      'Smooth-transition',
      'Awesome UI Pages',
      'Smooth Scrolling',
      'Email contact form'
    ],
    github:
      'https://github.com/anand92050/Portfolio-website/tree/main/Portfolio%20website',
    live: 'https://anandrajportfolioiem.netlify.app/'
  },
  {
    id: "4",
    image: IMG4,
    title: 'GIF-Generator',
    description:
      'This is a GIF Generator application which is made using Free GIF Api.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Snake Speed control',
      'Food generation Speed Control',
      'Score',
      'Game Over Screen',
      'Main Menu Screen'
    ],
    github: 'https://github.com/anand92050/random-gif-gen',
    live: 'https://random-gif-gen-kappa.vercel.app/'
  },
  {
    id: "5",
    image: IMG2,
    title: 'Dev-Detective',
    description: 'This is a Dev-Detective which is made using github API.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      // 'Difficulty Easy, Medium or Hard',
      // 'Score',
      // 'Game Over Screen',
      // 'Main Menu Screen'
    ],
    github: 'https://github.com/anand92050/DevDetective-Web',
    live: 'https://anand92050.github.io/DevDetective-Web/'
  },
  {
    id: "6",
    image: IMG6,
    title: 'Tic-Tac-Toe',
    description:
      'This is a Tic-Tac-ToeGame which is made using Javascript logic.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Smooth Gameplay', 'End Bar'],
    github: '#',
    live: '#'
  },
  {
    id: "7",
    image: IMG7,
    title: 'Password-Generator',
    description:
      'This is a Password generator website which is made using HTML, CSS, and JavaScript, Tailwind, Algorithm.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Difficulty Beginner or Advanced', 'Vs Computer'],
    github: 'https://github.com/anand92050/Password-Generator-App',
    live: 'https://password-generat-app.netlify.app/'
  }
]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2 className="text-3xl">Portfolio</h2>
      <h3 className="portfolio__heading"> My Personal Projects</h3>
      <div className="container portfolio__container">
        {datas.map(data => {
          return <PortFolioItem key={data.id} data={data} />
        })}
      </div>
      {/* <h3 className="portfolio__heading">Collaborative Projects</h3>
      <div className="container portfolio__container">
        {data2.map(data => {
          return <PortFolioItem key={data.id} data={data} />
        })}
      </div> */}
    </section>
  )
}

export default Portfolio
