import { ContactList } from '../cmps/ContactList'

export function ContactIndex() {
  const contacts = contactService.getContacts()
  return <main>{<ContactList contacts={contacts} />}</main>
}
