import React, { Component } from 'react'
import { type Experience } from '../../types/experience'
import DateFormat from '../../common/DateFormat'

class ExperienceItem extends Component<{ experience: Experience }> {
  render () {
    let date
    const formatter = new DateFormat()
    if (this.props.experience.current) {
      date = formatter.formatMonthYear(this.props.experience.startDate) + ' - Present'
    } else if (this.props.experience.endDate != null) {
      date = formatter.formatMonthYear(this.props.experience.startDate) + ' - ' + formatter.formatMonthYear(this.props.experience.endDate)
    } else {
      date = formatter.formatMonthYear(this.props.experience.startDate)
    }

    return (
      <div className="experience">
        <div className="experience-header">
          <div className="experience-title">
            <h1>{this.props.experience.title}</h1>
          </div>
          <div className="experience-info">
            <div className="experience-company">
              <span>
                {this.props.experience.company}
              </span>
            </div>
            <div className="experience-date">
              <span>{ date }</span>
            </div>
          </div>
        </div>
        <div className="experience-description text-content" dangerouslySetInnerHTML={{ __html: this.props.experience.description }}>
        </div>
      </div>
    )
  }
}

export default ExperienceItem
