import {useEffect, useState} from 'react'
import List from './List/index'
import Form from './Form/index'
import './style.css'
function Contacts() {
  const[contacts,setContacts] = useState([
    {
        fullname:'Mehmet',
        phone_number:'123123'
    },{
        fullname:'Ayşe',
        phone_number:'4563'
    },{
        fullname:'Nazlı',
        phone_number:'99999'
    }

  ])
    
  useEffect(() => {
    console.log(contacts)
  }, [contacts]) //

  return (
    <div id="container">
        <h1> Contacts </h1>
      <List contacts = {contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
