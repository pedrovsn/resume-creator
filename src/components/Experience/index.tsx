import React from 'react'
import ExperienceItem from '../ExperienceItem'
import { type Experience } from '../../types/experience'

interface ExperienceProps {
  experiences?: Experience[]
}

const experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="section">
      <div className="section-title">
        <h1>Experience</h1>
      </div>
      <div className="section-content">
        {
          (experiences != null)
            ? experiences.map((experience, index) => {
              return <ExperienceItem key={index} experience={experience}></ExperienceItem>
            })
            : <div></div>
        }
      </div>
    </section>
  )
}

export default experience
