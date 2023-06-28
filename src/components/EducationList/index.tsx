import React, { Component } from 'react'
import EducationItem from '../EducationItem'
import { type Education } from '../../types/education'

class EducationList extends Component<{ educations?: Education[] }> {
  render () {
    return (
      <section className="section">
        <div className="section-title">
          <h1>Education</h1>
        </div>
        <div className="section-content">
          {
            (this.props.educations != null)
              ? this.props.educations.map((education, index) => {
                return <EducationItem key={index} educationItem={education}></EducationItem>
              })
              : <div></div>
          }
        </div>
      </section>
    )
  }
}

export default EducationList
