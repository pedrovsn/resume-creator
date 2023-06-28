
import React, { Component } from 'react'
import ContactItem from '../ContactItem'
import { type Contact } from '../../types/contact'

class ContactList extends Component<{ contacts?: Contact[] }> {
  render () {
    return (
      <div className="contact">
        {
          (this.props.contacts != null)
            ? this.props.contacts.map(c => {
              return (<div key={c.value}>
                {
                  <ContactItem contact={c} ></ContactItem>
                }
              </div>)
            })
            : <div></div>
        }
      </div>
    )
  }
}

export default ContactList
