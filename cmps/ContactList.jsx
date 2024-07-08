import { ContactIndex } from '../pages/Contactindex/.jsx'
import { contactService } from '../services/contact.service.js'

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li>{contact.name}</li>
      ))}
    </ul>
  )
}
