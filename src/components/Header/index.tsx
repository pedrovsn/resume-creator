import React from 'react'

import ContactList from '../ContactList'
import { type Contact } from '../../types/contact'

class Header extends React.Component<{ fullName: string, contacts: Contact[] }> {
  render () {
    return (
      <section className='basic'>
        <div>
          <h1>{this.props.fullName}</h1>
        </div>
        <div>
          <ContactList contacts={this.props.contacts}></ContactList>
        </div>
      </section>
    )
  }
}

export default Header
