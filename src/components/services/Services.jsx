import React from 'react'
import './services.css'
import ServiceItem from './serviceitem'

const ServiceArray = [
  {
    id: 2,
    title: 'Web Development',
    list: [
      'Frontend Development',
      'Responsive Web Design',
      'Web App Development'
    ]
  },
  {
    id: 1,
    title: 'C++/Java Programming',
    list: [
      'Frontend Development',
      'Responsive Web Design',
      'Web App Development'
    ]
  },
  {
    id: 3,
    title: 'Competitive Programming',
    list: ['Data Structures', 'Algorithms', 'Code Debugging']
  }
]

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 className="text-3xl">Services</h2>
      <div className="container services__container">
        {ServiceArray.map(item => {
          return <ServiceItem item={item} key={item.id} />
        })}
      </div>
    </section>
  )
}

export default services
