import React from 'react'
import './education.css'
import EducationItem from './educationitem'

const Education = () => {
  const EducationArray = [
    {
      id: 1,
      date: '2020 - 2024',
      title: "Btech in Computer Science & Engineering",
      text: 'Institute of Engineering & Management, Kolkata , WestBengal',
      cgpa: 'CGPA: 9.24 (Till Sem-6)'
    },
    {
      id: 2,
      date: '2017 - 2019',
      title: "Higher Secondary School (PCM)",
      text: 'KST College, Biharsharif Nalanda Bihar',
      cgpa: '78.2%'
    },
    {
      id: 3,
      date: '2016 - 2017',
      title: 'Matriculation',
      text: 'RPS School, Biharsharif Nalanda Bihar',
      cgpa: 'CGPA: 10'
    },
   
  ]
  return (
    <section id="education">
      <h5>What Qualifications I have</h5>
      <h2 className="text-3xl">My Education</h2>
      <div className="container education__container">
        {EducationArray.map(item => {
          return <EducationItem item={item} key={item.id} />
        })}
      </div>
    </section>
  )
}

export default Education
