import {useState} from 'react'

function List({contacts}) {
    const[filterText,setFilterText] = useState('')

    const filtered = contacts.filter((item) => {    //filtreleme methodu
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        )
    })

    console.log(filtered)

  return (
    <div>

      <input placeholder='Filter contact' 
      value={filterText} 
      onChange={(e) => setFilterText(e.target.value)}
      /> 

      <ul className='list'>
        {
            filtered.map((contacts, i) => (         //filterelenmiş contactların ekranda gösterilmesi
            <li key={i}>
                <span>{contacts.fullname}</span>
                <span>{contacts.phone_number}</span>
            </li>))
        }
      </ul>

      <p>
        Total Contacts: {filtered.length}
      </p>
    </div>
  )
}

export default List
