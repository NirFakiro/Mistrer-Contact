export const contactService = {
  getContacts,
}

const contacts = [
  { name: 'Nir', tel: '050631400' },
  { name: 'Bar', tel: '0506314544' },
  { name: 'Ariella', tel: '050631854' },
]
function getContacts() {
  return contacts
}
