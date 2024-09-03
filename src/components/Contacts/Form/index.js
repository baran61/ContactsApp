import {React, useState} from 'react'

function Form({addContact, contacts}) {
  const[form,setForm] = useState({fullname: "", phone_number:""})

  const onChaneInput = (e) => {
    setForm({...form,[e.target.name]: e.target.value}) //atama işlemleri gerçekleşir
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (form.fullname === "" || form.phone_number === "") {
        return false
    }

    addContact([...contacts,form])

    setForm({fullname:"", phone_number:""})
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name ="fullname" 
            placeholder='Full Name'
            value={form.fullname} 
            onChange={onChaneInput} 
            />
        </div>

        <div>
            <input 
            name ="phone_number" 
            placeholder='Phonenumber'
            value={form.phone_number} 
            onChange={onChaneInput}
            />
        </div>

        <div className='btn'>
            <button>Add</button>
        </div>

    </form>
  )
}

export default Form
