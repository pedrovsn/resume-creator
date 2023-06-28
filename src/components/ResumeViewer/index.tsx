import React from 'react'
import Header from '../Header'
import Summary from '../Summary'
import Experience from '../Experience'
import Education from '../EducationList'
import Skills from '../Skills'
import { type Resume } from '../../types/resume'

class ResumeViewer extends React.Component<{ resume?: Resume }> {
  render () {
    return (
      (this.props.resume != null)
        ? <div className="wrapper">
          <Header fullName={this.props.resume.fullName} contacts={this.props.resume.contacts}></Header>
          <Summary summary={this.props.resume.summary}></Summary>
          <Experience experiences={this.props.resume.experiences}></Experience>
          <Education educations={this.props.resume.educations}></Education>
          <Skills skills={this.props.resume.skills}></Skills>
        </div>
        : <div></div>
    )
  }
}

export default ResumeViewer
