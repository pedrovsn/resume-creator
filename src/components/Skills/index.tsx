import React from 'react'

interface SkillProps {
  skills: string[]
}

const skills = ({ skills }: SkillProps) => {
  return (
    <section className="section">
      <div className="section-title">
        <h1>Skills</h1>
      </div>
      <div className="section-content">
        {skills.map((skill, index) => {
          return <div key={index} className="skill-item">
            <span>{skill}</span>
          </div>
        })
        }
      </div>
    </section>
  )
}

export default skills
