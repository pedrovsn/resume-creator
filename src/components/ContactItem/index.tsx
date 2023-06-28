import React from 'react'
import { type Contact } from '../../types/contact'

class ContactItem extends React.Component<{ contact: Contact }> {
  render () {
    const c = this.props.contact
    let element
    if (c.link) {
      element = <a href={c.value} target="_blank" rel="noreferrer">{c.value}</a>
    } else {
      element = c.value
    }

    return (
      <span>{element}</span>
    )
  }
}

export default ContactItem
