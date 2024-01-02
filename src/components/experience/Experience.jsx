import React from 'react'
import './experience.css'
import { AiFillSound } from 'react-icons/ai'


const Experience = () => {
  // const experienceArray = [
  //   {
  //     id: 1,
  //     date: 'May 2023 - July 2023',
  //     title: 'Software Developer Associate',
  //     position: 'Internship',
  //     company: 'Ikarus-3D',
  //     location: 'Mohali, Punjab',
  //     description: {
  //       1: 'Automated CI/CD workflow using GitHub Actions to handle web app linting, testing, building, and deployment.',
  //       2: 'Containerized the application using Docker and deployed it on AWS using ECR and ECS.',
  //       3: 'Implemented linting for Python (pylint, flake8, Black), JavaScript/TypeScript (ESLint), and CSS (Stylelint).',
  //       4: 'Managed versioning in the CI/CD workflow.',
  //       5: 'Conducted unit testing with Pytest (Python) and Jest (JavaScript).',
  //       6: 'Deployed SonarQube on AWS EC2 from Amazon Marketplace, seamlessly integrated it into GitHub workflows, and utilized it for code analysis.',
  //       7: 'Integrated SonarQube with Amazon RDS for seamless data storage and retrieval.',
  //       8: 'Provisioned Forem, employing Ansible for infrastructure automation and deployment.',
  //       9: 'Analyzed all features and explored the full potential of the Forem platform, gaining a deep understanding of its capabilities and functionalities.'
  //     },
  //     skills: [
  //       'Python',
  //       'JavaScript',
  //       'GitHub Actions',
  //       'Amazon EC2',
  //       'Docker',
  //       'AWS',
  //       'Ansible',
  //       'SonarQube',
  //       'Forem',
  //       'CI/CD',
  //       'Testing',
  //       'Linting',
  //       'DevOps',
  //       'Infrastructure Automation',
  //       'Deployment'
  //     ]
  //   }
  // ]

  return (
    <section id="experience">
      <h5>What Qualifications I Have</h5>
      <h2 className="text-3xl">My Experience</h2>
      <div className="container experience__container flex flex-col  items-center">
        {
          <div className="flex gap-2 items-center">
            <AiFillSound />
            <p>Fresher - Need for Internship / Full Time Role</p>
          </div>
        }
        {
          <div className="flex gap-2 items-center">
            <AiFillSound />
            <p>Fresher - Need for Internship / Full Time Role</p>
          </div>
        }
      </div>
    </section>
  )
}

export default Experience
