import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const skills = {
  'Programming Languages': [
    'C++',
    'C',
    'Java',
    'JavaScript',
    'SQL',
    'HTML',
    'CSS'
  ],
  'Frameworks and Libraries': [
    'React JS',
    'Tailwind',
    'Node JS',
    'Express JS',
    'Mongo DB',
    'Material UI'
  ],
  'Cloud and Databases': ['MongoDB', 'MySQL'],
  'Tools, Editors, and IDEs': [
    'VS Code',
    'Codeblock',
  ],
  'Soft Skills': [
    'Teamwork',
    'Communication',
    'Time Management',
    'Problem Solving',
    'Critical Thinking'
  ],
  Coursework: [
    'Data Structures',
    'Object-Oriented Programming',
    'Web Development',
    'Database Management Systems',
    'Operating Systems',
    'Software Engineering',
  ],
  'Areas of Interest': [
    'Full Stack Development',
    'Web Development',
    'Cloud Computing',
  ]
}

function Skill() {
  return (
    <section id="skill">
      <h5>What Skills I Have</h5>
      <h2 className="text-3xl">My Skills</h2>
      <div className="container skill__container">
        {Object.keys(skills).map(skillCategory => (
          <div className="skill__card" key={skillCategory}>
            <h3 className="skill__title">{skillCategory}</h3>
            <div className="skill__list">
              {skills[skillCategory].map(skillItem => (
                <div key={skillItem} className="skill__item">
                  <BsPatchCheckFill className="skill__icon" />
                  {skillItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
