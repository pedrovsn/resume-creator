import React, { Component } from 'react'

class Summary extends Component<{ summary: string }> {
  render () {
    return (
      <section className="section">
        <div className="section-title">
          <h1>Summary</h1>
        </div>
        <div className="section-content">
          <div className="text-content">{this.props.summary}</div>
        </div>
      </section>
    )
  }
}

export default Summary
