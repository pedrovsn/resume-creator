import React, { Component } from 'react'
import { type Education } from '../../types/education'
import DateFormat from '../../common/DateFormat'

class EducationItem extends Component<{ educationItem: Education }> {
  render () {
    let date
    const formatter = new DateFormat()
    if (this.props.educationItem.current) {
      date = formatter.formatMonthYear(this.props.educationItem.startDate) + ' - Present'
    } else if (this.props.educationItem.endDate != null) {
      date = formatter.formatMonthYear(this.props.educationItem.startDate)
    } else {
      date = formatter.formatMonthYear(this.props.educationItem.startDate) + ' - ' + formatter.formatMonthYear(this.props.educationItem.endDate)
    }

    return (
      <div className="education-item">
        <div className="education-header">
          <div className="education-title">
            <h1>{this.props.educationItem.title}</h1>
          </div>
          <div className="education-info">
            <div className="education-company">
              <span>{this.props.educationItem.instituition}</span>
            </div>
            <div className="education-date">
              <span>{date.toString()}</span>
            </div>
          </div>
        </div>
        <div className="education-description text-content">
          {this.props.educationItem.description}
        </div>
      </div>
    )
  }
}

export default EducationItem
